type SkillGroup = {
  number: string;
  title: string;
  icon: 'code' | 'database' | 'network' | 'shield' | 'cloud' | 'cpu' | 'tools';
  description: string;
  items: { name: string; kind?: string; icon?: string }[];
  evidence: { label: string; href: string }[];
};

export const skills: SkillGroup[] = [
  {
    number: '01',
    title: 'Programming & Web Development',
    icon: 'code',
    description: 'Web applications, browser interfaces, native Android work, and programming foundations developed across verified projects and coursework.',
    items: [
      { name: 'HTML', kind: 'Markup' },
      { name: 'CSS', kind: 'Stylesheets' },
      { name: 'JavaScript', kind: 'Language' },
      { name: 'PHP', kind: 'Language' },
      { name: 'Java', kind: 'Language' },
      { name: 'C++', kind: 'Language' },
      { name: 'Kotlin', kind: 'Language' },
      { name: 'Flutter & Dart', kind: 'Coursework' },
    ],
    evidence: [
      { label: 'InternPilih', href: '/projects/internpilih' },
      { label: 'GetInTheCar', href: '/projects/getinthecar' },
      { label: 'Zakat calculator', href: '/projects/zakat' },
    ],
  },
  {
    number: '02',
    title: 'Databases & Backend Technologies',
    icon: 'database',
    description: 'Relational databases and backend platforms used across web and database projects.',
    items: [
      { name: 'PostgreSQL', kind: 'Relational database' },
      { name: 'MySQL', kind: 'Relational database' },
      { name: 'Supabase', kind: 'Backend platform' },
      { name: 'Microsoft Access', kind: 'Desktop database' },
    ],
    evidence: [
      { label: 'InternPilih backend', href: '/projects/internpilih' },
    ],
  },
  {
    number: '03',
    title: 'Networking & IT Infrastructure',
    icon: 'network',
    description: 'Network design concepts and practical support experience, presented according to their project, coursework, or workplace context.',
    items: [
      { name: 'VLANs' },
      { name: 'Access Control Lists' },
      { name: 'Cisco switching & routing' },
      { name: 'FortiGate architecture' },
      { name: 'IPsec VPN' },
      { name: 'SD-WAN' },
      { name: 'Wi-Fi 6 planning' },
      { name: 'Cisco Packet Tracer', kind: 'Network simulation, topology design, and network configuration', icon: '/icons/cisco.svg' },
      { name: 'Hardware troubleshooting' },
      { name: 'ICT Asset Management', kind: 'Workplace experience' },
    ],
    evidence: [
      { label: 'GITC Enterprise Network Design', href: '/projects/gitc-enterprise-network-design' },
      { label: 'Hospital IT Support internship', href: '/#work-experience' },
    ],
  },
  {
    number: '04',
    title: 'Cybersecurity & Digital Forensics',
    icon: 'shield',
    description: 'Web security assessment practice and degree coursework in information security, network security, and digital forensics.',
    items: [
      { name: 'OWASP ZAP', kind: 'Security testing' },
      { name: 'Manual web testing' },
      { name: 'SQL injection assessment' },
      { name: 'XSS assessment' },
      { name: 'Access-control testing' },
      { name: 'Digital forensics', kind: 'Coursework' },
    ],
    evidence: [
      { label: 'Web Application Penetration Testing', href: '/projects/web-application-penetration-testing' },
      { label: 'GITC security design', href: '/projects/gitc-enterprise-network-design' },
    ],
  },
  {
    number: '05',
    title: 'Cloud & Deployment',
    icon: 'cloud',
    description: 'Cloud-backed application services and static web deployment used in verified projects.',
    items: [
      { name: 'Vercel', kind: 'Deployment platform' },
      { name: 'GitHub Pages', kind: 'Static hosting' },
    ],
    evidence: [
      { label: 'InternPilih live deployment', href: 'https://internpilih.vercel.app/' },
      { label: 'This portfolio', href: 'https://alifmukhlis06-svg.github.io/portfolio/' },
    ],
  },
  {
    number: '06',
    title: 'IoT & Embedded Systems',
    icon: 'cpu',
    description: 'Connected hardware, sensor integration, and cloud data monitoring documented in the Smart Bathtub prototype.',
    items: [
      { name: 'ESP32', kind: 'Microcontroller' },
      { name: 'Firebase Firestore', kind: 'Cloud database' },
      { name: 'Ultrasonic sensor' },
      { name: 'Temperature sensor' },
      { name: 'Relay & pump control' },
      { name: 'LCD, LED & buzzer' },
    ],
    evidence: [{ label: 'Smart Bathtub Safety & Monitoring System', href: '/projects/smart-bathtub-safety-monitoring' }],
  },
  {
    number: '07',
    title: 'Development Tools',
    icon: 'tools',
    description: 'Version control, editors, IDEs, diagramming, productivity, and media tools used across project work.',
    items: [
      { name: 'Git', kind: 'Version control' },
      { name: 'GitHub', kind: 'Repository hosting' },
      { name: 'VS Code', kind: 'Code editor' },
      { name: 'Visual Studio', kind: 'IDE' },
      { name: 'Android Studio', kind: 'IDE' },
      { name: 'Arduino IDE', kind: 'Embedded development' },
      { name: 'Microsoft Visio', kind: 'Diagramming' },
      { name: 'Adobe Creative tools', kind: 'Design & media' },
    ],
    evidence: [{ label: 'GitHub repositories', href: 'https://github.com/alifmukhlis06-svg' }],
  },
  {
    number: '08',
    title: 'Virtualization & System Administration',
    icon: 'cpu',
    description: 'Familiarity with virtual machines, virtualization, and operating system environments.',
    items: [
      { name: 'VMware', kind: 'Virtualization platform', icon: '/icons/vmware.svg' },
    ],
    evidence: [],
  },
];
