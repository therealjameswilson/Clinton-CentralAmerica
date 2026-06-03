const officialLinks = [
  {
    title: "Official volume page",
    label: "Office of the Historian",
    description:
      "Volume XXXII is listed as Central America in the FRUS 1993-2000 subseries.",
    status: "Being Researched",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v32",
  },
  {
    title: "Status of the series",
    label: "Production state",
    description:
      "Use the status page as the source of truth for whether the volume is planned, researched, cleared, or published.",
    status: "Control anchor",
    href: "https://history.state.gov/historicaldocuments/status-of-the-series",
  },
  {
    title: "Clinton digitized records",
    label: "Presidential Library",
    description:
      "Search digitized records in the National Archives Catalog and the Clinton Digital Library before building the pull list.",
    status: "Primary discovery",
    href: "https://www.clintonlibrary.gov/research/search-digitized-records",
  },
  {
    title: "Public Papers",
    label: "GovInfo",
    description:
      "Presidential statements and remarks help pin public chronology, travel, disaster response, and policy framing.",
    status: "Public chronology",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Clinton FRUS volume index",
    label: "Office of the Historian",
    description:
      "Adjacent Clinton-era volumes identify scope boundaries for public diplomacy, North America, Caribbean, South America, global issues, narcotics, and human-rights overlaps.",
    status: "Cross-volume control",
    href: "https://history.state.gov/historicaldocuments/clinton",
  },
  {
    title: "FRUS citation guidance",
    label: "Office of the Historian",
    description:
      "Use the citation guidance as the control model for document numbers, canonical URLs, page references, and source-note normalization.",
    status: "Citation control",
    href: "https://history.state.gov/historicaldocuments/citing-frus",
  },
];

const countries = [
  {
    name: "Guatemala",
    code: "GTM",
    risk: "High",
    focus: "Peace process, human rights cases, military and intelligence accountability, refugee and asylum pressure.",
    terms: ["Guatemala", "Harbury", "Bamaca", "peace accords"],
  },
  {
    name: "El Salvador",
    code: "SLV",
    risk: "Medium",
    focus: "Post-war consolidation, FMLN integration, justice and police reform, reconstruction assistance.",
    terms: ["El Salvador", "FMLN", "peace accords", "PNC"],
  },
  {
    name: "Honduras",
    code: "HND",
    risk: "High",
    focus: "Regional security, migration, aid, base diplomacy, disaster relief after Hurricane Mitch.",
    terms: ["Honduras", "Soto Cano", "Mitch", "migration"],
  },
  {
    name: "Nicaragua",
    code: "NIC",
    risk: "High",
    focus: "Democratic transition, elections, property claims, demobilization, aid, Sandinista relations.",
    terms: ["Nicaragua", "Chamorro", "Aleman", "property claims"],
  },
  {
    name: "Costa Rica",
    code: "CRI",
    risk: "Medium",
    focus: "Regional diplomacy, democracy promotion, environmental diplomacy, trade and development policy.",
    terms: ["Costa Rica", "regional diplomacy", "environment", "trade"],
  },
  {
    name: "Panama",
    code: "PAN",
    risk: "High",
    focus: "Post-invasion governance, Canal transfer, counterdrug cooperation, security presence, banking controls.",
    terms: ["Panama", "Canal", "Noriega", "counterdrug"],
  },
  {
    name: "Belize",
    code: "BLZ",
    risk: "Medium",
    focus: "Border diplomacy, regional organizations, narcotics transit, environment, Caribbean-facing policy.",
    terms: ["Belize", "Guatemala border", "narcotics", "CARICOM"],
  },
  {
    name: "Regional",
    code: "REG",
    risk: "High",
    focus: "Hurricane Mitch, Summit of the Americas follow-through, migration, counternarcotics, democracy assistance.",
    terms: ["Central America", "Hurricane Mitch", "Summit of the Americas", "AID"],
  },
];

const coverageAudit = [
  {
    country: "Guatemala",
    status: "High priority",
    publicAnchors:
      "1993 Central American Presidents breakfast; 1999 Guatemala arrival remarks; Guatemala peace-efforts roundtable; Antigua summit.",
    privateRecordTargets:
      "Soderberg OA/ID 1404; Intelligence Programs OA/IDs 2479, 2481, 2483, 2513, 2520, 2526; Democracy/Human Rights OA/ID 793.",
    weakSpot:
      "Public apology and peace-process language can outrun the declassified record; IOB, declassification, and intelligence equities need folder-level proof.",
    firstPull:
      "Batch 2 Soderberg files, then Batch 3 intelligence and democracy/human-rights cross-checks.",
    promotionProof:
      "Memcon, decision memorandum, declassification packet, IOB handling record, State cable, withdrawal sheet, or peace-accord implementation record.",
    boundaryWatch: "Rights and Governance; intelligence equities; Public Diplomacy.",
  },
  {
    country: "El Salvador",
    status: "Needs balance",
    publicAnchors:
      "1993 Moakley dinner; 1999 El Salvador arrival event; Legislative Assembly address.",
    privateRecordTargets:
      "Soderberg OA/ID 1408; Access Management OA/IDs 3788, 3789; Intelligence Programs OA/ID 3031; Democracy/Human Rights OA/ID 494; MHA OA/IDs 3425, 3430, 3536.",
    weakSpot:
      "Accountability cases are visible, but post-war consolidation, police reform, justice, and migration can become under-documented.",
    firstPull:
      "Batch 3 accountability files, then MHA migration/parity files and Soderberg post-war implementation folders.",
    promotionProof:
      "Declassification record, accountability memo, embassy reporting, police or justice reform cable, DED/NACARA policy paper, or implementation memorandum.",
    boundaryWatch: "Rights and Governance; domestic immigration-law spillover.",
  },
  {
    country: "Honduras",
    status: "Mitch spine",
    publicAnchors:
      "1998 Flores call; 1998 Tipper Gore Hurricane Mitch call; 1999 Soto Cano remarks; Tegucigalpa reconstruction roundtable.",
    privateRecordTargets:
      "Trip books OA/IDs 3622, 3638; MHA OA/IDs 3426, 3429, 3452; Press OA/IDs 3468, 3299; Soto Cano and military-support files.",
    weakSpot:
      "Disaster relief is strong publicly, but migration, base diplomacy, and military-support decisions require private-policy records.",
    firstPull:
      "Batch 4 Mitch, migration, and trip-book files; cross-check speech and press folders only after decision records are logged.",
    promotionProof:
      "Relief decision memo, USAID/State implementation record, military-support record, TPS/migration paper, embassy cable, or trip-book briefing tab.",
    boundaryWatch: "Humanitarian assistance; defense basing; migration.",
  },
  {
    country: "Nicaragua",
    status: "Public heavy",
    publicAnchors:
      "1998 Aleman call; March 8, 1999 Managua arrival and Aleman meetings; Posoltega remarks; Las Casitas survivor roundtable.",
    privateRecordTargets:
      "Trip books OA/IDs 3622, 3638; MHA OA/IDs 2980, 3067, 3422-3430; speech and press files; Hurricane Mitch implementation records.",
    weakSpot:
      "Mitch and trip events are visible; property claims, demobilization, democratic transition, and aid implementation need deeper private-record support.",
    firstPull:
      "Batch 4 trip and MHA files, then targeted searches for Nicaragua property, aid, election, and migration records.",
    promotionProof:
      "Telcon, memcon, trip-book tab, relief-policy memo, USAID/State implementation record, or country-specific aid and migration decision paper.",
    boundaryWatch: "Migration; humanitarian aid; public diplomacy.",
  },
  {
    country: "Costa Rica",
    status: "Summit control",
    publicAnchors:
      "1997 San Jose welcoming ceremony; leaders news conference; Declaration of San Jose; environment and summit remarks.",
    privateRecordTargets:
      "Blinken OA/ID 3388; Trip Book OA/ID 3625; Soderberg OA/ID 1416; Strategic Planning OA/ID 773.",
    weakSpot:
      "The summit is rich publicly, but the Central America volume needs follow-up tasking, implementation, or leader-meeting substance.",
    firstPull:
      "Batch 6 only after Panama, Guatemala, El Salvador, Mitch, and migration decision-record sweeps are underway.",
    promotionProof:
      "Summit briefing book, leader meeting notes, clearance memo, follow-up tasking, implementation cable, or law-enforcement/trade/environment record.",
    boundaryWatch: "Public Diplomacy; trade; environment; hemispheric summit volumes.",
  },
  {
    country: "Panama",
    status: "Decision spine",
    publicAnchors:
      "1994 Perez Balladares call; 1995/1996/2000 narcotics letters; 1999 Panama Canal transfer statement.",
    privateRecordTargets:
      "Records Management OA/IDs 3906, 4001, 4003, 4004, 3908, 3910, 3898, 4125; Defense Policy Panama files; Transnational Threats OA/ID 2248.",
    weakSpot:
      "Canal transfer ceremony, counternarcotics, defense posture, and residual presence must be separated from public symbolism.",
    firstPull:
      "Batch 1 PC/DC/PRD decision records, then Batch 5 defense-policy Panama files and transnational-threats cross-checks.",
    promotionProof:
      "PC/DC minutes, PRD folder, Defense/State cable, Canal Commission briefing, treaty-obligation record, or presidential call memorandum.",
    boundaryWatch: "North America; defense; narcotics; transnational security.",
  },
  {
    country: "Belize",
    status: "Thin lane",
    publicAnchors:
      "1997 San Jose summit participation; 1995, 1996, and 2000 narcotics letters; trade and CBI controls.",
    privateRecordTargets:
      "Transnational Threats OA/IDs 1497, 4042, 4050, 4067, 4069, 4070; Federal Register and CBI/eligibility implementation records.",
    weakSpot:
      "Belize appears in regional, narcotics, and trade frames, but may lack standalone presidential-level diplomatic evidence.",
    firstPull:
      "Use Batch 6 boundary pass, then decide whether Belize remains a regional/narcotics/trade lane or warrants a standalone document.",
    promotionProof:
      "Certification memo, INCSR narrative, border or transit-country cable, CBI eligibility record, summit follow-up, or country-specific tasking.",
    boundaryWatch: "Cuba, Haiti, Caribbean; narcotics; trade/global economic policy.",
  },
  {
    country: "Regional",
    status: "Backbone lane",
    publicAnchors:
      "1993 presidents breakfast; 1997 San Jose summit; 1998-1999 Hurricane Mitch sequence; 1999 Antigua summit; 2000 trade/CBI and narcotics anchors.",
    privateRecordTargets:
      "Records Management PC/DC/PRD files; Soderberg regional leaders files; MHA Mitch/migration files; Transnational Threats; Federal Register; USAID; State FOIA.",
    weakSpot:
      "Regional records can drift into public diplomacy, Latin America region, trade, narcotics, or humanitarian companion volumes.",
    firstPull:
      "Use dated chronology to choose issue-specific first pulls; log every boundary decision in the selection docket before promotion.",
    promotionProof:
      "Private decision record, leader meeting notes, implementation tasking, cross-agency memo, State cable, legal/FR control, or USAID project record.",
    boundaryWatch: "Public Diplomacy; South America/Latin America Region; Global Issues; Foreign Economic Policy.",
  },
];

