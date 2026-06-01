(() => {
  const packetCards = [
    {
      title: "Promotion Ladder",
      purpose:
        "Move a lead from public chronology to candidate document only after the private policy record is found.",
      fields: [
        "Public anchor",
        "Private-process match",
        "Source-note complete",
        "Restriction status",
        "Cross-volume decision",
      ],
    },
    {
      title: "Source-Note Ledger",
      purpose:
        "Keep the repository, collection, series, locator, title, date, page range, release status, and URL in one spreadsheet-ready table.",
      fields: ["Repository", "Collection", "OA/ID or NAID", "Date", "Title", "Page or image range"],
    },
    {
      title: "Call-Slip Batch File",
      purpose:
        "Use folder clusters as pre-pull units so onsite time goes to decisions, not hunting through one-off folder titles.",
      fields: ["Batch", "OA/IDs", "Priority", "Reason to pull", "Fallback if restricted"],
    },
    {
      title: "Daily Closeout",
      purpose:
        "End each archival day by marking no-hit searches, restricted folders, copied documents, source-note gaps, and next-day pull order.",
      fields: ["Copied", "Restricted", "No hit", "Needs follow-up", "Next pull"],
    },
  ];

  const htmlEscape = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[character],
    );

  function toCsv(headers, rows) {
    return [
      headers.join(","),
      ...rows.map((row) =>
        headers
          .map((header) => `"${String(row[header] ?? "").replaceAll('"', '""')}"`)
          .join(","),
      ),
    ].join("\n");
  }

  function downloadCsv(filename, headers, rows) {
    const blob = new Blob([toCsv(headers, rows)], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function renderPacket() {
    const root = document.querySelector("#packet-root");
    if (!root) {
      return;
    }

    root.innerHTML = packetCards
      .map(
        (card) => `
          <article class="packet-card">
            <h3>${htmlEscape(card.title)}</h3>
            <p>${htmlEscape(card.purpose)}</p>
            <ul>
              ${card.fields.map((field) => `<li>${htmlEscape(field)}</li>`).join("")}
            </ul>
          </article>
        `,
      )
      .join("");
  }

  const triageState = {
    search: "",
    country: "",
    type: "",
    evidence: "",
  };

  const normalizeText = (value) => String(value).toLowerCase().trim();

  const uniqueValues = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b));

  function chronologyEvidence(item) {
    const badges = item.badges || [];
    if (badges.includes("Public Papers") || item.linkLabel === "Open GovInfo record") {
      return "Public anchor";
    }
    if (item.sourceNote.includes("Presidential Daily Diary")) {
      return "Diary evidence";
    }
    return "Archival lead";
  }

  function chronologyGate(item) {
    if (item.type === "Call") {
      return "Find the telcon, call memorandum, interpreter notes, and issue file before promotion.";
    }
    if (item.type === "Meeting") {
      return "Find the memcon, briefing paper, participant list, and follow-up diplomatic traffic.";
    }
    if (item.type === "Trip event") {
      return "Match the diary event to trip-book tabs, press files, NSC country files, and embassy reporting.";
    }
    if (item.type === "Joint statement") {
      return "Find the clearance, negotiation, and implementation record behind the public text.";
    }
    if (chronologyEvidence(item) === "Public anchor") {
      return "Match the public chronology to NSC, State, agency, or implementation records before selection.";
    }
    return "Verify document-level release status, source note fields, and page or image controls.";
  }

  function installChronologyStyles() {
    if (document.querySelector("#chronology-triage-style")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "chronology-triage-style";
    style.textContent = `
      .chronology-tools {
        display: grid;
        grid-template-columns: minmax(240px, 1fr) repeat(3, minmax(150px, 0.45fr)) auto;
        gap: 10px;
        max-width: 1180px;
        margin: 0 auto 12px;
        align-items: end;
      }

      .chronology-tools label {
        display: grid;
        gap: 6px;
        color: var(--muted);
        font-size: 0.78rem;
        font-weight: 850;
        text-transform: uppercase;
      }

      .triage-note {
        margin: 12px 0 0;
        padding: 10px 12px;
        border-left: 4px solid var(--gold);
        background: rgba(217, 161, 52, 0.12);
        color: #30413a !important;
        font-size: 0.92rem;
      }

      @media (max-width: 980px) {
        .chronology-tools {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .chronology-tools {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.append(style);
  }

  function optionList(values, defaultLabel) {
    return ["", ...uniqueValues(values)]
      .map((value) => `<option value="${htmlEscape(value)}">${value || defaultLabel}</option>`)
      .join("");
  }

  function installChronologyControls() {
    if (document.querySelector("#chronology-search")) {
      return;
    }

    const overview = document.querySelector("#chronology-overview-root");
    if (!overview) {
      return;
    }

    overview.insertAdjacentHTML(
      "afterend",
      `
        <div class="chronology-tools" aria-label="Chronology filters">
          <label class="search-field">
            <span>Search</span>
            <input
              id="chronology-search"
              type="search"
              autocomplete="off"
              placeholder="Country, event, source note, issue"
            />
          </label>
          <label>
            <span>Country</span>
            <select id="chronology-country-filter"></select>
          </label>
          <label>
            <span>Type</span>
            <select id="chronology-type-filter"></select>
          </label>
          <label>
            <span>Evidence</span>
            <select id="chronology-evidence-filter"></select>
          </label>
          <button id="reset-chronology-filters" class="tool-button" type="button">Reset</button>
        </div>
        <p id="chronology-summary" class="result-summary" aria-live="polite"></p>
      `,
    );

    document.querySelector("#chronology-country-filter").innerHTML = optionList(
      chronologyItems.flatMap((item) => item.countries),
      "All countries",
    );
    document.querySelector("#chronology-type-filter").innerHTML = optionList(
      chronologyItems.map((item) => item.type),
      "All types",
    );
    document.querySelector("#chronology-evidence-filter").innerHTML = optionList(
      chronologyItems.map(chronologyEvidence),
      "All evidence",
    );
  }

  function chronologyControls() {
    return {
      search: document.querySelector("#chronology-search"),
      country: document.querySelector("#chronology-country-filter"),
      type: document.querySelector("#chronology-type-filter"),
      evidence: document.querySelector("#chronology-evidence-filter"),
      reset: document.querySelector("#reset-chronology-filters"),
      summary: document.querySelector("#chronology-summary"),
      root: document.querySelector("#chronology-root"),
    };
  }

  function filteredChronology() {
    const needle = normalizeText(triageState.search);
    return chronologyItems.filter((item) => {
      const evidence = chronologyEvidence(item);
      const haystack = normalizeText(
        [
          item.title,
          item.date,
          item.type,
          evidence,
          chronologyGate(item),
          item.countries.join(" "),
          item.summary,
          item.sourceNote,
          (item.badges || []).join(" "),
        ].join(" "),
      );

      return (
        (!needle || haystack.includes(needle)) &&
        (!triageState.country || item.countries.includes(triageState.country)) &&
        (!triageState.type || item.type === triageState.type) &&
        (!triageState.evidence || evidence === triageState.evidence)
      );
    });
  }

  function renderFilteredChronology() {
    const controls = chronologyControls();
    if (!controls.root || !controls.summary) {
      return;
    }

    const items = filteredChronology();
    controls.summary.textContent = `${items.length} of ${chronologyItems.length} chronology references shown.`;

    if (!items.length) {
      controls.root.innerHTML = `<div class="empty-state">No chronology references match the current filters.</div>`;
      return;
    }

    controls.root.innerHTML = items
      .map(
        (finding) => `
          <article class="chronology-card">
            <div class="chronology-date-block">
              <span>${htmlEscape(finding.date)}</span>
              ${pill(finding.type)}
            </div>
            <div class="chronology-card-body">
              <h3>${htmlEscape(finding.title)}</h3>
              <p>${htmlEscape(finding.summary)}</p>
              <div class="meta">
                ${finding.countries.map((country) => pill(country)).join("")}
                ${pill(chronologyEvidence(finding))}
                ${(finding.badges || ["FOIA release", "Digitized"]).map((badge) => pill(badge)).join("")}
              </div>
              <p class="triage-note"><strong>Promotion gate:</strong> ${htmlEscape(chronologyGate(finding))}</p>
              <p class="source-note-label">FRUS-style source note</p>
              <p class="source-note-text">${htmlEscape(finding.sourceNote)}</p>
              <p><a class="inline-link" href="${finding.href}" rel="noreferrer">${htmlEscape(finding.linkLabel || "Open NARA record")}</a></p>
            </div>
          </article>
        `,
      )
      .join("");
  }

  function bindChronologyControls() {
    const controls = chronologyControls();
    if (!controls.search) {
      return;
    }

    controls.search.addEventListener("input", (event) => {
      triageState.search = event.target.value;
      renderFilteredChronology();
    });
    controls.country.addEventListener("change", (event) => {
      triageState.country = event.target.value;
      renderFilteredChronology();
    });
    controls.type.addEventListener("change", (event) => {
      triageState.type = event.target.value;
      renderFilteredChronology();
    });
    controls.evidence.addEventListener("change", (event) => {
      triageState.evidence = event.target.value;
      renderFilteredChronology();
    });
    controls.reset.addEventListener("click", () => {
      triageState.search = "";
      triageState.country = "";
      triageState.type = "";
      triageState.evidence = "";
      controls.search.value = "";
      controls.country.value = "";
      controls.type.value = "";
      controls.evidence.value = "";
      renderFilteredChronology();
    });
  }

  function exportChronologyCsv() {
    const headers = [
      "date",
      "title",
      "type",
      "countries",
      "evidence",
      "promotionGate",
      "summary",
      "sourceNote",
      "href",
    ];
    const rows = chronologyItems.map((item) => ({
      ...item,
      countries: item.countries.join("; "),
      evidence: chronologyEvidence(item),
      promotionGate: chronologyGate(item),
    }));
    downloadCsv("frus-central-america-chronology.csv", headers, rows);
  }

  function exportSourceNotesCsv() {
    const chronologyRows = chronologyItems.map((item) => ({
      kind: "Chronology candidate",
      title: item.title,
      date: item.date,
      locator: item.href,
      sourceNote: item.sourceNote,
    }));
    const libraryRows = libraryClusters.flatMap((cluster) =>
      cluster.sourceNotes.map((sourceNote) => ({
        kind: "Clinton Library folder lead",
        title: cluster.title,
        date: "",
        locator: cluster.priority,
        sourceNote,
      })),
    );
    const headers = ["kind", "title", "date", "locator", "sourceNote"];
    downloadCsv("frus-central-america-source-notes.csv", headers, [...chronologyRows, ...libraryRows]);
  }

  function exportCallSlipsCsv() {
    const headers = ["title", "ids"];
    downloadCsv("frus-central-america-call-slips.csv", headers, callSlipBatches);
  }

  function bindPacketExports() {
    document.querySelector("#export-chronology")?.addEventListener("click", exportChronologyCsv);
    document.querySelector("#export-source-notes")?.addEventListener("click", exportSourceNotesCsv);
    document.querySelector("#export-call-slips")?.addEventListener("click", exportCallSlipsCsv);
  }

  globalThis.chronologyEvidence = chronologyEvidence;
  globalThis.chronologyGate = chronologyGate;

  installChronologyStyles();
  installChronologyControls();
  renderFilteredChronology();
  bindChronologyControls();
  renderPacket();
  bindPacketExports();
})();
