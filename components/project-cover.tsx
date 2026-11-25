import { assetPath } from '@/lib/asset-path';
import type { ProjectCover as ProjectCoverData } from '@/content/projects';

export function ProjectCover({ cover }: { cover: ProjectCoverData }) {
  const frame = cover.frame ?? 'phone';
  const screenshotWidth = cover.screenshotWidth ?? 1;
  const screenshotHeight = cover.screenshotHeight ?? 1;
  const screenshot = cover.screenshot ? (
    <img
      src={assetPath(cover.screenshot)}
      alt={cover.screenshotAlt ?? ''}
      width={screenshotWidth}
      height={screenshotHeight}
      decoding="async"
    />
  ) : null;
  const shortWindowTitle = frame === 'window' && cover.title.length <= 18;

  return (
    <div className={`designed-project-cover project-cover-${cover.theme} project-cover-frame-${frame}`}>
      <div className="project-cover-copy" aria-hidden="true">
        <span className="project-cover-subtitle">{cover.subtitle}</span>
        <strong className={`project-cover-title${shortWindowTitle ? ' project-cover-title-short' : ''}`}>{cover.title}</strong>
        <span className="project-cover-tagline">{cover.tagline}</span>
      </div>
      {frame === 'window' ? (
        <div
          className="project-cover-window"
          style={{ aspectRatio: `${screenshotWidth} / ${screenshotHeight + Math.round(screenshotWidth * 0.052)}` }}
        >
          <div className="project-cover-window-bar" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="project-cover-window-screen">{screenshot}</div>
        </div>
      ) : frame === 'diagram' ? (
        <div
          className="project-cover-diagram"
          style={{ aspectRatio: `${screenshotWidth} / ${screenshotHeight}` }}
        >
          {screenshot}
        </div>
      ) : frame === 'panel' ? (
        <div
          className="project-cover-panel"
          style={{ aspectRatio: `${screenshotWidth} / ${screenshotHeight}` }}
        >
          {screenshot}
        </div>
      ) : frame === 'typography' ? (
        <div className="project-cover-typographic-mark" aria-hidden="true">
          <strong>{cover.mark}</strong>
          <span>{cover.markLabel}</span>
        </div>
      ) : (
        <div
          className="project-cover-phone"
          style={{ aspectRatio: `${screenshotWidth} / ${screenshotHeight}` }}
        >
          <span className="project-cover-camera" aria-hidden="true" />
          <div className="project-cover-screen">{screenshot}</div>
        </div>
      )}
    </div>
  );
}