const sources = [
  {
    title: "Clinton Presidential Records",
    type: "Presidential archive",
    description:
      "Memcons, telcons, NSC files, WHORM subject files, schedules, staff files, and FOIA collections.",
    checks: ["Item-level PDF availability", "Collection and OA/ID fields", "Restriction and withdrawal sheets"],
    href: "https://clinton.presidentiallibraries.us/",
  },
  {
    title: "National Archives Catalog",
    type: "Catalog discovery",
    description:
      "Presidential Library Explorer and NAC keyword searches can surface digitized Clinton records and staff-file descriptions.",
    checks: ["NAID", "File unit title", "Digital object count"],
    href: "https://catalog.archives.gov/",
  },
  {
    title: "Presidential Daily Diary",
    type: "Chronology and calls",
    description:
      "Daily Diary file units help verify presidential calls, meetings, movements, and event sequences before checking policy files.",
    checks: ["FOIA tracking number", "OA/ID", "Diary date and entry", "NAID"],
    href: "https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*",
  },
  {
    title: "GovInfo Public Papers",
    type: "Public chronology",
    description:
      "Public statements, remarks, letters, nominations, and messages supply date anchors and public policy language.",
    checks: ["Event date", "Page range", "Document category"],
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Federal Register",
    type: "Public legal control",
    description:
      "Presidential determinations, proclamations, notices, TPS actions, and trade designations supply legal implementation evidence behind public statements.",
    checks: ["FR citation", "Effective date", "Linked statute or determination"],
    href: "https://www.federalregister.gov/documents/search",
  },
  {
    title: "USAID Development Experience Clearinghouse",
    type: "Aid implementation",
    description:
      "Use USAID reporting to test disaster-relief, reconstruction, democracy, and development claims against implementation records.",
    checks: ["Project title", "Country coverage", "Report date"],
    href: "https://dec.usaid.gov/dec/home/Default.aspx",
  },
  {
    title: "Department of State FOIA",
    type: "Agency records",
    description:
      "Cable, briefing, and policy-paper leads for the Bureau of Inter-American Affairs and embassies.",
    checks: ["Release case", "Document date", "Cable identifiers"],
    href: "https://foia.state.gov/searchapp/Search/SubmitSimpleQuery",
  },
  {
    title: "CIA Reading Room",
    type: "Intelligence context",
    description:
      "Use for declassified analytic context and cross-checking human rights, narcotics, and security-policy episodes.",
    checks: ["CREST citation", "Document type", "Sanitized release facts"],
    href: "https://www.cia.gov/readingroom/",
  },
  {
    title: "Official FRUS Series",
    type: "Editorial anchor",
    description:
      "Previous Central America volumes provide source-note practice, chapter precedents, and continuity checks.",
    checks: ["Source-note pattern", "Chapter model", "Cross-volume overlap"],
    href: "https://history.state.gov/historicaldocuments",
  },
  {
    title: "Clinton FRUS Assist Pages",
    type: "Scope control",
    description:
      "Use the Clinton administration FRUS index to flag records that may belong in adjacent volumes before building the final Central America selection list.",
    checks: ["Adjacent volume", "Overlap issue", "Selection rationale"],
    href: "https://history.state.gov/historicaldocuments/clinton",
  },
  {
    title: "FRUS Citation Guidance",
    type: "Citation control",
    description:
      "Normalize research leads into FRUS-ready citation components before a candidate is promoted from chronology lead to selection evidence.",
    checks: ["Document number when assigned", "Canonical URL", "Page or image reference"],
    href: "https://history.state.gov/historicaldocuments/citing-frus",
  },
];

const libraryOverview = [
  {
    value: "4",
    label: "finding-aid PDFs",
    detail: "2013-0185-M Parts 1-4",
  },
  {
    value: "1,290",
    label: "pages reviewed",
    detail: "Text-extracted finding aids",
  },
  {
    value: "657",
    label: "Central America hits",
    detail: "Broad OCR match lines",
  },
  {
    value: "6",
    label: "call-slip batches",
    detail: "Designed for onsite time blocks",
  },
];

const clintonSourceRoot =
  "Source: Clinton Library, Clinton Presidential Records, National Security Council";

function sourceNoteStem(series, ids, folderTitle) {
  const idLabel = /[,;-]/.test(ids) ? "OA/IDs" : "OA/ID";
  return `${clintonSourceRoot}, ${series}, ${idLabel} ${ids}, ${folderTitle}. Folder-title lead from finding aid 2013-0185-M; document-level classification and release markings to be verified onsite.`;
}

const libraryClusters = [
  {
    title: "Panama Decision Spine",
    priority: "Critical",
    focus:
      "Start with interagency decision records before staff files: Panama Canal reversion, residual military presence, Colombia-Panama policy, bases, UXO, and security posture.",
    sourceNotes: [
      sourceNoteStem(
        "Records Management",
        "3906",
        "PC0284 PC Meeting on Panama and Colombia, July 14, 1998",
      ),
      sourceNoteStem(
        "Records Management",
        "4001, 4003, 4004, 3908, 3910, 3898",
        "DC meetings on Panama, 1995-1998",
      ),
      sourceNoteStem(
        "Records Management",
        "4125",
        "PRD-49, Issues Related to U.S. Military Presence and Canal Reversion in Panama, January 5, 1995",
      ),
      sourceNoteStem(
        "Defense Policy",
        "1693, 1831, 1859, 1860, 1864, 2184, 2475, 3355, 3481, 3487, 3584, 3585, 3586, 3595, 3658, 3663, 3826, 3843",
        "Panama files, 1995-2000",
      ),
    ],
    onsite:
      "Call first. If time collapses, PC/DC/PRD folders outrank speech, press, and country background files.",
  },
  {
    title: "Guatemala Human Rights and IOB",
    priority: "Critical",
    focus:
      "Use Nancy Soderberg, intelligence, and democracy/human-rights files to reconstruct Harbury/Bamaca, Sister Ortiz, declassification, and IOB handling.",
    sourceNotes: [
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1404",
        "Guatemala-Bamaca Case; Guatemala-IOB; Guatemala-IOB Investigation; Guatemala-Sister Ortiz Case; Guatemala-Bamaca/Devine Case; Guatemala-Document Declassification",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1405",
        "Honduras; Immigration Issues; Landmines; Latin America-Arms Sales",
      ),
      sourceNoteStem(
        "Intelligence Programs",
        "2479, 2481, 2483, 2513, 2520, 2526",
        "Guatemala; Weekly Meetings-Devine and Roeber; Guatemala-Miscellaneous, 1995; Guatemala-Human Rights Cases Book 1",
      ),
      sourceNoteStem(
        "Democracy/Human Rights-Malley, Robert",
        "793",
        "Guatemala; School of the Americas",
      ),
    ],
    onsite:
      "Treat withdrawal sheets as evidence. Capture every source note field even when documents are closed or partly withdrawn.",
  },
  {
    title: "Hurricane Mitch and 1999 Trip",
    priority: "Critical",
    focus:
      "Tie disaster relief, migration pressure, presidential travel, Honduras/Soto Cano, Guatemala remarks, and regional policy follow-through.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Widmer, Edward",
        "2189",
        "Central America, February 1999; Guatemala, March 11, 1999; Honduras Soto Cano, March 8, 1999; Hurricane Mitch",
      ),
      sourceNoteStem(
        "Records Management",
        "3622, 3638",
        "Trip Book-POTUS Trip to Central America, March 8-11, 1999",
      ),
      sourceNoteStem(
        "Press-Crowley, Philip J.",
        "3468",
        "POTUS Trip to Nicaragua, El Salvador, Honduras, and Guatemala, March 8-11, 1999",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Schwartz, Eric",
        "3426, 3429, 3452",
        "Hurricane Mitch; Central America Hurricane Mitch, 1999; POTUS-Central America Trip, 1999",
      ),
    ],
    onsite:
      "Photograph trip-book tables of contents first, then decide which briefing tabs deserve full document capture.",
  },
  {
    title: "Costa Rica Summit and Regional Leaders",
    priority: "High",
    focus:
      "Capture regional summit framing, leader meetings, environment, democracy, and public diplomacy around the 1997 Costa Rica visit and earlier Central American leader engagement.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Blinken, Antony",
        "3388",
        "Costa Rica-Summit Opening Remarks; Costa Rica-Leaders Lunch Toast; Costa Rica-Summit Press Conference; Costa Rica-Environment Speech; Costa Rica-Embassy Meet and Greet; Costa Rica-State Dinner Toast",
      ),
      sourceNoteStem(
        "Records Management",
        "3625",
        "Trip Book-POTUS Visit to Costa Rica, May 7-9, 1997",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1416",
        "Central American Presidents Meeting; Central American Leaders Brunch, November 30, 1993",
      ),
      sourceNoteStem("Strategic Planning-Gibney, James", "773", "Costa Rica"),
    ],
    onsite:
      "Use these folders to fill public-facing chronology and identify names for follow-up in NSC staff files.",
  },
  {
    title: "Migration, TPS, NACARA, and Humanitarian Policy",
    priority: "High",
    focus:
      "Track the policy mechanics behind migration, deferred enforced departure, TPS, NACARA, refugee/asylum issues, and relief after Mitch.",
    sourceNotes: [
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs",
        "2980, 3067, 3074, 3075, 3134",
        "Immigration-Nicaragua; Nicaraguans, 1996; Guatemala-Fires, April 2000; Mitch, Hurricane-Expenditures; Honduras and Nicaragua-TPS",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Schwartz, Eric",
        "3422-3430",
        "Guatemala; El Salvador; Hurricane Mitch, 1998; Central America Hurricane Mitch, 1999; El Salvador-Deferred Enforced Departures",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Patten, Wendy",
        "3536",
        "El Salvador-Church Women; Central American and Haitian Parity Bill",
      ),
      sourceNoteStem(
        "Multilateral and Humanitarian Affairs-Busby, Scott",
        "1890",
        "TPS for Central America",
      ),
    ],
    onsite:
      "Batch these after the decision records. They are ideal for filling explanatory notes and legal-policy context.",
  },
  {
    title: "El Salvador Accountability and Post-War Files",
    priority: "High",
    focus:
      "Pull churchwomen, Zona Rosa, FMLN, delegation, DED, and post-war implementation folders to keep El Salvador from becoming a thin country lane.",
    sourceNotes: [
      sourceNoteStem(
        "Access Management-Leary, William",
        "3788, 3789",
        "Documents Prepared for El Salvador Churchwomen Case",
      ),
      sourceNoteStem(
        "Staff Director-Soderberg, Nancy",
        "1408",
        "El Salvador-Zona Rosa Declassification, January 1997",
      ),
      sourceNoteStem(
        "Intelligence Programs-Mitchell, Don",
        "3031",
        "El Salvador-Zona Rosa, 1996",
      ),
      sourceNoteStem(
        "Democracy/Human Rights and Multilateral and Humanitarian Affairs",
        "494, 3425, 3430, 3536",
        "El Salvador; El Salvador, 1995; El Salvador-Deferred Enforced Departures; El Salvador-Church Women",
      ),
    ],
    onsite:
      "Pair accountability folders with migration and post-war implementation folders to avoid a case-only narrative.",
  },
  {
    title: "Transnational Threats and International Crime",
    priority: "High",
    focus:
      "Mine the crime, narcotics, corruption, border security, arms trafficking, and country files that may otherwise fall between regional and global volumes.",
    sourceNotes: [
      sourceNoteStem(
        "Transnational Threats-Eddy, Randolph",
        "1497, 1503",
        "Central America; Belize; El Salvador; Guatemala; Nicaragua; Panama II",
      ),
      sourceNoteStem("Transnational Threats-Simon, Steven", "2248", "Panama"),
      sourceNoteStem(
        "Transnational Threats-Rosa, Frederick",
        "4042, 4050, 4067, 4069, 4070",
        "Panama-International Crime; Honduras-International Crime; Nicaragua-International Crime; Central American Summit; Belize-International Crime; Costa Rica-International Crime; El Salvador-International Crime; Guatemala-International Crime; Border Security Review; Human Rights Monitoring and Restrictions",
      ),
      sourceNoteStem(
        "Transnational Threats-Cressey, Roger",
        "3193A",
        "Herzegovina/Guatemala/Peacekeeping",
      ),
    ],
    onsite:
      "Use for gap closure after core diplomatic and trip files. Tag country files that belong in narcotics or counterterrorism companion volumes.",
  },
  {
    title: "Speech, Press, and Public Chronology",
    priority: "Medium",
    focus:
      "Use speechwriting and press files to verify public chronology, trip messaging, and statement provenance before cross-checking GovInfo.",
    sourceNotes: [
      sourceNoteStem(
        "Speechwriting-Widmer, Edward",
        "2189",
        "Central America; Guatemala; Honduras Soto Cano; Hurricane Mitch",
      ),
      sourceNoteStem(
        "Speechwriting-Blinken, Antony",
        "3388",
        "Costa Rica summit and visit sequence",
      ),
      sourceNoteStem(
        "Press-Crowley, Philip J.",
        "103096-103106",
        "Central America-General; Costa Rica; El Salvador; Guatemala; Haiti; Honduras; Mexico; Nicaragua; Panama",
      ),
      sourceNoteStem(
        "Press-Gobush, Matthew",
        "3299",
        "Hurricane Mitch Updates, December 1998",
      ),
    ],
    onsite:
      "Use as a verification layer. Do not let polished remarks consume time before decision records are checked.",
  },
];

