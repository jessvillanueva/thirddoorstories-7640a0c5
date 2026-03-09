import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const categories = ["All", "Microgrants", "Residencies", "Hacker Houses", "Programs", "Fellowships"];

type MapEntryType = "Microgrant" | "Residency" | "Program" | "Hacker House" | "Fellowship" | "Community";

interface MapEntry {
  name: string;
  type: MapEntryType;
  location: string;
  description: string;
  tags: string[];
  url: string;
}

const mapEntries: MapEntry[] = [
  { name: "Emergent Ventures", type: "Microgrant", location: "Global", description: "Fast-turnaround grants for ambitious, weird ideas from the Mercatus Center.", tags: ["Microgrants"], url: "https://www.mercatus.org/emergent-ventures" },
  { name: "1517 Medici Grant", type: "Microgrant", location: "US / Remote", description: "Small, fast grants from 1517 Fund to help young builders ship their next concrete step.", tags: ["Microgrants"], url: "https://www.1517fund.com/medici" },
  { name: "OSV Grants", type: "Microgrant", location: "Global / Remote", description: "Open-grant program from O'Shaughnessy Ventures backing original, non-obvious projects.", tags: ["Microgrants"], url: "https://www.osv.llc/grants" },
  { name: "The Residency", type: "Residency", location: "Multi-city", description: "A builder residency for early-stage founders and creators shipping a concrete project.", tags: ["Residencies"], url: "https://theresidency.xyz" },
  { name: "Nautilus Residency", type: "Residency", location: "San Francisco", description: "In-person builder residency focused on deep work, storytelling, and ambitious projects.", tags: ["Residencies"], url: "https://nautilus.house" },
  { name: "North House", type: "Hacker House", location: "Canada", description: "A Canadian builder house bringing together early-stage founders and ambitious young people to work in proximity.", tags: ["Hacker Houses"], url: "https://northhouse.ca" },
  { name: "Hack Lodge", type: "Hacker House", location: "San Francisco", description: "A hacker house for builders who ship fast, focused on demos over decks.", tags: ["Hacker Houses"], url: "https://www.hacklodge.com" },
  { name: "Socratica", type: "Community", location: "Waterloo / Remote", description: "A community of builders, researchers, and artists who get together to work on hard things — no pitch, no investors, just people making things.", tags: ["Hacker Houses", "Programs"], url: "https://www.socratica.info" },
  { name: "South Park Commons", type: "Community", location: "San Francisco", description: "A community of builders figuring out what to do next between jobs, school, and startups.", tags: ["Programs"], url: "https://southparkcommons.com" },
  { name: "Buildspace", type: "Program", location: "Remote / San Francisco", description: "Nights & weekends program for people building side projects that might turn into something real.", tags: ["Programs"], url: "https://buildspace.so" },
  { name: "Minerva University", type: "Program", location: "Global", description: "A traveling university alternative built around real-world projects and global rotations.", tags: ["Programs"], url: "https://www.minerva.edu" },
  { name: "Cansbridge Fellowship", type: "Fellowship", location: "Canada / Asia", description: "Canada's most competitive fellowship placing ambitious undergrads in Asian startups and funding their journey.", tags: ["Fellowships"], url: "https://www.cansbridge.ca" },
  { name: "Thiel Fellowship", type: "Fellowship", location: "US", description: "$100K over two years for young people to skip or leave college and build something that matters.", tags: ["Fellowships"], url: "https://thielfellowship.org" },
  { name: "On Deck", type: "Program", location: "Remote / Global", description: "Fellowships and communities for people starting companies, switching careers, or exploring new ideas.", tags: ["Programs", "Fellowships"], url: "https://www.beondeck.com" },
];

const ThirdDoorMap = () => {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All"
    ? mapEntries
    : mapEntries.filter((entry) => entry.tags.includes(active));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 animate-fade-in">
        <section className="flex flex-col gap-4 mb-10">
          <span className="overline text-accent">Third Door Map</span>
          <h1>The Paths Most People Don't Know Exist</h1>
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
             A curated directory of microgrants, residencies, hacker houses, fellowships, and
             programs that quietly make Third Doors real. These are the places that change
             trajectories and most guidance counselors have never heard of them.
           </p>
        </section>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
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

        <div className="flex flex-col gap-4">
          {filtered.map((entry) => (
            <a
              key={entry.name}
              href={entry.url}
              target="_blank"
              rel="noreferrer"
              className="card-surface p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:bg-[hsl(var(--card-highlight))] hover:border-border/[0.20] transition-all duration-200"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{entry.name}</h3>
                <p className="body-small text-foreground/70">{entry.type} · {entry.location}</p>
                <p className="body-small text-foreground/[0.65]">{entry.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {entry.tags.map((tag) => (
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
