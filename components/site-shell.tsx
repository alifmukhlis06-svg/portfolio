'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { MotionConfig } from 'framer-motion';
const navigation = [['Work', '/#work'], ['What I can do', '/#skills'], ['About', '/#about'], ['Awards', '/#awards'], ['Experience', '/#experience']];
export function SiteShell({ children }: { children: React.ReactNode }) {
  const [light, setLight] = useState(false); const [open, setOpen] = useState(false);
  useEffect(() => { setLight(document.documentElement.dataset.theme === 'light'); }, []);
  function toggleTheme() { const value = !light; setLight(value); document.documentElement.dataset.theme = value ? 'light' : 'dark'; try { localStorage.setItem('theme', value ? 'light' : 'dark'); } catch {} }
  return <MotionConfig reducedMotion="user"><header className="nav-wrap"><nav className="nav-bar" aria-label="Main navigation"><Link href="/" className="brand" aria-label="Alif Mukhlis home"><span className="brand-icon">a.</span><span>ALIF MUKHLIS</span></Link><div className="desktop-nav">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="nav-actions"><button className="icon-button theme-button" onClick={toggleTheme} aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}>{light ? <Moon size={16} /> : <Sun size={16} />}</button><Link href="/#contact" className="hire-link">Let’s talk <ArrowUpRight size={13} /></Link><button className="icon-button menu-button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button></div></nav>{open && <div id="mobile-navigation" className="mobile-nav">{[...navigation, ['Technical projects', '/projects'], ['Beyond code', '/beyond-code']].map(([label, href]) => <Link onClick={() => setOpen(false)} key={href} href={href}>{label}<ArrowUpRight size={16} /></Link>)}</div>}</header>{children}<footer className="footer"><Link href="/" className="brand"><span className="brand-icon">a.</span><span>ALIF MUKHLIS</span></Link><p>Thoughtfully built. Always learning.</p><div><Link href="/projects">Technical projects</Link><Link href="/beyond-code">Beyond code</Link><a href="#main">Back to top ↑</a></div></footer></MotionConfig>;
}
