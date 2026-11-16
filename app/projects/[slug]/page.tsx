import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import { projects } from '@/content/projects';
import { assetPath } from '@/lib/asset-path';

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.name ?? 'Project not found', description: project?.summary };
}

export default async function Detail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const hasLinks = project.website || project.github;

  return (
    <main id="main" className="inner-page section detail-page">
      <Link className="text-link" href="/projects"><ArrowLeft size={15} /> All projects</Link>
      <span className="eyebrow page-eyebrow">{project.category}</span>
      <h1>{project.name}<span className="tiny-dot">.</span></h1>
      <p className="page-intro">{project.summary}</p>

      {hasLinks && (
        <div className="detail-links">
          {project.website && <a className="pill-link filled" href={project.website} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={15} /></a>}
          {project.github && <a className="pill-link" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> View source <ArrowUpRight size={15} /></a>}
        </div>
      )}

      {project.gallery ? (
        <section className="project-media" aria-labelledby="project-media-title">
          <span className="eyebrow">PROJECT VISUALS</span>
          <h2 id="project-media-title">{project.galleryTitle}</h2>
          <p>{project.galleryIntro} Open any image to inspect it at full resolution.</p>
          <div className="diagram-gallery">
            {project.gallery.map((image, index) => (
              <figure className={index === 0 ? 'diagram-featured' : undefined} key={image.src}>
                <a href={assetPath(image.src)} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${image.caption}`}>
                  <img src={assetPath(image.src)} alt={image.alt} width={image.width} height={image.height} loading={index ? 'lazy' : 'eager'} />
                </a>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : project.image && project.imageLabel ? (
        <figure className="detail-image">
          <img src={assetPath(project.image)} alt={project.imageLabel} width={1440} height={900} />
          <figcaption>{project.imageLabel}</figcaption>
        </figure>
      ) : null}

      <div className="detail-grid">
        <div>
          <span className="eyebrow">THE PROJECT</span>
          <h2>{project.overviewTitle ?? 'Built with purpose.'}</h2>
          <p>{project.description}</p>
          <h3>Project highlights</h3>
          <ul className="feature-list">{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
          <p className="source-note">{project.note}</p>
        </div>
        <aside>
          {project.status && (
            <div className="project-facts">
              <span className="eyebrow">STATUS</span>
              <p>{project.status}</p>
            </div>
          )}
          <span className="eyebrow">TECHNOLOGY</span>
          <div className="tags">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
          {project.sources.length > 0 && (
            <>
              <span className="eyebrow sources-label">VERIFIED REFERENCES</span>
              {project.sources.map(source => <a className="source-link" key={source.url} href={source.url} target="_blank" rel="noopener noreferrer">{source.label}<ArrowUpRight size={14} /></a>)}
            </>
          )}
        </aside>
      </div>

      {project.sections && (
        <section className="project-detail-sections" aria-label="Project details">
          {project.sections.map(section => (
            <div key={section.eyebrow}>
              <span className="eyebrow">{section.eyebrow}</span>
              <h2>{section.title}</h2>
              <ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </section>
      )}

      <Link className="next-project-link" href={`/projects/${next.slug}`}>
        <span><small className="eyebrow">NEXT PROJECT</small><strong>{next.name}</strong></span>
        <ArrowRight size={30} />
      </Link>
    </main>
  );
}
