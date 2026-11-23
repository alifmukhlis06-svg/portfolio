import { ImagePlus } from 'lucide-react';
import { achievements } from '@/content/achievements';
import { assetPath } from '@/lib/asset-path';

export const AWARDS_PHOTO_GALLERY_ENABLED = false;

const photoLabels = [
  'CAMPUS MOMENTS',
  'ACADEMIC MILESTONES',
  'THE JOURNEY',
  'GOOD COMPANY',
  'SMALL WINS',
];

export function AwardsPhotoGallery() {
  if (!AWARDS_PHOTO_GALLERY_ENABLED) return null;

  return (
    <div className="photo-collage">
      {photoLabels.map((label, index) => {
        const achievement = achievements[index % achievements.length];
        return (
          <div key={label} className={'photo-slot photo-slot-' + (index + 1)}>
            {achievement.image ? (
              <img src={assetPath(achievement.image)} alt={achievement.title} loading="lazy" />
            ) : (
              <>
                <ImagePlus size={index % 2 ? 20 : 28} strokeWidth={1} />
                <span>{label}</span>
                <small>Photo to come</small>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
