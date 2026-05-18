# Roxbury Poetry Festival 2026 Update Plan

## Current Repo State

- The site is a Next.js static site with page-level JSX in `pages/` and shared chrome in `components/`.
- The current live homepage, schedule, slam, banner, header, and footer have already started moving to 2026.
- The 2023 event has been archived at `pages/2023.js`, and the footer links to both `RPF 2021` and `RPF 2023`.
- The live 2026 schedule page has been replaced with the extracted PDF content, with TBDs preserved where the source document was incomplete.
- The live 2026 slam page is currently a placeholder, not final competition copy.
- The homepage now includes a visible 2026 schedule highlights section, while older commented reference blocks still remain in the file.
- The About page and site metadata still describe the inaugural/virtual festival, Jericho Brown, Beast The Beat, and older public-safety details; these should be refreshed for 2026.

## 2023 Content Inventory

- Archive page: `pages/2023.js`
- 2023 speaker assets: `public/img/speakers/2023/`
- 2023 registration link: `https://www.eventbrite.com/e/roxbury-poetry-festival-2023-tickets-676251124317`
- 2023 schedule structure:
  - 10:00am - 11:15am: panels and workshops
  - 11:30am - 12:45pm: workshops and panels
  - 1:00pm - 2:15pm ET: lunchtime reading and craft talk
  - 2:30pm - 3:45pm ET: workshops and readings
  - 4:00pm - 5:15pm ET: workshops and readings
  - 5:30pm - 6:30pm ET: keynote address
  - 7:00pm - 9:00pm ET: Publisher's Poetry Slam
- Known archive cleanup risk: `pages/2023.js` still includes some older 2021 Eventbrite links inside 2023 blocks. These should either be left as historical artifacts only if accurate, or corrected before considering the archive final.

## 2026 PDF Source Inventory

Source file reviewed: `/Users/ashleycheung/Downloads/Schedule-Descriptions + Bios .pdf`

### 10:00am - 11:15am: Panels & Workshops

- The Artist Talk
  - Format: panel discussion
  - Artists: Ife Franklin and Stephen Hamilton
  - Copy: artist presentations, conversation, and audience questions focused on current work, process, inspirations, and creative exchange.
  - Bio content included for Ife Franklin and Stephen Hamilton.
  - Referenced images: `Ifefranklin.jpg`, `Stephen-Hamilton.jpg`
- Writing Workshop
  - Format: writing workshop
  - Artist: Amanda Gunn
  - Copy: PDF includes bio only; workshop description may need confirmation.
  - Referenced image: `Amanda+Gunn+Author+Photo+10.webp`
- Reconsidering the Page
  - Format: writing workshop
  - Artists: Kes Maro and Kayla Kennedy
  - Copy: workshop for performance poets and writers reconsidering form, structure, audience, line, tone, pacing, and revision.
  - Bio content included for Kes Maro and Kayla Kennedy.
  - Referenced images: `kes maro.jpg`, `Kayla kennedy .jpg`

### 11:30am - 12:45pm: Panels & Workshops

- Dreamscape: Future of Roxbury III
  - Format: panel and discussion
  - Curator: Eric "Pops" Esteves
  - Copy: final installment of the Dreamscape conversation about Roxbury's past, present, and future.
  - Bio content included for Eric Esteves.
  - Referenced image: `Eric Pops Esteves.jpeg`
- Goin' Up Yonder: Religion in Black Poetics
  - Format: panel reading
  - Artists: Quintin Collins, Matthew E. Henry, Sarah Kersey
  - Copy: reading and discussion on religion, Black poetics, upbringing, belief, imagery, diction, and cultural context.
  - Bio content included for all listed artists.
  - Referenced images: `MEH (d).jpg`, `Collins, Quintin 2024 self-portrait (1).jpg`, `Kersey, Sarah.jpeg`
- FUNNY HA HA: Writing Hilarious Poems with Jill McDonough
  - Format: writing workshop
  - Artist: Jill McDonough
  - Copy: generative workshop using funny stories, free writing, non-sequiturs, quoted dialogue, observations, asides, slang, and storytelling techniques.
  - Bio content included for Jill McDonough.
  - Referenced image: `Jill McDonough .jpg`

### 1:00pm - 2:15pm: Lunch Time Craft Talk

