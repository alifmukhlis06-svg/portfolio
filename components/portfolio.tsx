'use client';
import Link from 'next/link';
import { AnimatePresence, animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Code2, Network, Database, Cloud, Wrench, ShieldCheck, Cpu, Languages, Github, GraduationCap, BriefcaseBusiness, ImagePlus, Linkedin, Mail, FileText, Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { assetPath } from '@/lib/asset-path';
import { personal } from '@/content/personal';
import { featuredProjects } from '@/content/projects';
import { skills } from '@/content/skills';
import { achievements } from '@/content/achievements';
import { experience, type TimelineEntry } from '@/content/experience';
import { education } from '@/content/education';
import { curriculum } from '@/content/curriculum';
export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.12 });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!ref.current) return;
    if (reduce) { animate(ref.current, { opacity: 1, y: 0 }, { duration: 0 }); return; }
    if (!visible) return;
    const animation = animate(ref.current, { opacity: [0.7, 1], y: [16, 0] }, { duration: 0.5 });
    return () => animation.stop();
  }, [visible, reduce]);
  return <div ref={ref} className={className}>{children}</div>;
}
export function Portrait({ small = false }: { small?: boolean }) { return personal.portrait ? <img className={small ? 'portrait-small' : 'portrait-photo'} src={assetPath(personal.portrait)} alt="Alif Mukhlis" /> : <div className={small ? 'portrait-small portrait-monogram' : 'portrait-placeholder'} role="img" aria-label="Portrait placeholder for Alif Mukhlis">{small ? 'AM' : <><svg viewBox="0 0 420 500" aria-hidden="true"><defs><linearGradient id="figure" x1="0" x2="1" y2="1"><stop stopColor="#a6a8aa" /><stop offset="1" stopColor="#333638" /></linearGradient><linearGradient id="jacket" x1="0" x2="0.8" y2="1"><stop stopColor="#34383a" /><stop offset="1" stopColor="#111516" /></linearGradient></defs><path d="M155 181 Q130 126 154 78 Q177 36 222 49 Q277 48 280 111 L266 181 245 211 178 211Z" fill="url(#figure)" /><path d="M178 183 L174 230 210 268 250 229 245 180" fill="#777b7d" /><path d="M172 218 L210 254 249 218 292 238 339 272 Q371 336 387 500H31Q47 326 83 271L128 240Z" fill="url(#jacket)" /><path d="M174 220 L210 252 249 220 234 351 209 417 185 352Z" fill="#bfc1c1" /><path d="M202 255L218 255 225 279 216 357 208 381 197 354 197 279Z" fill="#232729" /><path d="M160 223L122 265 165 284 147 309 208 426 177 282Z M259 224L295 266 254 284 270 310 212 425 243 282Z" fill="#424749" /></svg><span className="portrait-caption"><ImagePlus size={12} /> YOUR PORTRAIT HERE</span></>}</div>; }
export function Hero() { return <section className="hero" aria-labelledby="hero-title"><div className="hero-topline"><span><i className="status-dot" /> PERSONAL PORTFOLIO</span><span>DEVELOPMENT · NETWORKS · IDEAS</span></div><motion.h1 id="hero-title" className="hero-name" initial={false} animate={{ opacity: [0.7, 1], y: [20, 0] }} transition={{ duration: 0.8 }}>ALIF MUKHLIS</motion.h1><motion.div className="hero-portrait" initial={false} animate={{ opacity: [0.7, 1], y: [20, 0] }} transition={{ duration: 0.8, delay: 0.1 }}><Portrait /></motion.div><div className="hero-side hero-side-left"><span className="eyebrow">HELLO, I’M ALIF</span><p>Netcentric Computing<br />student at UiTM Perlis.</p></div><div className="hero-side hero-side-right"><span className="eyebrow">{personal.distinction}</span><p>Projects across web,<br />networks, IoT &amp; security.</p></div><div className="hero-bottom"><span>NETCENTRIC COMPUTING<br /><b>UiTM Perlis</b></span><a href="#work" className="scroll-link">SCROLL TO EXPLORE <span><ArrowDown size={17} /></span></a><span className="hero-index">PORTFOLIO / 01</span></div></section>; }
export function Gallery() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const project = featuredProjects[active];
  const previous = featuredProjects[(active - 1 + featuredProjects.length) % featuredProjects.length];
  const next = featuredProjects[(active + 1) % featuredProjects.length];
  const change = (direction: number) => setActive((active + direction + featuredProjects.length) % featuredProjects.length);

  return <section id="work" className="section work-section">
    <Reveal>
      <div className="section-heading">
        <div><span className="eyebrow">01 / SELECTED PROJECTS</span><h2>Work Gallery<span className="tiny-dot">.</span></h2></div>
        <Link className="pill-link" href="/projects">All technical projects <ArrowUpRight size={14} /></Link>
      </div>
      <p className="section-intro">A few things I’ve built. Each one, a new perspective.</p>
    </Reveal>
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects" tabIndex={0} onKeyDown={event => {
      if (event.key === 'ArrowRight') { event.preventDefault(); change(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); change(-1); }
    }}>
      <div className="gallery-stage">
        <button className="side-project previous-project" onClick={() => change(-1)} aria-label={`Previous project: ${previous.name}`} tabIndex={-1}>
          <img src={assetPath(previous.image)} alt="" /><span>{previous.name}</span>
        </button>
        <AnimatePresence mode="wait">
          <motion.div className="project-preview" key={project.slug} initial={false} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: reduce ? 0 : -35 }} transition={{ duration: 0.35 }} drag={reduce ? false : 'x'} dragConstraints={{ left: 0, right: 0 }} onDragEnd={(_, info) => { if (Math.abs(info.offset.x) > 55) change(info.offset.x < 0 ? 1 : -1); }}>
            <div className="browser-bar"><span><i /><i /><i /></span><span>{project.previewLabel}</span><ArrowUpRight size={11} /></div>
            <Link href={`/projects/${project.slug}`} aria-label={`Explore ${project.name}`}><img src={assetPath(project.image)} alt={project.imageLabel} width={1440} height={900} draggable={false} /></Link>
            <span className="preview-badge">{project.previewBadge}</span>
          </motion.div>
        </AnimatePresence>
        <button className="side-project next-project" onClick={() => change(1)} aria-label={`Next project: ${next.name}`} tabIndex={-1}>
          <img src={assetPath(next.image)} alt="" /><span>{next.name}</span>
        </button>
      </div>
      <div className="gallery-controls">
        <button className="round-button" aria-label="Previous project" onClick={() => change(-1)}><ArrowLeft size={17} /></button>
        <div className="gallery-dots">{featuredProjects.map((item, index) => <button key={item.slug} onClick={() => setActive(index)} aria-label={`Show ${item.name}`} aria-current={index === active ? 'true' : undefined}><span /></button>)}</div>
        <button className="round-button" aria-label="Next project" onClick={() => change(1)}><ArrowRight size={17} /></button>
      </div>
      <div className="project-caption" aria-live="polite" aria-atomic="true">
        <span className="eyebrow">{project.category}</span><h3>{project.name}</h3><p>{project.summary}</p>
        <div className="tags">{project.stack.slice(0, 4).map(item => <span key={item}>{item}</span>)}</div>
        <Link href={`/projects/${project.slug}`} className="text-link">Explore project <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  </section>;
}
export function Skills() {
  const icons = { code: Code2, database: Database, network: Network, shield: ShieldCheck, cloud: Cloud, cpu: Cpu, tools: Wrench };
  return <section id="skills" className="section skills-section">
    <Reveal className="skills-intro">
      <span className="eyebrow">02 / TOOLKIT & CAPABILITIES</span>
      <h2>What I Can Do<span className="tiny-dot">.</span></h2>
      <p>Technologies I use across verified projects, degree coursework, and practical experience.</p>
    </Reveal>
    {skills.map(group => {
      const Icon = icons[group.icon];
      return <Reveal className="skill-card" key={group.number}>
        <div className="skill-card-top"><span>{group.number}</span><Icon className="muted" size={30} strokeWidth={1.3} aria-hidden="true" /></div>
        <h3>{group.title}</h3><p>{group.description}</p>
        <ul className="skill-technologies">{group.items.map(item => <li key={item.name}><span className="skill-name">{item.icon && <img src={assetPath(item.icon)} alt="" aria-hidden="true" />}<span>{item.name}</span></span>{item.kind && <small>{item.kind}</small>}</li>)}</ul>
        {group.evidence.length > 0 && <div className="skill-evidence"><h4 className="eyebrow">Related work</h4><ul>{group.evidence.map(e => <li key={e.label}><Link href={e.href} target={e.href.startsWith('https:') ? '_blank' : undefined} rel={e.href.startsWith('https:') ? 'noopener noreferrer' : undefined}>{e.label}<ArrowUpRight size={14} aria-hidden="true" /></Link></li>)}</ul></div>}
      </Reveal>;
    })}
    <Reveal className="coursework">
      <span className="eyebrow">UiTM PERLIS · NETCENTRIC COMPUTING</span>
      <h3>Relevant coursework</h3>
      <p>Explore my programme curriculum. These subjects describe academic study, rather than certifications or professional mastery.</p>
      <div className="coursework-groups">{curriculum.map(group => <details key={group.title}>
        <summary>{group.title}<Plus size={18} aria-hidden="true" /></summary>
        <ul>{group.courses.map(course => <li key={course}>{course}</li>)}</ul>
      </details>)}</div>
    </Reveal>
  </section>;
}
export function About() { return <section id="about" className="section about-section"><Reveal><span className="eyebrow">03 / A LITTLE ABOUT ME</span><h2>Curious by nature.<br />A builder by choice.</h2></Reveal><Reveal className="about-body"><div className="about-profile"><Portrait small /><div><h3>{personal.name}</h3><span className="eyebrow">{personal.headline}</span></div></div><p className="about-lead">{personal.introduction}</p><p>{personal.background}</p><div className="about-facts"><div><GraduationCap size={20} /><span>{personal.education}<small>{personal.university}</small></span></div><div><BriefcaseBusiness size={20} /><span>{personal.internship}<small>{personal.organization}, {personal.location}<br />{personal.internshipPeriod}</small></span></div><div><Languages size={20} /><span>Languages<small>{personal.languages.join(' · ')}</small></span></div></div><Link href="/beyond-code" className="text-link">The person beyond the code <ArrowUpRight size={15} /></Link></Reveal></section>; }
export function Awards() { return <section id="awards" className="section awards-section"><Reveal><span className="eyebrow">04 / MILESTONES & MEMORIES</span><h2>Awards & Achievements<span className="tiny-dot">.</span></h2><p className="section-intro">Academic recognition and milestones along the way.</p></Reveal><div className="awards-layout"><Reveal className="photo-collage">{[0, 1, 2, 3, 4].map((n) => <div key={n} className={`photo-slot photo-slot-${n + 1}`}>{achievements[n % achievements.length].image ? <img src={assetPath(achievements[n % achievements.length].image!)} alt={achievements[n % achievements.length].title} loading="lazy" /> : <><ImagePlus size={n % 2 ? 20 : 28} strokeWidth={1} /><span>{['CAMPUS MOMENTS', 'ACADEMIC MILESTONES', 'THE JOURNEY', 'GOOD COMPANY', 'SMALL WINS'][n]}</span><small>Photo to come</small></>}</div>)}</Reveal><Reveal className="award-list">{achievements.map((a, i) => <div className="award-item" key={a.title}><span className="award-number">0{i + 1}</span><div><span className="eyebrow">{a.category}</span><h3>{a.title}</h3><p>{a.detail}</p>{!a.confirmed && <small className="pending-tag">{i === 0 ? 'Details awaiting confirmation' : 'Collection in progress'}</small>}</div></div>)}</Reveal></div></section>; }
function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return <div className="timeline">{entries.map((entry, i) => <Reveal className="timeline-item" key={entry.title}>
    <span className="timeline-number">{String(i + 1).padStart(2, '0')}</span>
    <div><span className="eyebrow">{entry.label}</span><h4>{entry.title}</h4><span className="timeline-place">{entry.place}</span>
      {entry.period && <p className="timeline-period">{entry.period}</p>}
      {entry.result && <p className="academic-result">{entry.result}</p>}
      <p>{entry.description}</p>
    </div>
    {entry.label === 'PROJECT EXPERIENCE' && <Link href="/projects" className="round-button" aria-label="View technical projects"><ArrowUpRight size={19} /></Link>}
  </Reveal>)}</div>;
}
export function Experience() {
  return <section id="experience" className="section experience-section">
    <Reveal><span className="eyebrow">05 / LEARNING IN PRACTICE</span><h2>Education &amp; Experience<span className="tiny-dot">.</span></h2></Reveal>
    <div id="education" className="experience-group"><Reveal><h3>Education</h3></Reveal><Timeline entries={education} /></div>
    <div id="work-experience" className="experience-group"><Reveal><h3>Work Experience</h3></Reveal><Timeline entries={experience.filter(entry => entry.label === 'PROFESSIONAL EXPERIENCE')} /></div>
    <div className="experience-group"><Reveal><h3>Academic &amp; Project Experience</h3></Reveal><Timeline entries={experience.filter(entry => entry.label !== 'PROFESSIONAL EXPERIENCE')} /></div>
  </section>;
}
export function Contact() { const links = [{ name: 'GitHub', value: personal.github, sub: 'Explore my repositories', icon: Github }, { name: 'LinkedIn', value: personal.linkedin, sub: 'View my professional profile', icon: Linkedin }, { name: 'Email', value: personal.email ? `mailto:${personal.email}` : null, sub: personal.email || 'Email address to be added', icon: Mail }]; return <section id="contact" className="section contact-section"><Reveal><span className="eyebrow">06 / SOMETHING GOOD STARTS HERE</span><h2>LET’S<br />WORK<br />TOGETHER<span className="tiny-dot">.</span></h2><p>Thoughtful ideas. Useful things.<br />Let’s see what we can build.</p></Reveal><Reveal className="contact-links">{links.map(l => l.value ? <a className="contact-card" key={l.name} href={l.value} target={l.name !== 'Email' ? '_blank' : undefined} rel="noopener noreferrer"><l.icon size={19} /><span>{l.name}<small>{l.sub}</small></span><ArrowUpRight size={18} /></a> : <div className="contact-card unavailable" key={l.name}><l.icon size={19} /><span>{l.name}<small>{l.sub}</small></span><Plus size={16} /></div>)}{personal.resume ? <a className="resume-link" href={assetPath(personal.resume)} target="_blank" rel="noopener noreferrer"><FileText size={15} /> View résumé <ArrowUpRight size={15} /></a> : <div className="resume-link unavailable"><FileText size={15} /> Résumé coming soon</div>}<p className="contact-note">Connect with me on LinkedIn or email me to discuss opportunities.</p></Reveal></section>; }
