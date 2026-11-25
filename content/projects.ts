export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectSection = {
  eyebrow: string;
  title: string;
  items: string[];
};

export type ProjectCover = {
  theme: 'lavender' | 'blue' | 'navy' | 'charcoal' | 'teal' | 'sunset' | 'indigo' | 'violet' | 'gold';
  frame?: 'phone' | 'window' | 'diagram' | 'panel' | 'typography';
  title: string;
  subtitle: string;
  tagline: string;
  screenshot?: string;
  screenshotAlt?: string;
  screenshotWidth?: number;
  screenshotHeight?: number;
  mark?: string;
  markLabel?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  website?: string;
  github?: string;
  image?: string;
  imageLabel?: string;
  imageFit?: 'cover' | 'contain';
  cover?: ProjectCover;
  previewLabel?: string;
  previewBadge?: string;
  note: string;
  sources: { label: string; url: string }[];
  featured?: boolean;
  status?: string;
  overviewTitle?: string;
  galleryTitle?: string;
  galleryIntro?: string;
  gallery?: ProjectGalleryImage[];
  galleryAfterDetails?: boolean;
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  {
    slug: 'internpilih',
    name: 'InternPilih',
    category: 'FEATURED / WEB APPLICATION',
    summary: 'Connecting students to their next chapter.',
    description: 'An internship management portal bringing student, employer, and coordinator workflows into one place. The public source includes application, offer, document, reporting, and placement-verification endpoints.',
    stack: ['PHP', 'JavaScript', 'PostgreSQL', 'Supabase', 'Vercel'],
    features: ['Student, employer, and coordinator roles', 'Internship application and offer workflows', 'Document and placement-verification endpoints', 'Coordinator reporting interfaces'],
    website: 'https://internpilih.vercel.app/',
    github: 'https://github.com/alifmukhlis06-svg/InternPilih',
    image: '/projects/internpilih.webp',
    imageLabel: 'InternPilih public landing page',
    cover: {
      theme: 'teal',
      frame: 'window',
      title: 'InternPilih',
      subtitle: 'Internship Management Portal',
      tagline: 'Connecting students to their next chapter.',
      screenshot: '/projects/internpilih.webp',
      screenshotAlt: 'InternPilih public landing page for students, coordinators, and employers',
      screenshotWidth: 1440,
      screenshotHeight: 900,
    },
    previewLabel: 'internpilih.vercel.app',
    previewBadge: 'FEATURED PROJECT',
    note: 'Landing-page capture from the public deployment. Feature descriptions are based on the public repository; production backend behavior has not been independently tested.',
    sources: [{ label: 'Public source tree', url: 'https://github.com/alifmukhlis06-svg/InternPilih' }, { label: 'Live website', url: 'https://internpilih.vercel.app/' }],
    featured: true,
  },
  {
    slug: 'getinthecar',
    name: 'GetInTheCar',
    category: 'UX CASE STUDY / E-HAILING',
    summary: 'Designing a campus-focused ride experience for UiTM Arau students.',
    description: 'GetInTheCar is a collaborative five-member e-hailing system concept and front-end prototype for UiTM students around the Arau, Perlis campus area. The project explores how passengers, student drivers, and administrators could manage ride requests, price offers, bookings, and ride records through one responsive web experience. My documented role was UI/UX Designer.',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Browser Storage', 'Google Maps Embed'],
    features: [
      'Passenger booking interface with pickup, destination, vehicle, fare-estimate, and ride-history views',
      'Driver request cards with editable price offers, accept or decline controls, and trip-state actions',
      'Administrator dashboards for sample user, driver, ride, and report management',
      'Responsive multi-page interface built with static HTML, CSS, and client-side JavaScript',
    ],
    github: 'https://github.com/alifmukhlis06-svg/GetInTheCar',
    image: '/projects/getinthecar.webp',
    imageLabel: 'Passenger booking interface rendered from the GetInTheCar source repository',
    cover: {
      theme: 'sunset',
      frame: 'window',
      title: 'GetInTheCar',
      subtitle: 'Campus E-Hailing UX Prototype',
      tagline: 'Designing a clearer campus ride experience.',
      screenshot: '/projects/getinthecar.webp',
      screenshotAlt: 'GetInTheCar passenger booking interface with campus map and ride controls',
      screenshotWidth: 1440,
      screenshotHeight: 900,
    },
    previewLabel: 'GETINTHECAR / BOOKING INTERFACE',
    previewBadge: 'SOURCE-RENDERED INTERFACE',
    note: 'Repository inspection confirms a static front-end prototype. It does not contain a backend, database integration, real-time transport tracking, payment gateway, or cross-user messaging service. Matching, price comparison, chat responses, ride updates, reports, and earnings use hard-coded sample data or client-side simulation.',
    sources: [
      { label: 'Public source tree', url: 'https://github.com/alifmukhlis06-svg/GetInTheCar' },
      { label: 'Passenger booking prototype', url: 'https://github.com/alifmukhlis06-svg/GetInTheCar/blob/main/user.html' },
      { label: 'Driver request prototype', url: 'https://github.com/alifmukhlis06-svg/GetInTheCar/blob/main/driver.html' },
      { label: 'Administrator prototype', url: 'https://github.com/alifmukhlis06-svg/GetInTheCar/blob/main/admin.html' },
    ],
    status: 'Collaborative five-member academic project · Documented role: UI/UX Designer',
    overviewTitle: 'One ride concept, shaped around three campus roles.',
    galleryTitle: 'The system, mapped from four perspectives.',
    galleryIntro: 'Original diagrams extracted from the supplied project report. They document the proposed system design and should not be read as evidence of a connected production backend.',
    galleryAfterDetails: true,
    gallery: [
      {
        src: '/projects/getinthecar/use-case-diagram.png',
        alt: 'GetInTheCar use case diagram showing passenger, driver, and administrator interactions',
        caption: 'Use Case Diagram — proposed passenger, driver, and administrator capabilities',
        width: 1560,
        height: 1350,
      },
      {
        src: '/projects/getinthecar/class-diagram.png',
        alt: 'GetInTheCar class diagram for users, passengers, drivers, ride requests, price offers, bookings, ratings, reports, notifications, vehicles, and messages',
        caption: 'Class Diagram — proposed domain objects and relationships',
        width: 1600,
        height: 2160,
      },
      {
        src: '/projects/getinthecar/sequence-diagram.png',
        alt: 'GetInTheCar sequence diagram showing proposed interactions between administrator, driver, passenger, application, backend, and database',
        caption: 'Sequence Diagram — proposed request, booking, ride, profile, and administration exchanges',
        width: 1450,
        height: 2050,
      },
      {
        src: '/projects/getinthecar/activity-diagram.png',
        alt: 'GetInTheCar activity diagram with swimlanes for user, e-hailing system, driver, and administrator',
        caption: 'Activity Diagram — proposed end-to-end workflows across the four swimlanes',
        width: 1400,
        height: 2140,
      },
    ],
    sections: [
      {
        eyebrow: 'PROJECT OVERVIEW & OBJECTIVES',
        title: 'A clearer campus ride journey.',
        items: [
          'The concept targets UiTM students travelling in and around the Arau, Perlis campus area.',
          'It aims to centralize ride requests, driver price comparison, booking records, and role-specific management in a mobile-friendly web experience.',
          'The supplied report describes a broader future system; the repository demonstrates its interface direction as a static prototype.',
        ],
      },
      {
        eyebrow: 'MY ROLE & COLLABORATION',
        title: 'UI/UX design within a five-member team.',
        items: [
          'The source report documents my role as UI/UX Designer alongside a project manager, system analyst, software engineer, and quality assurance role.',
          'My contribution is represented through the role-based interface structure and passenger, driver, and administrator interaction flows.',
          'The repository is collaborative and does not identify file-level authorship, so this case study does not claim sole ownership of the implementation or system models.',
        ],
      },
      {
        eyebrow: 'PASSENGER WORKFLOW',
        title: 'From route entry to a simulated booking.',
        items: [
          'The source provides demo login, pickup and destination inputs, book-now or book-later states, car or motorcycle selection, a local fare estimate, and a Google Maps embed.',
          'Generated driver cards let a passenger compare sample names, vehicles, ETAs, and calculated prices before confirming a selection.',
          'My Rides and profile screens present current, upcoming, and past-ride information through hard-coded client-side data; no live trip is created.',
        ],
      },
      {
        eyebrow: 'DRIVER WORKFLOW',
        title: 'Requests, offers, and trip states as interface interactions.',
        items: [
          'A driver can toggle availability, review sample request cards, adjust a price field, and use accept or decline controls.',
          'Accepted rides move through arrival, start-trip, and complete-trip interface states using DOM updates and timers.',
          'Schedule, earnings, and driver-profile pages visualize sample records and controls; they are not connected to passenger sessions or financial services.',
        ],
      },
      {
        eyebrow: 'ADMINISTRATOR WORKFLOW',
        title: 'Operational views built around sample data.',
        items: [
          'The admin dashboard renders hard-coded user, driver, and recent-ride arrays with search, filtering, edit, create, status, and summary interactions.',
          'Dedicated management and reporting pages extend the interface with tables, charts, pagination, modals, and export controls.',
          'These actions update in-memory browser data or simulate completion; there is no server-side account store, monitoring service, or persistent report pipeline.',
        ],
      },
      {
        eyebrow: 'RIDE REQUESTS & PRICE OFFERS',
        title: 'A designed bidding flow, not live bidding.',
        items: [
          'Implemented in the prototype: route fields, locally calculated estimates, generated driver options with price multipliers, and editable offer controls on the driver page.',
          'Proposed in the report: broadcasting a passenger request to available drivers and returning independent driver offers to the passenger.',
          'Not source-verified: real-time synchronization, driver notifications, concurrent bidding, or a shared booking service between users.',
        ],
      },
      {
        eyebrow: 'BOOKING MANAGEMENT',
        title: 'Rich interface states with explicit boundaries.',
        items: [
          'Implemented as client-side UI: confirmation sequences, recent and historical ride cards, upcoming or past tabs, cancellation and rating controls, and simulated chat replies.',
          'Proposed as system requirements: persisted bookings, synchronized ride status, rating records, payment processing, and passenger-driver communication.',
          'Real-time tracking, payment processing, live messaging, and real driver matching are not implemented in the inspected repository.',
        ],
      },
      {
        eyebrow: 'ARCHITECTURE & DESIGN',
        title: 'Static prototype today, connected system in the models.',
        items: [
          'The verified source is a multi-page front end made from HTML, CSS, vanilla JavaScript, local assets, a Google Maps iframe, and limited local or session storage for demo login state.',
          'Hard-coded arrays, DOM manipulation, random values, and timers drive most interactions; no API calls, application server, database schema, package manifest, or framework is present.',
          'The report’s class and sequence diagrams introduce backend and database layers as design intent. Mobile browser usability, clear role separation, campus scope, data integrity, and privacy are documented design considerations.',
        ],
      },
      {
        eyebrow: 'IMPLEMENTATION STATUS',
        title: 'What exists, what is proposed, and what remains design-only.',
        items: [
          'Actual implemented functionality — navigable responsive screens, local calculations, filters, modals, charts, role-based dashboards, and simulated state changes inside the browser.',
          'Proposed system requirements — secure authentication, synchronized ride requests and price offers, persistent bookings, ratings, payments, and multi-user reliability.',
          'Design-only functionality — backend and database exchanges, real-time tracking, external notifications, live driver bidding, production messaging, and payment processing.',
        ],
      },
    ],
    featured: true,
  },
  {
    slug: 'zakat',
    name: 'Zakat — Android Zakat Calculator',
    category: 'ANDROID APPLICATION',
    summary: 'Making a calculation feel clear.',
    description: 'A native Android application for calculating zakat on gold. Users enter weight and value per gram, select kept or worn gold, and view the total value, eligible value, and calculated zakat.',
    stack: ['Kotlin', 'Android', 'XML layouts', 'Material Components', 'Gradle'],
    features: ['Kept and worn gold selection', 'Gold weight and value-per-gram inputs', 'Total value and zakat result display', 'Reset, native sharing, and About screen'],
    github: 'https://github.com/alifmukhlis06-svg/zakat',
    image: '/projects/zakat.svg',
    imageLabel: 'Illustrative reconstruction based on the Android XML layout; not an app screenshot',
    cover: {
      theme: 'gold',
      frame: 'typography',
      title: 'Gold Zakat Calculator',
      subtitle: 'Native Android Application',
      tagline: 'A clearer view of the numbers.',
      mark: '2.5%',
      markLabel: 'Source-verified calculation rate',
    },
    previewLabel: 'ANDROID / INTERFACE STUDY',
    previewBadge: 'ILLUSTRATIVE RECONSTRUCTION',
    note: 'Illustrative interface reconstructed from source; replace with an emulator screenshot. The repository applies thresholds of 85g / 200g and a 2.5% calculation. This portfolio describes its implementation and does not provide religious or financial guidance.',
    sources: [{ label: 'Calculation implementation', url: 'https://github.com/alifmukhlis06-svg/zakat/blob/master/app/src/main/java/com/example/goldzakatcalculator/MainActivity.kt' }, { label: 'Android dependencies', url: 'https://github.com/alifmukhlis06-svg/zakat/blob/master/gradle/libs.versions.toml' }],
    featured: true,
  },
  {
    slug: 'gitc-enterprise-network-design',
    name: 'GITC Enterprise Network Design',
    category: 'NETWORKING & INFRASTRUCTURE',
    summary: 'A proposed resilient network for GITC Inc.’s new Kangar Jaya Driver Centre.',
    description: 'A collaborative proposal for GITC Inc., an e-hailing company expanding operations to Kangar Jaya, Perlis. The design documents a scalable branch network rather than a deployed production environment.',
    stack: ['Cisco Catalyst', 'Fortinet FortiGate', 'SD-WAN', 'IPsec VPN', 'Wi-Fi 6', 'VLANs & ACLs'],
    features: [
      'Three-tier Core, Distribution, and Access architecture with redundant links and devices',
      'Nine VLANs with inter-VLAN routing and Access Control Lists',
      'FortiGate high-availability firewalls, a dedicated DMZ, and site-to-site IPsec VPN',
      'Primary TM fibre and backup CelcomDigi 5G paths managed through SD-WAN',
      'Wi-Fi 6 planning with nine Cisco Catalyst 9130AXI access points across three floors',
      'Logical topology, physical floor layouts, equipment selection, and cost estimation',
    ],
    image: '/projects/gitc/logical-network-diagram.jpeg',
    imageLabel: 'Proposed GITC logical network diagram from the supplied project report',
    cover: {
      theme: 'indigo',
      frame: 'diagram',
      title: 'GITC Enterprise Network Design',
      subtitle: 'Networking & Infrastructure',
      tagline: 'A resilient network proposal for a new driver centre.',
      screenshot: '/projects/gitc/logical-network-diagram.jpeg',
      screenshotAlt: 'Proposed GITC three-tier enterprise network topology diagram',
      screenshotWidth: 1963,
      screenshotHeight: 1902,
    },
    previewLabel: 'NETWORK / DESIGN DOCUMENTATION',
    previewBadge: 'REPORT-DERIVED DIAGRAM',
    note: 'Collaborative network design proposal documented in the supplied report. No production deployment, implementation testing, or sole ownership of the complete design is claimed.',
    sources: [],
    status: 'Collaborative design proposal',
    featured: true,
    overviewTitle: 'A documented network proposal.',
    galleryTitle: 'Proposed network, mapped.',
    galleryIntro: 'Original logical and physical diagrams extracted from the supplied project report.',
    gallery: [
      {
        src: '/projects/gitc/logical-network-diagram.jpeg',
        alt: 'Logical diagram of the proposed GITC three-tier enterprise network with redundant routers, firewalls, core and distribution switches, three access floors, a DMZ, servers, and nine VLANs',
        caption: 'Logical network diagram — proposed three-tier architecture and VLAN segmentation',
        width: 1963,
        height: 1902,
      },
      {
        src: '/projects/gitc/ground-floor-layout.jpeg',
        alt: 'Ground-floor network layout for the proposed GITC Driver Centre showing the inspection bay, reception, waiting lounge, security room, server room, access points, cameras, and cabling',
        caption: 'Ground floor — public, inspection, security, and server areas',
        width: 1559,
        height: 842,
      },
      {
        src: '/projects/gitc/second-floor-layout.jpeg',
        alt: 'Second-floor network layout for the proposed GITC Driver Centre showing training, onboarding kiosks, driver lounge, support counter, access points, cameras, and cabling',
        caption: 'Second floor — training, onboarding, lounge, and driver support areas',
        width: 1429,
        height: 561,
      },
      {
        src: '/projects/gitc/third-floor-layout.jpeg',
        alt: 'Third-floor network layout for the proposed GITC Driver Centre showing office departments, executive and conference rooms, IT support, access points, cameras, and cabling',
        caption: 'Third floor — administration, management, conference, and IT support areas',
        width: 1434,
        height: 581,
      },
      {
        src: '/projects/gitc/physical-layout-legend.jpeg',
        alt: 'Legend identifying cable types and network device symbols used in the GITC physical floor layouts',
        caption: 'Physical layout legend — cabling and network device symbols',
        width: 1444,
        height: 328,
      },
    ],
    sections: [
      {
        eyebrow: 'OBJECTIVES',
        title: 'What the design set out to address.',
        items: [
          'Plan capacity and lower latency for approximately 36 staff workstations and driver onboarding kiosks.',
          'Improve reliability through redundant devices, links, failover, and a lightweight local server design.',
          'Protect branch resources using segmentation, firewalls, a secure server room, and a DMZ.',
          'Support future growth while keeping monitoring and administration centrally manageable.',
        ],
      },
      {
        eyebrow: 'ARCHITECTURE',
        title: 'How the network was structured.',
        items: [
          'Two WAN routers and a FortiGate 60F active/standby pair form the proposed internet edge.',
          'Two Cisco Catalyst C9300 core switches anchor redundant distribution and access layers over OM4 fibre uplinks.',
          'Three Cisco Catalyst C9200L access switches serve the building’s three floors, with PoE for phones, cameras, and wireless access points.',
          'Nine VLANs separate management, operations, kiosks, voice, staff Wi-Fi, guest Wi-Fi, security, servers, and the DMZ.',
        ],
      },
      {
        eyebrow: 'SECURITY DESIGN',
        title: 'Layered controls in the proposal.',
        items: [
          'FortiGate high availability and a dedicated DMZ provide the planned perimeter architecture.',
          'ACL-controlled inter-VLAN routing applies least-privilege separation between network segments.',
          'A site-to-site IPsec VPN protects proposed branch-to-headquarters communication.',
          'WPA3, RADIUS, guest isolation, network monitoring, and physical server-room controls are included in the design.',
        ],
      },
      {
        eyebrow: 'DELIVERABLES',
        title: 'Documented design outputs.',
        items: [
          'A logical topology and three floor layouts map the proposed network and device placement.',
          'The report specifies network, server, wireless, storage, and cabling equipment with an estimated total of RM178,860.',
          'LAN, WAN, wireless, security, and centralized management approaches are documented for the branch.',
        ],
      },
    ],
  },
  {
    slug: 'smart-bathtub-safety-monitoring',
    name: 'Smart Bathtub Safety & Monitoring System',
    category: 'IOT & EMBEDDED SYSTEMS',
    summary: 'Sensor-based water monitoring, automated control, and cloud-connected visibility.',
    description: 'A collaborative ESP32-based prototype that monitors bathtub water level and temperature, controls water flow through a relay and pump, displays readings locally, and synchronizes system data with Firebase Firestore for dashboard monitoring.',
    stack: ['ESP32', 'Arduino IDE', 'Firebase Firestore', 'Ultrasonic Sensor', 'Temperature Sensor', 'Wi-Fi'],
    features: [
      'Ultrasonic water-level sensing and temperature monitoring',
      'Relay-controlled pump operation for automated water-flow control',
      'LCD readings with LED and buzzer safety alerts',
      'Firebase Firestore data synchronization over Wi-Fi',
      'Web dashboard for water level, temperature, pump status, and alerts',
      'Circuit design and physical prototype documented in the report',
    ],
    image: '/projects/smart-bathtub/monitoring-dashboard.jpeg',
    imageLabel: 'Smart Bathtub monitoring dashboard from the supplied project report',
    cover: {
      theme: 'violet',
      frame: 'panel',
      title: 'Smart Bathtub Safety & Monitoring System',
      subtitle: 'Connected IoT Safety Prototype',
      tagline: 'Water monitoring, control, and cloud visibility.',
      screenshot: '/projects/smart-bathtub/monitoring-dashboard.jpeg',
      screenshotAlt: 'Smart Bathtub dashboard showing water, temperature, pump, and safety status',
      screenshotWidth: 1188,
      screenshotHeight: 813,
    },
    previewLabel: 'IOT / PROTOTYPE DOCUMENTATION',
    previewBadge: 'REPORT-DERIVED VISUAL',
    note: 'Collaborative prototype documented in the supplied report. The portfolio describes the group’s implementation and reported tests without claiming sole authorship or a production-ready product.',
    sources: [],
    status: 'Collaborative prototype',
    featured: true,
    overviewTitle: 'Safety monitoring through connected hardware.',
    galleryTitle: 'From circuit to dashboard.',
    galleryIntro: 'Original implementation visuals extracted from the supplied project report.',
    gallery: [
      {
        src: '/projects/smart-bathtub/monitoring-dashboard.jpeg',
        alt: 'Smart Bathtub dashboard showing water level, temperature, pump controls, safety status, a monitoring chart, and system alerts',
        caption: 'Monitoring dashboard — water, temperature, pump, and alert status',
        width: 1188,
        height: 813,
      },
      {
        src: '/projects/smart-bathtub/circuit-design.jpeg',
        alt: 'Circuit design connecting an ESP32 to an LCD, buzzer, ultrasonic sensor, temperature probe, relay, pump, LEDs, breadboard, and power supply',
        caption: 'Circuit design — ESP32, sensors, alerts, relay, and pump',
        width: 1044,
        height: 649,
      },
      {
        src: '/projects/smart-bathtub/prototype.jpeg',
        alt: 'Physical Smart Bathtub prototype with containers, tubing, pump, ESP32, breadboard, relay, sensors, and LCD',
        caption: 'Physical prototype documented in the project report',
        width: 778,
        height: 794,
      },
    ],
    sections: [
      {
        eyebrow: 'PURPOSE',
        title: 'Safer water monitoring and control.',
        items: [
          'Monitor water level and temperature with minimal manual checking.',
          'Stop water flow when the configured level is reached to reduce overflow risk.',
          'Provide immediate visual and audible warnings for unsafe conditions.',
        ],
      },
      {
        eyebrow: 'HARDWARE',
        title: 'Embedded components working together.',
        items: [
          'An ESP32 processes readings and supplies Wi-Fi connectivity.',
          'Ultrasonic and water-temperature sensors provide the monitored inputs.',
          'A relay, pump, LCD, LEDs, and buzzer handle control and local feedback.',
        ],
      },
      {
        eyebrow: 'SOFTWARE & DATA',
        title: 'Local control with cloud visibility.',
        items: [
          'Arduino IDE and Visual Studio Code support the embedded programming workflow.',
          'Firebase Firestore stores water level, temperature, and pump-status data.',
          'A web dashboard presents current readings, status, controls, and alerts.',
        ],
      },
      {
        eyebrow: 'VALIDATION',
        title: 'Tests documented in the report.',
        items: [
          'The group report documents software checks for program logic, cloud communication, and dashboard updates.',
          'Hardware checks cover sensor readings, relay switching, pump control, LCD output, LEDs, and buzzer alerts.',
          'The report also records limitations involving Wi-Fi dependency, sensor calibration, and fixed thresholds.',
        ],
      },
    ],
  },
  {
    slug: 'web-application-penetration-testing',
    name: 'Web Application Penetration Testing',
    category: 'CYBERSECURITY & WEB SECURITY',
    summary: 'An authorized local assessment combining manual techniques with OWASP ZAP.',
    description: 'A collaborative security assessment of a locally hosted Car Management System. The work combined manual testing and OWASP ZAP to identify and document web application weaknesses in an authorized environment.',
    stack: ['OWASP ZAP', 'Manual Testing', 'XAMPP', 'SQL Injection', 'XSS', 'Access Control'],
    features: [
      'Testing limited to a locally hosted application in an authorized environment',
      'Manual testing of login forms, input fields, URLs, and parameters',
      'OWASP ZAP automated scanning and traffic analysis',
      'Documented SQL injection, XSS, broken access control, CSRF, and parameter-tampering findings',
      'Risk, impact, evidence, and mitigation notes for each finding',
    ],
    image: '/projects/web-penetration-testing/automated-local-scan.jpeg',
    imageLabel: 'OWASP ZAP scanning the locally hosted test application',
    cover: {
      theme: 'navy',
      frame: 'window',
      title: 'Web Application Penetration Testing',
      subtitle: 'Authorized Web Security Assessment',
      tagline: 'Structured testing in a controlled environment.',
      screenshot: '/projects/web-penetration-testing/automated-local-scan.jpeg',
      screenshotAlt: 'OWASP ZAP automated scan running against the authorized localhost application',
      screenshotWidth: 1916,
      screenshotHeight: 1021,
    },
    previewLabel: 'SECURITY / ASSESSMENT EVIDENCE',
    previewBadge: 'AUTHORIZED LOCAL ASSESSMENT',
    note: 'Collaborative assessment performed against a localhost application in an authorized learning environment. It is not presented as a professional client engagement or testing of a public system.',
    sources: [],
    status: 'Authorized local assessment',
    featured: true,
    overviewTitle: 'A structured web security assessment.',
    galleryTitle: 'Evidence from the assessment.',
    galleryIntro: 'Original OWASP ZAP screenshots extracted from the supplied project report. URLs shown are localhost test routes.',
    gallery: [
      {
        src: '/projects/web-penetration-testing/automated-local-scan.jpeg',
        alt: 'OWASP ZAP automated scan running against a localhost Car Management System route',
        caption: 'Automated scan of the authorized localhost application',
        width: 1916,
        height: 1021,
      },
      {
        src: '/projects/web-penetration-testing/owasp-zap-workspace.jpeg',
        alt: 'OWASP ZAP workspace used for the web application security assessment',
        caption: 'OWASP ZAP workspace used during the assessment',
        width: 1919,
        height: 1076,
      },
      {
        src: '/projects/web-penetration-testing/sql-injection-alert.jpeg',
        alt: 'OWASP ZAP SQL injection alert for a localhost login parameter',
        caption: 'ZAP alert — SQL injection finding',
        width: 603,
        height: 313,
      },
      {
        src: '/projects/web-penetration-testing/csrf-alert.jpeg',
        alt: 'OWASP ZAP alert showing the absence of an anti-CSRF token on a localhost form',
        caption: 'ZAP alert — missing anti-CSRF protection',
        width: 602,
        height: 314,
      },
      {
        src: '/projects/web-penetration-testing/parameter-tampering-alert.jpeg',
        alt: 'OWASP ZAP parameter-tampering alert for a localhost login parameter',
        caption: 'ZAP alert — parameter tampering finding',
        width: 472,
        height: 308,
      },
    ],
    sections: [
      {
        eyebrow: 'SCOPE',
        title: 'A bounded local test environment.',
        items: [
          'The assessment was limited to the provided web application running locally through XAMPP.',
          'Selected login, form, input, and parameter-driven pages were included.',
          'The work did not target a public website or external production system.',
        ],
      },
      {
        eyebrow: 'APPROACH',
        title: 'Manual and tool-assisted testing.',
        items: [
          'Manual interaction was used to assess input handling and access-control behavior.',
          'OWASP ZAP supported automated scanning, passive analysis, and traffic inspection.',
          'Evidence, affected routes, risk levels, and potential impacts were documented in the report.',
        ],
      },
      {
        eyebrow: 'FINDINGS',
        title: 'Weaknesses recorded by the team.',
        items: [
          'The report documents SQL injection, reflected XSS, and broken access control from manual testing.',
          'ZAP findings include SQL injection, missing anti-CSRF tokens, and parameter tampering.',
          'These findings are reported for the supplied local application and are not generalized beyond that scope.',
        ],
      },
      {
        eyebrow: 'RECOMMENDATIONS',
        title: 'Mitigations documented with the findings.',
        items: [
          'Use parameterized queries plus input validation and output encoding.',
          'Enforce server-side authentication, authorization, and session checks.',
          'Add anti-CSRF tokens and validate all state-changing requests and parameters.',
        ],
      },
    ],
  },
  {
    slug: 'dvwa-vulnerability-assessment',
    name: 'DVWA Vulnerability Assessment',
    category: 'CYBERSECURITY / WEB APPLICATION SECURITY',
    summary: 'Controlled local testing of command injection and SQL injection in DVWA.',
    description: 'An individual technical project examining command injection and SQL injection in Damn Vulnerable Web Application (DVWA). I configured the deliberately vulnerable application in a local virtualized Kali Linux environment, performed controlled demonstrations at DVWA\'s Low security level, documented the observed behavior, and evaluated defensive controls. This was a learning exercise against a purpose-built local target—not a professional penetration test or production security audit.',
    stack: ['Kali Linux', 'DVWA', 'Apache', 'PHP', 'MySQL / MariaDB', 'Virtualization'],
    features: [
      'Local DVWA environment configured with Apache, PHP, and MySQL/MariaDB',
      'DVWA database created, configured, and initialized for controlled testing',
      'Baseline and injected-input tests documented for command injection',
      'Baseline and injected-input tests documented for SQL injection',
      'Observed lab behavior separated from broader theoretical security impacts',
      'Mitigation recommendations documented without claiming remediation was implemented',
    ],
    image: '/projects/dvwa-vulnerability-assessment/dvwa-testing-environment.png',
    imageLabel: 'DVWA Command Injection module in the controlled local testing environment',
    cover: {
      theme: 'charcoal',
      frame: 'window',
      title: 'DVWA Vulnerability Assessment',
      subtitle: 'Controlled Vulnerability Lab',
      tagline: 'Learning secure design through deliberate flaws.',
      screenshot: '/projects/dvwa-vulnerability-assessment/command-injection-result.png',
      screenshotAlt: 'DVWA Command Injection module displaying command output in the controlled local lab',
      screenshotWidth: 590,
      screenshotHeight: 315,
    },
    note: 'Individual project performed against DVWA in a controlled local virtualized environment. The report documents successful demonstrations at the Low security level. It does not establish a professional client engagement, production-system testing, discovery of unknown vulnerabilities, or implemented remediation. The academic report itself is not published.',
    sources: [],
    status: 'Individual controlled lab project',
    overviewTitle: 'Learning secure input handling through a purpose-built vulnerable application.',
    galleryTitle: 'Evidence from the controlled DVWA lab.',
    galleryIntro: 'Original screenshots extracted from the supplied report. Login fields were excluded, and the SQL payload and sample output are blurred for safer public presentation.',
    gallery: [
      {
        src: '/projects/dvwa-vulnerability-assessment/dvwa-testing-environment.png',
        alt: 'DVWA Command Injection module running in the controlled local Kali Linux testing environment',
        caption: 'Testing environment — locally hosted DVWA command-injection module',
        width: 470,
        height: 317,
      },
      {
        src: '/projects/dvwa-vulnerability-assessment/command-injection-result.png',
        alt: 'DVWA Command Injection module displaying operating system command output in the local lab',
        caption: 'Command injection demonstration — operating system output in the local DVWA lab',
        width: 590,
        height: 315,
      },
      {
        src: '/projects/dvwa-vulnerability-assessment/sql-injection-result-redacted.png',
        alt: 'DVWA SQL Injection module with the payload and sample output intentionally blurred',
        caption: 'SQL injection demonstration — payload and sample output blurred for publication',
        width: 480,
        height: 320,
      },
    ],
    sections: [
      {
        eyebrow: 'ROLE & RESPONSIBILITIES',
        title: 'Individual setup, testing, analysis, and documentation.',
        items: [
          'Configured the local virtualized Kali Linux environment and installed the Apache, PHP, and MySQL/MariaDB components required by DVWA.',
          'Placed DVWA under the Apache web directory, adjusted access permissions, configured the database connection, restarted the services, and initialized the DVWA database.',
          'Performed and documented the controlled vulnerability demonstrations independently, then summarized their security implications and recommended mitigations.',
        ],
      },
      {
        eyebrow: 'TESTING METHODOLOGY',
        title: 'Baseline behavior followed by controlled injection tests.',
        items: [
          'Accessed DVWA through localhost in Mozilla Firefox inside the isolated learning environment.',
          'Used normal input first to confirm the command-injection and SQL-injection modules behaved as expected before introducing crafted input.',
          'The documented demonstrations and published evidence are limited to DVWA\'s Low security level; no results are claimed for other security levels.',
        ],
      },
      {
        eyebrow: 'VULNERABILITIES DEMONSTRATED',
        title: 'Unsafe input reached system and database operations.',
        items: [
          'Command injection was demonstrated when crafted input caused the local DVWA host to return operating system command output in addition to the expected ping response.',
          'SQL injection was demonstrated when crafted input altered the intended database query and returned multiple sample user records from DVWA.',
          'These are established vulnerabilities intentionally included in DVWA; the project does not claim discovery of new security flaws.',
        ],
      },
      {
        eyebrow: 'FINDINGS & IMPLICATIONS',
        title: 'Observed lab results, bounded from theoretical risk.',
        items: [
          'The lab directly showed unintended command execution and unintended retrieval of DVWA sample records under the configured Low security setting.',
          'Broader outcomes such as server compromise, authentication bypass, sensitive-data exposure, or database modification are security implications discussed in the report—not additional impacts observed on external systems.',
          'No public or production target was tested, and the report does not document persistence, privilege escalation, or access beyond the local DVWA environment.',
        ],
      },
      {
        eyebrow: 'RECOMMENDED MITIGATIONS',
        title: 'Reduce risk through secure input handling and layered controls.',
        items: [
          'Validate expected input and use allowlists when an application must accept values used by system commands.',
          'Use prepared statements and parameterized queries so database input remains data instead of changing SQL structure.',
          'Apply least-privilege permissions, restrict dangerous system functions, and add layered controls such as security testing and web application firewall rules.',
          'These controls are recommendations from the report; remediation implementation was not demonstrated or verified.',
        ],
      },
      {
        eyebrow: 'KEY LEARNING OUTCOMES',
        title: 'Connecting vulnerable behavior to defensive engineering.',
        items: [
          'Built practical familiarity with a local LAMP-style security lab and DVWA database initialization.',
          'Observed how insufficient validation can let untrusted input cross command and SQL execution boundaries.',
          'Practiced documenting reproducible evidence, separating confirmed observations from possible impacts, and mapping findings to specific defensive controls.',
        ],
      },
    ],
  },
  {
    slug: 'campusvoice',
    name: 'CampusVoice — AI-Powered Student Complaint & Comment Classifier',
    category: 'MOBILE DEVELOPMENT / ARTIFICIAL INTELLIGENCE',
    summary: 'Classifying campus feedback with a private, locally hosted language model.',
    description: 'CampusVoice is an academic Flutter mobile application for submitting student complaints and comments to a locally hosted AI service. The app sends authenticated HTTPS requests through a private Tailscale connection to Open WebUI, which coordinates Llama 3.2 3B inference through Ollama. A strict Dart parser validates the returned JSON before the category, sentiment, and model-estimated confidence are shown or added to session history.',
    stack: ['Flutter', 'Dart', 'Ollama', 'Llama 3.2 3B', 'Open WebUI', 'Docker', 'Docker Compose', 'Tailscale', 'REST API', 'JSON'],
    features: [
      'Student name, faculty, optional student number, and complaint or comment submission fields',
      'Live AI classification across seven supported campus categories, with uncategorised handling for unrelated or unclear comments',
      'Positive, negative, and neutral sentiment classification with a clearly labelled model-estimated confidence score',
      'Validated result card plus newest-first, session-only classification history',
      'Independent category and sentiment controls that support combined history filtering',
      'Runtime-configured HTTPS service URL and obscured API key that are not saved to disk',
      'Loading feedback and distinct configuration, authentication, timeout, network, server, and invalid-response errors',
      'Strict rejection of malformed JSON, unexpected fields, unsupported values, incorrect types, and out-of-range confidence',
    ],
    image: '/projects/campusvoice/road-negative.png',
    imageLabel: 'CampusVoice running on a Pixel 10a with a negative road classification result',
    imageFit: 'contain',
    cover: {
      theme: 'lavender',
      title: 'CampusVoice',
      subtitle: 'AI-Powered Student Feedback',
      tagline: 'Smarter feedback through local AI.',
      screenshot: '/projects/campusvoice/road-negative.png',
      screenshotAlt: 'CampusVoice complaint submission with a negative road classification result',
      screenshotWidth: 540,
      screenshotHeight: 1212,
    },
    note: 'Source-verified academic project. Classification history and connection settings exist only for the current app process. The genuine Pixel 10a screenshots were extracted from the supplied updated project report and use demo identities. Screenshots containing private connection details were deliberately excluded. The private local AI environment is not presented as a commercial or publicly deployed service.',
    sources: [],
    status: 'Academic Flutter and local AI integration project',
    overviewTitle: 'Private local AI, presented through a focused mobile workflow.',
    galleryTitle: 'Classification outcomes and session review.',
    galleryIntro: 'Genuine Pixel 10a screenshots from the supplied updated CampusVoice report. Private connection details and credentials are not shown.',
    gallery: [
      {
        src: '/projects/campusvoice/road-negative.png',
        alt: 'CampusVoice result card classifying a pothole complaint as Roads with negative sentiment and an 80 percent model-estimated confidence',
        caption: 'Road complaint — negative sentiment with model-estimated confidence',
        width: 540,
        height: 1212,
      },
      {
        src: '/projects/campusvoice/residential-positive.png',
        alt: 'CampusVoice result card classifying same-day room lock repair as Residential college with positive sentiment and a 90 percent model-estimated confidence',
        caption: 'Residential college feedback — positive sentiment after a same-day repair',
        width: 540,
        height: 1212,
      },
      {
        src: '/projects/campusvoice/cocurricular-neutral.png',
        alt: 'CampusVoice result card classifying a Wednesday co-curricular briefing announcement as neutral with a 50 percent model-estimated confidence',
        caption: 'Co-curricular announcement — neutral sentiment for a factual schedule',
        width: 540,
        height: 1212,
      },
      {
        src: '/projects/campusvoice/session-history.png',
        alt: 'CampusVoice submission history showing positive residential college feedback and a negative road complaint with category, sentiment, and confidence chips',
        caption: 'Session history — newest-first classifications with result chips',
        width: 540,
        height: 1212,
      },
      {
        src: '/projects/campusvoice/negative-filter.png',
        alt: 'CampusVoice submission history filtered to negative sentiment and showing one road complaint',
        caption: 'Sentiment filtering — history narrowed to negative classifications',
        width: 540,
        height: 1212,
      },
    ],
    sections: [
      {
        eyebrow: 'PROBLEM STATEMENT',
        title: 'Turn unstructured campus feedback into consistent, reviewable signals.',
        items: [
          'Student complaints and comments arrive as free text, making manual categorisation and sentiment review repetitive and inconsistent.',
          'The project explores how a compact local language model can organise feedback without sending submissions to a public cloud AI provider.',
          'Because generative output is probabilistic, the mobile client treats every response as untrusted data and validates it before presentation.',
        ],
      },
      {
        eyebrow: 'MY TECHNICAL CONTRIBUTIONS',
        title: 'A complete Flutter-to-local-AI integration path.',
        items: [
          'Built the Material 3 submission, result, connection-settings, and history interfaces in Flutter and Dart.',
          'Integrated the authenticated Open WebUI chat-completions API with a task-specific system prompt, few-shot examples, low temperature, and JSON-only response request.',
          'Defined the classification model, exact category and sentiment allowlists, null-category handling, confidence bounds, and combined history filters.',
          'Implemented typed failure handling and automated model, API-client, and widget tests without replacing live inference with hard-coded production behaviour.',
        ],
      },
      {
        eyebrow: 'KEY FEATURES',
        title: 'Submission, classification, and session review in one mobile app.',
        items: [
          'The form requires a student name, faculty, and complaint or comment; the student number remains optional.',
          'The result interface displays a human-readable category, one of three sentiments, and an estimated confidence percentage with an explicit accuracy disclaimer.',
          'Successful classifications are inserted into an in-memory newest-first history that can be cleared and filtered by category, sentiment, or both.',
          'Connection settings stay runtime-configurable and temporary, while the API key field is obscured by default.',
        ],
      },
      {
        eyebrow: 'AI CLASSIFICATION WORKFLOW',
        title: 'From a Flutter form to a schema-validated result.',
        items: [
          'Flutter Mobile App -> authenticated HTTPS request -> Tailscale private network -> Open WebUI -> Ollama -> Llama 3.2 3B -> JSON response -> Flutter validation and results interface.',
          'Flutter owns input validation, loading state, error feedback, response parsing, display, and session history. Tailscale provides private reachability between the phone and host without publishing the service openly.',
          'Open WebUI supplies the authenticated OpenAI-compatible API layer. Ollama runs the model locally, and Llama 3.2 3B performs the requested category, sentiment, and confidence estimation.',
          'Only a response matching the exact three-field schema is accepted; invalid model output becomes a visible error instead of a successful classification.',
        ],
      },
      {
        eyebrow: 'DOCKER & BACKEND INFRASTRUCTURE',
        title: 'Two persistent services on a private Docker network.',
        items: [
          'The inspected Docker Compose file defines separate Ollama and Open WebUI services on a shared bridge network, with Open WebUI depending on Ollama.',
          'Named volumes preserve Ollama model data and Open WebUI application data across container restarts.',
          'Open WebUI is bound to the host loopback interface; host-managed Tailscale access provides the private HTTPS path used by the mobile app.',
          'This arrangement is coursework infrastructure for local inference, not a public production hosting architecture.',
        ],
      },
      {
        eyebrow: 'API INTEGRATION',
        title: 'Authenticated requests with a strict trust boundary.',
        items: [
          'The client accepts only an HTTPS base URL without embedded credentials, requires a runtime API key, and sends it as a bearer token in the request header.',
          'Faculty and comment values are encoded as JSON data in the final user message, while the system prompt instructs the model not to follow commands inside submitted text.',
          'The request disables streaming, uses a low temperature, and asks for a JSON object containing category, sentiment, and the model\'s estimated confidence.',
          'The parser checks the Open WebUI response envelope and rejects missing choices, missing content, malformed JSON, wrong types, unsupported values, extra fields, and confidence outside zero to 100.',
        ],
      },
      {
        eyebrow: 'TESTING & VALIDATION',
        title: 'Local schema checks plus an opt-in live-model procedure.',
        items: [
          'Automated coverage exercises valid and invalid classifications, all seven category labels, null-category display, confidence bounds, exact keys, field types, and combined filtering.',
          'Mock HTTP tests cover bearer authentication, request structure, prompt examples, parsing, authentication failure, unreachable service, timeout, malformed content, and invalid model values.',
          'Widget tests verify form requirements, a real-shaped classification response, the result interface, history, and filters.',
          'The latest local verification reported a clean Flutter analysis and 22 passing automated tests. Six credential-dependent live Open WebUI cases remained intentionally skipped until run against the private service.',
        ],
      },
      {
        eyebrow: 'TECHNICAL CHALLENGES',
        title: 'Making probabilistic output safe enough for a typed interface.',
        items: [
          'A key prompt-design challenge was distinguishing neutral factual announcements from positive feedback while still treating factual descriptions of faults as negative.',
          'The integration needed to preserve genuine local inference while handling model responses as potentially malformed or unsupported data.',
          'Mobile-to-host connectivity required a private HTTPS route, runtime authentication, and useful error states without embedding infrastructure details or secrets in source code.',
        ],
      },
      {
        eyebrow: 'LEARNING OUTCOMES',
        title: 'Prompt design works best beside deterministic validation.',
        items: [
          'Strengthened practical Flutter state-management, form-validation, responsive Material UI, and REST integration skills.',
          'Learned to separate a model\'s confidence estimate from measured accuracy and to avoid presenting prompt improvements as a guarantee.',
          'Applied defence-in-depth through constrained prompts, structured output requests, strict local schema validation, typed failures, and private networking.',
          'Documented the boundary between source-verified application behaviour, credential-dependent live inference, and academic infrastructure that is not publicly deployed.',
        ],
      },
    ],
  },
  {
    slug: 'flutter-user-directory',
    name: 'Flutter User Directory Application',
    category: 'MOBILE DEVELOPMENT / API INTEGRATION',
    summary: 'A Flutter mobile client for browsing cloud-hosted user information.',
    description: 'A Flutter and Dart application that retrieves user data from the JSONPlaceholder REST API through HTTPS GET requests, parses nested JSON into User, Address, and Company models, and presents the results in a mobile user directory.',
    stack: ['Flutter', 'Dart', 'JSONPlaceholder REST API', 'HTTP', 'Android Emulator'],
    features: [
      'HTTPS GET requests to the JSONPlaceholder users endpoint',
      'User, Address, and Company models with JSON parsing',
      'Directory cards displaying each user’s name, email address, and city',
      'Individual detail screens for contact, address, and company information',
      'Loading indicator, connection-error state, and retry functionality',
      'Tested using an Android Virtual Device emulator',
    ],
    image: '/projects/flutter-user-directory/user-directory.png',
    imageLabel: 'Flutter User Directory list running in an Android emulator',
    imageFit: 'contain',
    cover: {
      theme: 'blue',
      title: 'User Directory',
      subtitle: 'Flutter REST API Application',
      tagline: 'Simple access to connected data.',
      screenshot: '/projects/flutter-user-directory/user-directory.png',
      screenshotAlt: 'Flutter User Directory application listing connected user data',
      screenshotWidth: 387,
      screenshotHeight: 885,
    },
    note: 'Implementation details and screenshots are taken from the supplied lab report. The application was tested on an Android emulator; no public repository or live deployment was supplied.',
    sources: [],
    status: 'Android emulator-tested application',
    overviewTitle: 'Cloud data in a focused mobile interface.',
    galleryTitle: 'Application states and navigation.',
    galleryIntro: 'Original Android-emulator screenshots extracted from the supplied lab report.',
    gallery: [
      {
        src: '/projects/flutter-user-directory/user-directory.png',
        alt: 'Flutter User Directory home screen listing names, email addresses, and cities in an Android emulator',
        caption: 'User directory — names, email addresses, and cities from JSONPlaceholder',
        width: 387,
        height: 885,
      },
      {
        src: '/projects/flutter-user-directory/user-details.png',
        alt: 'Flutter user details screen showing contact, address, and company information',
        caption: 'User details — contact, address, and nested company data',
        width: 376,
        height: 901,
      },
      {
        src: '/projects/flutter-user-directory/loading-state.png',
        alt: 'Flutter User Directory loading screen with a progress indicator',
        caption: 'Loading state while the application retrieves users',
        width: 391,
        height: 905,
      },
      {
        src: '/projects/flutter-user-directory/error-retry.png',
        alt: 'Flutter User Directory offline error screen with a Retry button',
        caption: 'Connection-error state with retry functionality',
        width: 390,
        height: 916,
      },
    ],
    sections: [
      {
        eyebrow: 'API & DATA',
        title: 'Structured REST API integration.',
        items: [
          'The application sends an HTTPS GET request to the JSONPlaceholder users endpoint.',
          'Successful JSON responses are decoded into User, Address, and Company model objects.',
          'Nested address and company fields are presented alongside core user information.',
        ],
      },
      {
        eyebrow: 'INTERFACE',
        title: 'Directory and detail views.',
        items: [
          'A scrollable directory displays user names, email addresses, and cities.',
          'Selecting a user opens a separate detail screen using Flutter navigation.',
          'The detail view organizes contact, full address, and company information into sections.',
        ],
      },
      {
        eyebrow: 'STATE HANDLING',
        title: 'Feedback across network states.',
        items: [
          'A loading indicator is shown while the request is in progress.',
          'Connection failures display a clear error state instead of terminating the application.',
          'The Retry control requests the data again after connectivity is restored.',
        ],
      },
    ],
  },
];

export const featuredProjects = projects.filter(
  (project): project is Project & { image: string; imageLabel: string; previewLabel: string; previewBadge: string } => Boolean(
    project.featured && project.image && project.imageLabel && project.previewLabel && project.previewBadge,
  ),
);
