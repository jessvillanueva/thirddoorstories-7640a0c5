import { useParams, Link } from "react-router-dom";
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
      <main className="container-content py-12 md:py-20 space-y-12">
        <VideoCard label="Full Episode" caption="" videoId="" type="youtube" />

        <div className="space-y-2">
          <p className="body-small text-foreground/[0.35]">May 2026 · 18 min</p>
          <h1>The Side Entrance</h1>
          <p className="body-base text-foreground/[0.65] max-w-[720px] mt-4">
            Follow a 19-year-old who cold-emailed their way into a research fellowship, 
            turned it into a documentary subject, and discovered that the most interesting 
            paths are the ones nobody talks about.
          </p>
        </div>

        <section className="space-y-4">
          <h2>How This Story Came Together</h2>
          <p className="body-base text-foreground/[0.65]">
            This episode started with a single cold email sent at 2am. Within 48 hours, 
            we had access, a subject, and a deadline. The entire shoot was completed in 
            three days across two cities. What you see is what happened — no re-shoots, 
            no scripted moments.
          </p>
        </section>

        <div className="card-highlight p-6 md:p-8 space-y-4">
          <h3>Unlock Extended Interview & Director's Commentary</h3>
          <p className="body-base text-foreground/[0.65]">
            Get the full 45-minute uncut interview plus behind-the-scenes commentary on how this episode was made.
          </p>
          <Button variant="gold" size="lg">Become a Supporter</Button>
        </div>

        <section className="space-y-6">
          <h2>More Stories Like This</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <EpisodeCard slug="cold-email" title="The Cold Email That Worked" season="Season 1" duration="22 min" tags={["Residency"]} />
            <EpisodeCard slug="dropout-founder" title="Dropout to Founder in 90 Days" season="Season 1" duration="15 min" tags={["Hacker House"]} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default EpisodeDetail;
