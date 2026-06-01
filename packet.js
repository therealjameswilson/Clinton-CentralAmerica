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

  function exportChronologyCsv() {
    const headers = ["date", "title", "type", "countries", "summary", "sourceNote", "href"];
    const rows = chronologyItems.map((item) => ({
      ...item,
      countries: item.countries.join("; "),
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

  renderPacket();
  bindPacketExports();
})();
