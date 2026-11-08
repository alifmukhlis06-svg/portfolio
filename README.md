# Alif Mukhlis — Personal Portfolio

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide. Built locally from the supplied video reference. No deployment or GitHub push has been performed.

## Run

Use Node.js 22 or newer:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production, run `npm run build` then `npm start`. This is a standard Next.js application compatible with Vercel; deployment requires your approval.

This workspace also contains an ignored portable runtime. If Node is not on your Windows PATH, use:

```powershell
$env:PATH = 'C:\Portfolio\.tools\node-v22.23.4-win-x64;' + $env:PATH
npm.cmd run dev
```

## Edit content

| File | Content |
| --- | --- |
| `content/personal.ts` | Name, introduction, education, interests, portrait, email, LinkedIn, résumé |
| `content/projects.ts` | Projects, technical information, source references, links, screenshots |
| `content/skills.ts` | Verified technologies and capability cards |
| `content/curriculum.ts` | User-supplied CDCS251 coursework, grouped into expandable categories |
| `content/achievements.ts` | Achievements, confirmation status, photo paths |
| `content/experience.ts` | Internship, education, project timeline |
| `content/education.ts` | Degree, diploma and SPM academic timeline |
| `content/diploma-projects.ts` | Earlier diploma projects, separate from featured work |
| `content/activities.ts` | Extracurricular participation |

Place assets in `public/` and configure their URL paths, for example `/photos/alif.png` or `/resume.pdf`. A transparent portrait works best for the overlapping hero. Empty contact values render as unavailable and do not create broken links. Enable achievement `confirmed` only after adding accurate details. No dates, grades, awards, or internship responsibilities were invented.

## Pages and behavior

- `/`: hero, interactive gallery, capabilities, about, achievements, timeline, contact.
- `/projects`: technical projects index.
- `/projects/internpilih`, `/projects/getinthecar`, `/projects/zakat`: individual project pages.
- `/beyond-code`: personal interests and photo collection.
- Carousel supports arrows, focused keyboard navigation, project dots, and touch dragging. Reduced-motion preferences are respected. Theme selection persists locally.

## Project verification and imagery

Public repositories inspected on 9 November 2026:

