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
    number: '01', title: 'Cloud & DevOps', icon: 'cloud',
    description: 'Deployment, containerization, source control, and private networking used across verified projects.',
    items: [
      { name: 'Vercel', kind: 'Deployment platform', icon: '/icons/vercel.svg' },
      { name: 'Supabase', kind: 'Backend platform', icon: '/icons/supabase.svg' },
      { name: 'Docker' }, { name: 'Docker Compose' }, { name: 'Containerization' },
      { name: 'Git', kind: 'Version control', icon: '/icons/git.svg' },
      { name: 'GitHub', kind: 'Repository hosting', icon: '/icons/github.svg' }, { name: 'Tailscale' },
    ],
    evidence: [
      { label: 'InternPilih deployment', href: 'https://internpilih.vercel.app/' },
      { label: 'CampusVoice infrastructure', href: '/projects/campusvoice' },
    ],
  },
  {
    number: '02', title: 'Databases & APIs', icon: 'database',
    description: 'Relational, cloud-hosted, and document databases with structured web API integration.',
    items: [
      { name: 'PostgreSQL', kind: 'Relational database', icon: '/icons/postgresql.svg' },
      { name: 'MySQL', kind: 'Relational database' }, { name: 'Firebase Firestore', kind: 'Cloud database' },
      { name: 'SQL' }, { name: 'REST APIs' }, { name: 'JSON' },
    ],
    evidence: [
      { label: 'InternPilih backend', href: '/projects/internpilih' },
      { label: 'Flutter User Directory API', href: '/projects/flutter-user-directory' },
    ],
  },
  {
    number: '03', title: 'Networking & Security', icon: 'network',
    description: 'Enterprise network design, routing and switching foundations, and authorized web security testing.',
    items: [
      { name: 'TCP/IP' }, { name: 'VLANs' }, { name: 'ACLs' }, { name: 'Routing & switching', kind: 'Fundamentals' },
      { name: 'VPN & firewall design' },
      { name: 'Cisco Packet Tracer', kind: 'Network simulation', icon: '/icons/cisco.svg' },
      { name: 'OWASP ZAP', kind: 'Security testing' }, { name: 'DVWA', kind: 'Controlled lab' },
    ],
    evidence: [
      { label: 'GITC — Enterprise Network Architecture & Design', href: '/projects/gitc-enterprise-network-design' },
      { label: 'DVWA Vulnerability Assessment', href: '/projects/dvwa-vulnerability-assessment' },
    ],
  },
  {
    number: '04', title: 'Programming & Mobile', icon: 'code',
    description: 'Languages and frameworks applied across full-stack web, Android, and Flutter coursework projects.',
    items: [
      { name: 'Java' }, { name: 'C++' }, { name: 'JavaScript' }, { name: 'PHP' },
      { name: 'HTML' }, { name: 'CSS' }, { name: 'Kotlin' }, { name: 'Flutter' },
      { name: 'Dart' }, { name: 'Android XML' },
    ],
    evidence: [
      { label: 'InternPilih', href: '/projects/internpilih' },
      { label: 'CampusVoice', href: '/projects/campusvoice' },
      { label: 'Zakat calculator', href: '/projects/zakat' },
    ],
  },
  {
    number: '05', title: 'Systems & Virtualization', icon: 'cpu',
    description: 'Operating-system, local server, and virtualization experience from IT support and controlled lab work.',
    items: [
      { name: 'Windows' }, { name: 'Linux', kind: 'Basics' }, { name: 'Kali Linux' },
      { name: 'VMware', kind: 'Familiarity', icon: '/icons/vmware.svg' }, { name: 'Apache' },
    ],
    evidence: [
      { label: 'Hospital IT Support internship', href: '/#work-experience' },
      { label: 'DVWA local security lab', href: '/projects/dvwa-vulnerability-assessment' },
    ],
  },
  {
    number: '06', title: 'AI & IoT', icon: 'cpu',
    description: 'Local language-model infrastructure and sensor-based embedded prototyping.',
    items: [
      { name: 'Ollama' }, { name: 'Open WebUI' }, { name: 'Llama 3.2' },
      { name: 'ESP32' }, { name: 'Arduino IDE', kind: 'Embedded development' },
    ],
    evidence: [
      { label: 'CampusVoice local AI', href: '/projects/campusvoice' },
      { label: 'Smart Bathtub Safety & Monitoring System', href: '/projects/smart-bathtub-safety-monitoring' },
    ],
  },
  {
    number: '07', title: 'Development Tools', icon: 'tools',
    description: 'Editors, IDEs, local development environments, diagramming, and productivity tools.',
    items: [
      { name: 'VS Code' }, { name: 'Visual Studio' }, { name: 'Android Studio' },
      { name: 'XAMPP' }, { name: 'phpMyAdmin' }, { name: 'Microsoft Office' }, { name: 'Microsoft Visio' },
    ],
    evidence: [{ label: 'GitHub repositories', href: 'https://github.com/alifmukhlis06-svg' }],
  },
];
