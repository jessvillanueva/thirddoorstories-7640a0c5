import { useParams } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoCard from "@/components/VideoCard";
import EpisodeCard from "@/components/EpisodeCard";
import { Button } from "@/components/ui/button";

const EpisodeDetail = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 flex flex-col gap-16 md:gap-20">
        {/* Main episode video */}
        <VideoCard label="Full Episode" caption="" videoId="sf-SUwdZN3A" type="youtube" />

        {/* Episode meta + logline */}
        <section className="flex flex-col gap-4 max-w-[720px]">
          <p className="overline text-foreground/[0.35]">May 2026 · 18 min · Season 1</p>
          <h1>From a McDonald's Drive‑Thru to a $700M Empire</h1>
          <p className="body-base text-foreground/[0.65]">
            At 18, Brian Scudamore was the odd one out. While his friends headed to university,
            he dropped out of high school one course short of finishing. Waiting in a McDonald's
            drive‑thru in 1989, he spotted a beat‑up pickup advertising junk removal, had a
            "Eureka" moment, and turned $700 of savings into The Rubbish Boys — the seed of
            1‑800‑GOT‑JUNK?, now a $700M business across Canada, the US, and Australia.
          </p>
        </section>

        {/* How this story came together */}
        <section className="flex flex-col gap-4 max-w-[720px]">
          <h2>How This Story Came Together</h2>
          <p className="body-base text-foreground/[0.65]">
            This episode traces Brian's path from hiding his junk‑removal side hustle from his
            parents to building O2E Brands: three companies, 180+ franchise locations, and a seat
            as a Dragon on CBC's Dragons' Den. We follow the moments that don't fit neatly on a
            résumé — dropping out, betting on a $700 truck, and learning how to sell an unglamorous
            business door‑to‑door.
          </p>
          <p className="body-base text-foreground/[0.65]">
            What you see in the episode is how a kid who didn't finish high school built a junk
            empire — and what that says about who gets permission to build things, what counts as a
            "real" path, and why the most powerful doors are often the ones no one is looking at.
          </p>
        </section>

        {/* Support / extended cut */}
        <section className="card-surface p-8 flex flex-col gap-4 max-w-[720px]">
          <h3>Unlock Extended Interview & Director's Commentary</h3>
          <p className="body-base text-foreground/[0.65]">
            Get the full 27‑minute uncut interview with Brian plus behind‑the‑scenes commentary
            on how this episode was made, the questions that didn't make the cut, and what building
            a junk empire looks like up close.
          </p>
          <Button asChild>
            <a
              href="https://www.patreon.com/thirddoorstories"
              target="_blank"
              rel="noreferrer"
            >
              Become a Supporter
            </a>
          </Button>
        </section>

        {/* Related episodes */}
        <section className="flex flex-col gap-6">
          <h2>More Stories Like This</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <EpisodeCard
              slug="canadas-hidden-builder-underworld"
              phase="Foundation"
              number={1}
              title="Canada's Hidden Builder Underworld"
              status="Planned"
              duration="TBD"
              summary="North House, The Syndicate, Socratica, Cansbridge, 831 and more: the builder ecosystems that never show up in college brochures."
              tags={["Canada", "Communities"]}
            />
            <EpisodeCard
              slug="1000-microgrant-young-brain"
              phase="Foundation"
              number={2}
              title="What a $1,000 Microgrant Actually Does to a Young Brain"
              status="Planned"
              duration="TBD"
              summary="Following a young builder after a no‑strings microgrant from Emergent Ventures or 1517 — small money, huge permission shift."
              tags={["Microgrant", "Psychology"]}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default EpisodeDetail;