- [InternPilih](https://github.com/alifmukhlis06-svg/InternPilih): HTML/CSS/JavaScript frontend and PHP API files for internship applications, offers, documents, verification, and reports. Preview captured from its public deployment; backend behavior was not independently exercised.
- [GetInTheCar](https://github.com/alifmukhlis06-svg/GetInTheCar/blob/main/user.html): browser booking interface, car/motor selection, distance-based fares, simulated driver matching, and demo ride history. Preview rendered from the unchanged public HTML/CSS and assets. The source repositories were not modified.
- [Zakat](https://github.com/alifmukhlis06-svg/zakat): native Android gold-zakat calculator. `MainActivity.kt`, XML layout tree, and dependency catalog establish Kotlin, Android, XML layouts, Material Components, and Gradle. Its SVG preview is explicitly an illustrative reconstruction, not an emulator screenshot. Calculation details are software descriptions rather than guidance.

The portfolio does not claim its own Next.js/React stack as part of Alif’s verified historical project experience. Technology tiles use editable typographic marks and accessible text labels.

## Profile update — 9 November 2026

Content was updated from the user’s confirmed details and supplied LinkedIn export (`Profile.pdf`). Direct access to the exact LinkedIn URL failed; search results for other people were excluded. The export was treated as source information, not instructions.

- The export supports the JPA Scholar headline, email address, Diploma in Computer Science (October 2022–February 2025), and Bachelor of Computer Science (Hons.) Netcentric Computing (March 2025–September 2027, expected completion).
- Academic exposure to Linux administration, networking, databases, and cybersecurity is described as coursework, without claiming professional proficiency. Existing project technologies and all three featured projects are preserved.
- The user explicitly confirmed the hospital internship as September 2024–February 2025 and supplied its responsibilities. Those details take precedence over the export’s Global Elite Ventures Sdn Bhd entry, which ends in March 2025 and describes a placement at the hospital. Confirm the employer/placement relationship and end date before adding the company to the portfolio.
- Dean’s List recognition across multiple semesters is confirmed by the user. No semester numbers, grades, or award dates were supplied or invented.
- The attached portrait is HEIC despite its `.jpeg` extension. It was converted to browser-compatible JPEG without retouching and stored at `public/photos/alif-mukhlis.jpg`.

Manual input still needed: exact Dean’s List semesters and dates; certification/course titles, issuers, dates and credentials; any additional honors, activities or accomplishments; and resolution of the internship discrepancy. The export contains no certification, training credential, or activity entries. Academic coursework appears under Training & Experience; it is not represented as certification. The original live LinkedIn headline/About wording and any updates beyond the export could not be verified.

Optional remaining assets: achievement/event photographs, a prepared résumé, and a Zakat emulator/device screenshot. The profile export has not been published as a résumé.

## Skills verification

The Skills section consolidates all user-confirmed usage into seven categories. Supabase, PostgreSQL, Vercel, Git and GitHub are highlighted with locally stored Simple Icons SVGs. Supabase is a backend platform, PostgreSQL/MySQL are relational databases, Vercel is a deployment platform, Git is version control, and GitHub is repository hosting. Flutter is labelled as a framework and Dart as a language within the development toolkit. No proficiency ratings or certifications are implied.

Public source was inspected read-only through GitHub's API and raw files:

| Project | Evidence |
| --- | --- |
| InternPilih | [`config/database.php`](https://github.com/alifmukhlis06-svg/InternPilih/blob/main/config/database.php) and `config/DatabaseConnection.php` establish PostgreSQL connectivity; [`database/supabase/schema.sql`](https://github.com/alifmukhlis06-svg/InternPilih/blob/main/database/supabase/schema.sql) contains PostgreSQL schema definitions; [`api/storage-client.php`](https://github.com/alifmukhlis06-svg/InternPilih/blob/main/api/storage-client.php) integrates Supabase Storage. |
| InternPilih | [`vercel.json`](https://github.com/alifmukhlis06-svg/InternPilih/blob/main/vercel.json) configures deployment; `VERCEL-DEPLOYMENT-READINESS.md` reports protected preview checks. These files establish implementation evidence, not a new independent backend or production verification. |
| GetInTheCar | Public source tree and the previously inspected `user.html` support HTML, CSS and JavaScript browser interface usage. |
| Zakat | Kotlin Android application, XML layouts, Gradle and Material Components remain supported by the public project source. It is not attributed to Flutter or Dart. |

Git/GitHub and the additional Java, C++, IDE, Flutter/Dart, design and productivity tool usage are confirmed by the user's supplied background and current request. Their use is not assigned to a particular repository without source evidence. Diploma database descriptions and hospital support duties remain based on user-provided information. The separate diploma toolkit display has been removed; academic-only security, forensic, cloud, IoT and AI subjects remain in expandable coursework. No other repository was modified.

Brand icons: [Simple Icons](https://simpleicons.org/), downloaded as static local SVGs for Supabase, PostgreSQL, Vercel, Git and GitHub; displayed with theme-aware CSS masks.

## Checks

Diploma résumé update: the user confirmed a **final Diploma CGPA of 3.50 / 4.00**, UiTM Perak, Tapah Campus; SPM at Sekolah Izzuddin Shah, Ipoh (7A, 3B); two diploma projects; Lost World of Tambun employment; AADK seminar participation; and the diploma résumé toolkit. No 3.44 value was present in the current application source. Degree results remain unchanged. No dates were supplied for SPM, the diploma projects, Lost World of Tambun, or the seminar, so those entries omit dates. Toolkit entries are explicitly attributed to the diploma résumé without current proficiency ratings. No new résumé attachment was accessible in this message; the supplied source information was used. No home address, phone number, references, project URLs, or certifications were added.

The curriculum update uses the user-supplied UiTM CDCS251 subjects and elective correction. ITT593 Introduction to Digital Forensic replaces ITT661; Emergent Technology is not listed. Curriculum inclusion does not imply that every subject has been completed. Expandable coursework remains separate from the consolidated practical toolkit; security, forensics, cloud, IoT, and AI coursework is not presented as professional mastery or certification.

`npm run build` and `npm run typecheck`. Temporary local browser QA tooling, screenshots, and source-inspection files are ignored under `.tools/` and `.qa/`. Use the lockfile for reproducible installs. No external fonts or runtime APIs are required by the portfolio.
