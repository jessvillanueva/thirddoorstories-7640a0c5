import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoCard from "@/components/VideoCard";
import EssayCard from "@/components/EssayCard";
import EmailCaptureBar from "@/components/EmailCaptureBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-content py-12 md:py-20 space-y-16 md:space-y-20">
        {/* Hero */}
        <section className="space-y-6 animate-fade-in">
          <span className="overline text-primary">Emergent Ventures Proof Hub</span>
          <h1>
            These paths exist. They're just invisible unless you stumble onto them.
          </h1>
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
            Third Door Stories is an independent documentary series following unconventional builders — 
            the ones who found a way in through the side entrance. This is our proof of work.
          </p>
        </section>

        {/* Pilot Video */}
        <section className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <VideoCard
            label="Pilot Episode"
            caption="Cold email → shoot → edit → launch in 24 days."
            videoId=""
            type="youtube"
          />
        </section>

        {/* Loom Pitch */}
        <section className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <VideoCard
            label="Loom Pitch"
            caption="2–3 minutes · direct-to-camera · raw."
            videoId=""
            type="loom"
          />
        </section>

        {/* Social Proof */}
        <section className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="card-surface p-6 md:p-8">
            <p className="body-base text-foreground/[0.65]">
              This project is backed by{" "}
              <span className="text-foreground font-semibold">1517 Fund (Medici Grant)</span>{" "}
              and supported through{" "}
              <span className="text-foreground font-semibold">The Residency — Delta Chapter II</span>.
              We're building proof that unconventional paths deserve serious documentation.
            </p>
          </div>
        </section>

        {/* Essays */}
        <section className="space-y-6">
          <span className="overline text-foreground/[0.35]">From the Studio</span>
          <div className="grid md:grid-cols-2 gap-6">
            <EssayCard
              readTime="8 min read"
              title="Why the Third Door Matters More Than Ever"
              thesis="The traditional paths are overcrowded. The unconventional ones are hiding in plain sight."
              href="/essays/why-third-door"
            />
            <EssayCard
              readTime="5 min read"
              title="Building in Public as a Documentary Filmmaker"
              thesis="What happens when you treat a creative project like an open-source repo."
              href="/essays/building-in-public"
            />
          </div>
        </section>

        {/* Email Capture */}
        <section>
          <EmailCaptureBar />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
