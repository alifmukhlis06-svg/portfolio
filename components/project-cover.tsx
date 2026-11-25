import { assetPath } from '@/lib/asset-path';
import type { ProjectCover as ProjectCoverData } from '@/content/projects';

export function ProjectCover({ cover }: { cover: ProjectCoverData }) {
  return (
    <div className={`designed-project-cover project-cover-${cover.theme}`}>
      <div className="project-cover-copy" aria-hidden="true">
        <span className="project-cover-subtitle">{cover.subtitle}</span>
        <strong className="project-cover-title">{cover.title}</strong>
        <span className="project-cover-tagline">{cover.tagline}</span>
      </div>
      <div
        className="project-cover-phone"
        style={{ aspectRatio: `${cover.screenshotWidth} / ${cover.screenshotHeight}` }}
      >
        <span className="project-cover-camera" aria-hidden="true" />
        <div className="project-cover-screen">
          <img
            src={assetPath(cover.screenshot)}
            alt={cover.screenshotAlt}
            width={cover.screenshotWidth}
            height={cover.screenshotHeight}
          />
        </div>
      </div>
    </div>
  );
}
