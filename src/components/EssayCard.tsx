import { Link } from "react-router-dom";

interface EssayCardProps {
  readTime: string;
  title: string;
  thesis: string;
  href: string;
}

const EssayCard = ({ readTime, title, thesis, href }: EssayCardProps) => {
  return (
    <Link to={href} className="card-surface p-6 flex flex-col gap-3 group hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200">
      <span className="body-small text-foreground/[0.35]">{readTime}</span>
      <h3 className="group-hover:text-primary transition-colors">{title}</h3>
      <p className="body-small text-foreground/[0.65] flex-1">{thesis}</p>
      <span className="text-primary body-small font-medium mt-2">Read essay →</span>
    </Link>
  );
};

export default EssayCard;