const onsitePlan = [
  {
    phase: "Before arrival",
    action:
      "Send a pre-pull list grouped by OA/ID batch. Ask staff which folders are restricted, offsite, oversize, or require special handling.",
  },
  {
    phase: "First morning",
    action:
      "Start with Records Management PC/DC/PRD folders and Soderberg Guatemala folders. These are the highest selection-risk files.",
  },
  {
    phase: "Every folder",
    action:
      "Capture folder title, OA/ID, collection path, restriction sheet, date span, document titles, page counts, and quick inclusion rationale.",
  },
  {
    phase: "End of each day",
    action:
      "Export the photo/log ledger, mark no-hit or closed folders, and reorder the next pull batch around gaps rather than curiosity.",
  },
];

const callSlipBatches = [
  {
    title: "Batch 1 - Decision Records",
    ids: "3906, 4001, 4003, 4004, 3908, 3910, 3898, 4123, 4125",
  },
  {
    title: "Batch 2 - Soderberg Staff Files",
    ids: "1404, 1405, 1408, 1409, 1416",
  },
  {
    title: "Batch 3 - Guatemala and El Salvador Accountability",
    ids: "793, 494, 2479, 2480, 2481, 2483, 2513, 2520, 2526, 3031, 3536, 3788, 3789",
  },
  {
    title: "Batch 4 - Mitch, Migration, and Trip Books",
    ids: "1890, 2980, 3067, 3074, 3075, 3134, 3422-3430, 3452, 3622, 3625, 3638",
  },
  {
    title: "Batch 5 - Panama Defense Policy",
    ids: "1693, 1831, 1859, 1860, 1864, 2184, 2475, 3355, 3481, 3487, 3584, 3585, 3586, 3595, 3658, 3663, 3826, 3843",
  },
  {
    title: "Batch 6 - Transnational Threats and Public Chronology",
    ids: "1497, 1503, 2189, 2248, 3299, 3388, 3468, 4042, 4050, 4067, 4069, 4070, 103096-103106",
  },
];

function catalogSearchUrl(query) {
  return `https://catalog.archives.gov/search?q=${encodeURIComponent(query)}&collectionIdentifier=WJC*`;
}

const authorityIndex = [
  {
    name: "William J. Clinton",
    role: "President",
    lane: "Decision, call, meeting, trip, and public chronology anchor",
    searchTerms: ["Clinton Central America", "POTUS Central America", "POTUS Trip Central America"],
    likelySources:
      "Presidential Daily Diary; trip books; NSC Records Management; Public Papers; speech and press files",
    firstMove:
      "Use dated diary and Public Papers anchors first, then search the same date in NSC, State, trip-book, speech, and press files.",
    href: catalogSearchUrl('"William J. Clinton" "Central America"'),
  },
  {
    name: "Ellen McCathran",
    role: "Presidential Daily Diary file-unit heading",
    lane: "Diary chronology and schedule control",
    searchTerms: ["Ellen McCathran Presidential Daily Diary", "Presidential Daily Diary Hardcopy"],
    likelySources: "Presidential Daily Diary OA/IDs CF 1982-CF 1986; LPWJC 2010-0083-F",
    firstMove:
      "Use diary hits to confirm calls, meetings, trip movements, participants, interpreters, and the exact date-time spine before pulling policy records.",
    href: catalogSearchUrl('"Ellen McCathran" "Presidential Daily Diary"'),
  },
  {
    name: "Nancy Soderberg",
    role: "NSC Staff Director",
    lane: "Guatemala, El Salvador, Honduras, immigration, and Central American leaders",
    searchTerms: ["Soderberg Guatemala", "Soderberg El Salvador", "Central American Presidents Meeting"],
    likelySources: "Staff Director-Soderberg, Nancy, OA/IDs 1404, 1405, 1408, 1409, 1416",
    firstMove:
      "Start here for high-level issue files that can convert public chronology leads into policy-process evidence.",
    href: catalogSearchUrl('"Soderberg" "Guatemala"'),
  },
  {
    name: "Antony Blinken",
    role: "Speechwriting",
    lane: "Costa Rica summit, leader events, environmental speech, and summit messaging",
    searchTerms: ["Blinken Costa Rica", "Costa Rica Summit Opening Remarks", "Costa Rica Leaders Lunch"],
    likelySources: "Speechwriting-Blinken, Antony, OA/ID 3388",
    firstMove:
      "Use speech files to identify message provenance, clearance paths, and names to chase in NSC and State files.",
    href: catalogSearchUrl('"Blinken" "Costa Rica"'),
  },
  {
    name: "Edward Widmer",
    role: "Speechwriting",
    lane: "1999 Central America trip, Guatemala, Honduras/Soto Cano, and Hurricane Mitch",
    searchTerms: ["Widmer Central America", "Widmer Hurricane Mitch", "Guatemala March 11 1999"],
    likelySources: "Speechwriting-Widmer, Edward, OA/ID 2189",
    firstMove:
      "Pair speech tabs with trip books and relief-policy files; do not stop at polished remarks when a decision file is likely nearby.",
    href: catalogSearchUrl('"Widmer" "Hurricane Mitch"'),
  },
  {
    name: "Philip J. Crowley",
    role: "Press",
    lane: "March 1999 Nicaragua, El Salvador, Honduras, and Guatemala trip file",
    searchTerms: ["Crowley POTUS Central America trip", "Crowley Guatemala Honduras Nicaragua"],
    likelySources: "Press-Crowley, Philip J., OA/IDs 103096-103106 and 3468",
    firstMove:
      "Use press files to reconstruct public-event sequence, press guidance, and gaps between public framing and private decisions.",
    href: catalogSearchUrl('"Crowley" "Central America"'),
  },
  {
    name: "Matthew Gobush",
    role: "Press",
    lane: "Hurricane Mitch public updates",
    searchTerms: ["Gobush Hurricane Mitch", "Hurricane Mitch Updates December 1998"],
    likelySources: "Press-Gobush, Matthew, OA/ID 3299",
    firstMove:
      "Use as a bridge from public messaging to relief, USAID, State, migration, and MHA implementation files.",
    href: catalogSearchUrl('"Gobush" "Hurricane Mitch"'),
  },
  {
    name: "Eric Schwartz",
    role: "Multilateral and Humanitarian Affairs",
    lane: "Hurricane Mitch, Central America relief, trip follow-up, and humanitarian policy",
    searchTerms: ["Schwartz Hurricane Mitch", "Central America Hurricane Mitch 1999", "POTUS Central America Trip 1999"],
    likelySources: "MHA-Schwartz, Eric, OA/IDs 3422-3430, 3426, 3429, 3452",
    firstMove:
      "Pull after the decision-record spine to test whether public relief commitments became policy, migration, or aid actions.",
    href: catalogSearchUrl('"Schwartz" "Hurricane Mitch"'),
  },
  {
    name: "Scott Busby",
    role: "Multilateral and Humanitarian Affairs",
    lane: "TPS and migration policy for Central America",
    searchTerms: ["Busby TPS Central America", "TPS for Central America"],
    likelySources: "MHA-Busby, Scott, OA/ID 1890",
    firstMove:
      "Use TPS files to connect Mitch relief and humanitarian policy to immigration-law implementation without losing the foreign-policy thread.",
    href: catalogSearchUrl('"Busby" "TPS" "Central America"'),
  },
  {
    name: "Wendy Patten",
    role: "Multilateral and Humanitarian Affairs",
    lane: "El Salvador churchwomen, Central American parity bill, and humanitarian-law context",
    searchTerms: ["Patten El Salvador Church Women", "Central American and Haitian Parity Bill"],
    likelySources: "MHA-Patten, Wendy, OA/ID 3536",
    firstMove:
      "Pair accountability-case files with migration and parity-bill records so El Salvador is not reduced to one case lane.",
    href: catalogSearchUrl('"Patten" "El Salvador" "Church Women"'),
  },
  {
    name: "Robert Malley",
    role: "Democracy/Human Rights",
    lane: "Guatemala and School of the Americas human-rights files",
    searchTerms: ["Malley Guatemala", "School of the Americas Guatemala"],
    likelySources: "Democracy/Human Rights-Malley, Robert, OA/ID 793",
    firstMove:
      "Capture withdrawal sheets and routing even if documents are closed; the closure evidence may still define the source trail.",
    href: catalogSearchUrl('"Malley" "Guatemala"'),
  },
  {
    name: "William Leary",
    role: "Access Management",
    lane: "El Salvador churchwomen document-preparation files",
    searchTerms: ["Leary El Salvador Churchwomen", "Documents Prepared for El Salvador Churchwomen Case"],
    likelySources: "Access Management-Leary, William, OA/IDs 3788, 3789",
    firstMove:
      "Use declassification and document-preparation records as a control set for accountability files and release status.",
    href: catalogSearchUrl('"Leary" "El Salvador Churchwomen"'),
  },
  {
    name: "Don Mitchell",
    role: "Intelligence Programs",
    lane: "El Salvador Zona Rosa and intelligence-accountability records",
    searchTerms: ["Mitchell Zona Rosa", "El Salvador Zona Rosa 1996"],
    likelySources: "Intelligence Programs-Mitchell, Don, OA/ID 3031",
    firstMove:
      "Treat release markings and withdrawal sheets as part of the evidence record before deciding whether the file can support selection.",
    href: catalogSearchUrl('"Mitchell" "Zona Rosa"'),
  },
  {
    name: "Randolph Eddy",
    role: "Transnational Threats",
    lane: "Central America country and narcotics/crime files",
    searchTerms: ["Eddy Central America", "Eddy Belize El Salvador Guatemala Nicaragua Panama"],
    likelySources: "Transnational Threats-Eddy, Randolph, OA/IDs 1497, 1503",
    firstMove:
      "Use after the diplomatic spine to decide whether a crime/narcotics file belongs in Central America or a global issues volume.",
    href: catalogSearchUrl('"Eddy" "Central America"'),
  },
  {
    name: "Frederick Rosa",
    role: "Transnational Threats",
    lane: "International crime, border security, and country files",
    searchTerms: ["Rosa international crime Central America", "Border Security Review Central America"],
    likelySources: "Transnational Threats-Rosa, Frederick, OA/IDs 4042, 4050, 4067, 4069, 4070",
    firstMove:
      "Search country names inside the crime files, then use the boundary matrix before routing the record away from Volume XXXII.",
    href: catalogSearchUrl('"Rosa" "International Crime" "Central America"'),
  },
  {
    name: "Steven Simon",
    role: "Transnational Threats",
    lane: "Panama transnational-security file",
    searchTerms: ["Simon Panama", "Transnational Threats Panama"],
    likelySources: "Transnational Threats-Simon, Steven, OA/ID 2248",
    firstMove:
      "Pair Panama threat files with Canal, defense, PRD, PC/DC, and State records before deciding whether the evidence is security context or policy substance.",
    href: catalogSearchUrl('"Simon" "Panama" "Transnational Threats"'),
  },
  {
    name: "James Gibney",
    role: "Strategic Planning",
    lane: "Costa Rica and regional strategic-planning context",
    searchTerms: ["Gibney Costa Rica", "Strategic Planning Costa Rica"],
    likelySources: "Strategic Planning-Gibney, James, OA/ID 773",
    firstMove:
      "Use as a follow-up pull after Costa Rica summit and trip-book folders identify whether strategic planning produced implementation records.",
    href: catalogSearchUrl('"Gibney" "Costa Rica"'),
  },
  {
    name: "Arnoldo Aleman",
    role: "President of Nicaragua",
    lane: "Hurricane Mitch calls, Nicaragua visit, and March 1999 meetings",
    searchTerms: ["Arnoldo Aleman Clinton", "Aleman Hurricane Mitch", "Nicaragua March 8 1999"],
    likelySources: "Daily Diary CF 1985-CF 1986; trip books OA/IDs 3622, 3638; Public Papers",
    firstMove:
      "Use the November 7, 1998 call and March 8, 1999 trip events to request telcon, memcon, briefing, and relief-policy matches.",
    href: catalogSearchUrl('"Arnoldo Aleman" Clinton'),
  },
  {
    name: "Carlos Roberto Flores",
    role: "President of Honduras",
    lane: "Hurricane Mitch calls, Soto Cano, Tegucigalpa reconstruction, and relief diplomacy",
    searchTerms: ["Carlos Roberto Flores Clinton", "Flores Hurricane Mitch", "Soto Cano March 9 1999"],
    likelySources: "Daily Diary CF 1985; trip books OA/IDs 3622, 3638; Public Papers; MHA files",
    firstMove:
      "Pair call evidence with Soto Cano, military-support, migration, USAID, and reconstruction-policy records.",
    href: catalogSearchUrl('"Carlos Roberto Flores" Clinton'),
  },
  {
    name: "Ernesto Perez Balladares",
    role: "President of Panama",
    lane: "1994 presidential call, Canal transfer, and Panama decision spine",
    searchTerms: ["Perez Balladares Clinton", "Panama Canal transfer Clinton"],
    likelySources: "Daily Diary CF 1983; Records Management PC/DC/PRD files; Defense Policy Panama files",
    firstMove:
      "Use the October 10, 1994 call as the dated anchor, then pull Panama PC/DC/PRD folders and defense-policy files.",
    href: catalogSearchUrl('"Perez Balladares" Clinton'),
  },
  {
    name: "Ramiro De Leon Carpio",
    role: "President of Guatemala",
    lane: "1993 Central American Presidents breakfast and Guatemala regional representation",
    searchTerms: ["Ramiro De Leon Carpio Clinton", "Central American Presidents breakfast 1993"],
    likelySources: "Daily Diary CF 1982; Soderberg regional leaders files; Guatemala country files",
    firstMove:
      "Use the 1993 breakfast to trace leader-level issues into Guatemala human-rights and peace-process files.",
    href: catalogSearchUrl('"Ramiro De Leon Carpio" Clinton'),
  },
  {
    name: "Armando Calderon Sol",
    role: "President of El Salvador",
    lane: "1999 El Salvador arrival, post-war consolidation, and accountability context",
    searchTerms: ["Armando Calderon Sol Clinton", "El Salvador arrival March 8 1999"],
    likelySources: "Daily Diary CF 1986; Soderberg OA/ID 1408; El Salvador accountability and MHA files",
    firstMove:
      "Pair trip-event evidence with post-war consolidation, migration, churchwomen, Zona Rosa, and democracy files.",
    href: catalogSearchUrl('"Armando Calderon Sol" Clinton'),
  },
  {
    name: "Tipper Gore",
    role: "Public disaster-response interlocutor",
    lane: "Hurricane Mitch damage call and relief public chronology",
    searchTerms: ["Tipper Gore Hurricane Mitch", "telephone conversation hurricane damage Central America"],
    likelySources: "Public Papers; press files; MHA Hurricane Mitch files",
    firstMove:
      "Use as a public anchor only; match the call to relief-policy, USAID, State, migration, and White House follow-up records.",
    href: catalogSearchUrl('"Tipper Gore" "Hurricane Mitch"'),
  },
];

