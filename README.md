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

## Gap Fixes

The page now closes the first-pass chronology gaps for 1995, 1996, and 2000 with GovInfo
Public Papers anchors for Summit of the Americas follow-through, Caribbean Basin trade,
narcotics certification, CBI beneficiary designations, and Panama Canal transfer. A new
gap-control section records what was fixed and what still needs private-record follow-up.

Federal Register and USAID source families were added so public statements can be tested
against legal implementation, aid, disaster-relief, trade, TPS, and project records.

## Compiler Packet and Docket Exports

The page includes browser-side exports for the pre-pull request, reading-room run sheet,
candidate chronology, source-note ledger, selection docket, call-slip batches, and research
queue. These are intended to become the working files for pre-pull requests, onsite logging,
selection review, and daily closeout.

The selection docket groups issue clusters by public anchor, private-record target, first pull,
promotion proof, and cross-volume boundary risk so the compiler can decide what needs archival
evidence before a document is promoted.

The source map and queue also incorporate the Clinton administration FRUS index so adjacent
volumes can be checked before a Central America selection decision is made.
They also link the Office of the Historian citation guidance so candidate records can be
normalized into document-number, canonical-URL, page-range, and image-reference controls.

## Local Preview

Open `index.html` in a browser. No build step is required.
