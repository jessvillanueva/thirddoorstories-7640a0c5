import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const categories = ["All", "Microgrants", "Residencies", "Hacker Houses", "Programs"];

const mapEntries = [
  { name: "Emergent Ventures", description: "Grants for ambitious ideas from the Mercatus Center at George Mason University.", tags: ["Microgrant", "Global"], url: "#" },
  { name: "1517 Fund", description: "Backing dropouts, misfits, and those taking unconventional paths.", tags: ["Microgrant", "US"], url: "#" },
  { name: "The Residency", description: "A builder community for early-stage founders and creators.", tags: ["Residency", "Multi-city"], url: "#" },
  { name: "Hack Lodge", description: "A hacker house for builders who ship fast.", tags: ["Hacker House", "San Francisco"], url: "#" },
  { name: "Buildspace", description: "Nights & weekends for people building side projects.", tags: ["Programs", "Remote"], url: "#" },
  { name: "Thiel Fellowship", description: "$100K to skip college and build something.", tags: ["Microgrant", "US"], url: "#" },
];

const ThirdDoorMap = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? mapEntries
    : mapEntries.filter(e => e.tags.some(t => t.toLowerCase().includes(active.toLowerCase().slice(0, -1))));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20">
        <section className="space-y-4 mb-10">
          <span className="overline text-accent">Third Door Map</span>
          <h1>The Paths Most People Don't Know Exist</h1>
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
            A curated directory of microgrants, residencies, hacker houses, and programs 
            for unconventional builders.
          </p>
        </section>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full body-small font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-accent text-accent-foreground"
                  : "bg-card border border-border/[0.12] text-foreground/[0.65] hover:text-foreground hover:border-border/[0.20]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((entry) => (
            <a key={entry.name} href={entry.url} className="card-surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200 block">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{entry.name}</h3>
                <p className="body-small text-foreground/[0.65]">{entry.description}</p>
                <div className="flex gap-2">
                  {entry.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium">{tag}</span>
                  ))}
                </div>
              </div>
              <span className="body-small text-primary font-medium whitespace-nowrap">Visit program →</span>
            </a>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ThirdDoorMap;
