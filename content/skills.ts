// Public repository evidence is recorded in README.md; other skills are user-confirmed.
type SkillGroup = {
  number: string; title: string;
  icon: 'code' | 'database' | 'cloud' | 'git' | 'network' | 'tools' | 'design';
  description: string;
  items: { name: string; kind?: string }[];
  evidence: { label: string; href: string }[];
};
export const skills: SkillGroup[] = [
  { number: '01', title: 'Programming & Web', icon: 'code',
    description: 'Web interfaces, PHP-backed applications, and native Android projects, alongside Java and C++ used in academic work.',
    items: [{ name: 'HTML', kind: 'Markup' }, { name: 'CSS', kind: 'Stylesheets' }, { name: 'JavaScript', kind: 'Language' }, { name: 'PHP', kind: 'Language' }, { name: 'Java', kind: 'Language' }, { name: 'C++', kind: 'Language' }, { name: 'Kotlin', kind: 'Language' }],
    evidence: [{ label: 'InternPilih', href: '/projects/internpilih' }, { label: 'GetInTheCar', href: '/projects/getinthecar' }, { label: 'Zakat', href: '/projects/zakat' }, { label: 'Diploma projects', href: '/projects#diploma-projects' }] },
  { number: '02', title: 'Databases & Backend', icon: 'database',
    description: 'Relational databases and backend services across internship-management and diploma database projects.',
    items: [{ name: 'PostgreSQL', kind: 'Relational database' }, { name: 'MySQL', kind: 'Relational database' }, { name: 'Supabase', kind: 'Backend platform' }, { name: 'Microsoft Access', kind: 'Desktop database' }],
    evidence: [{ label: 'InternPilih: PostgreSQL and Supabase integration', href: 'https://github.com/alifmukhlis06-svg/InternPilih/tree/main/database/supabase' }, { label: 'Online Library System: Access and MySQL', href: '/projects#diploma-projects' }] },
  { number: '03', title: 'Cloud & Deployment', icon: 'cloud',
    description: 'Deploying web projects with Vercel, including InternPilih deployment and routing configuration.',
    items: [{ name: 'Vercel', kind: 'Deployment platform' }],
    evidence: [{ label: 'InternPilih deployment configuration', href: 'https://github.com/alifmukhlis06-svg/InternPilih/blob/main/vercel.json' }] },
  { number: '04', title: 'Version Control', icon: 'git',
    description: 'Using Git for source version control and GitHub to host and share project repositories.',
    items: [{ name: 'Git', kind: 'Version control system' }, { name: 'GitHub', kind: 'Repository hosting' }],
    evidence: [{ label: 'My GitHub repositories', href: 'https://github.com/alifmukhlis06-svg' }] },
  { number: '05', title: 'Networking & IT Support', icon: 'network',
    description: 'Practical support in a hospital environment, complemented by network configuration work in academic study.',
    items: [{ name: 'Network configuration' }, { name: 'Troubleshooting' }, { name: 'Hardware support' }, { name: 'Windows installation' }, { name: 'Printer configuration' }, { name: 'IT helpdesk support' }],
    evidence: [{ label: 'Hospital Raja Permaisuri Bainun internship', href: '#work-experience' }] },
  { number: '06', title: 'Development Tools', icon: 'tools',
    description: 'Editors, IDEs, and mobile development tools used across my academic and software project work.',
    items: [{ name: 'VS Code', kind: 'Code editor' }, { name: 'Visual Studio', kind: 'IDE' }, { name: 'Android Studio', kind: 'IDE' }, { name: 'Flutter', kind: 'UI framework' }, { name: 'Dart', kind: 'Language' }, { name: 'Android', kind: 'Mobile platform' }, { name: 'Gradle', kind: 'Build tool' }, { name: 'Material Components', kind: 'UI library' }],
    evidence: [{ label: 'Zakat: native Android project', href: '/projects/zakat' }, { label: 'Diploma library interface: Visual Studio', href: '/projects#diploma-projects' }] },
  { number: '07', title: 'Design & Productivity', icon: 'design',
    description: 'Design, media editing, documentation, and diagramming tools used during my studies and project work.',
    items: [{ name: 'Adobe Illustrator' }, { name: 'Adobe Photoshop' }, { name: 'Adobe Premiere Pro' }, { name: 'Microsoft Office' }, { name: 'Microsoft Visio' }], evidence: [] },
];
