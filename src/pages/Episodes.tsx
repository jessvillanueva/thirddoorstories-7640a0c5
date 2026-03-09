import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EpisodeCard from "@/components/EpisodeCard";

type EpisodePhase = "Foundation" | "Infrastructure" | "Proof" | "Human Reality";

interface Episode {
  slug: string;
  phase: EpisodePhase;
  number: number;
  title: string;
  status: "Planned" | "In Production" | "Released";
  duration?: string;
  tags: string[];
  summary: string;
}

const episodes: Episode[] = [
  {
    slug: "inside-walking-a-third-door",
    phase: "Foundation",
    number: 0,
    title: "Inside Walking a Third Door (And Starting to Map It)",
    status: "Planned",
    duration: "TBD",
    tags: ["Origin story", "Map"],
    summary: "From chasing a $52K business degree and corporate paths to building tools for youth workers and mapping third doors in public.",
  },
  {
    slug: "canadas-hidden-builder-underworld",
    phase: "Foundation",
    number: 1,
    title: "Canada's Hidden Builder Underworld",
    status: "Planned",
    duration: "TBD",
    tags: ["Canada", "Communities"],
    summary: "North House, The Syndicate, Socratica, Cansbridge, 831 and more: the builder ecosystems that never show up in college brochures.",
  },
  {
    slug: "1000-microgrant-young-brain",
    phase: "Foundation",
    number: 2,
    title: "What a $1,000 Microgrant Actually Does to a Young Brain",
    status: "Planned",
    duration: "TBD",
    tags: ["Microgrant", "Psychology"],
    summary: "Following a young builder after a no‑strings microgrant from Emergent Ventures or 1517 — small money, huge permission shift.",
  },
  {
    slug: "residencies-vs-universities",
    phase: "Infrastructure",
    number: 3,
    title: "Residencies vs Universities: What Should You Actually Spend Tuition On?",
    status: "Planned",
    duration: "TBD",
    tags: ["Residencies", "Education"],
    summary: "Nautilus, The Residency, Minerva: four years and up to $200K vs three months shipping with 12 peers — when does each path make sense?",
  },
  {
    slug: "loneliness-infrastructure",
    phase: "Infrastructure",
    number: 4,
    title: "Loneliness Infrastructure In Disguise",
    status: "Planned",
    duration: "TBD",
    tags: ["Mental health", "Community"],
    summary: "Hacker houses, fellowships, demo days: not just about code or résumés, but about not building alone in your childhood bedroom.",
  },
  {
    slug: "burning-the-paper-belt",
    phase: "Infrastructure",
    number: 5,
    title: "Burning the Paper Belt: Inside the Minds Who Fund Trailblazers",
    status: "Planned",
    duration: "TBD",
    tags: ["Funders", "Philanthropy"],
    summary: "How Danielle Strachman, Tyler Cowen, Peter Thiel, Jim O'Shaughnessy and others decide which heretics and dropouts to back.",
  },
  {
    slug: "friction-to-first-revenue",
    phase: "Infrastructure",
    number: 6,
    title: "From Friction to First Revenue: Resilience, Pivots, and Relentless Persistence",
    status: "Planned",
    duration: "TBD",
    tags: ["First revenue", "Pivots"],
    summary: "Builders who turned a vague desire to help into a product people pay for, through false starts, pivots, and ugly first versions.",
  },
  {
    slug: "third-doors-in-the-wild",
    phase: "Proof",
    number: 7,
    title: "Third Doors in the Wild: First Client, First Revenue",
    status: "Planned",
    duration: "Series",
    tags: ["First client", "Series"],
    summary: "A 12‑episode run of first client / first dollar stories: pricing, legitimacy, and explaining it all to confused parents.",
  },
  {
    slug: "what-do-you-tell-your-family",
    phase: "Human Reality",
    number: 19,
    title: "What Do You Tell Your Family When You Go Off‑Script?",
    status: "Planned",
    duration: "TBD",
    tags: ["Family", "Off‑script"],
    summary: "Your peers are graduating; you're not. Scripts, tactics, and real conversations from builders who went off the expected path.",
  },
  {
    slug: "surviving-loser-months",
    phase: "Human Reality",
    number: 20,
    title: "Surviving Loser Months: The Gap Between Leaving and Vindication",
    status: "Planned",
    duration: "TBD",
    tags: ["Resilience", "Mental health"],
    summary: "The months when nothing works, everyone else looks successful, and you're debugging at 2 AM wondering if you're delusional.",
  },
];

const phases: { id: EpisodePhase; label: string; description: string }[] = [
  {
    id: "Foundation",
    label: "Phase 1: Foundation — Why this matters",
    description: "Episodes that explain why third doors exist and why mapping them in public is worth the pain.",
  },
  {
    id: "Infrastructure",
    label: "Phase 2: Infrastructure — The systems that make Door 3 real",
    description: "The programs, funders, and communities that quietly enable alternative paths to exist at all.",
  },
  {
    id: "Proof",
    label: "Phase 3: Proof — Third doors in the wild",
    description: "First client and first revenue stories from real builders betting on themselves without a safety net.",
  },
  {
    id: "Human Reality",
    label: "Phase 4: Human Reality — The stuff no one puts on LinkedIn",
    description: "Family conversations, loser months, and the emotional cost of going off‑script when everyone else is graduating.",
  },
];

const Episodes = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20">
        <section className="flex flex-col gap-4 mb-12">
          <p className="overline text-foreground/70">What's coming — Season 1</p>
          <h1>Episodes</h1>
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
            Each episode follows one builder who found a way in through a door most people didn't know
            existed — and what it actually felt like from the inside.
          </p>
        </section>
        {phases.map((phase) => {
          const phaseEpisodes = episodes.filter((ep) => ep.phase === phase.id);
          if (phaseEpisodes.length === 0) return null;
          return (
            <section key={phase.id} className="mb-12">
              <div className="mb-4 space-y-1">
                <h2 className="text-xl font-semibold">{phase.label}</h2>
                <p className="body-small text-foreground/70 max-w-[640px]">
                  {phase.description}
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {phaseEpisodes.map((ep) => (
                  <EpisodeCard key={ep.slug} {...ep} />
                ))}
              </div>
            </section>
          );
        })}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Episodes;
