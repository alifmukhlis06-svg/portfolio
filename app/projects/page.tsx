import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/portfolio';
import { projects } from '@/content/projects';
import { assetPath } from '@/lib/asset-path';

export const metadata = { title: 'Technical Projects' };

export default function Projects() {
  return (
    <main id="main" className="inner-page section">
      <Link className="text-link" href="/#work"><ArrowLeft size={15} /> Back to portfolio</Link>
      <span className="eyebrow page-eyebrow">SYSTEMS, SOFTWARE &amp; INTERFACES</span>
      <h1>Technical Projects<span className="tiny-dot">.</span></h1>
      <p className="page-intro">Software, networking, IoT, cybersecurity, and database work in one place.</p>

      <div className="project-list">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="project-list-card">
              <div className={`project-list-image${project.imageFit === 'contain' ? ' project-list-image-contain' : ''}`}>
                {project.image && project.imageLabel ? (
                  <img
                    src={assetPath(project.image)}
                    alt={project.imageLabel}
                    width={1440}
                    height={900}
                    loading={index ? 'lazy' : 'eager'}
                  />
                ) : (
                  <div className="project-list-placeholder" aria-hidden="true">
                    <span>{project.category}</span>
                    <strong>{project.name}</strong>
                  </div>
                )}
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="project-list-info">
                <div>
                  <span className="eyebrow">{project.category}</span>
                  <h2>{project.name}</h2>
                  <p>{project.summary}</p>
                  <div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                </div>
                <span className="round-button"><ArrowUpRight size={20} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
