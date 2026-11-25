import { assetPath } from '@/lib/asset-path';
import type { ProjectCover as ProjectCoverData } from '@/content/projects';

export function ProjectCover({ cover }: { cover: ProjectCoverData }) {
  const frame = cover.frame ?? 'phone';

  return (
    <div className={`designed-project-cover project-cover-${cover.theme} project-cover-frame-${frame}`}>
      <div className="project-cover-copy" aria-hidden="true">
        <span className="project-cover-subtitle">{cover.subtitle}</span>
        <strong className="project-cover-title">{cover.title}</strong>
        <span className="project-cover-tagline">{cover.tagline}</span>
      </div>
      {frame === 'window' ? (
        <div
          className="project-cover-window"
          style={{ aspectRatio: `${cover.screenshotWidth} / ${cover.screenshotHeight + Math.round(cover.screenshotWidth * 0.052)}` }}
        >
          <div className="project-cover-window-bar" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="project-cover-window-screen">
            <img
              src={assetPath(cover.screenshot)}
              alt={cover.screenshotAlt}
              width={cover.screenshotWidth}
              height={cover.screenshotHeight}
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