const chronologyOverview = [
  {
    value: "59",
    label: "catalog hits",
    detail: 'NARA search for "2010-0083-F"',
  },
  {
    value: "30",
    label: "matching file units",
    detail: "Filtered to LPWJC 2010-0083-F",
  },
  {
    value: "27",
    label: "candidate references",
    detail: "Daily Diary, Public Papers, and gap-fill anchors",
  },
  {
    value: "1993-2000",
    label: "date span",
    detail: "Chronology references surfaced so far",
  },
];

const gapControls = [
  {
    title: "Chronology Span",
    status: "Closed for first pass",
    gap: "The public chronology skipped 1995, 1996, and 2000.",
    fix:
      "Added 1995 Summit and narcotics letters, 1996 Caribbean Basin and narcotics letters, and 2000 trade, CBI, and drug-certification candidates.",
    next:
      "Match each public anchor to NSC, State, Treasury, USAID, and Federal Register implementation records before selection.",
  },
  {
    title: "Panama Terminal-Year Evidence",
    status: "Closed for first pass",
    gap: "Panama Canal transfer appeared only as a queue item, despite being a major terminal-year boundary issue.",
    fix:
      "Promoted Clinton's December 14, 1999 Panama Canal transfer statement into the dated chronology.",
    next:
      "Connect the statement to PC/DC/PRD, Defense Policy, State, treaty-obligation, and Canal Commission records.",
  },
  {
    title: "Belize Visibility",
    status: "Partly closed",
    gap: "Belize had a country lane but little document-level evidence beyond regional summit attendance.",
    fix:
      "Added narcotics-list letters and trade/CBI controls where Belize appears as a policy object rather than only an attendee.",
    next:
      "Decide whether Belize warrants standalone treatment or should remain inside regional, narcotics, migration, and trade chapters.",
  },
  {
    title: "Public-Law and Implementation Sources",
    status: "Closed for routing",
    gap: "Public Papers were present, but legal and implementation sources were not explicit enough for follow-through.",
    fix:
      "Added Federal Register and USAID source families, plus queue tasks for CBI, drug certification, TPS/migration, and Hurricane Mitch implementation.",
    next:
      "Record FR citations, statutory hooks, project files, and no-hit searches in the provenance ledger.",
  },
  {
    title: "Public vs. Private Evidence",
    status: "Open risk",
    gap: "The page still leans heavily on public statements for dated anchors.",
    fix:
      "Every new public item is marked as a candidate anchor and paired with explicit private-record follow-up.",
    next:
      "Do not treat public rhetoric as final selection evidence until matched to decision records, memoranda, cables, or meeting notes.",
  },
];

const boundaryMatrix = [
  {
    volume: "Volume XXXII",
    officialTitle: "Central America",
    status: "Being Researched",
    riskLane: "Default keep lane",
    keepInXxxiiWhen:
      "The policy object is Guatemala, Belize, Honduras, El Salvador, Nicaragua, Costa Rica, Panama, or a regional Central America issue.",
    routeOrConsultWhen:
      "The record uses Central America only as background for a broader hemispheric, global, public-diplomacy, domestic, or agency implementation issue.",
    firstCheck:
      "Can the candidate be tied to a decision, diplomatic exchange, meeting, cable, memorandum, trip book, or implementation record about Central America itself?",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v32",
  },
  {
    volume: "Volume XIV",
    officialTitle: "Public Diplomacy",
    status: "Planned",
    riskLane: "Speeches, press, and message strategy",
    keepInXxxiiWhen:
      "The public statement fixes chronology and points directly to a private Central America policy record.",
    routeOrConsultWhen:
      "The file is mainly speech drafting, press strategy, public opinion, or messaging without a private Central America decision record.",
    firstCheck:
      "Look for a paired NSC, State, trip-book, meeting, or implementation file before treating the statement as selection evidence.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v14",
  },
  {
    volume: "Volume XXX",
    officialTitle: "North America",
    status: "Planned",
    riskLane: "Mexico, Canada, and North American frame",
    keepInXxxiiWhen:
      "Panama, migration, trade, or security records are primarily about Central American actors or regional Central America policy.",
    routeOrConsultWhen:
      "The main policy frame is Mexico, Canada, NAFTA, border management, or North American diplomacy.",
    firstCheck:
      "Tag shared migration, trade, and counternarcotics records by the country or regional object of the decision line.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v30",
  },
  {
    volume: "Volume XXXI",
    officialTitle: "Cuba; Haiti; Caribbean",
    status: "Planned",
    riskLane: "Caribbean Basin and island policy",
    keepInXxxiiWhen:
      "Caribbean Basin, CBI, migration, narcotics, or disaster records have country-specific Central America policy content.",
    routeOrConsultWhen:
      "The file is mostly Cuba, Haiti, Caribbean island diplomacy, CARICOM, or Caribbean Basin policy without Central America specificity.",
    firstCheck:
      "Separate CBI and regional language from country-specific Central America action, eligibility, aid, or diplomatic records.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v31",
  },
  {
    volume: "Volume XXXIII",
    officialTitle: "South America; Latin America Region, 1993-1996",
    status: "Planned",
    riskLane: "Hemispheric or Latin America regional frame, 1993-1996",
    keepInXxxiiWhen:
      "Summit, narcotics, rights, trade, or democracy records include an actionable Central America decision or country lane.",
    routeOrConsultWhen:
      "The record is a broad Latin America regional paper for 1993-1996 with no Central America-specific action.",
    firstCheck:
      "For 1993-1996 records, log whether the action officer, addressee, and decision paragraph point to Central America or to the wider region.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v33",
  },
  {
    volume: "Volume XXXIV",
    officialTitle: "South America; Latin America Region, 1997-2000",
    status: "Planned",
    riskLane: "Hemispheric or Latin America regional frame, 1997-2000",
    keepInXxxiiWhen:
      "San Jose, Mitch, migration, drug certification, or trade records contain Central America-specific presidential or interagency action.",
    routeOrConsultWhen:
      "The record is a 1997-2000 hemispheric summit, democracy, trade, or regional-strategy file without Central America-specific decisions.",
    firstCheck:
      "Use the date span first, then test whether the record changes Central America policy or only describes regional context.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v34",
  },
  {
    volume: "Volume IV",
    officialTitle: "Foreign Economic Policy, 1993-1996",
    status: "Being Researched",
    riskLane: "Trade, investment, and economic policy, 1993-1996",
    keepInXxxiiWhen:
      "CBI, reconstruction, development, or trade records show diplomacy with Central American governments or country-specific implementation.",
    routeOrConsultWhen:
      "The record is principally macroeconomic, trade-law, Treasury, USTR, or global economic policy without Central America diplomatic substance.",
    firstCheck:
      "Record statutory hooks, FR citations, and whether the file has a Central America country or regional policy action.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v04",
  },
  {
    volume: "Volume V",
    officialTitle: "Foreign Economic Policy, 1997-2000",
    status: "Planned",
    riskLane: "Trade, recovery, and development policy, 1997-2000",
    keepInXxxiiWhen:
      "Mitch reconstruction, CBI, trade-beneficiary, or development records are tied to Central America diplomacy or implementation.",
    routeOrConsultWhen:
      "The record is a general trade, finance, or economic-policy file with only incidental Central America references.",
    firstCheck:
      "Pair public trade statements with USTR, Treasury, State, USAID, or Federal Register evidence before deciding the destination volume.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v05",
  },
  {
    volume: "Volume IX",
    officialTitle: "Counterterrorism Policy",
    status: "Planned",
    riskLane: "Terrorism, international crime, and security labels",
    keepInXxxiiWhen:
      "A terrorism, arms, crime, or security record changes U.S. policy toward a Central American country or regional institution.",
    routeOrConsultWhen:
      "The file is mainly counterterrorism doctrine, threat architecture, or global law-enforcement policy.",
    firstCheck:
      "Do not decide from the folder title alone; inspect whether the decision line is country diplomacy or global counterterrorism policy.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v09",
  },
  {
    volume: "Volume X",
    officialTitle: "Global Issues: Transnational Security; United Nations; Multilateral Peacekeeping",
    status: "Planned",
    riskLane: "Narcotics, crime, UN, and peacekeeping",
    keepInXxxiiWhen:
      "Narcotics, border security, peacekeeping, or crime files have country-specific Central America decisions, certification, or diplomatic exchanges.",
    routeOrConsultWhen:
      "The file is about global transnational-security policy, UN mechanics, multilateral peacekeeping doctrine, or worldwide narcotics architecture.",
    firstCheck:
      "Match INCSR, certification, embassy, and NSC country records before routing a transnational-threat file away from Central America.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v10",
  },
  {
    volume: "Volume XII",
    officialTitle: "Global Issues: Rights and Governance",
    status: "Planned",
    riskLane: "Human rights, democracy, accountability",
    keepInXxxiiWhen:
      "Human-rights, declassification, democracy, or accountability files are anchored in Guatemala, El Salvador, or another Central American case.",
    routeOrConsultWhen:
      "The record is a global rights, governance, democracy-promotion, or institutional policy document without Central America case specificity.",
    firstCheck:
      "For Guatemala and El Salvador, preserve withdrawal sheets and intelligence equities even when final selection is uncertain.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v12",
  },
  {
    volume: "Volume VI",
    officialTitle: "National Security Policy",
    status: "Planned",
    riskLane: "PRDs, interagency process, and defense posture",
    keepInXxxiiWhen:
      "A PRD, PC/DC meeting, or defense-posture file contains a Central America country decision, Panama Canal action, or regional implementation line.",
    routeOrConsultWhen:
      "The record is about national-security process, doctrine, or global defense posture with Central America only as an example.",
    firstCheck:
      "Use meeting minutes, action items, distribution lists, and follow-up cables to decide whether the record is process architecture or regional policy.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v06",
  },
];

