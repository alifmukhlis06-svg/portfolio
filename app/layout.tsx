import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'Alif Mukhlis — Netcentric Computing Student', template: '%s — Alif Mukhlis' },
  description: 'Alif Mukhlis, Netcentric Computing student at UiTM Perlis and former IT Support Intern at Hospital Raja Permaisuri Bainun. Explore web and Android projects.',
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{ __html: `try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch{}` }} /><a className="skip-link" href="#main">Skip to content</a><SiteShell>{children}</SiteShell></body></html>;
}
