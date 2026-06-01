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

  const selectionDocket = [
    {
      issue: "Guatemala human rights and IOB",
      countries: "Guatemala",
      publicAnchors: "1999 Guatemala arrival remarks; Guatemala peace-efforts roundtable",
      selectionQuestion:
        "Is there a declassified policy-process record showing how the administration handled accountability, intelligence equities, and peace-accord diplomacy?",
      privateRecordTarget:
        "Soderberg OA/ID 1404; Intelligence Programs OA/IDs 2479, 2481, 2483, 2513, 2520, 2526; Democracy/Human Rights OA/ID 793",
      firstPull: "Batches 2 and 3",
      promotionProof:
        "Memcon, decision memorandum, declassification packet, IOB handling record, State cable, or withdrawal sheet with source-note fields.",
      boundaryRisk: "Rights/governance and intelligence overlap; do not let public apology language substitute for the internal record.",
    },
    {
      issue: "Panama Canal transfer and security posture",
      countries: "Panama",
      publicAnchors: "1994 Perez Balladares call; 1999 Panama Canal transfer statement",
      selectionQuestion:
        "Can Canal reversion, residual presence, counternarcotics, and defense posture be represented through decision records rather than ceremony?",
      privateRecordTarget:
        "Records Management OA/IDs 3906, 4001, 4003, 4004, 3908, 3910, 3898, 4125; Defense Policy Panama files",
      firstPull: "Batches 1 and 5",
      promotionProof:
        "PC/DC minutes, PRD folder, decision memo, Defense/State cable traffic, treaty-obligation record, or Canal Commission briefing.",
      boundaryRisk: "North America, defense, narcotics, and hemispheric-scope overlap.",
    },
    {
      issue: "Hurricane Mitch response and 1999 trip",
      countries: "Regional; Honduras; Nicaragua; Guatemala; El Salvador",
      publicAnchors: "1998 Nicaragua/Honduras calls; Tipper Gore call; March 8-11, 1999 trip cluster",
      selectionQuestion:
        "Which documents show presidential-level relief, reconstruction, migration, and military-support decisions after Mitch?",
      privateRecordTarget:
        "Trip books OA/IDs 3622, 3638; MHA OA/IDs 3426, 3429, 3452; speech and press files; USAID and TPS implementation records",
      firstPull: "Batch 4, then speech/press cross-checks",
      promotionProof:
        "Trip briefing tab, relief decision memo, USAID/State implementation record, TPS policy paper, embassy reporting, or Soto Cano military support record.",
      boundaryRisk: "Humanitarian assistance, migration, defense basing, and public diplomacy overlap.",
    },
    {
      issue: "1997 San Jose summit",
      countries: "Regional; Costa Rica; Belize; Guatemala; El Salvador; Honduras; Nicaragua",
      publicAnchors: "Welcoming ceremony; leaders news conference; Declaration of San Jose",
      selectionQuestion:
        "Did the summit produce a policy decision or implementation track that belongs in Central America rather than only public diplomacy?",
      privateRecordTarget:
        "Blinken OA/ID 3388; Trip Book OA/ID 3625; Soderberg OA/ID 1416; Strategic Planning OA/ID 773",
      firstPull: "Batch 6 after decision-record sweep",
      promotionProof:
        "Summit briefing book, clearance memo, leader meeting notes, follow-up tasking, or implementation cable on law enforcement, trade, migration, or environment.",
      boundaryRisk: "Public Diplomacy, trade, environment, and hemispheric summit volumes.",
    },
    {
      issue: "Migration, TPS, NACARA, and humanitarian policy",
      countries: "Regional; Nicaragua; Honduras; El Salvador; Guatemala",
      publicAnchors: "Mitch statements; CBI/trade references; migration references in summit records",
      selectionQuestion:
        "Where does migration policy become a Central America foreign-policy decision rather than domestic implementation context?",
      privateRecordTarget:
        "MHA OA/IDs 1890, 2980, 3067, 3074, 3075, 3134, 3422-3430, 3536; Federal Register TPS controls",
      firstPull: "Batch 4, with legal-source follow-up",
      promotionProof:
        "NSC/INS/State policy paper, TPS designation record, NACARA implementation memo, Hill notification, or humanitarian-policy meeting notes.",
      boundaryRisk: "Domestic immigration-law records can overwhelm the foreign-policy thread.",
    },
    {
      issue: "El Salvador accountability and post-war consolidation",
      countries: "El Salvador",
      publicAnchors: "1993 Moakley dinner; 1999 Legislative Assembly address",
      selectionQuestion:
        "Can the volume balance accountability cases with post-war implementation, police reform, democratic consolidation, and migration policy?",
      privateRecordTarget:
        "Access Management OA/IDs 3788, 3789; Soderberg OA/ID 1408; Intelligence Programs OA/ID 3031; Democracy/Human Rights OA/ID 494",
      firstPull: "Batch 3, then migration folders",
      promotionProof:
        "Declassification file, accountability memo, embassy reporting, implementation cable, police reform record, or DED/NACARA policy paper.",
      boundaryRisk: "A case-only narrative would understate post-war policy work.",
    },
    {
      issue: "Transnational crime and narcotics certification",
      countries: "Regional; Belize; Guatemala; Panama",
      publicAnchors: "1995, 1996, and 2000 drug-producing/transit-country letters",
      selectionQuestion:
        "Which narcotics and crime records are Central America policy records rather than companion-volume law-enforcement material?",
      privateRecordTarget:
        "Transnational Threats OA/IDs 1497, 1503, 2248, 4042, 4050, 4067, 4069, 4070; State INCSR and FOIA records",
      firstPull: "Batch 6 after country decision files",
      promotionProof:
        "Certification memo, INCSR country narrative, State cable, law-enforcement tasking, or regional summit follow-up record.",
      boundaryRisk: "Narcotics, counterterrorism, law enforcement, and Belize visibility overlap.",
    },
    {
      issue: "Trade, CBI, and development implementation",
      countries: "Regional; Belize; Guatemala; Honduras; Nicaragua; El Salvador; Costa Rica",
      publicAnchors: "1996 CBERA report; 2000 Trade and Development Act; 2000 CBI beneficiary statement",
      selectionQuestion:
        "Do trade and CBI records show Central America policy implementation important enough to stand beside diplomacy, relief, and rights issues?",
      privateRecordTarget:
        "Federal Register beneficiary records; USTR/State implementation files; USAID project records; Summit follow-up folders",
      firstPull: "Public-law desk pass, then agency files",
      promotionProof:
        "Eligibility determination, implementation memo, trade-policy cable, USAID report, or country-specific follow-up tasking.",
      boundaryRisk: "Trade/global economic volumes and Caribbean Basin scope boundaries.",
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

      .docket-root {
        display: grid;
        gap: 12px;
        max-width: 1180px;
        margin: 16px auto 18px;
      }

      .docket-heading {
        display: grid;
        grid-template-columns: minmax(0, 0.72fr) minmax(260px, 0.5fr);
        gap: 18px;
        align-items: end;
      }

      .docket-heading p {
        margin: 0;
        color: var(--muted);
      }

      .docket-row {
        display: grid;
        grid-template-columns: minmax(180px, 0.46fr) minmax(0, 1fr);
        gap: 14px;
        padding: 16px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--surface);
        box-shadow: 0 10px 28px rgba(16, 35, 31, 0.07);
      }

      .docket-row h3,
      .docket-row p {
        margin: 0;
      }

      .docket-row dl {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
        margin: 0;
      }

      .docket-row dd {
        margin-top: 4px;
        color: var(--muted);
        font-weight: 500;
      }

      @media (max-width: 980px) {
        .chronology-tools,
        .docket-heading,
        .docket-row,
        .docket-row dl {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .chronology-tools,
        .docket-heading,
        .docket-row,
        .docket-row dl {
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

  function installDocketExport() {
    const actions = document.querySelector(".packet-actions");
    if (!actions || document.querySelector("#export-selection-docket")) {
      return;
    }

    actions.insertAdjacentHTML(
      "afterbegin",
      `<button id="export-selection-docket" class="tool-button" type="button">Export Docket CSV</button>`,
    );
  }

  function renderSelectionDocket() {
    const packetRoot = document.querySelector("#packet-root");
    if (!packetRoot) {
      return;
    }

    let root = document.querySelector("#selection-docket-root");
    if (!root) {
      packetRoot.insertAdjacentHTML("beforebegin", `<div id="selection-docket-root" class="docket-root"></div>`);
      root = document.querySelector("#selection-docket-root");
    }

    root.innerHTML = `
      <div class="docket-heading">
        <div>
          <p class="kicker">Selection Docket</p>
          <h3>Candidate Clusters That Need a Private Record Match</h3>
        </div>
        <p>
          Use this matrix to decide what is ready for document-level review, what is only a
          public chronology anchor, and what should be routed to an adjacent Clinton-era volume.
        </p>
      </div>
      ${selectionDocket
        .map(
          (item) => `
            <article class="docket-row">
              <div>
                <h3>${htmlEscape(item.issue)}</h3>
                <div class="meta">
                  ${item.countries.split("; ").map((country) => pill(country)).join("")}
                </div>
              </div>
              <dl>
                <div>
                  <dt>Selection Question</dt>
                  <dd>${htmlEscape(item.selectionQuestion)}</dd>
                </div>
                <div>
                  <dt>Private Record Target</dt>
                  <dd>${htmlEscape(item.privateRecordTarget)}</dd>
                </div>
                <div>
                  <dt>Public Anchors</dt>
                  <dd>${htmlEscape(item.publicAnchors)}</dd>
                </div>
                <div>
                  <dt>First Pull</dt>
                  <dd>${htmlEscape(item.firstPull)}</dd>
                </div>
                <div>
                  <dt>Promotion Proof</dt>
                  <dd>${htmlEscape(item.promotionProof)}</dd>
                </div>
                <div>
                  <dt>Boundary Risk</dt>
                  <dd>${htmlEscape(item.boundaryRisk)}</dd>
                </div>
              </dl>
            </article>
          `,
        )
        .join("")}
    `;
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

  function exportSelectionDocketCsv() {
    const headers = [
      "issue",
      "countries",
      "publicAnchors",
      "selectionQuestion",
      "privateRecordTarget",
      "firstPull",
      "promotionProof",
      "boundaryRisk",
    ];
    downloadCsv("frus-central-america-selection-docket.csv", headers, selectionDocket);
  }

  function bindPacketExports() {
    document.querySelector("#export-selection-docket")?.addEventListener("click", exportSelectionDocketCsv);
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
  installDocketExport();
  renderSelectionDocket();
  renderPacket();
  bindPacketExports();
})();