const dailyDiaryRoot =
  "Source: Clinton Library, Clinton Presidential Records, Presidential Daily Diary, Ellen McCathran";

function dailyDiarySourceNote(oaId, folderTitle, entryLabel, naid) {
  return `${dailyDiaryRoot}, OA/ID ${oaId}, ${folderTitle}, ${entryLabel}. NARA Catalog NAID ${naid}; FOIA 2010-0083-F; entry-level redactions and release markings verified from the digitized Daily Diary file unit.`;
}

const publicPapersRoot =
  "Source: Public Papers of the Presidents of the United States: William J. Clinton";

function publicPapersSourceNote(year, book, pageRange, title, eventDate, verificationNote = "") {
  const note = verificationNote ? ` ${verificationNote}` : "";
  return `${publicPapersRoot} (${year}, ${book}), ${pageRange}, "${title}," ${eventDate}. GovInfo details page; public chronology lead to be matched against relevant White House, NSC, State, agency, and implementation records before selection.${note}`;
}

const chronologyItems = [
  {
    title: "Moakley dinner for University of Central America chair",
    date: "April 27, 1993",
    type: "Event",
    countries: ["El Salvador"],
    summary:
      "The released diary records the President attending a dinner honoring Representative J. Joseph Moakley, a fundraiser to endow the John Joseph Moakley Chair at the University of Central America in San Salvador.",
    sourceNote: dailyDiarySourceNote(
      "CF 1982",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 3/2/93; 3/8/93; 3/12/93; 4/6/93; 4/14/93; 4/27/93; 4/30/93]",
      "diary entry for April 27, 1993",
      "17367492",
    ),
    href: "https://catalog.archives.gov/id/17367492",
  },
  {
    title: "Central American Presidents breakfast",
    date: "November 30, 1993",
    type: "Meeting",
    countries: ["Regional", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Belize"],
    summary:
      "The diary records a 9:37 a.m.-12:04 p.m. breakfast meeting with Central American Presidents, an 11:22 a.m. news conference with Guatemalan President Ramiro De Leon Carpio speaking for the group, and an 11:55 a.m. farewell. The appendix lists leaders from El Salvador, Panama, Honduras, Costa Rica, Nicaragua, Guatemala, and Belize.",
    sourceNote: dailyDiarySourceNote(
      "CF 1982",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 10/6/93; 10/11/93; 10/18/93; 10/26/93; 11/6/93; 11/17/93; 11/18/93; 11/30/93]",
      "diary entries and appendix for November 30, 1993",
      "17368174",
    ),
    href: "https://catalog.archives.gov/id/17368174",
  },
  {
    title: "Panama presidential call",
    date: "October 10, 1994",
    type: "Call",
    countries: ["Panama"],
    summary:
      "At 9:26-9:30 p.m., the President talked on a conference call with Ernesto Perez Balladares, President of Panama, with White House Situation Room personnel and a Department of State interpreter listed on the call.",
    sourceNote: dailyDiarySourceNote(
      "CF 1983",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 4/5/94; 4/13/94; 4/26/94; 4/29/94; 5/1/94; 5/19/94; 5/23/94; 5/27/94; 6/1/94; 6/9/94; 6/19/94; 7/5/94; 7/15/94; 7/17/94; 8/1/94; 8/6/94; 8/19/94; 9/7/94; 9/16/94; 9/20/94; 9/24/94; 10/5/94; 10/10/94; 10/17/94; 10/25/94; 11/5/94; 11/16/94; 11/17/94; 11/29/94]",
      "diary entry for October 10, 1994",
      "17368177",
    ),
    href: "https://catalog.archives.gov/id/17368177",
  },
  {
    title: "Major narcotics producing and transit countries letter",
    date: "February 2, 1995",
    type: "Letter",
    countries: ["Regional", "Guatemala", "Panama", "Belize"],
    summary:
      "Clinton's letter to congressional leaders listed Guatemala and Panama as major illicit drug producing or transit countries and removed Belize from the list while warning that Belize should be watched as a potential transit point.",
    sourceNote: publicPapersSourceNote(
      "1995",
      "Book I",
      "pages 156-157",
      "Letter to Congressional Leaders on Major Narcotics Producing and Transit Countries",
      "February 2, 1995",
      "GovInfo notes that identical letters were sent to congressional foreign relations and appropriations leaders and that a related February 28 memorandum appears in Appendix D.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1995-book1/PPP-1995-book1-doc-pg156",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "First anniversary of the Summit of the Americas",
    date: "December 12, 1995",
    type: "Public statement",
    countries: ["Regional"],
    summary:
      "Clinton's anniversary statement is a public anchor for Summit of the Americas follow-through on democracy, environment, trade liberalization, money laundering, narcotics trafficking, and hemispheric prosperity.",
    sourceNote: publicPapersSourceNote(
      "1995",
      "Book II",
      "page 1885",
      "Statement on the First Anniversary of the Summit of the Americas",
      "December 12, 1995",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1995-book2/PPP-1995-book2-doc-pg1885",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Caribbean Basin economic recovery report transmittal",
    date: "October 1, 1996",
    type: "Message",
    countries: ["Regional"],
    summary:
      "Clinton transmitted the second report on the operation of the Caribbean Basin Economic Recovery Act. Use this as a public trade-policy anchor for Central America and Caribbean Basin follow-up, then verify country-specific treatment in the underlying report and Federal Register implementation records.",
    sourceNote: publicPapersSourceNote(
      "1996",
      "Book II",
      "page 1737",
      "Message to the Congress Transmitting a Report on Caribbean Basin Economic Recovery",
      "October 1, 1996",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1996-book2/PPP-1996-book2-doc-pg1737",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Major illicit drug-producing and drug-transit countries letter",
    date: "December 2, 1996",
    type: "Letter",
    countries: ["Regional", "Belize", "Guatemala", "Panama"],
    summary:
      "Clinton's 1996 narcotics letter listed Belize, Guatemala, and Panama among major illicit drug-producing or drug-transit countries, giving the page a second-year public anchor for narcotics policy beyond the 1995 list.",
    sourceNote: publicPapersSourceNote(
      "1996",
      "Book II",
      "pages 2162-2163",
      "Letter to Congressional Leaders on Major Illicit Drug-Producing and Drug-Transit Countries",
      "December 2, 1996",
      "GovInfo notes that the letter was released by the Office of the Press Secretary on December 3.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1996-book2/PPP-1996-book2-doc-pg2162",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Central American Summit welcoming ceremony",
    date: "May 8, 1997",
    type: "Public statement",
    countries: ["Regional", "Costa Rica", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Belize"],
    summary:
      "Clinton's San Jose remarks framed Central America as moving from civil war toward peace, democracy, free trade, antidrug cooperation, education, and environmental protection. The GovInfo record identifies the summit leaders present, including Costa Rica, Belize, Guatemala, Honduras, Nicaragua, and El Salvador.",
    sourceNote: publicPapersSourceNote(
      "1997",
      "Book I",
      "pages 565-566",
      "Remarks at the Central American Summit Welcoming Ceremony in San Jose",
      "May 8, 1997",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1997-book1/PPP-1997-book1-doc-pg565-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "News conference with Central American leaders",
    date: "May 8, 1997",
    type: "News conference",
    countries: ["Regional", "Costa Rica", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Belize"],
    summary:
      "The San Jose news conference is a high-density public anchor for Central America-U.S. relations, trade, migration, labor rights, law enforcement, environment, education, and the claim that regional leaders were seeking a deeper partnership with Washington.",
    sourceNote: publicPapersSourceNote(
      "1997",
      "Book I",
      "pages 566-574",
      "The President's News Conference With Central American Leaders in San Jose",
      "May 8, 1997",
      "GovInfo notes that the news conference began at 1:20 p.m. at the National Theater and included translated remarks by leaders from Costa Rica, El Salvador, and Guatemala.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1997-book1/PPP-1997-book1-doc-pg566",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Declaration of San Jose",
    date: "May 8, 1997",
    type: "Joint statement",
    countries: ["Regional", "Costa Rica", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Belize"],
    summary:
      "The San Jose declaration is a public joint-statement candidate for regional democracy, crime, narcotics, corruption, immigration, free trade, worker rights, Open Skies, and environment follow-up. GovInfo notes that an original was not available for verification.",
    sourceNote: publicPapersSourceNote(
      "1997",
      "Book I",
      "pages 574-577",
      "Declaration of San Jose",
      "May 8, 1997",
      "GovInfo notes that an original was not available for verification of the joint statement.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1997-book1/PPP-1997-book1-doc-pg574",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Joint statement"],
  },
  {
    title: "Nicaragua and Honduras calls after Mitch",
    date: "November 7, 1998",
    type: "Call",
    countries: ["Nicaragua", "Honduras"],
    summary:
      "The diary records attempted calls at 6:18 p.m. to Presidents Arnoldo Aleman of Nicaragua and Carlos Roberto Flores of Honduras, then completed conference calls with Aleman at 7:04-7:21 p.m. and Flores at 7:36-7:42 p.m. The diary does not state the subject; the date makes this a Hurricane Mitch chronology lead to verify against relief-policy files.",
    sourceNote: dailyDiarySourceNote(
      "CF 1985",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 10/7/98; 10/12/98; 10/19/98; 10/27/98; 11/7/98; 11/18/98; 11/19/98; 12/8/98; 12/9/98; 12/24/98]",
      "diary entries for November 7, 1998",
      "17368190",
    ),
    href: "https://catalog.archives.gov/id/17368190",
  },
  {
    title: "Telephone remarks on Hurricane Mitch damage",
    date: "November 10, 1998",
    type: "Public statement",
    countries: ["Regional", "Honduras", "Nicaragua"],
    summary:
      "The Public Papers record a White House telephone exchange with Tipper Gore on hurricane damage in Central America three days after the diary calls to Nicaragua and Honduras. The notes identify President Carlos Flores of Honduras and Mary Flores as referenced by Mrs. Gore.",
    sourceNote: publicPapersSourceNote(
      "1998",
      "Book II",
      "pages 2012-2013",
      "Remarks in a Telephone Conversation With Tipper Gore on Hurricane Damage in Central America",
      "November 10, 1998",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1998-book2/PPP-1998-book2-doc-pg2012",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Nicaragua trip and President Aleman meetings",
    date: "March 8, 1999",
    type: "Meeting",
    countries: ["Nicaragua"],
    summary:
      "The diary covers the arrival in Managua, the Posoltega visit, a 3:17-3:40 p.m. meeting with President Aleman, and a 3:31-4:21 p.m. meeting with Aleman and Hurricane Mitch survivors.",
    sourceNote: dailyDiarySourceNote(
      "CF 1986",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 1/11/99; 1/24/99; 1/28/99; 2/6/99; 2/10/99; 2/16/99; 2/25/99; 3/2/99; 3/8/99; 3/12/99]",
      "diary entries for March 8, 1999",
      "17368192",
    ),
    href: "https://catalog.archives.gov/id/17368192",
  },
  {
    title: "Posoltega community remarks",
    date: "March 8, 1999",
    type: "Public statement",
    countries: ["Nicaragua"],
    summary:
      "The Public Papers record Clinton's remarks at Jose Dolores Toruno Lopez High School field in Posoltega during the Hurricane Mitch recovery trip. The notes identify President Arnoldo Aleman, local officials, Bishop Bosco Vivas, and Maria Andres Chamorro.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 323-324",
      "Remarks to the Community in Posoltega, Nicaragua",
      "March 8, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg323-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Las Casitas mudslide survivor roundtable",
    date: "March 8, 1999",
    type: "Public statement",
    countries: ["Nicaragua"],
    summary:
      "The Public Papers record a Posoltega roundtable with Hurricane Mitch survivors, beginning at 3:45 p.m. in the Cotton Research Center auditorium. GovInfo notes that a tape was not available for content verification.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 324-327",
      "Remarks in a Roundtable Discussion With Las Casitas Volcano Mudslide Survivors in Posoltega",
      "March 8, 1999",
      "GovInfo notes that a tape was not available for verification of the content.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg324",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "El Salvador arrival and Calderon Sol ceremony",
    date: "March 8, 1999",
    type: "Trip event",
    countries: ["El Salvador"],
    summary:
      "The diary records the flight from Managua to San Salvador, the greeting by President Armando Calderon Sol, and a 7:03-7:21 p.m. arrival ceremony before the President overnighted in San Salvador.",
    sourceNote: dailyDiarySourceNote(
      "CF 1986",
      "[Ellen McCathran - Presidential Daily Diary Hardcopy 1/11/99; 1/24/99; 1/28/99; 2/6/99; 2/10/99; 2/16/99; 2/25/99; 3/2/99; 3/8/99; 3/12/99]",
      "diary entries for March 8, 1999",
      "17368192",
    ),
    href: "https://catalog.archives.gov/id/17368192",
  },
  {
    title: "Soto Cano Air Base remarks",
    date: "March 9, 1999",
    type: "Public statement",
    countries: ["Honduras"],
    summary:
      "The Public Papers record Clinton's remarks in Hangar 1 at Soto Cano Air Base, with President Carlos Roberto Flores, U.S. Southern Command, and Joint Task Force Bravo figures named in the notes. This is a candidate anchor for the military relief and basing lane.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 328-329",
      "Remarks to the Community at Soto Cano Air Base, Honduras",
      "March 9, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg328-3",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Hurricane Mitch reconstruction roundtable",
    date: "March 9, 1999",
    type: "Public statement",
    countries: ["Honduras"],
    summary:
      "The Public Papers record a 2:52 p.m. roundtable in Tegucigalpa on Hurricane Mitch reconstruction efforts. GovInfo flags that a portion could not be verified because the tape was incomplete.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 330-334",
      "Remarks in a Roundtable Discussion on Hurricane Mitch Reconstruction Efforts in Tegucigalpa, Honduras",
      "March 9, 1999",
      "GovInfo notes that a portion of the remarks could not be verified because the tape was incomplete.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg330",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "El Salvador Legislative Assembly address",
    date: "March 10, 1999",
    type: "Public statement",
    countries: ["El Salvador"],
    summary:
      "The Public Papers record Clinton's San Salvador address to the Legislative Assembly, connecting Hurricane Mitch recovery, postwar democratic institutions, youth, justice, and reconciliation. GovInfo notes that part of the remarks could not be verified because the tape was incomplete.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 335-339",
      "Remarks to the Legislative Assembly of El Salvador in San Salvador",
      "March 10, 1999",
      "GovInfo notes that a portion of the remarks could not be verified because the tape was incomplete.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg335-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Guatemala City arrival remarks",
    date: "March 10, 1999",
    type: "Public statement",
    countries: ["Guatemala"],
    summary:
      "The Public Papers record the Guatemala City arrival remarks at the National Palace of Culture, with Clinton publicly linking U.S. support to truth about past abuses, peace-accord implementation, human rights, and the Central America summit in Antigua.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "page 339",
      "Remarks on Arrival in Guatemala City, Guatemala",
      "March 10, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg339",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Guatemala peace-efforts roundtable",
    date: "March 10, 1999",
    type: "Public statement",
    countries: ["Guatemala"],
    summary:
      "The Public Papers record a Guatemala City roundtable on peace efforts. This is a candidate public anchor for matching against NSC, State, declassification, human-rights, and peace-accord implementation files.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 340-344",
      "Remarks in a Roundtable Discussion on Peace Efforts in Guatemala City",
      "March 10, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg340",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Central America Summit opening remarks",
    date: "March 11, 1999",
    type: "Public statement",
    countries: ["Regional", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Belize"],
    summary:
      "The Public Papers record Clinton's Antigua summit opening at Casa Santo Domingo, with leaders from Guatemala, Nicaragua, Honduras, El Salvador, Costa Rica, the Dominican Republic, and Belize identified in the notes.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 344-345",
      "Opening Remarks at the Central America Summit in Antigua, Guatemala",
      "March 11, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg344-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo"],
  },
  {
    title: "Declaration of Antigua",
    date: "March 11, 1999",
    type: "Joint statement",
    countries: ["Regional", "Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Belize"],
    summary:
      "The Declaration of Antigua is a public joint-statement candidate for Mitch reconstruction, democracy, transparency, trade, migration, social development, anticorruption, counternarcotics, and regional follow-up after the 1999 summit.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book I",
      "pages 350-354",
      "Declaration of Antigua",
      "March 11, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/PPP-1999-book1-doc-pg350",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Joint statement"],
  },
  {
    title: "Panama Canal transfer statement",
    date: "December 14, 1999",
    type: "Public statement",
    countries: ["Panama"],
    summary:
      "Clinton's statement on transferring the Panama Canal to the Republic of Panama closes a major terminal-year gap in the chronology and should be matched against treaty-obligation, Canal Commission, Defense, State, and NSC decision records.",
    sourceNote: publicPapersSourceNote(
      "1999",
      "Book II",
      "pages 2299-2300",
      "Statement on the Transfer of the Panama Canal to the Republic of Panama",
      "December 14, 1999",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-1999-book2/PPP-1999-book2-doc-pg2299",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Trade and Development Act signing remarks",
    date: "May 18, 2000",
    type: "Public statement",
    countries: ["Regional"],
    summary:
      "Clinton's remarks on signing the Trade and Development Act of 2000 provide a public anchor for Caribbean Basin trade parity and Central America-facing trade implementation. Match this to CBI beneficiary designations, congressional files, USTR, State, and Federal Register records.",
    sourceNote: publicPapersSourceNote(
      "2000",
      "Book I",
      "pages 963-965",
      "Remarks on Signing the Trade and Development Act of 2000",
      "May 18, 2000",
      "GovInfo notes that H.R. 434 became Public Law 106-200.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-2000-book1/PPP-2000-book1-doc-pg963",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "CBI and AGOA beneficiary countries statement",
    date: "October 2, 2000",
    type: "Public statement",
    countries: ["Regional"],
    summary:
      "The Caribbean Basin Initiative and African Growth and Opportunity Act beneficiary-country statement gives the terminal-year trade lane a public implementation anchor. Use it to find the underlying proclamations, eligibility determinations, and country-by-country files.",
    sourceNote: publicPapersSourceNote(
      "2000",
      "Book II",
      "pages 2000-2001",
      "Statement on Caribbean Basin Initiative and African Growth and Opportunity Act Beneficiary Countries",
      "October 2, 2000",
      "GovInfo notes that the proclamations are listed in Appendix D.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-2000-book2/PPP-2000-book2-doc-pg2000-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
  {
    title: "Major drug producing and transit countries certification letter",
    date: "November 1, 2000",
    type: "Letter",
    countries: ["Regional", "Belize", "Guatemala", "Panama"],
    summary:
      "Clinton's November 2000 certification letter provides an end-of-administration narcotics-policy anchor for Belize, Guatemala, and Panama. It should be reconciled with annual INCSR records, State cables, law-enforcement files, and congressional notification records.",
    sourceNote: publicPapersSourceNote(
      "2000",
      "Book III",
      "pages 2410-2413",
      "Letter to Congressional Leaders on Certification of Major Illicit Drug Producing and Transit Countries",
      "November 1, 2000",
      "GovInfo notes that identical letters were sent to Senate and House foreign relations and appropriations leaders.",
    ),
    href: "https://www.govinfo.gov/app/details/PPP-2000-book3/PPP-2000-book3-doc-pg2410-2",
    linkLabel: "Open GovInfo record",
    badges: ["Public Papers", "GovInfo", "Gap fix"],
  },
];

const queueItems = [
  {
    title: "Snapshot the official volume state",
    country: "Regional",
    source: "Official FRUS Series",
    priority: "Critical",
    query: "frus1993-00v32 Central America status",
    output:
      "Record the title, URL, status, and date checked. Keep this as the standing citation for the dashboard.",
    href: "https://history.state.gov/historicaldocuments/frus1993-00v32",
  },
  {
    title: "Audit Presidential Daily Diary calls and meetings",
    country: "Regional",
    source: "Presidential Daily Diary",
    priority: "High",
    query:
      '"2010-0083-F" AND ("Central American" OR Panama OR Nicaragua OR Honduras OR "El Salvador" OR Guatemala OR Belize)',
    output:
      "Use the chronology section as the first pass, then match each call, meeting, or trip event to NSC, State, Public Papers, and briefing-book records before treating it as selection evidence.",
    href: "https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*",
  },
  {
    title: "Build the Clinton Library country seed search",
    country: "Regional",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Guatemala OR "El Salvador" OR Honduras OR Nicaragua OR "Costa Rica" OR Panama OR Belize)',
    output:
      "Export result counts by collection, item type, date span, and whether a digitized object is available.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Guatemala%20OR%20%22El%20Salvador%22%20OR%20Honduras%20OR%20Nicaragua%20OR%20%22Costa%20Rica%22%20OR%20Panama%20OR%20Belize%29",
  },
  {
    title: "Harvest Guatemala human-rights and peace leads",
    country: "Guatemala",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Guatemala AND (Harbury OR Bamaca OR "peace accords" OR human rights))',
    output:
      "Separate peace-process diplomacy from human-rights accountability and intelligence-related source leads.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Guatemala%20AND%20%28Harbury%20OR%20Bamaca%20OR%20%22peace%20accords%22%20OR%20human%20rights%29%29",
  },
  {
    title: "Review El Salvador post-war implementation",
    country: "El Salvador",
    source: "Clinton Presidential Records",
    priority: "Medium",
    query: '("El Salvador" AND (FMLN OR "peace accords" OR police OR reconstruction))',
    output:
      "Flag records on implementation problems, security reform, aid, and U.S. diplomatic pressure.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28%22El%20Salvador%22%20AND%20%28FMLN%20OR%20%22peace%20accords%22%20OR%20police%20OR%20reconstruction%29%29",
  },
  {
    title: "Map Hurricane Mitch response files",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query: '("Hurricane Mitch" OR Mitch) AND (Honduras OR Nicaragua OR "Central America")',
    output:
      "Use public statements to set public chronology, then pursue NSC, USAID, State, and relief-policy records.",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Panama Canal transfer and security posture",
    country: "Panama",
    source: "Clinton Presidential Records",
    priority: "High",
    query: '(Panama AND ("Canal" OR "canal transfer" OR counterdrug OR security))',
    output:
      "Distinguish Canal transfer diplomacy from counternarcotics, banking, and residual security-presence issues.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28Panama%20AND%20%28%22Canal%22%20OR%20%22canal%20transfer%22%20OR%20counterdrug%20OR%20security%29%29",
  },
  {
    title: "Nicaragua elections and property claims",
    country: "Nicaragua",
    source: "National Archives Catalog",
    priority: "High",
    query: 'Nicaragua Clinton Aleman Chamorro "property claims"',
    output:
      "Track electoral diplomacy, transition questions, property claims, and aid conditionality by date.",
    href: "https://catalog.archives.gov/search?q=Nicaragua%20Clinton%20Aleman%20Chamorro%20%22property%20claims%22",
  },
  {
    title: "Honduras basing, aid, migration, and disaster relief",
    country: "Honduras",
    source: "National Archives Catalog",
    priority: "High",
    query: 'Honduras Clinton "Soto Cano" migration Mitch',
    output:
      "Split security and basing records from migration and disaster-relief records.",
    href: "https://catalog.archives.gov/search?q=Honduras%20Clinton%20%22Soto%20Cano%22%20migration%20Mitch",
  },
  {
    title: "Costa Rica regional diplomacy pass",
    country: "Costa Rica",
    source: "Clinton Presidential Records",
    priority: "Medium",
    query: '("Costa Rica" AND (Central America OR trade OR environment OR democracy))',
    output:
      "Pull records where Costa Rica is the diplomatic platform rather than merely a named country.",
    href: "https://clinton.presidentiallibraries.us/solr-search?q=%28%22Costa%20Rica%22%20AND%20%28Central%20America%20OR%20trade%20OR%20environment%20OR%20democracy%29%29",
  },
  {
    title: "Belize border and transit scan",
    country: "Belize",
    source: "Department of State FOIA",
    priority: "Medium",
    query: 'Belize Guatemala border narcotics Clinton',
    output:
      "Check whether Belize appears as a country chapter, regional issue, or background-only source family.",
    href: "https://foia.state.gov/searchapp/Search/SubmitSimpleQuery",
  },
  {
    title: "Agency reading-room cross-check",
    country: "Guatemala",
    source: "CIA Reading Room",
    priority: "High",
    query: 'Guatemala Harbury Bamaca Clinton',
    output:
      "Use released intelligence records only as provenance cross-checks against State and NSC documentary leads.",
    href: "https://www.cia.gov/readingroom/search/site/Guatemala%20Harbury%20Bamaca%20Clinton",
  },
  {
    title: "Previous FRUS Central America continuity check",
    country: "Regional",
    source: "Official FRUS Series",
    priority: "Medium",
    query: "Central America FRUS source notes Reagan Bush Clinton",
    output:
      "Extract source-note conventions and recurring institutions from prior Central America volumes.",
    href: "https://history.state.gov/historicaldocuments",
  },
  {
    title: "Audit adjacent Clinton FRUS volume boundaries",
    country: "Regional",
    source: "Clinton FRUS Assist Pages",
    priority: "Critical",
    query:
      "Clinton FRUS Central America adjacent volumes public diplomacy North America Caribbean South America global issues",
    output:
      "Use the Clinton administration FRUS index to tag likely boundary cases: Public Diplomacy; North America; Cuba, Haiti, Caribbean; South America; Global Issues; Counterterrorism; and Rights and Governance.",
    href: "https://history.state.gov/historicaldocuments/clinton",
  },
  {
    title: "Harvest 1997 San Jose summit public-paper cluster",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      'PPP-1997-book1 "Central American Summit" "Declaration of San Jose" "San Jose"',
    output:
      "Capture GovInfo details pages, page ranges, notes, and document titles for the summit ceremony, news conference, joint statement, and environmental remarks before matching them to Blinken speech files and NSC summit folders.",
    href: "https://www.govinfo.gov/app/details/PPP-1997-book1/context",
  },
  {
    title: "Harvest 1999 Central America trip public-paper cluster",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "Critical",
    query:
      'PPP-1999-book1 Posoltega "Soto Cano" Tegucigalpa "Legislative Assembly" Antigua',
    output:
      "Treat the March 8-11, 1999 trip as a document cluster. Pair each public item with Daily Diary entries, trip books, speechwriting drafts, press files, NSC country files, and State reporting.",
    href: "https://www.govinfo.gov/app/details/PPP-1999-book1/context",
  },
  {
    title: "Reconcile Hurricane Mitch public statements with relief-policy files",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      '"Hurricane Mitch" "Central America" Clinton "Public Papers" "Tipper Gore"',
    output:
      "Use the November 1998 telephone remarks and March 1999 trip statements to build a relief-policy timeline, then test it against USAID, FEMA, State, NSC humanitarian affairs, TPS, and appropriations records.",
    href: "https://www.govinfo.gov/app/details/PPP-1998-book2/PPP-1998-book2-doc-pg2012",
  },
  {
    title: "Check Panama Canal transfer against Central America scope",
    country: "Panama",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      '"Statement on the Transfer of the Panama Canal" Clinton "December 14, 1999"',
    output:
      "Decide whether Canal transfer public statements and decision records belong in Central America or an adjacent North America/hemispheric volume. If retained, pair Public Papers pages with PRD, PC/DC, Defense Policy, and treaty-obligation files.",
    href: "https://www.govinfo.gov/content/pkg/PPP-1999-book2/pdf/PPP-1999-book2-doc-pg2299.pdf",
  },
  {
    title: "Separate public diplomacy from policy process",
    country: "Regional",
    source: "Clinton FRUS Assist Pages",
    priority: "High",
    query:
      "Clinton FRUS Volume XIV Public Diplomacy planned Central America public statements",
    output:
      "For every public statement candidate, log whether it is evidence of public framing only, whether it points to a private decision record, or whether it may belong in the planned Public Diplomacy volume.",
    href: "https://history.state.gov/historicaldocuments/clinton",
  },
  {
    title: "Build a source-note ledger for public documents",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      "GovInfo Public Papers Clinton Central America page range notes tape unavailable verification",
    output:
      "Record publication title, year/book, page range, event date, title, notes, URL, and any GovInfo verification limitation such as incomplete tape or missing original.",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Normalize source notes against FRUS citation guidance",
    country: "Regional",
    source: "FRUS Citation Guidance",
    priority: "High",
    query:
      "FRUS citation guidance document numbers canonical URLs page image references source notes",
    output:
      "For each candidate, record whether the eventual FRUS citation should rely on a document number, canonical volume or document URL, page image, archival source note, or public-paper page range.",
    href: "https://history.state.gov/historicaldocuments/citing-frus",
  },
  {
    title: "Close 1995-1996 public-document gap",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      'PPP-1995-book1 pg156 PPP-1995-book2 pg1885 PPP-1996-book2 pg1737 pg2162 Central America',
    output:
      "Verify the four added 1995-1996 public anchors, then record which need underlying NSC, State, Treasury, USTR, or Federal Register follow-up.",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Close 2000 terminal-year public-document gap",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "High",
    query:
      'PPP-2000-book1 pg963 PPP-2000-book2 pg2000 PPP-2000-book3 pg2410 Caribbean Basin narcotics Central America',
    output:
      "Use the 2000 trade, CBI beneficiary, and narcotics certification records to build terminal-year public chronology, then test against agency implementation files.",
    href: "https://www.govinfo.gov/app/collection/PPP",
  },
  {
    title: "Trace CBI and trade implementation",
    country: "Regional",
    source: "Federal Register",
    priority: "High",
    query:
      '"Caribbean Basin" "Trade and Development Act of 2000" Clinton Belize Guatemala Honduras Nicaragua El Salvador',
    output:
      "Pull proclamations, beneficiary-country notices, USTR material, and statutory hooks behind the May and October 2000 Public Papers items.",
    href: "https://www.federalregister.gov/documents/search",
  },
  {
    title: "Build the annual narcotics certification spine",
    country: "Regional",
    source: "Department of State FOIA",
    priority: "High",
    query:
      '"major illicit drug" Guatemala Panama Belize Clinton INCSR certification 1995 1996 2000',
    output:
      "Pair Public Papers certification letters with INCSR country narratives, State cables, law-enforcement files, and congressional notification records.",
    href: "https://foia.state.gov/searchapp/Search/SubmitSimpleQuery",
  },
  {
    title: "Audit Mitch migration and TPS records",
    country: "Regional",
    source: "Federal Register",
    priority: "High",
    query:
      '"Hurricane Mitch" TPS Honduras Nicaragua El Salvador Guatemala Clinton',
    output:
      "Close the migration gap by locating TPS, INS, State, and humanitarian-policy records that connect Mitch relief to migration policy.",
    href: "https://www.federalregister.gov/documents/search",
  },
  {
    title: "Harvest 1997 San Jose fact sheets and briefings",
    country: "Regional",
    source: "GovInfo Public Papers",
    priority: "Medium",
    query:
      '"San Jose Declaration" "Cooperative Law Enforcement in Central America" "Sustainable Development in Central America"',
    output:
      "Use the Public Papers digest to pull White House fact sheets and press briefings that sit between public rhetoric and NSC implementation files.",
    href: "https://www.govinfo.gov/app/details/PPP-1997-book1/context",
  },
];

const methodCards = [
  {
    title: "Keep human selection separate",
    text:
      "The page tracks discovery and evidence readiness. The compiler decides which documents belong in the printed volume.",
  },
  {
    title: "Preserve source notes early",
    text:
      "Every promising lead should capture repository, collection, file unit, date, title, release facts, canonical URL, page extent, and any document-number or image-reference control.",
  },
  {
    title: "Audit by issue and country",
    text:
      "Use country lanes for coverage and issue lanes for cross-border policy such as Mitch, migration, narcotics, and trade.",
  },
  {
    title: "Mark absences explicitly",
    text:
      "No-hit searches matter. Save query strings and result counts so later researchers can tell what has already been checked.",
  },
  {
    title: "Separate public from private",
    text:
      "Public Papers establish chronology and rhetoric; archival records establish policy process, decisions, and diplomatic traffic.",
  },
  {
    title: "Expect cross-volume overlap",
    text:
      "Central America intersects with Cuba, Haiti, Caribbean, North America, South America, narcotics, and global human-rights volumes.",
  },
];

const state = {
  search: "",
  country: "",
  priority: "",
  source: "",
};

const roots = {
  official: document.querySelector("#official-root"),
  countries: document.querySelector("#country-root"),
  coverage: document.querySelector("#coverage-root"),
  sources: document.querySelector("#source-root"),
  libraryOverview: document.querySelector("#library-overview-root"),
  library: document.querySelector("#library-root"),
  authorities: document.querySelector("#authority-root"),
  onsite: document.querySelector("#onsite-root"),
  batches: document.querySelector("#batch-root"),
  chronologyOverview: document.querySelector("#chronology-overview-root"),
  chronology: document.querySelector("#chronology-root"),
  gaps: document.querySelector("#gap-root"),
  boundaries: document.querySelector("#boundary-root"),
  queue: document.querySelector("#queue-root"),
  method: document.querySelector("#method-root"),
  summary: document.querySelector("#queue-summary"),
};

const controls = {
  search: document.querySelector("#queue-search"),
  country: document.querySelector("#country-filter"),
  priority: document.querySelector("#priority-filter"),
  source: document.querySelector("#source-filter"),
  reset: document.querySelector("#reset-filters"),
  export: document.querySelector("#export-queue"),
  exportCoverage: document.querySelector("#export-coverage"),
  exportBoundaries: document.querySelector("#export-boundaries"),
  exportAuthorities: document.querySelector("#export-authorities"),
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const normalize = (value) => String(value).toLowerCase().trim();

const unique = (items) => [...new Set(items)].sort((a, b) => a.localeCompare(b));

function setStat(id, value) {
  const node = document.querySelector(id);
  if (node) node.textContent = value;
}

function pill(value, extraClass = "") {
  const css = normalize(value).replace(/[^a-z0-9]+/g, "-");
  return `<span class="pill ${css} ${extraClass}">${escapeHtml(value)}</span>`;
}

function renderOfficial() {
  roots.official.innerHTML = officialLinks
    .map(
      (item) => `
        <article class="official-card">
          <p class="kicker">${escapeHtml(item.label)}</p>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="meta">
            ${pill(item.status, item.status === "Being Researched" ? "ready" : "")}
          </div>
          <p><a class="inline-link" href="${item.href}" rel="noreferrer">Open source</a></p>
        </article>
      `,
    )
    .join("");
}

function renderCountries() {
  roots.countries.innerHTML = countries
    .map(
      (country) => `
        <article class="country-card">
          <header>
            <div>
              <p class="kicker">${escapeHtml(country.risk)} attention</p>
              <h3>${escapeHtml(country.name)}</h3>
            </div>
            <span class="country-code">${escapeHtml(country.code)}</span>
          </header>
          <p>${escapeHtml(country.focus)}</p>
          <ul>
            ${country.terms.map((term) => `<li>${escapeHtml(term)}</li>`).join("")}
          </ul>
          <div class="meta">${pill(country.risk)}</div>
        </article>
      `,
    )
    .join("");
}

function renderCoverage() {
  if (!roots.coverage) {
    return;
  }

  roots.coverage.innerHTML = coverageAudit
    .map(
      (item) => `
        <article class="coverage-card">
          <div class="coverage-card-header">
            <div>
              <p class="kicker">${escapeHtml(item.status)}</p>
              <h3>${escapeHtml(item.country)}</h3>
            </div>
            ${pill(item.status)}
          </div>
          <dl>
            <div>
              <dt>Public Anchors</dt>
              <dd>${escapeHtml(item.publicAnchors)}</dd>
            </div>
            <div>
              <dt>Private Record Targets</dt>
              <dd>${escapeHtml(item.privateRecordTargets)}</dd>
            </div>
            <div>
              <dt>Weak Spot</dt>
              <dd>${escapeHtml(item.weakSpot)}</dd>
            </div>
            <div>
              <dt>First Pull</dt>
              <dd>${escapeHtml(item.firstPull)}</dd>
            </div>
            <div>
              <dt>Promotion Proof</dt>
              <dd>${escapeHtml(item.promotionProof)}</dd>
            </div>
            <div>
              <dt>Boundary Watch</dt>
              <dd>${escapeHtml(item.boundaryWatch)}</dd>
            </div>
          </dl>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  roots.sources.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <p class="kicker">${escapeHtml(source.type)}</p>
          <h3>${escapeHtml(source.title)}</h3>
          <p>${escapeHtml(source.description)}</p>
          <ul>
            ${source.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
          </ul>
          <p><a class="inline-link" href="${source.href}" rel="noreferrer">Open repository</a></p>
        </article>
      `,
    )
    .join("");
}

function renderLibrary() {
  roots.libraryOverview.innerHTML = libraryOverview
    .map(
      (item) => `
        <article>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `,
    )
    .join("");

  roots.library.innerHTML = libraryClusters
    .map(
      (cluster) => `
        <article class="library-card">
          <div class="library-card-header">
            <div>
              <p class="kicker">${escapeHtml(cluster.priority)} pull</p>
              <h3>${escapeHtml(cluster.title)}</h3>
            </div>
            ${pill(cluster.priority)}
          </div>
          <p>${escapeHtml(cluster.focus)}</p>
          <p class="source-note-label">Draft source-note stems</p>
          <ul class="source-note-list">
            ${cluster.sourceNotes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          </ul>
          <p class="onsite-note"><strong>Onsite move:</strong> ${escapeHtml(cluster.onsite)}</p>
        </article>
      `,
    )
    .join("");

  roots.onsite.innerHTML = `
    <p class="kicker">Time Strategy</p>
    <h3>Use the Library Day as a Decision Machine</h3>
    <ol>
      ${onsitePlan
        .map(
          (item) => `
            <li>
              <strong>${escapeHtml(item.phase)}</strong>
              <span>${escapeHtml(item.action)}</span>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;

  roots.batches.innerHTML = `
    <p class="kicker">Call-Slip Batches</p>
    <h3>Pull in Groups, Not Curiosities</h3>
    <div class="batch-list">
      ${callSlipBatches
        .map(
          (batch) => `
            <article>
              <h4>${escapeHtml(batch.title)}</h4>
              <p>${escapeHtml(batch.ids)}</p>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderAuthorities() {
  if (!roots.authorities) {
    return;
  }

  roots.authorities.innerHTML = authorityIndex
    .map(
      (authority) => `
        <article class="authority-card">
          <div class="authority-card-header">
            <div>
              <p class="kicker">${escapeHtml(authority.role)}</p>
              <h3>${escapeHtml(authority.name)}</h3>
            </div>
            ${pill(authority.lane.includes("Hurricane Mitch") ? "Mitch" : "Search")}
          </div>
          <p>${escapeHtml(authority.lane)}</p>
          <dl>
            <div>
              <dt>Likely Sources</dt>
              <dd>${escapeHtml(authority.likelySources)}</dd>
            </div>
            <div>
              <dt>First Move</dt>
              <dd>${escapeHtml(authority.firstMove)}</dd>
            </div>
          </dl>
          <div class="authority-terms" aria-label="Search terms">
            ${authority.searchTerms.map((term) => `<span>${escapeHtml(term)}</span>`).join("")}
          </div>
          <p><a class="inline-link" href="${authority.href}" rel="noreferrer">Open catalog search</a></p>
        </article>
      `,
    )
    .join("");
}

function renderChronology() {
  roots.chronologyOverview.innerHTML = chronologyOverview
    .map(
      (item) => `
        <article>
          <strong>${escapeHtml(item.value)}</strong>
          <span>${escapeHtml(item.label)}</span>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `,
    )
    .join("");

  roots.chronology.innerHTML = chronologyItems
    .map(
      (finding) => `
        <article class="chronology-card">
          <div class="chronology-date-block">
            <span>${escapeHtml(finding.date)}</span>
            ${pill(finding.type)}
          </div>
          <div class="chronology-card-body">
            <h3>${escapeHtml(finding.title)}</h3>
            <p>${escapeHtml(finding.summary)}</p>
            <div class="meta">
              ${finding.countries.map((country) => pill(country)).join("")}
              ${(finding.badges || ["FOIA release", "Digitized"]).map((badge) => pill(badge)).join("")}
            </div>
            <p class="source-note-label">FRUS-style source note</p>
            <p class="source-note-text">${escapeHtml(finding.sourceNote)}</p>
            <p><a class="inline-link" href="${finding.href}" rel="noreferrer">${escapeHtml(finding.linkLabel || "Open NARA record")}</a></p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGaps() {
  roots.gaps.innerHTML = gapControls
    .map(
      (item) => `
        <article class="gap-card">
          <div class="gap-card-header">
            <h3>${escapeHtml(item.title)}</h3>
            ${pill(item.status)}
          </div>
          <dl>
            <div>
              <dt>Gap</dt>
              <dd>${escapeHtml(item.gap)}</dd>
            </div>
            <div>
              <dt>Fix</dt>
              <dd>${escapeHtml(item.fix)}</dd>
            </div>
            <div>
              <dt>Next Control</dt>
              <dd>${escapeHtml(item.next)}</dd>
            </div>
          </dl>
        </article>
      `,
    )
    .join("");
}

function renderBoundaries() {
  if (!roots.boundaries) {
    return;
  }

  roots.boundaries.innerHTML = boundaryMatrix
    .map(
      (item) => `
        <article class="boundary-card">
          <div class="boundary-card-header">
            <div>
              <p class="kicker">${escapeHtml(item.riskLane)}</p>
              <h3>${escapeHtml(item.volume)}: ${escapeHtml(item.officialTitle)}</h3>
            </div>
            ${pill(item.status, item.status === "Being Researched" ? "ready" : "")}
          </div>
          <dl>
            <div>
              <dt>Keep in XXXII When</dt>
              <dd>${escapeHtml(item.keepInXxxiiWhen)}</dd>
            </div>
            <div>
              <dt>Route or Consult When</dt>
              <dd>${escapeHtml(item.routeOrConsultWhen)}</dd>
            </div>
            <div>
              <dt>First Check</dt>
              <dd>${escapeHtml(item.firstCheck)}</dd>
            </div>
          </dl>
          <p><a class="inline-link" href="${item.href}" rel="noreferrer">Open official volume shell</a></p>
        </article>
      `,
    )
    .join("");
}

function populateFilters() {
  const countryOptions = ["", ...unique(queueItems.map((item) => item.country))];
  const priorityOptions = ["", ...unique(queueItems.map((item) => item.priority))];
  const sourceOptions = ["", ...unique(queueItems.map((item) => item.source))];

  controls.country.innerHTML = countryOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All countries"}</option>`)
    .join("");
  controls.priority.innerHTML = priorityOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All priorities"}</option>`)
    .join("");
  controls.source.innerHTML = sourceOptions
    .map((value) => `<option value="${escapeHtml(value)}">${value || "All sources"}</option>`)
    .join("");
}

function filteredQueue() {
  const needle = normalize(state.search);
  return queueItems.filter((item) => {
    const haystack = normalize(
      [item.title, item.country, item.source, item.priority, item.query, item.output].join(" "),
    );
    return (
      (!needle || haystack.includes(needle)) &&
      (!state.country || item.country === state.country) &&
      (!state.priority || item.priority === state.priority) &&
      (!state.source || item.source === state.source)
    );
  });
}

function renderQueue() {
  const items = filteredQueue();
  roots.summary.textContent = `${items.length} of ${queueItems.length} starter tasks shown.`;
  if (!items.length) {
    roots.queue.innerHTML = `<div class="empty-state">No queue items match the current filters.</div>`;
    return;
  }

  roots.queue.innerHTML = items
    .map(
      (item) => `
        <article class="queue-card">
          <div>
            <div class="meta">
              ${pill(item.country)}
              ${pill(item.priority)}
              ${pill(item.source)}
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.output)}</p>
            <p class="query"><strong>Query:</strong> ${escapeHtml(item.query)}</p>
          </div>
          <div class="queue-actions">
            <a class="link-button" href="${item.href}" rel="noreferrer">Open Search</a>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderMethod() {
  roots.method.innerHTML = methodCards
    .map(
      (card) => `
        <article class="method-card">
          <h3>${escapeHtml(card.title)}</h3>
          <p>${escapeHtml(card.text)}</p>
        </article>
      `,
    )
    .join("");
}

function exportCsv() {
  const rows = filteredQueue();
  const headers = ["title", "country", "priority", "source", "query", "output", "href"];
  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((key) => `"${String(row[key]).replaceAll('"', '""')}"`)
        .join(","),
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "frus-central-america-queue.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function exportCoverageCsv() {
  const headers = [
    "country",
    "status",
    "publicAnchors",
    "privateRecordTargets",
    "weakSpot",
    "firstPull",
    "promotionProof",
    "boundaryWatch",
  ];
  const csv = [
    headers.join(","),
    ...coverageAudit.map((row) =>
      headers
        .map((key) => `"${String(row[key]).replaceAll('"', '""')}"`)
        .join(","),
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "frus-central-america-country-evidence-audit.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function exportBoundaryCsv() {
  const headers = [
    "volume",
    "officialTitle",
    "status",
    "riskLane",
    "keepInXxxiiWhen",
    "routeOrConsultWhen",
    "firstCheck",
    "href",
  ];
  const csv = [
    headers.join(","),
    ...boundaryMatrix.map((row) =>
      headers
        .map((key) => `"${String(row[key]).replaceAll('"', '""')}"`)
        .join(","),
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "frus-central-america-boundary-matrix.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function exportAuthorityCsv() {
  const headers = [
    "name",
    "role",
    "lane",
    "searchTerms",
    "likelySources",
    "firstMove",
    "href",
  ];
  const rows = authorityIndex.map((authority) => ({
    ...authority,
    searchTerms: authority.searchTerms.join("; "),
  }));
  const csv = [
    headers.join(","),
    ...rows.map((row) =>
      headers
        .map((key) => `"${String(row[key]).replaceAll('"', '""')}"`)
        .join(","),
    ),
  ].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "frus-central-america-authority-index.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindEvents() {
  controls.search.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderQueue();
  });
  controls.country.addEventListener("change", (event) => {
    state.country = event.target.value;
    renderQueue();
  });
  controls.priority.addEventListener("change", (event) => {
    state.priority = event.target.value;
    renderQueue();
  });
  controls.source.addEventListener("change", (event) => {
    state.source = event.target.value;
    renderQueue();
  });
  controls.reset.addEventListener("click", () => {
    state.search = "";
    state.country = "";
    state.priority = "";
    state.source = "";
    controls.search.value = "";
    controls.country.value = "";
    controls.priority.value = "";
    controls.source.value = "";
    renderQueue();
  });
  controls.export.addEventListener("click", exportCsv);
  controls.exportCoverage?.addEventListener("click", exportCoverageCsv);
  controls.exportBoundaries?.addEventListener("click", exportBoundaryCsv);
  controls.exportAuthorities?.addEventListener("click", exportAuthorityCsv);
}

function init() {
  setStat("#chronology-count", chronologyItems.length);
  setStat("#country-count", countries.length);
  setStat("#source-count", sources.length);
  setStat("#queue-count", queueItems.length);
  renderOfficial();
  renderCountries();
  renderCoverage();
  renderSources();
  renderChronology();
  renderGaps();
  renderBoundaries();
  renderLibrary();
  renderAuthorities();
  populateFilters();
  renderQueue();
  renderMethod();
  bindEvents();
}

init();
