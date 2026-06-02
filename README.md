# FRUS 1993-2000 Volume XXXII Compiler Workspace

This repository contains a static compiler-facing workspace for
`Foreign Relations of the United States, 1993-2000, Volume XXXII, Central America`.

The Office of the Historian currently lists the volume as `Being Researched`:

https://history.state.gov/historicaldocuments/frus1993-00v32

## Files

- `index.html` - GitHub Pages-ready page shell.
- `styles.css` - responsive page styling.
- `app.js` - data and rendering for the candidate document chronology, gap controls, official anchors, country lanes, source families, and queue filters.
- `packet.js` - browser-side compiler packet cards, chronology triage controls, and CSV exports.
- `assets/central-america-research-map.svg` - local visual asset for the workspace header.

## Clinton Library Finding-Aid Inputs

The onsite research section incorporates OCR/text extraction from these local finding-aid PDFs:

- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part1.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part2.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part3.pdf`
- `/Users/jameswilson/Library/Mobile Documents/com~apple~CloudDocs/2013-0185-M_Part4.pdf`

The PDFs are not committed to this repository. The page keeps only a compact research plan,
call-slip batches, and high-yield folder-title clusters derived from those finding aids.

The displayed source-note stems follow the FRUS order: repository, record collection,
office or series, OA/ID locator, folder title, then a short editorial verification note.

## Authority Search Index

The page includes an exportable name and office-series authority index so the compiler can
move from chronology leads to catalog searches quickly. It covers presidential diary
headings, NSC staff files, speechwriting, press, humanitarian-affairs, access-management,
intelligence, transnational-threats, strategic-planning, and Central American leader names.

Each authority entry records search terms, likely source families, and the first document
pairing move to try before requesting boxes or promoting a candidate record.

## Candidate Chronology Inputs

The first section of the page uses Presidential Daily Diary records surfaced through the National Archives Catalog search:

https://catalog.archives.gov/search?q=%222010-0083-F%22&collectionIdentifier=WJC*

The search returns 59 catalog hits; the page filters the results to the 30 file units whose
FOIA tracking number is `LPWJC 2010-0083-F`, then lists pertinent Central America released
diary entries, calls, meetings, and trip events with NAID references and FRUS-style source-note stems.

The same chronology now also incorporates GovInfo Public Papers records for Clinton's
1997 San Jose summit, 1998 Hurricane Mitch remarks, and March 1999 Central America trip.
These public documents are candidates and chronology anchors, not substitutes for policy-process
records; the queue requires matching them against NSC, State, speechwriting, press, and trip-book files.

The chronology section includes country, type, evidence, and text filters plus a promotion
gate for each item so public anchors, diary evidence, and records needing memcon/telcon or
agency follow-up can be triaged before archival time is spent.

The packet also includes a Presidential contact follow-up export that filters Daily
Diary calls, meetings, and trip events into telcon, memcon, briefing-paper, issue-file,
participant-list, and follow-up cable searches.

A companion Public Papers crosswalk filters GovInfo anchors into private-record,
agency-implementation, source-note, boundary, and promotion-decision checks so public
statements remain chronology leads until matched to policy-process evidence.

The no-hit search log export turns the research queue into a reusable ledger for
exact queries, repositories, filters, result counts, weak hits, follow-up queries, and
next-source decisions so dead ends do not have to be rediscovered.

The exclusion and routing register records candidates that are rejected, deferred,
held for new evidence, or routed to adjacent Clinton-era volumes, using the selection
docket and boundary matrix as seeded decision rows.

## Gap Fixes

The page now closes the first-pass chronology gaps for 1995, 1996, and 2000 with GovInfo
Public Papers anchors for Summit of the Americas follow-through, Caribbean Basin trade,
narcotics certification, CBI beneficiary designations, and Panama Canal transfer. A new
gap-control section records what was fixed and what still needs private-record follow-up.

Federal Register and USAID source families were added so public statements can be tested
against legal implementation, aid, disaster-relief, trade, TPS, and project records.

## Country Evidence Audit

The page includes an exportable per-country coverage audit for Guatemala, El Salvador,
Honduras, Nicaragua, Costa Rica, Panama, Belize, and regional Central America. Each row
records public anchors, private-record targets, weak spots, first-pull guidance,
promotion proof, and adjacent-volume boundary risks.

## Cross-Volume Boundary Control

The page includes an exportable boundary matrix checked against the Office of the Historian
Clinton administration index. It lists the adjacent Clinton-era volumes most likely to
intersect with Central America, including Public Diplomacy; North America; Cuba, Haiti,
and the Caribbean; South America and Latin America Region; Foreign Economic Policy;
Counterterrorism; Global Issues; Rights and Governance; and National Security Policy.

Each boundary card records when to keep a candidate in Volume XXXII, when to route or
consult another volume, and the first document-level check to run before promotion.

## Compiler Network Handoff

The top navigation includes a `Copy Handoff` control that copies a compact working note
with the live page, official volume URL, companion assist pages, current page counts,
first moves, and packet exports. It is meant for moving quickly between the central
assist hub, NARA Scout, Strobe FOIA work, and the Central America compiler packet.

## Compiler Packet and Docket Exports

The page includes browser-side exports for the pre-pull request, first-week pull plan,
reading-room run sheet, daily closeout checklist, source-note QA checklist,
Presidential contact follow-up worksheet, Public Papers crosswalk, reference-question worksheet,
no-hit search log, exclusion and routing register, document-review ledger, country evidence audit,
boundary matrix, authority index, candidate chronology, source-note ledger,
selection scorecard, document assembly worksheet, annotation plan,
declassification tracker, selection docket, call-slip batches, and research queue.
These are intended to become the working files for pre-pull
requests, onsite sequencing, onsite logging, access fallback, citation QA,
contact follow-up, public/private matching, no-hit control, exclusion/routing decisions,
selection review, FRUS document assembly, annotation planning, declassification follow-up,
and daily closeout.

The selection docket groups issue clusters by public anchor, private-record target, first pull,
promotion proof, and cross-volume boundary risk so the compiler can decide what needs archival
evidence before a document is promoted.

The selection scorecard then gives each docket issue the same scoring fields for policy
significance, presidential or NSC level, private-process evidence, source-note readiness,
access status, country balance, boundary fit, implementation proof, recommendation, and
next action.

The document assembly worksheet turns promoted candidates into draft FRUS document
packages by collecting proposed document number, section or chapter, title line,
archival source-note stem, release markings, abstract, selection rationale,
adjacent-document links, and boundary decision in one row.

The annotation plan follows the scorecard by carrying each candidate issue into
persons/offices, context notes, public/private bridges, related documents,
boundary cross-references, implementation follow-up, and unresolved editorial questions.

The declassification tracker keeps closed, partly withdrawn, or agency-equity-heavy
records in the evidence trail by preserving withdrawal-sheet text, referral or re-review
paths, open parallel records, selection impact, and the next request needed before
promotion.

The source map and queue also incorporate the Clinton administration FRUS index so adjacent
volumes can be checked before a Central America selection decision is made.
They also link the Office of the Historian citation guidance so candidate records can be
normalized into document-number, canonical-URL, page-range, and image-reference controls.

## Local Preview

Open `index.html` in a browser. No build step is required.
