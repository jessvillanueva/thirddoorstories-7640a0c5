import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <header className="w-full border-b border-border/[0.12]">
      <div className="container-content flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">TD</span>
          </div>
          <span className="overline text-foreground tracking-[0.2em]">THIRD DOOR STORIES</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/episodes" className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">Episodes</Link>
          <Link to="/map" className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">Map</Link>
          <Link to="/about" className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">About</Link>
          <Link to="/support" className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">Support</Link>
        </nav>
        <span className="hidden lg:block body-small text-foreground/[0.35]">Independent media for builders</span>
      </div>
    </header>
  );
};

export default SiteHeader;