- Status: TBD in the PDF.
- Needed before launch: final title, speaker, description, bio, image, and CTA.

### 2:30pm - 3:45pm: Workshops & Readings

- Surveying the Soil: A Generative Poetry Workshop
  - Format: generative poetry workshop
  - Artist: Emmanuel Oppong Yeboah
  - Copy: 75-minute generative workshop on themes, worries, joys, and obsessions most urgent to participants.
  - Bio content included for Emmanuel Oppong-Yeboah.
  - Referenced image: `emmanuel oppong yeboah.jpg`
- On Publishing: The Literary Ecosystem
  - Format: panel discussion
  - Artists: Perpetua Cannistraro, Jenny Molberg, Tatiana Johnson Boria
  - Moderator: Lin Flores
  - Copy: discussion with editors, publishers, and literary artists about publishing, literary culture, and pathways for writers.
  - Bio content included for Perpetua Cannistraro, Jenny Molberg, and Tatiana Johnson-Boria.
  - Referenced images: `Jenny-Molberg_Headshot.jpg`, `Perpetua headshot 2026.JPG`
  - Missing or not clearly referenced: Tatiana Johnson-Boria image, Lin Flores image/bio.
- The Art of Creative Nonfiction
  - Format: writing workshop
  - Artist: Maria Pinto
  - Copy: generative nonfiction workshop for finding a way into true stories, scenes, personalities, and project momentum.
  - Bio content included for Maria Pinto.
  - Referenced image: `Maria Pinto VSC.jpg`

### 4:00pm - 5:15pm: Workshops & Readings

- Homosexual Intifada: A Queer Palestinian Reading
  - Format: panel reading
  - Artists: George Abraham, Mejdulene Shomali, Hannah Moushabeck
  - Copy: reading and roundtable focused on the anthology `Homosexual Intifada`, global queer Palestinian literature, and Interlink Books.
  - Bio content included for Mejdulene Bernard Shomali, Hannah Moushabeck, and George Abraham.
  - Referenced images: `Mejdulene Bernard Shomali .jpg`, `Hannah-Moushabeck-Headshot`, `George Abraham.jpg`
  - Missing or ambiguous: Hannah image extension.
- For the Culture: Journalism, Resistance, and the Practice of Black Joy
  - Format: craft talk and workshop
  - Artist: Jenee Osterheldt
  - Copy: lecture-meets-workshop on journalism, storytelling, cultural curation, documenting Black life, joy, and resistance.
  - Bio content included for Jenee Osterheldt.
  - Missing or not clearly referenced: Jenee Osterheldt image filename.
- If You Can Feel It / You Can Speak It
  - Format: open mic
  - Copy: Boston's only monthly open mic movement dedicated to voices and experiences of LGBTQ+ communities of color.
  - Referenced image: `IYCFI-YCSI.png`

### 5:30pm - 6:30pm: Keynote & Conversation

- Kwame Dawes
  - Format: keynote address and conversation
  - Copy: keynote bio included; Dawes is Poet Laureate of Jamaica (2024-2027), professor at Brown, and author/editor/director connected to African Poetry Book Series, African Poetry Book Fund, and Calabash.
  - Missing or not clearly referenced: Kwame Dawes image filename.

### 7:00pm - 9:00pm: Publisher's Poetry Slam

- Format: Publisher's Poetry Slam
- Location/details in PDF: Lobby, capacity note, stage, mic stand, roaming mic, tables, check-in table.
- Missing before public page: public-facing rules, eligibility, deadline/application info, host/judges, prize language, partner language, and registration/application URL.

### Source Content Risks

- The PDF includes exact bios and long descriptions, but some session records are incomplete or ambiguous.
- The lunch craft talk is still marked TBD.
- The PDF references image filenames, but the actual image files are not yet in `public/img/speakers/2026/`.
- The first batch of 2026 images is now in `public/img/speakers/2026/`, and all images currently used by `pages/schedule.js` resolve to local files.
- Registration URL is now available: `https://www.eventbrite.com/e/roxbury-poetry-festival-tickets-1989746590615`.
- Festival location is partially implied only by the slam logistics; public location/room details still need confirmation.

## 2026 Update Phases

### Phase 1: Ingest Source Content

