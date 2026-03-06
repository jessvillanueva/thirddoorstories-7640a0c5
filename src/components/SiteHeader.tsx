import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/episodes", label: "Episodes" },
    { to: "/map", label: "Map" },
    { to: "/about", label: "About" },
    { to: "/support", label: "Support" },
  ];

  return (
    <header className="w-full border-b border-border/[0.12] relative z-50">
      <div className="container-content flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground text-xs font-bold">TD</span>
          </div>
          <span className="overline text-foreground tracking-[0.2em]">THIRD DOOR STORIES</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="body-small text-foreground/[0.65] hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="hidden lg:block body-small text-foreground/[0.35]">Independent media for builders</span>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground/[0.65] hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/[0.12] bg-background">
          <div className="container-content py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="body-small text-foreground/[0.65] hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
