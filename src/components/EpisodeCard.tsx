import { Link } from "react-router-dom";

interface EpisodeCardProps {
  slug: string;
  title: string;
  season?: string;
  duration?: string;
  thumbnail?: string;
  tags?: string[];
}

const EpisodeCard = ({ slug, title, season, duration, thumbnail, tags }: EpisodeCardProps) => {
  return (
    <Link to={`/episodes/${slug}`} className="group block">
      <div className="card-surface overflow-hidden hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200">
        <div className="aspect-video bg-background relative">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-foreground/[0.2] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-foreground/[0.3] border-b-[8px] border-b-transparent ml-0.5" />
              </div>
            </div>
          )}
        </div>
        <div className="p-5 space-y-2">
          {(season || duration) && (
            <p className="body-small text-foreground/[0.35]">
              {season}{season && duration && " · "}{duration}
            </p>
          )}
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          {tags && tags.length > 0 && (
            <div className="flex gap-2 flex-wrap pt-1">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
