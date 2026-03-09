import { Link } from "react-router-dom";

interface EpisodeCardProps {
  slug: string;
  title: string;
  season?: string;
  phase?: string;
  number?: number;
  status?: "Planned" | "In Production" | "Released";
  duration?: string;
  thumbnail?: string;
  tags?: string[];
  summary?: string;
}

const EpisodeCard = ({ slug, title, season, phase, number, status, duration, thumbnail, tags, summary }: EpisodeCardProps) => {
  return (
    <Link to={`/episodes/${slug}`} className="group block">
      <div className="card-surface overflow-hidden hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200">
        <div className="aspect-video bg-background relative">
          {thumbnail ? (
            <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-foreground/[0.2] flex items-center justify-center">
                <svg width="12" height="16" viewBox="0 0 16 20" fill="none" className="ml-0.5">
                  <path d="M0 0L16 10L0 20V0Z" fill="hsla(60, 14%, 95.3%, 0.3)" />
                </svg>
              </div>
            </div>
          )}
          {status && (
            <span className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full bg-background/80 text-foreground/70 font-medium">
              {status}
            </span>
          )}
        </div>
        <div className="p-5 flex flex-col gap-2">
          <p className="body-small text-foreground/[0.35]">
            {phase && `${phase}`}
            {phase && number !== undefined && ` · `}
            {number !== undefined && `Ep ${number}`}
            {(phase || number !== undefined) && duration && ` · `}
            {!phase && season}{!phase && season && duration && " · "}
            {duration}
          </p>
          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{title}</h3>
          {summary && (
            <p className="body-small text-foreground/[0.5] line-clamp-2">{summary}</p>
          )}
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