- Add all final schedule copy from the PDF source document.
- Add all supplied 2026 photos to a dedicated folder, recommended: `public/img/speakers/2026/`.
- Normalize filenames to lowercase kebab-case, for example `speaker-name.jpg`.
- Build a simple content map before editing JSX:
  - session title
  - time block
  - format/category
  - facilitator/speaker names
  - description/bio
  - image path
  - registration URL or CTA: `https://www.eventbrite.com/e/roxbury-poetry-festival-tickets-1989746590615`
  - location/room, if available

### Phase 2: Replace Live Schedule

- Replace `pages/schedule.js` placeholder copy with the final 2026 schedule.
- Reuse the existing 2023 schedule layout if the program has comparable time blocks and expandable session details.
- If the 2026 document has many sessions, consider extracting schedule data into an array in the same file to reduce copy/paste risk.
- Confirm all schedule CTAs point to the 2026 registration URL, not 2023 or 2021 links.

### Phase 3: Update Homepage

- Keep the confirmed hero date: June 27, 2026.
- Replace the current registration placeholder with the final CTA.
- Replace visible featured/headliner content with the 2026 headliners, keynote, lunchtime feature, or other priority programming from the source document.
- Remove or leave commented historical sections only if they are intentionally retained for future reference.

### Phase 4: Update Slam Page

- Decide whether the 2026 slam is active, postponed, or not part of this festival cycle.
- If active, replace `pages/slam.js` placeholder copy with:
  - application/registration link
  - eligibility
  - rules
  - submission or application deadline
  - prize details
  - host/judges, if confirmed
  - partner language for Button Poetry, if still accurate
- Decide whether the 2023 slam needs a dedicated archive page or whether the `pages/2023.js` schedule entry is enough.

### Phase 5: Refresh Shared Site Copy

- Update `components/Header.js` with the active registration/action text.
- Update `components/Banner.js` with the active CTA and link behavior if the banner should be clickable.
- Update `components/Layout.js` metadata so social previews no longer describe the inaugural virtual festival.
- Update `pages/about.js` so the festival description, organizers, partners, accessibility/public safety, and contact information reflect 2026.
- Review `components/Footer.js` for final navigation, including whether live `Schedule` and `Slam` links should be visible.

### Phase 6: QA And Launch

- Run `npm run build`.
- Search for stale live-page references to `2023`, `2021`, old Eventbrite links, old headliners, and outdated COVID/virtual copy.
- Check `/`, `/schedule`, `/slam`, `/about`, `/2021`, and `/2023` locally on desktop and mobile.
- Verify all image paths render and alt text matches the person/event.
- Verify all external links open the intended 2026 forms or registration pages.
- Confirm Open Graph/social image and metadata before deploy.

## Content Still Needed From The 2026 Document

- Final festival location and any room/session locations.
- Final lunch craft talk details.
- Final headliner/homepage priority content.
- Missing or ambiguous photo files from the PDF.
- Preferred photo credits.
- Slam rules, eligibility, deadlines, host/judges, prize language, partner language, and registration/application link.
- Sponsor/partner logos and final partner language.
- Any accessibility, public safety, food, livestream, or attendee logistics copy.

## Checklist

- [x] Create a dedicated `2023` archive page from the previous live schedule content.
- [x] Add a visible `RPF 2023` archive link anywhere `RPF 2021` is linked.
- [ ] Decide whether to archive the 2023 slam on the same page or as a separate `2023-slam` page.
- [ ] Correct or intentionally preserve older 2021 registration links inside the 2023 archive.
- [x] Extract 2026 schedule and bio content from the PDF.
- [x] Update the homepage hero date and registration-open messaging in `pages/index.js`.
- [x] Replace homepage featured/headliner sections with 2026 content.
- [x] Replace the live placeholder schedule in `pages/schedule.js`.
- [ ] Replace or finalize the live placeholder slam page in `pages/slam.js`.
- [x] Update shared CTAs in `components/Header.js` and `components/Banner.js` when final registration is available.
- [ ] Refresh metadata copy in `components/Layout.js`.
- [ ] Refresh About page copy in `pages/about.js`.
- [x] Add final 2026 photos under `public/img/speakers/2026/`.
- [ ] Run stale-reference search after the rollover.
- [ ] Run production build and local visual checks before launch.
