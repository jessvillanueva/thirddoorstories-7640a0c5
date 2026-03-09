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
  // Microgrants
  { name: "1517 Medici Project", type: "Microgrant", location: "US / Remote", description: "Small, fast grants from 1517 Fund for high school, college students, and dropouts to launch projects to make humanity better. $1,000, no pitch deck required.", tags: ["Microgrants"], url: "https://www.1517fund.com/medici" },
  { name: "Emergent Ventures", type: "Microgrant", location: "Global", description: "Grants from the Mercatus Center to support entrepreneurs with highly scalable, zero-to-one ideas for meaningfully improving society. Typically $5K+.", tags: ["Microgrants"], url: "https://www.mercatus.org/emergent-ventures" },
  { name: "Bagel Fund", type: "Microgrant", location: "Global", description: "Microgrants of $100–$500 for individual builders shipping projects.", tags: ["Microgrants"], url: "https://bagel.fund" },
  { name: "Awesome Foundation", type: "Microgrant", location: "Global", description: "Distributes $1,000 grants, no strings attached, to projects and their creators.", tags: ["Microgrants"], url: "https://www.awesomefoundation.org/en" },
  { name: "Inflection Grants", type: "Microgrant", location: "Global", description: "$2,000 grants from Cyan Banister for builders under 25.", tags: ["Microgrants"], url: "https://www.inflectiongrants.com/" },
  { name: "Non Trivial", type: "Microgrant", location: "Global", description: "$2K–$12K grants enabling ambitious teenagers to start solving the world's most pressing problems.", tags: ["Microgrants"], url: "https://www.non-trivial.org/" },
  { name: "Go Human", type: "Microgrant", location: "Global", description: "$100 smol checks to help young builders get going on cool projects.", tags: ["Microgrants"], url: "http://gohuman.fund/" },
  { name: "Merge Grant", type: "Microgrant", location: "Global", description: "$50–$1K grants to amplify and accelerate projects born out of goldilocks periods.", tags: ["Microgrants"], url: "https://odteam.notion.site/Merge-Grant-7eadfac121ae45328c80cd3a733fb2ab" },
  { name: "Cactus Capital", type: "Microgrant", location: "US", description: "Microgrants of $50–$100 from high schoolers in Northern Virginia for student builders at any stage.", tags: ["Microgrants"], url: "https://cactuscapital.org/" },
  { name: "Protostars", type: "Microgrant", location: "Global", description: "$1K grants from Blackbird Foundation for young people with the wildest hearts and wildest ideas.", tags: ["Microgrants"], url: "https://www.blackbird.vc/programs/protostars" },
  { name: "Young Builders Society", type: "Microgrant", location: "Global", description: "$100–$600 grants for ambitious builders under 23 to bring their ideas to life.", tags: ["Microgrants"], url: "https://www.youngbuildersociety.com/" },
  { name: "Lift Off Grant", type: "Microgrant", location: "Global", description: "$50–$100 grants for anyone 18 or younger, any type of project, no prior experience required.", tags: ["Microgrants"], url: "https://www.liftoffgrant.com/" },
  { name: "Greenhorn Microgrants", type: "Microgrant", location: "US", description: "Microgrants of $100–$500 for young students to work on their own STEM projects. 501(c)(3).", tags: ["Microgrants"], url: "https://greenhorninnovationfund.org/" },
  { name: "Sawa Grant", type: "Microgrant", location: "Global", description: "$500 microgrant fund for young builders creating public-facing projects that make a real impact in their communities.", tags: ["Microgrants"], url: "https://grants.sawa.fm/" },
  { name: "Techyon Microgrants", type: "Microgrant", location: "Canada", description: "$1K–$2K grants from Hack the North for Canadian college or university students working on cool projects.", tags: ["Microgrants"], url: "https://microgrants.hackthenorth.com/" },
  { name: "The Formidable Fund", type: "Microgrant", location: "US", description: "$1K grants for US middle and high school entrepreneurs (permanent residents and US citizens).", tags: ["Microgrants"], url: "https://www.formidablefund.org/" },
  { name: "OSV Grants", type: "Microgrant", location: "Global / Remote", description: "Open-grant program from O'Shaughnessy Ventures backing original, non-obvious projects.", tags: ["Microgrants"], url: "https://www.osv.llc/grants" },
  { name: "Cosmos Fellowship", type: "Microgrant", location: "Global", description: "$1K–$10K grants supporting the best builders and thinkers in philosophy and tech.", tags: ["Microgrants"], url: "https://cosmosinstitute.substack.com" },
  { name: "Magnificent Grants", type: "Microgrant", location: "Global", description: "$10K+ grants from Hummingbird Ventures for 10 exceptional pioneers under 25 fighting the status quo.", tags: ["Microgrants"], url: "https://www.magnificentgrants.com" },

  // Fellowships
  { name: "Thiel Fellowship", type: "Fellowship", location: "US", description: "$100K over two years for young people aged 16–22 to skip or leave college and build something that matters.", tags: ["Fellowships"], url: "https://thielfellowship.org" },
  { name: "776 Fellowship", type: "Fellowship", location: "Global", description: "$100,000 for young people tackling climate change, from the 776 Foundation.", tags: ["Fellowships"], url: "https://www.776.org/" },
  { name: "O'Shaughnessy Fellowship", type: "Fellowship", location: "US", description: "$100K for ambitious people who want to build something great. 20 individuals receive $10K each plus access to OSV's network.", tags: ["Fellowships"], url: "https://www.osv.llc/fellowships" },
  { name: "Cansbridge Fellowship", type: "Fellowship", location: "Canada / Asia", description: "Canada's most competitive fellowship placing ambitious undergrads in Asian startups and funding their journey.", tags: ["Fellowships"], url: "https://cansbridgefellowship.com" },
  { name: "Z Fellows", type: "Fellowship", location: "US / Remote", description: "$10,000 to go all in on a project or idea for one week with a cohort of early technical thinkers and Silicon Valley mentors.", tags: ["Fellowships"], url: "https://www.zfellows.com" },
  { name: "Edge City Fellowship", type: "Fellowship", location: "Global", description: "Full-ride to a month-long immersive co-living experience empowering young innovators across domains critical for human flourishing.", tags: ["Fellowships"], url: "https://edgecity.notion.site/The-Edge-City-Fellowship-fc96ca95efca43d289388a45cd98c631" },
  { name: "Activate Fellowship", type: "Fellowship", location: "US", description: "$275K fellowship empowering scientists to reinvent the world through deep-tech ventures.", tags: ["Fellowships"], url: "https://www.activate.org/the-fellowship" },
  { name: "Da Vinci Fellowship", type: "Fellowship", location: "Europe", description: "€150K for ambitious young builders under 25 in Europe who have demonstrated exceptional ability in any field.", tags: ["Fellowships"], url: "https://davincifellowship.com" },
  { name: "Silicon Valley Fellowship", type: "Fellowship", location: "San Francisco", description: "$1K–$5K to get fast-tracked into Silicon Valley through a community of experienced mentors, talks, and events.", tags: ["Fellowships"], url: "https://www.siliconvalleyfellowship.com/" },
  { name: "Polar Fellowship", type: "Fellowship", location: "UK", description: "9-month programme in Oxford, Cambridge, and London for talented people from high school dropouts to final year PhDs.", tags: ["Fellowships"], url: "https://www.polaris-fellowship.com/" },

  // Residencies
  { name: "The Residency", type: "Residency", location: "Multi-city", description: "A builder residency for early-stage founders and creators shipping a concrete project.", tags: ["Residencies"], url: "https://www.livetheresidency.com" },
  { name: "Nautilus", type: "Residency", location: "San Francisco", description: "A fully funded three-month live-in atelier for under-23 budding polymaths in art, science, and technology.", tags: ["Residencies"], url: "https://www.nautilus.quest" },
  { name: "Astera Residency", type: "Residency", location: "US", description: "$125K–$250K residency providing talented people freedom and support to create new machinery of science.", tags: ["Residencies"], url: "https://astera.org/residency/" },
  { name: "Antikythera Studio", type: "Residency", location: "US", description: "$5K residency selecting 12–18 interdisciplinary researchers including engineers, designers, scientists, and technologists to develop speculative prototypes.", tags: ["Residencies"], url: "https://antikythera.org/studios" },

  // Hacker Houses
  { name: "North House", type: "Hacker House", location: "Canada", description: "A Canadian builder house bringing together early-stage founders and ambitious young people to work in proximity.", tags: ["Hacker Houses"], url: "https://northhouse.ca" },
  { name: "Hack Lodge", type: "Hacker House", location: "San Francisco", description: "A hacker house for builders who ship fast, focused on demos over decks.", tags: ["Hacker Houses"], url: "https://www.hacklodge.com" },

  // Programs & Communities
  { name: "Socratica", type: "Community", location: "Waterloo / Remote", description: "A community of builders, researchers, and artists who get together to work on hard things. No pitch, no investors, just people making things.", tags: ["Hacker Houses", "Programs"], url: "https://www.socratica.info" },
  { name: "South Park Commons", type: "Community", location: "San Francisco", description: "A community of builders figuring out what to do next between jobs, school, and startups.", tags: ["Programs"], url: "https://southparkcommons.com" },
  { name: "buildspace", type: "Program", location: "Remote / San Francisco", description: "Nights and weekends program for people building side projects that might turn into something real.", tags: ["Programs"], url: "https://buildspace.so" },
  { name: "Minerva University", type: "Program", location: "Global", description: "A traveling university alternative built around real-world projects and global rotations.", tags: ["Programs"], url: "https://www.minerva.edu" },
  { name: "On Deck", type: "Program", location: "Remote / Global", description: "Fellowships and communities for people starting companies, switching careers, or exploring new ideas.", tags: ["Programs", "Fellowships"], url: "https://www.beondeck.com" },
  { name: "HackClub", type: "Program", location: "Global / Remote", description: "A global network of high school coding clubs and maker spaces. Nonprofit supporting young hackers.", tags: ["Programs"], url: "https://hackclub.com/" },
  { name: "The Flight School", type: "Program", location: "US", description: "$10K program reinventing the gap year as an accessible, aspirational, and rebellious rite of passage.", tags: ["Programs"], url: "https://theflightschool.org/" },
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

        <div className="mt-12 p-6 card-surface rounded-2xl flex flex-col gap-2">
          <p className="body-small text-foreground/[0.45]">
            Grant data originally sourced from a spreadsheet maintained by{" "}
            <a href="https://x.com/DStrachman" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Danielle Strachman</a>{" "}
            at 1517 Fund. Listings may not be current so always verify details directly with each program before applying.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ThirdDoorMap;
