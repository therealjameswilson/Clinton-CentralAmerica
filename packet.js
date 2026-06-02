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
      title: "Presidential Contact Follow-Up",
      purpose:
        "Convert Daily Diary calls, meetings, and trip events into telcon, memcon, briefing-paper, issue-file, and follow-up cable searches.",
      fields: ["Diary entry", "Telcon", "Memcon", "Follow-up"],
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
    {
      title: "Reference Question Bank",
      purpose:
        "Keep staff questions, access fallbacks, restriction evidence, and next pull moves ready before the first folder arrives.",
      fields: ["Question", "Evidence needed", "Fallback", "Log field"],
    },
    {
      title: "First-Week Pull Plan",
      purpose:
        "Turn call-slip batches into day blocks with stop rules, pivot points, and closeout outputs.",
      fields: ["Day", "Batch", "Decision point", "Fallback", "Closeout"],
    },
    {
      title: "Selection Scorecard",
      purpose:
        "Score copied candidates against policy value, private evidence, citation readiness, access, country balance, and boundary fit.",
      fields: ["Candidate", "Scores", "Recommendation", "Next action"],
    },
    {
      title: "Document Assembly Sheet",
      purpose:
        "Turn promoted candidates into draft FRUS document packages with sequence, title-line, source-note, release, abstract, and adjacent-document controls.",
      fields: ["Sequence", "Title line", "Source note", "Abstract"],
    },
    {
      title: "Annotation Plan",
      purpose:
        "Carry selected candidates into editorial notes by tracking people, offices, context, cross-references, and unresolved questions.",
      fields: ["Persons", "Context", "Cross-references", "Questions"],
    },
    {
      title: "Declassification Tracker",
      purpose:
        "Preserve closed-record evidence, agency equities, referral status, and re-review paths for candidates that cannot be selected yet.",
      fields: ["Equities", "Withdrawal", "Referral", "Review path"],
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

  const prePullQuestions = [
    "Can these OA/ID batches be reviewed for restrictions, offsite storage, oversize material, or special handling before my visit?",
    "If paging limits apply, please stage the first decision-record batch before speech, press, or public-chronology folders.",
    "Please flag folders where withdrawal sheets, folder-level restriction notes, or partial releases can be inspected even if documents are closed.",
    "Please advise whether trip books, PC/DC/PRD folders, or Staff Director files require any special appointment, camera, or handling rules.",
  ];

  const runSheetRows = [
    {
      workBlock: "Opening pull",
      batch: "Batch 1 - Decision Records",
      ids: "3906, 4001, 4003, 4004, 3908, 3910, 3898, 4123, 4125",
      objective: "PC/DC/PRD spine for Panama and regional decisions",
      mustCapture: "Folder title; OA/ID; meeting date; participants; decision/action line; withdrawal sheets",
      nextIfClosed: "Log restriction basis, capture source note fields, ask for open cross-reference folders",
    },
    {
      workBlock: "Opening pull",
      batch: "Batch 2 - Soderberg Staff Files",
      ids: "1404, 1405, 1408, 1409, 1416",
      objective: "Guatemala, El Salvador, Honduras, immigration, and regional leaders",
      mustCapture: "Document date; title; sender/recipient; clearance path; issue-file context",
      nextIfClosed: "Move to Intelligence Programs and Democracy/Human Rights cross-checks",
    },
    {
      workBlock: "Accountability pass",
      batch: "Batch 3 - Guatemala and El Salvador Accountability",
      ids: "793, 494, 2479, 2480, 2481, 2483, 2513, 2520, 2526, 3031, 3536, 3788, 3789",
      objective: "Human-rights, IOB, declassification, churchwomen, Zona Rosa, and post-war implementation",
      mustCapture: "Withdrawal sheets; declassification markers; case names; State/NSC routing; source-note trail",
      nextIfClosed: "Record closure evidence, then pull migration and post-war implementation folders",
    },
    {
      workBlock: "Relief and migration pass",
      batch: "Batch 4 - Mitch, Migration, and Trip Books",
      ids: "1890, 2980, 3067, 3074, 3075, 3134, 3422-3430, 3452, 3622, 3625, 3638",
      objective: "Hurricane Mitch, TPS, NACARA, Central America trip books, and relief implementation",
      mustCapture: "Trip-book table of contents; tabs copied; relief decisions; TPS hooks; agency follow-up",
      nextIfClosed: "Use Public Papers chronology and Federal Register/USAID implementation controls",
    },
    {
      workBlock: "Panama pass",
      batch: "Batch 5 - Panama Defense Policy",
      ids: "1693, 1831, 1859, 1860, 1864, 2184, 2475, 3355, 3481, 3487, 3584, 3585, 3586, 3595, 3658, 3663, 3826, 3843",
      objective: "Canal transfer, residual military presence, bases, security, UXO, and Colombia-Panama posture",
      mustCapture: "Decision record; Defense/State position; treaty obligation; public-private mismatch",
      nextIfClosed: "Return to PC/DC/PRD folders and State/Defense public implementation records",
    },
    {
      workBlock: "Boundary pass",
      batch: "Batch 6 - Transnational Threats and Public Chronology",
      ids: "1497, 1503, 2189, 2248, 3299, 3388, 3468, 4042, 4050, 4067, 4069, 4070, 103096-103106",
      objective: "Crime, narcotics, San Jose summit, speech/press provenance, and public-diplomacy boundaries",
      mustCapture: "Whether record is Central America, public diplomacy, narcotics, or global issue; selection rationale",
      nextIfClosed: "Use docket boundary-risk notes and adjacent Clinton FRUS index",
    },
  ];

  const closeoutRows = [
    {
      phase: "Folder accounting",
      check:
        "Every requested folder has a status: not pulled, arrived, reviewed, copied, restricted, no hit, or deferred.",
      capture:
        "Call-slip batch, OA/ID or NAID, folder title, request time, arrival time, review status, and staff note.",
      evidence:
        "Reading-room run sheet row, folder photo, or staff restriction note.",
      nextAction:
        "Reorder the next-day pull around closed folders, high-yield copied material, and unresolved source-note gaps.",
    },
    {
      phase: "Document capture",
      check:
        "Each copied document has title, date, sender/recipient, page count, classification or release markings, and photo/PDF filename.",
      capture:
        "Candidate document title, date, document type, pages/images, markings, and file path or image range.",
      evidence:
        "Document review ledger row and matching image/PDF filename.",
      nextAction:
        "Create or update the review-ledger row before leaving the reading room.",
    },
    {
      phase: "Restriction evidence",
      check:
        "Closed or partly withdrawn material has a usable restriction note rather than a vague memory.",
      capture:
        "Withdrawal sheet, folder-level restriction, exemption language, partial-release status, and whether open cross-reference folders exist.",
      evidence:
        "Withdrawal-sheet photo, staff note, or restriction text copied into the ledger.",
      nextAction:
        "Ask for open cross-reference folders or alternative series before moving to lower-priority speech/press files.",
    },
    {
      phase: "Promotion decision",
      check:
        "Every copied item is marked as public anchor, private-process match, contextual support, boundary case, or reject/no selection.",
      capture:
        "Selection status, private-record match, promotion proof, boundary decision, and short abstract note.",
      evidence:
        "Document review ledger and selection docket updates.",
      nextAction:
        "Promote only records with private-policy evidence; route boundary cases to the adjacent-volume matrix.",
    },
    {
      phase: "Source-note QA",
      check:
        "Each serious candidate has repository, collection, office/series, OA/ID or NAID, folder title, document date/title, and page/image control.",
      capture:
        "Complete FRUS-style source-note stem plus missing fields.",
      evidence:
        "Source-note ledger row and document-review ledger row.",
      nextAction:
        "Fill missing source-note pieces before abstracting or drafting selection rationale.",
    },
    {
      phase: "No-hit searches",
      check:
        "Dead ends are recorded with query terms, repository, date searched, result count, and why the search mattered.",
      capture:
        "Search string, repository, filters, result count, useful hits, no-hit note, and follow-up query.",
      evidence:
        "Queue export row or closeout note.",
      nextAction:
        "Do not rerun the same failed search tomorrow unless the query or repository changes.",
    },
    {
      phase: "Country and issue balance",
      check:
        "The day's captures do not overbuild public chronology while leaving thin country lanes or issue clusters untouched.",
      capture:
        "Countries covered, issue cluster, weak spot, first-pull gap, and whether coverage audit changed.",
      evidence:
        "Country evidence audit, selection docket, and copied-record list.",
      nextAction:
        "Move tomorrow's first pull toward the highest remaining weak spot.",
    },
    {
      phase: "Next-day request",
      check:
        "Tomorrow's first pull is written before leaving, with alternates if restrictions or paging limits intervene.",
      capture:
        "Priority batch, OA/IDs/NAIDs, folder titles, reason to pull, fallback if closed, and staff question.",
      evidence:
        "Updated pre-pull or reading-room run sheet.",
      nextAction:
        "Send the request or hand it to staff before the end-of-day cutoff.",
    },
  ];

  const reviewLedgerHeaders = [
    "issue",
    "countries",
    "candidateDocumentTitle",
    "documentDate",
    "documentType",
    "sourceCollection",
    "oaIdOrNaid",
    "folderTitle",
    "classificationOrMarkings",
    "pagesOrImages",
    "publicAnchor",
    "privateRecordMatch",
    "promotionProof",
    "restrictionStatus",
    "sourceNoteComplete",
    "selectionStatus",
    "crossVolumeDecision",
    "abstractNote",
    "nextAction",
  ];

  const reviewLedgerPrompts = [
    "Candidate title/date/type",
    "Repository, collection, OA/ID or NAID, and folder title",
    "Classification, release, withdrawal, page, and image controls",
    "Private-record match to the public chronology anchor",
    "Selection status and cross-volume decision",
    "Short abstract note and next action",
  ];

  const closeoutPrompts = [
    "Folder status for every request",
    "Copied-document filenames and page ranges",
    "Restriction and withdrawal-sheet evidence",
    "Promotion or rejection decision",
    "No-hit searches with exact query strings",
    "Tomorrow's first pull and fallback",
  ];

  const sourceNoteQaRows = [
    {
      kind: "Chronology candidate - Daily Diary",
      sourceFamily: "Presidential Daily Diary",
      requiredOrder:
        "Repository; record collection; series or office; OA/ID; folder title; diary entry date; NAID; FOIA or release note.",
      check:
        "Do not cite the diary as a policy document; use it to anchor calls, meetings, movements, and participants.",
      commonGap: "Missing telcon, memcon, interpreter note, or issue-file match.",
      nextAction:
        "Match call and meeting entries to NSC, State, trip-book, or embassy records before promotion.",
    },
    {
      kind: "Chronology candidate - Public Papers",
      sourceFamily: "GovInfo Public Papers",
      requiredOrder:
        "Publication title; year/book; page range; document title; event date; GovInfo URL; public/private match note.",
      check:
        "Use as chronology and public-language anchor, not final policy-process evidence.",
      commonGap: "No private decision, clearance, implementation, or agency record.",
      nextAction:
        "Pair with NSC, State, agency, trip-book, speechwriting, press, Federal Register, or USAID files.",
    },
    {
      kind: "Clinton Library folder lead - NSC records",
      sourceFamily: "Clinton Presidential Records",
      requiredOrder:
        "Repository; record collection; office or staff-file series; OA/ID; folder title; document title/date; release markings; page/image range.",
      check:
        "Folder-title stems are leads only until document-level details are captured onsite.",
      commonGap:
        "Missing document title, date, classification or release markings, or page range.",
      nextAction:
        "Capture withdrawal sheets and item metadata even when documents are closed.",
    },
    {
      kind: "Decision record",
      sourceFamily: "PC/DC/PRD or NSC decision files",
      requiredOrder:
        "Repository; collection; series; OA/ID; folder title; meeting/date; participants; decision/action line; release status.",
      check: "Can this show policy process rather than public framing?",
      commonGap: "No action line, participant list, or follow-up cable.",
      nextAction:
        "Pair minutes or memos with State, Defense, or agency implementation evidence.",
    },
    {
      kind: "Trip book or briefing tab",
      sourceFamily: "Trip books and briefing material",
      requiredOrder:
        "Repository; collection; series; OA/ID; trip book/folder title; tab title; event date; page/image range; release markings.",
      check:
        "Use tabs to connect public events to briefing and decision records.",
      commonGap: "Table of contents copied but tab-level metadata missing.",
      nextAction:
        "Photograph contents first, then copy only tabs that answer docket questions.",
    },
    {
      kind: "Restriction or withdrawal sheet",
      sourceFamily: "Closed or partly released records",
      requiredOrder:
        "Repository; collection; series; OA/ID or NAID; folder title; withdrawal-sheet date or exemption; description; review path.",
      check: "Restriction evidence is still source evidence.",
      commonGap:
        "Closed folder logged without exemption, reason, or open cross-reference search.",
      nextAction:
        "Ask staff for open cross-references and preserve the restriction text in the review ledger.",
    },
    {
      kind: "Agency or public implementation record",
      sourceFamily: "Federal Register, USAID, State FOIA, CIA Reading Room",
      requiredOrder:
        "Repository/site; record title; date; citation/identifier; URL; page range; relation to public/private anchor.",
      check:
        "Implementation records should prove follow-through, not replace presidential decision evidence.",
      commonGap:
        "Public statement has no legal, aid, cable, or project follow-up.",
      nextAction:
        "Record Federal Register citations, USAID project titles, FOIA release info, cable identifiers, or CREST citation.",
    },
    {
      kind: "Final promoted candidate",
      sourceFamily: "Selection review",
      requiredOrder:
        "Document number placeholder; canonical source note; date/title; source URL or image range; declassification status; cross-volume decision.",
      check:
        "Candidate is ready only when source note, private-policy evidence, and boundary decision are all complete.",
      commonGap:
        "Selected too early because it is interesting or public-facing.",
      nextAction:
        "Do not promote until document review ledger, source-note ledger, and selection docket agree.",
    },
  ];

  const sourceNoteQaPrompts = [
    "Repository and collection",
    "Office, staff file, or series",
    "OA/ID, NAID, or citation",
    "Folder and document title",
    "Date and page/image range",
    "Release markings and boundary decision",
  ];

  const referenceQuestionRows = [
    {
      priority: "Critical",
      scenario: "First pull is restricted or partly withdrawn",
      staffQuestion:
        "Can I inspect the withdrawal sheet, folder-level restriction note, or partial-release marker for this OA/ID before moving to the next batch?",
      evidenceNeeded:
        "Restriction basis, exemption language, withdrawal-sheet date, reviewer note, and whether any item-level description is open.",
      fallbackIfNo:
        "Move to the paired issue-file batch, log the closed folder in the review ledger, and search the same people/issues in Daily Diary, Public Papers, State, USAID, and Federal Register records.",
      logField: "restrictionEvidence",
    },
    {
      priority: "Critical",
      scenario: "Decision-record batch is delayed, offsite, or capped by paging limits",
      staffQuestion:
        "If paging limits or offsite storage affect this batch, which PC/DC/PRD, Staff Director, or Soderberg folders can be staged first today?",
      evidenceNeeded:
        "Arrival estimate, paging limit, offsite status, alternate OA/IDs, and staff-recommended first folder.",
      fallbackIfNo:
        "Use the run sheet priority order: Batch 1 decision records, Batch 2 Soderberg files, Batch 3 accountability files, then trip books and public chronology.",
      logField: "pagingFallback",
    },
    {
      priority: "High",
      scenario: "Folder title is broad but may contain multiple document candidates",
      staffQuestion:
        "Does the folder have a contents list, tab divider, date span, or item-level description that can help me target document-level copying?",
      evidenceNeeded:
        "Contents list, tab title, date range, document titles, page count, and any visible routing or release markings.",
      fallbackIfNo:
        "Photograph the folder front, contents structure, and first-page metadata before choosing which items to copy.",
      logField: "documentBoundary",
    },
    {
      priority: "High",
      scenario: "A diary call or meeting has no obvious telcon or memcon",
      staffQuestion:
        "Are there open cross-reference folders for the same date, participant, country, or staff office that might contain the telcon, memcon, briefing paper, or follow-up cable?",
      evidenceNeeded:
        "Participant names, date, event type, related staff office, country, and alternate collection or series.",
      fallbackIfNo:
        "Record the diary as chronology evidence only and do not promote until a private-process match is found.",
      logField: "privateRecordMatch",
    },
    {
      priority: "High",
      scenario: "Trip book, briefing tab, or oversize material has handling limits",
      staffQuestion:
        "Do trip books, tabbed briefing material, oversize items, or bound volumes require special handling, camera rules, or a separate appointment?",
      evidenceNeeded:
        "Handling rule, camera rule, request cutoff, appointment need, allowed page range, and whether staff can identify tab titles.",
      fallbackIfNo:
        "Capture table of contents and tab titles first, then request only tabs tied to the docket question.",
      logField: "handlingRule",
    },
    {
      priority: "Medium",
      scenario: "Digitized surrogate or public record may duplicate onsite material",
      staffQuestion:
        "Is there a digitized surrogate, declassified copy, FOIA release, or public reading-room version that should be used before paging the physical folder?",
      evidenceNeeded:
        "Catalog URL, NAID, FOIA tracking number, release status, digital-object URL, and page/image range.",
      fallbackIfNo:
        "Keep the onsite folder in the pull queue but test the same title in NARA Catalog, Clinton Digital Library, CIA Reading Room, State FOIA, GovInfo, and Federal Register.",
      logField: "digitalSurrogate",
    },
    {
      priority: "Medium",
      scenario: "Country lane is thin after the first pass",
      staffQuestion:
        "Are there staff-file, WHORM, speechwriting, press, trip-book, or agency cross-references for this country that are more productive than broad country keyword searching?",
      evidenceNeeded:
        "Recommended series, office name, staff name, alternate spelling, date range, and likely OA/ID.",
      fallbackIfNo:
        "Use the country evidence audit to shift the next pull toward the weakest lane while preserving no-hit searches.",
      logField: "countryGap",
    },
    {
      priority: "Medium",
      scenario: "End-of-day pull needs a written next move",
      staffQuestion:
        "Before I leave, can the next-day first pull and two alternates be queued or checked for restrictions?",
      evidenceNeeded:
        "Next-day batch, two alternates, restriction screen, arrival expectation, and any staff note.",
      fallbackIfNo:
        "Export the daily closeout and run sheet, then send the pre-pull request with the first pull, alternates, and staff questions.",
      logField: "nextDayRequest",
    },
  ];

  const referenceQuestionPrompts = [
    "Restriction basis",
    "Paging or offsite status",
    "Open cross-reference folder",
    "Handling or camera rule",
    "Digital surrogate",
    "Next-day first pull",
  ];

  const weekPlanRows = [
    {
      day: "Pre-arrival",
      workBlock: "Staff request and restriction screen",
      priorityBatch: "Batches 1-3",
      objective:
        "Send the pre-pull request and ask staff to screen restrictions, offsite storage, paging limits, oversize material, trip-book handling, and camera rules.",
      decisionPoint:
        "If any decision, Soderberg, or accountability folders are closed or delayed, identify open cross-reference folders before arrival.",
      stopRule:
        "Do not add lower-priority speech or press folders until the first three batches have an access posture.",
      fallbackIfBlocked:
        "Use the reference-question worksheet to ask for withdrawal sheets, partial-release evidence, and two open alternates.",
      closeoutOutput:
        "Confirmed first-day pull order, two alternates, staff questions, and any handling constraints.",
    },
    {
      day: "Day 1 morning",
      workBlock: "Decision-record spine",
      priorityBatch: "Batch 1 - Decision Records",
      objective:
        "Work PC/DC/PRD and Records Management folders for Panama, regional decisions, and policy-process anchors.",
      decisionPoint:
        "Can at least one decision memo, meeting record, action line, or withdrawal sheet support a private-policy candidate?",
      stopRule:
        "Stop broad browsing once the decision spine is either copied, restricted with evidence, or exhausted by folder-level no hits.",
      fallbackIfBlocked:
        "Move to Batch 2 Soderberg files and ask staff for open decision-file cross-references.",
      closeoutOutput:
        "Decision-record status, copied titles, restricted folders, and source-note gaps entered into the review ledger.",
    },
    {
      day: "Day 1 afternoon",
      workBlock: "NSC staff-file match",
      priorityBatch: "Batch 2 - Soderberg Staff Files",
      objective:
        "Match public chronology anchors to Soderberg files for Guatemala, El Salvador, Honduras, immigration, and regional leader contacts.",
      decisionPoint:
        "Which public anchors have a memo, telcon, briefing paper, routing note, or follow-up cable trail?",
      stopRule:
        "Do not promote public remarks or diary entries without one private-process match or a documented closed-record trail.",
      fallbackIfBlocked:
        "Move to Batch 3 accountability files for Guatemala and El Salvador, then log Soderberg no-hit terms.",
      closeoutOutput:
        "Public-to-private matches, no-hit searches, and next-day accountability targets.",
    },
    {
      day: "Day 2 morning",
      workBlock: "Accountability and intelligence evidence",
      priorityBatch: "Batch 3 - Guatemala and El Salvador Accountability",
      objective:
        "Review human-rights, IOB, declassification, churchwomen, Zona Rosa, and post-war implementation files.",
      decisionPoint:
        "Can accountability records show policy handling, declassification equities, or implementation choices rather than case background alone?",
      stopRule:
        "Stop copying case context once the file stops showing U.S. policy process, routing, decision, or implementation evidence.",
      fallbackIfBlocked:
        "Capture restriction evidence and shift to migration or post-war implementation folders that can balance the narrative.",
      closeoutOutput:
        "Accountability candidates, restriction evidence, balance risks, and next pull for thin country lanes.",
    },
    {
      day: "Day 2 afternoon",
      workBlock: "Mitch, migration, and trip-book setup",
      priorityBatch: "Batch 4 - Mitch, Migration, and Trip Books",
      objective:
        "Map Hurricane Mitch relief, TPS, NACARA, trip-book tabs, relief decisions, and agency follow-up records.",
      decisionPoint:
        "Which trip tabs or relief records connect the public travel chronology to reconstruction, migration, or military-support decisions?",
      stopRule:
        "Photograph tables of contents before copying tabs; copy only tabs tied to a selection docket question.",
      fallbackIfBlocked:
        "Use Public Papers, Federal Register TPS controls, USAID project leads, and staff-file cross-references.",
      closeoutOutput:
        "Trip-tab targets, relief/migration private matches, agency follow-up leads, and missing source-note fields.",
    },
    {
      day: "Day 3 morning",
      workBlock: "Panama policy and defense pass",
      priorityBatch: "Batch 5 - Panama Defense Policy",
      objective:
        "Test Canal transfer, residual military presence, bases, UXO, security, counternarcotics, and Colombia-Panama posture.",
      decisionPoint:
        "Which Panama records belong in Central America rather than North America, defense, narcotics, or hemispheric-scope files?",
      stopRule:
        "Route records with only incidental Central America references to the boundary matrix before they consume copying time.",
      fallbackIfBlocked:
        "Return to Batch 1 PC/DC/PRD folders and State/Defense public implementation records.",
      closeoutOutput:
        "Panama candidate list, boundary decisions, defense-policy source notes, and unresolved restriction questions.",
    },
    {
      day: "Day 3 afternoon",
      workBlock: "Summit and regional diplomacy pass",
      priorityBatch: "Batch 6 - San Jose, strategic planning, and speech/press provenance",
      objective:
        "Check San Jose summit, Costa Rica trip, Central American leaders, strategic planning, speechwriting, and press provenance.",
      decisionPoint:
        "Did the summit produce a policy decision, implementation tasking, or follow-up track that belongs in this volume?",
      stopRule:
        "Use speech and press files as provenance controls after decision and trip-book records have been checked.",
      fallbackIfBlocked:
        "Route public-diplomacy-heavy material through the boundary matrix and keep only records with policy-process value.",
      closeoutOutput:
        "Summit follow-up leads, public/private matches, speech provenance, and boundary-risk notes.",
    },
    {
      day: "Day 4 morning",
      workBlock: "Transnational threats and narcotics",
      priorityBatch: "Batch 6 - Threats and narcotics files",
      objective:
        "Review crime, narcotics, certification, Belize visibility, Guatemala transit issues, Panama security, and regional threat files.",
      decisionPoint:
        "Which threat records are Central America policy records rather than companion-volume law-enforcement material?",
      stopRule:
        "Stop when the record shifts from foreign-policy decision evidence to generalized law-enforcement reporting.",
      fallbackIfBlocked:
        "Use INCSR, State FOIA, CIA Reading Room, and public certification letters as implementation controls.",
      closeoutOutput:
        "Threat/narcotics candidates, exclusions, agency follow-up searches, and no-hit notes.",
    },
    {
      day: "Day 4 afternoon",
      workBlock: "Country-balance repair",
      priorityBatch: "Weakest lanes from country evidence audit",
      objective:
        "Repair thin country lanes before the final day by targeting Belize, Costa Rica, Honduras, Nicaragua, or El Salvador gaps shown in the coverage audit.",
      decisionPoint:
        "Which country still lacks private-process evidence after chronology, staff files, trip books, and implementation records?",
      stopRule:
        "Do not chase every country keyword; pull only files that answer a named coverage-audit weak spot.",
      fallbackIfBlocked:
        "Ask staff for better series names, alternate spellings, WHORM leads, speechwriting/press cross-references, or agency records.",
      closeoutOutput:
        "Updated country audit, repaired weak spots, remaining no-hit searches, and final-day first pull.",
    },
    {
      day: "Day 5",
      workBlock: "Selection triage and final closeout",
      priorityBatch: "All copied/restricted candidates",
      objective:
        "Reconcile copied documents, restricted folders, no-hit searches, source-note gaps, docket status, and boundary routing before leaving.",
      decisionPoint:
        "Which records are ready for promotion, which need follow-up, and which should be rejected or routed to an adjacent volume?",
      stopRule:
        "Do not leave with copied documents lacking title/date/source-note controls, page/image ranges, or a next action.",
      fallbackIfBlocked:
        "Create next reference request, FOIA/re-review question, agency search, or public-implementation follow-up from the closeout export.",
      closeoutOutput:
        "Completed review ledger, source-note QA, reference-question status, selection docket, and next research packet.",
    },
  ];

  const weekPlanPrompts = [
    "First pull order",
    "Stop rule",
    "Pivot if closed",
    "Country-balance repair",
    "Daily closeout output",
    "Final selection triage",
  ];

  const contactPrompts = [
    "Diary entry",
    "Participant or event",
    "Telcon or memcon",
    "Briefing paper",
    "Issue file",
    "Follow-up cable",
  ];

  const scorecardPrompts = [
    "Private-policy evidence",
    "Presidential or NSC level",
    "Source-note readiness",
    "Access and release status",
    "Country or issue balance",
    "Boundary fit and recommendation",
  ];

  const assemblyPrompts = [
    "Proposed document number",
    "Section or chapter",
    "FRUS title line",
    "Source-note stem",
    "Release markings",
    "Adjacent documents",
  ];

  const annotationPrompts = [
    "Persons and offices",
    "Editorial context",
    "Public/private bridge",
    "Related documents",
    "Boundary cross-reference",
    "Unresolved annotation question",
  ];

  const declassPrompts = [
    "Withdrawal-sheet text",
    "Agency equity",
    "Referral or review path",
    "Open parallel record",
    "Selection impact",
    "Next request",
  ];

  function declassEquities(item) {
    const issue = item.issue.toLowerCase();
    const target = item.privateRecordTarget.toLowerCase();

    if (issue.includes("guatemala") || target.includes("iob")) {
      return "NSC; State; intelligence equities; IOB/declassification review";
    }
    if (issue.includes("panama")) {
      return "NSC; State; Defense; Canal/security equities; counternarcotics as applicable";
    }
    if (issue.includes("mitch")) {
      return "NSC; State; USAID; INS/DOJ; Defense/Soto Cano as applicable";
    }
    if (issue.includes("san jose")) {
      return "NSC; State; speech/press/trip-book clearance; summit follow-up";
    }
    if (issue.includes("migration") || issue.includes("tps") || issue.includes("nacara")) {
      return "NSC; State; INS/DOJ; Federal Register/TPS implementation";
    }
    if (issue.includes("el salvador")) {
      return "NSC; State; intelligence equities; justice/accountability records";
    }
    if (issue.includes("crime") || issue.includes("narcotics")) {
      return "NSC; State/INL; DOJ/law enforcement; CIA Reading Room/CREST as applicable";
    }
    if (issue.includes("trade") || issue.includes("cbi")) {
      return "NSC; State; USTR; USAID; Federal Register implementation";
    }
    return "NSC; State; agency referral as indicated by withdrawal sheet";
  }

  function assemblySection(item) {
    const issue = item.issue.toLowerCase();

    if (issue.includes("guatemala")) {
      return "Guatemala, human rights, intelligence, and peace implementation";
    }
    if (issue.includes("el salvador")) {
      return "El Salvador, accountability, post-war consolidation, and migration";
    }
    if (issue.includes("mitch") || issue.includes("migration") || issue.includes("tps")) {
      return "Hurricane Mitch, relief, migration, and humanitarian policy";
    }
    if (issue.includes("panama")) {
      return "Panama Canal transfer, security posture, and counternarcotics";
    }
    if (issue.includes("san jose")) {
      return "Regional summit diplomacy and Central America-U.S. partnership";
    }
    if (issue.includes("crime") || issue.includes("narcotics")) {
      return "Transnational crime, narcotics certification, and law enforcement";
    }
    if (issue.includes("trade") || issue.includes("cbi")) {
      return "Trade, CBI, development, and implementation";
    }
    return "Regional Central America policy sequence";
  }

  function contactSearchTargets(item) {
    const text = `${item.title} ${item.summary} ${item.sourceNote}`.toLowerCase();

    if (text.includes("panama")) {
      return {
        briefing:
          "PC/DC/PRD folders, Defense Policy Panama files, treaty-obligation briefings, and State cable traffic.",
        issue:
          "Search Panama Canal transfer, Perez Balladares, residual presence, counternarcotics, and Canal Commission records.",
      };
    }
    if (text.includes("mitch") || text.includes("honduras") || text.includes("nicaragua")) {
      return {
        briefing:
          "Trip books OA/IDs 3622 and 3638, MHA relief files, USAID/State implementation records, and Soto Cano support files.",
        issue:
          "Search Hurricane Mitch relief, TPS, NACARA, reconstruction, migration, and military-support files.",
      };
    }
    if (text.includes("san jose") || text.includes("costa rica") || text.includes("summit")) {
      return {
        briefing:
          "Trip Book OA/ID 3625, Blinken OA/ID 3388, Soderberg regional files, and summit follow-up tasking.",
        issue:
          "Search summit diplomacy, regional law enforcement, trade, migration, environment, and leader-meeting files.",
      };
    }
    if (text.includes("guatemala")) {
      return {
        briefing:
          "Soderberg Guatemala files, Intelligence Programs files, Democracy/Human Rights files, and trip briefing tabs.",
        issue:
          "Search Bamaca/Harbury, Sister Ortiz, IOB, document declassification, peace accords, and human-rights implementation files.",
      };
    }
    if (text.includes("el salvador")) {
      return {
        briefing:
          "Soderberg El Salvador files, Access Management files, Intelligence Programs files, and MHA migration files.",
        issue:
          "Search accountability, Zona Rosa, police reform, post-war consolidation, DED, NACARA, and migration-policy files.",
      };
    }
    return {
      briefing:
        "Search NSC country files, Soderberg staff files, speech and press provenance, trip books, and State reporting for the same date and participants.",
      issue:
        "Search the same date, country, participant names, staff office, and policy terms across Clinton Library, State, and public implementation records.",
    };
  }

  function contactMatchTarget(item) {
    if (item.type === "Call") {
      return "Telcon, call memorandum, interpreter note, briefing note, and same-day issue-file routing.";
    }
    if (item.type === "Meeting") {
      return "Memcon, participant list, briefing paper, action memorandum, and follow-up cable or tasking.";
    }
    if (item.type === "Trip event") {
      return "Trip-book tab, briefing memorandum, bilateral meeting notes, press guidance, and embassy follow-up cable.";
    }
    return "Private-process match, briefing record, and follow-up implementation evidence.";
  }

  function presidentialContacts() {
    return chronologyItems.filter(
      (item) =>
        item.sourceNote.includes("Presidential Daily Diary") &&
        ["Call", "Meeting", "Trip event"].includes(item.type),
    );
  }

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

  function downloadText(filename, text) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
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

      .visit-kit {
        display: grid;
        grid-template-columns: minmax(0, 0.58fr) minmax(0, 1fr);
        gap: 14px;
        max-width: 1180px;
        margin: 16px auto 18px;
      }

      .visit-kit article {
        padding: 16px;
        border: 1px solid var(--line);
        border-radius: 8px;
        background: var(--surface);
        box-shadow: 0 10px 28px rgba(16, 35, 31, 0.07);
      }

      .visit-kit h3,
      .visit-kit p {
        margin: 0;
      }

      .visit-kit ul {
        display: grid;
        gap: 8px;
        margin: 12px 0 0;
        padding-left: 18px;
      }

      .visit-kit article.full-span {
        grid-column: 1 / -1;
      }

      .review-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .closeout-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .sourceqa-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .reference-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .weekplan-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .contact-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .scorecard-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .assembly-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .annotation-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .declass-fields {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;
        margin-top: 12px;
      }

      .review-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .closeout-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .sourceqa-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .reference-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .weekplan-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .contact-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .scorecard-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .assembly-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .annotation-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .declass-fields span {
        padding: 8px 10px;
        border: 1px solid var(--line);
        border-radius: 6px;
        background: var(--surface-strong);
        color: #31433d;
        font-size: 0.86rem;
        font-weight: 750;
      }

      .runsheet-list {
        display: grid;
        gap: 8px;
      }

      .runsheet-list div {
        display: grid;
        grid-template-columns: minmax(140px, 0.36fr) minmax(0, 1fr);
        gap: 10px;
        padding-top: 8px;
        border-top: 1px solid var(--line);
      }

      .runsheet-list span {
        color: var(--muted);
      }

      @media (max-width: 980px) {
        .chronology-tools,
        .visit-kit,
        .review-fields,
        .closeout-fields,
        .sourceqa-fields,
        .reference-fields,
        .weekplan-fields,
        .contact-fields,
        .scorecard-fields,
        .assembly-fields,
        .annotation-fields,
        .declass-fields,
        .docket-heading,
        .docket-row,
        .docket-row dl {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 620px) {
        .chronology-tools,
        .visit-kit,
        .review-fields,
        .closeout-fields,
        .sourceqa-fields,
        .reference-fields,
        .weekplan-fields,
        .contact-fields,
        .scorecard-fields,
        .assembly-fields,
        .annotation-fields,
        .declass-fields,
        .runsheet-list div,
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
    const actions = document.querySelector(".packet-section .packet-actions");
    if (!actions || document.querySelector("#export-selection-docket")) {
      return;
    }

    actions.insertAdjacentHTML(
      "afterbegin",
      `
        <button id="export-prepull" class="tool-button" type="button">Export Pre-Pull TXT</button>
        <button id="export-week-plan" class="tool-button" type="button">Export First-Week Plan CSV</button>
        <button id="export-run-sheet" class="tool-button" type="button">Export Run Sheet CSV</button>
        <button id="export-closeout" class="tool-button" type="button">Export Closeout CSV</button>
        <button id="export-source-note-qa" class="tool-button" type="button">Export Source-Note QA CSV</button>
        <button id="export-contact-followup" class="tool-button" type="button">Export Contact Follow-Up CSV</button>
        <button id="export-reference-questions" class="tool-button" type="button">Export Reference Questions CSV</button>
        <button id="export-review-ledger" class="tool-button" type="button">Export Review Ledger CSV</button>
        <button id="export-selection-scorecard" class="tool-button" type="button">Export Selection Scorecard CSV</button>
        <button id="export-document-assembly" class="tool-button" type="button">Export Document Assembly CSV</button>
        <button id="export-annotation-plan" class="tool-button" type="button">Export Annotation Plan CSV</button>
        <button id="export-declass-tracker" class="tool-button" type="button">Export Declassification Tracker CSV</button>
        <button id="export-selection-docket" class="tool-button" type="button">Export Docket CSV</button>
      `,
    );
  }

  function buildPrePullText() {
    const batchLines = runSheetRows
      .map((row) => `- ${row.batch}: OA/IDs ${row.ids}. Objective: ${row.objective}.`)
      .join("\n");
    const questionLines = prePullQuestions.map((question) => `- ${question}`).join("\n");

    return [
      "Subject: Pre-pull request for FRUS Central America research visit",
      "",
      "Hello,",
      "",
      "I am preparing for a research visit for Foreign Relations of the United States, 1993-2000, Volume XXXII, Central America. I would be grateful for help reviewing the following Clinton Presidential Records/NSC OA/ID batches before arrival.",
      "",
      "Priority order",
      batchLines,
      "",
      "Questions for staff",
      questionLines,
      "",
      "If paging or staffing limits require a narrower first pull, please prioritize Batch 1 decision records, Batch 2 Soderberg staff files, and Batch 3 Guatemala/El Salvador accountability files before speech, press, and public-chronology files.",
      "",
      "For each folder, I am trying to preserve repository, collection, series or office, OA/ID, folder title, date span, restriction status, withdrawal-sheet evidence, and document-level release markings.",
      "",
      "Thank you.",
    ].join("\n");
  }

  function renderVisitKit() {
    const packetRoot = document.querySelector("#packet-root");
    if (!packetRoot) {
      return;
    }

    let root = document.querySelector("#visit-kit-root");
    if (!root) {
      packetRoot.insertAdjacentHTML("beforebegin", `<div id="visit-kit-root" class="visit-kit"></div>`);
      root = document.querySelector("#visit-kit-root");
    }

    root.innerHTML = `
      <article>
        <p class="kicker">Pre-Pull Request</p>
        <h3>Send This Before Arrival</h3>
        <p>
          The TXT export turns the call-slip batches into a concise staff request with
          paging priorities, restriction questions, and source-note fields to preserve.
        </p>
        <ul>
          ${prePullQuestions.map((question) => `<li>${htmlEscape(question)}</li>`).join("")}
        </ul>
      </article>
      <article>
        <p class="kicker">Reading-Room Run Sheet</p>
        <h3>Work the Day by Batches</h3>
        <div class="runsheet-list">
          ${runSheetRows
            .map(
              (row) => `
                <div>
                  <strong>${htmlEscape(row.workBlock)}</strong>
                  <span>${htmlEscape(row.batch)}: ${htmlEscape(row.objective)}</span>
                </div>
              `,
            )
            .join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">First-Week Pull Plan</p>
        <h3>Make the First Week a Decision Machine</h3>
        <p>
          The first-week export turns the call-slip batches into day blocks
          with decision points, stop rules, fallback moves, and the closeout
          output each block should produce before the next pull begins.
        </p>
        <div class="weekplan-fields">
          ${weekPlanPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Presidential Contact Follow-Up</p>
        <h3>Turn Diary Contacts Into Private Records</h3>
        <p>
          The contact follow-up export filters Daily Diary calls, meetings, and
          trip events into a search sheet for telcons, memcons, briefing papers,
          issue files, participant lists, and follow-up cables before any diary
          entry is promoted as selection evidence.
        </p>
        <div class="contact-fields">
          ${contactPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Daily Closeout</p>
        <h3>End the Day With Tomorrow Already Shaped</h3>
        <p>
          The closeout export gives each research day a final control pass:
          folder status, copied-document evidence, restriction notes, no-hit
          searches, promotion decisions, source-note gaps, and next-day pulls.
        </p>
        <div class="closeout-fields">
          ${closeoutPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Source-Note QA</p>
        <h3>Make Every Citation Survive Later Scrutiny</h3>
        <p>
          The source-note QA export checks each candidate against the citation
          pieces that usually go missing: repository, collection, series or
          office, locator, folder, document title, date, page/image control,
          release markings, and boundary decision.
        </p>
        <div class="sourceqa-fields">
          ${sourceNoteQaPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Reference Questions</p>
        <h3>Turn Access Problems Into the Next Ask</h3>
        <p>
          The reference-question export gives closed folders, offsite pulls,
          broad folder titles, handling limits, thin country lanes, and
          missing telcons or memcons a ready staff question and fallback path.
        </p>
        <div class="reference-fields">
          ${referenceQuestionPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Document Review Ledger</p>
        <h3>Evaluate Copied Records the Same Way Every Time</h3>
        <p>
          The ledger export turns each docket issue into a document-review row with
          source-note, restriction, selection-status, abstract, and cross-volume fields.
        </p>
        <div class="review-fields">
          ${reviewLedgerPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Selection Scorecard</p>
        <h3>Promote Candidates With the Same Test Every Time</h3>
        <p>
          The scorecard export seeds one row per docket issue so copied records
          can be scored for policy significance, private-process evidence,
          citation readiness, access, country balance, and boundary fit before
          a final select, defer, route, or reject decision.
        </p>
        <div class="scorecard-fields">
          ${scorecardPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Document Assembly Sheet</p>
        <h3>Turn Candidates Into FRUS Document Packages</h3>
        <p>
          The document assembly export gives each promoted candidate a draft
          package row for document number, section, title line, archival source
          note, release markings, abstract, sequence logic, and adjacent
          documents before the candidate enters final drafting.
        </p>
        <div class="assembly-fields">
          ${assemblyPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Annotation Plan</p>
        <h3>Turn Selected Records Into Editorial Notes</h3>
        <p>
          The annotation export carries each docket issue into the editorial
          apparatus by tracking people, offices, context notes, public/private
          bridges, related documents, boundary cross-references, and unresolved
          questions before drafting begins.
        </p>
        <div class="annotation-fields">
          ${annotationPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
      <article class="full-span">
        <p class="kicker">Declassification Tracker</p>
        <h3>Keep Closed Records in the Evidence Trail</h3>
        <p>
          The declassification tracker turns restrictions, referrals,
          withdrawal sheets, agency equities, open parallel records, and next
          requests into a worksheet so closed records still support selection
          and follow-up decisions.
        </p>
        <div class="declass-fields">
          ${declassPrompts.map((prompt) => `<span>${htmlEscape(prompt)}</span>`).join("")}
        </div>
      </article>
    `;
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

  function exportPrePullText() {
    downloadText("frus-central-america-pre-pull-request.txt", buildPrePullText());
  }

  function exportWeekPlanCsv() {
    const headers = [
      "day",
      "workBlock",
      "priorityBatch",
      "objective",
      "decisionPoint",
      "stopRule",
      "fallbackIfBlocked",
      "closeoutOutput",
      "status",
      "notes",
    ];
    const rows = weekPlanRows.map((row) => ({
      ...row,
      status: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-first-week-plan.csv", headers, rows);
  }

  function exportRunSheetCsv() {
    const headers = [
      "workBlock",
      "batch",
      "ids",
      "objective",
      "mustCapture",
      "nextIfClosed",
      "requested",
      "arrived",
      "reviewed",
      "copied",
      "restrictionNotes",
      "sourceNoteGaps",
      "nextAction",
    ];
    const rows = runSheetRows.map((row) => ({
      ...row,
      requested: "",
      arrived: "",
      reviewed: "",
      copied: "",
      restrictionNotes: "",
      sourceNoteGaps: "",
      nextAction: "",
    }));
    downloadCsv("frus-central-america-reading-room-run-sheet.csv", headers, rows);
  }

  function exportCloseoutCsv() {
    const headers = [
      "date",
      "phase",
      "check",
      "capture",
      "evidence",
      "status",
      "notes",
      "nextAction",
    ];
    const rows = closeoutRows.map((row) => ({
      date: "",
      ...row,
      status: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-daily-closeout.csv", headers, rows);
  }

  function exportSourceNoteQaCsv() {
    const headers = [
      "kind",
      "sourceFamily",
      "requiredOrder",
      "check",
      "commonGap",
      "nextAction",
      "status",
      "notes",
    ];
    const rows = sourceNoteQaRows.map((row) => ({
      ...row,
      status: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-source-note-qa.csv", headers, rows);
  }

  function exportContactFollowupCsv() {
    const headers = [
      "date",
      "type",
      "title",
      "countries",
      "diarySourceNote",
      "catalogUrl",
      "promotionGate",
      "telconOrMemconTarget",
      "briefingPaperTarget",
      "issueFileTarget",
      "followUpCableTarget",
      "matchingPrivateRecord",
      "sourceNoteFieldsNeeded",
      "owner",
      "status",
      "notes",
    ];
    const rows = presidentialContacts().map((item) => {
      const targets = contactSearchTargets(item);
      return {
        date: item.date,
        type: item.type,
        title: item.title,
        countries: item.countries.join("; "),
        diarySourceNote: item.sourceNote,
        catalogUrl: item.href,
        promotionGate: chronologyGate(item),
        telconOrMemconTarget: contactMatchTarget(item),
        briefingPaperTarget: targets.briefing,
        issueFileTarget: targets.issue,
        followUpCableTarget:
          "Search State cables, NSC routing, embassy reporting, agency implementation records, and same-week follow-up tasking.",
        matchingPrivateRecord: "",
        sourceNoteFieldsNeeded:
          "Repository; collection; series or office; OA/ID or NAID; folder title; document title; date; page/image range; release markings.",
        owner: "",
        status: "",
        notes: "",
      };
    });
    downloadCsv("frus-central-america-presidential-contact-followup.csv", headers, rows);
  }

  function exportReferenceQuestionsCsv() {
    const headers = [
      "priority",
      "scenario",
      "staffQuestion",
      "evidenceNeeded",
      "fallbackIfNo",
      "logField",
      "status",
      "notes",
    ];
    const rows = referenceQuestionRows.map((row) => ({
      ...row,
      status: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-reference-questions.csv", headers, rows);
  }

  function exportReviewLedgerCsv() {
    const rows = selectionDocket.map((item) => ({
      issue: item.issue,
      countries: item.countries,
      candidateDocumentTitle: "",
      documentDate: "",
      documentType: "",
      sourceCollection: "Clinton Presidential Records",
      oaIdOrNaid: "",
      folderTitle: "",
      classificationOrMarkings: "",
      pagesOrImages: "",
      publicAnchor: item.publicAnchors,
      privateRecordMatch: item.privateRecordTarget,
      promotionProof: item.promotionProof,
      restrictionStatus: "",
      sourceNoteComplete: "",
      selectionStatus: "",
      crossVolumeDecision: item.boundaryRisk,
      abstractNote: "",
      nextAction: "",
    }));
    downloadCsv("frus-central-america-document-review-ledger.csv", reviewLedgerHeaders, rows);
  }

  function exportSelectionScorecardCsv() {
    const headers = [
      "issue",
      "countries",
      "candidateDocumentTitle",
      "documentDate",
      "publicAnchors",
      "privateRecordTarget",
      "promotionProof",
      "boundaryRisk",
      "policySignificanceScore",
      "presidentialOrNscLevelScore",
      "privateProcessEvidenceScore",
      "sourceNoteReadinessScore",
      "accessAndReleaseScore",
      "countryOrIssueBalanceScore",
      "boundaryFitScore",
      "implementationOrFollowThroughScore",
      "totalScore",
      "recommendation",
      "nextAction",
      "notes",
    ];
    const rows = selectionDocket.map((item) => ({
      issue: item.issue,
      countries: item.countries,
      candidateDocumentTitle: "",
      documentDate: "",
      publicAnchors: item.publicAnchors,
      privateRecordTarget: item.privateRecordTarget,
      promotionProof: item.promotionProof,
      boundaryRisk: item.boundaryRisk,
      policySignificanceScore: "",
      presidentialOrNscLevelScore: "",
      privateProcessEvidenceScore: "",
      sourceNoteReadinessScore: "",
      accessAndReleaseScore: "",
      countryOrIssueBalanceScore: "",
      boundaryFitScore: "",
      implementationOrFollowThroughScore: "",
      totalScore: "",
      recommendation: "",
      nextAction: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-selection-scorecard.csv", headers, rows);
  }

  function exportDocumentAssemblyCsv() {
    const headers = [
      "proposedDocumentNumber",
      "sectionOrChapter",
      "issue",
      "countries",
      "candidateDocumentTitle",
      "documentDate",
      "documentTime",
      "documentType",
      "senderOrAuthor",
      "recipientOrParticipants",
      "frusTitleLine",
      "repository",
      "collection",
      "seriesOrOffice",
      "locator",
      "folderTitle",
      "pageOrImageRange",
      "classificationOrReleaseMarkings",
      "sourceNoteStem",
      "publicAnchor",
      "privateRecordMatch",
      "selectionRationale",
      "abstract",
      "annotationNeeds",
      "previousDocumentLink",
      "nextDocumentLink",
      "crossVolumeBoundary",
      "assemblyStatus",
      "notes",
    ];
    const rows = selectionDocket.map((item) => ({
      proposedDocumentNumber: "",
      sectionOrChapter: assemblySection(item),
      issue: item.issue,
      countries: item.countries,
      candidateDocumentTitle: "",
      documentDate: "",
      documentTime: "",
      documentType: "",
      senderOrAuthor: "",
      recipientOrParticipants: "",
      frusTitleLine: "",
      repository: "Clinton Presidential Library",
      collection: "Clinton Presidential Records",
      seriesOrOffice: "",
      locator: item.privateRecordTarget,
      folderTitle: "",
      pageOrImageRange: "",
      classificationOrReleaseMarkings: "",
      sourceNoteStem: "",
      publicAnchor: item.publicAnchors,
      privateRecordMatch: item.privateRecordTarget,
      selectionRationale: item.promotionProof,
      abstract: "",
      annotationNeeds: item.selectionQuestion,
      previousDocumentLink: "",
      nextDocumentLink: "",
      crossVolumeBoundary: item.boundaryRisk,
      assemblyStatus: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-document-assembly.csv", headers, rows);
  }

  function exportAnnotationPlanCsv() {
    const headers = [
      "issue",
      "countries",
      "candidateDocumentTitle",
      "documentDate",
      "annotationTopic",
      "personsToIdentify",
      "officesOrAgencies",
      "contextNeeded",
      "chronologyBridge",
      "publicStatementCrossReference",
      "relatedDocuments",
      "sourceNoteOrDeclassificationNote",
      "boundaryCrossReference",
      "implementationFollowUp",
      "unresolvedQuestion",
      "annotationStatus",
      "notes",
    ];
    const rows = selectionDocket.map((item) => ({
      issue: item.issue,
      countries: item.countries,
      candidateDocumentTitle: "",
      documentDate: "",
      annotationTopic: item.issue,
      personsToIdentify: "",
      officesOrAgencies: "",
      contextNeeded: item.selectionQuestion,
      chronologyBridge: item.publicAnchors,
      publicStatementCrossReference: item.publicAnchors,
      relatedDocuments: item.privateRecordTarget,
      sourceNoteOrDeclassificationNote: item.promotionProof,
      boundaryCrossReference: item.boundaryRisk,
      implementationFollowUp: "",
      unresolvedQuestion: item.selectionQuestion,
      annotationStatus: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-annotation-plan.csv", headers, rows);
  }

  function exportDeclassTrackerCsv() {
    const headers = [
      "issue",
      "countries",
      "candidateDocumentTitle",
      "documentDate",
      "folderOrDocumentLocator",
      "restrictionStatus",
      "withdrawalSheetText",
      "agencyEquities",
      "referralOrReviewPath",
      "openParallelRecord",
      "sourceNoteEvidence",
      "selectionImpact",
      "nextRequest",
      "owner",
      "status",
      "notes",
    ];
    const rows = selectionDocket.map((item) => ({
      issue: item.issue,
      countries: item.countries,
      candidateDocumentTitle: "",
      documentDate: "",
      folderOrDocumentLocator: item.privateRecordTarget,
      restrictionStatus: "",
      withdrawalSheetText: "",
      agencyEquities: declassEquities(item),
      referralOrReviewPath: "",
      openParallelRecord: item.publicAnchors,
      sourceNoteEvidence: item.promotionProof,
      selectionImpact: item.boundaryRisk,
      nextRequest: "",
      owner: "",
      status: "",
      notes: "",
    }));
    downloadCsv("frus-central-america-declassification-tracker.csv", headers, rows);
  }

  function bindPacketExports() {
    document.querySelector("#export-prepull")?.addEventListener("click", exportPrePullText);
    document.querySelector("#export-week-plan")?.addEventListener("click", exportWeekPlanCsv);
    document.querySelector("#export-run-sheet")?.addEventListener("click", exportRunSheetCsv);
    document.querySelector("#export-closeout")?.addEventListener("click", exportCloseoutCsv);
    document.querySelector("#export-source-note-qa")?.addEventListener("click", exportSourceNoteQaCsv);
    document.querySelector("#export-contact-followup")?.addEventListener("click", exportContactFollowupCsv);
    document.querySelector("#export-reference-questions")?.addEventListener("click", exportReferenceQuestionsCsv);
    document.querySelector("#export-review-ledger")?.addEventListener("click", exportReviewLedgerCsv);
    document.querySelector("#export-selection-scorecard")?.addEventListener("click", exportSelectionScorecardCsv);
    document.querySelector("#export-document-assembly")?.addEventListener("click", exportDocumentAssemblyCsv);
    document.querySelector("#export-annotation-plan")?.addEventListener("click", exportAnnotationPlanCsv);
    document.querySelector("#export-declass-tracker")?.addEventListener("click", exportDeclassTrackerCsv);
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
  renderVisitKit();
  renderSelectionDocket();
  renderPacket();
  bindPacketExports();
})();
