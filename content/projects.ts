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
    previewLabel: 'internpilih.vercel.app',
    previewBadge: 'FEATURED PROJECT',
    note: 'Landing-page capture from the public deployment. Feature descriptions are based on the public repository; production backend behavior has not been independently tested.',
    sources: [{ label: 'Public source tree', url: 'https://github.com/alifmukhlis06-svg/InternPilih' }, { label: 'Live website', url: 'https://internpilih.vercel.app/' }],
    featured: true,
  },
  {
    slug: 'getinthecar',
    name: 'GetInTheCar',
    category: 'WEB APPLICATION / E-HAILING',
    summary: 'A simpler way to plan a ride.',
    description: 'A browser-based e-hailing interface with pickup and destination fields, vehicle selection, fare estimation, driver selection, and ride-history views. The inspected booking flow uses client-side demo data and simulated matching.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    features: ['Pickup and destination booking interface', 'Car and motorcycle selection', 'Distance-based fare calculation with minimum fares', 'Simulated driver selection and ride history'],
    github: 'https://github.com/alifmukhlis06-svg/GetInTheCar',
    image: '/projects/getinthecar.webp',
    imageLabel: 'GetInTheCar booking interface rendered from public source',
    previewLabel: 'GETINTHECAR / BOOKING INTERFACE',
    previewBadge: 'SOURCE-RENDERED INTERFACE',
    note: 'Source-rendered interface. Driver matching and ride records in the inspected flow are simulated; this is not presented as a live transport service.',
    sources: [{ label: 'Booking interface source', url: 'https://github.com/alifmukhlis06-svg/GetInTheCar/blob/main/user.html' }],
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
  {
    slug: 'coffee-shop-website',
    name: 'Coffee Shop Website',
    category: 'WEB DEVELOPMENT',
    summary: 'A PHP-connected website for browsing a café’s core information.',
    description: 'A coffee shop website with a menu, store locator, and contact form, connected using PHP.',
    stack: ['PHP'],
    features: ['Menu browsing', 'Store locator', 'Contact form'],
    note: 'Project details are based on the latest résumé. No public repository, live deployment, or verified screenshot was supplied.',
    sources: [],
    overviewTitle: 'A focused informational website.',
  },
  {
    slug: 'online-library-system',
    name: 'Online Library System',
    category: 'DATABASE APPLICATION',
    summary: 'A database-backed library interface built with desktop development tools.',
    description: 'A library system combining Microsoft Access and MySQL databases with an interface developed in Visual Studio.',
    stack: ['Microsoft Access', 'MySQL', 'Visual Studio'],
    features: ['Database application structure', 'Visual Studio interface', 'Microsoft Access and MySQL data technologies'],
    note: 'Project details are based on the latest résumé. No public repository, live deployment, or verified screenshot was supplied.',
    sources: [],
    overviewTitle: 'A database and interface project.',
  },
];

export const featuredProjects = projects.filter(
  (project): project is Project & { image: string; imageLabel: string; previewLabel: string; previewBadge: string } => Boolean(
    project.featured && project.image && project.imageLabel && project.previewLabel && project.previewBadge,
  ),
);
