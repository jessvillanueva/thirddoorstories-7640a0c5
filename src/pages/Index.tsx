import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import VideoCard from "@/components/VideoCard";
import EssayCard from "@/components/EssayCard";
import EmailCaptureBar from "@/components/EmailCaptureBar";
import logo1517 from "@/assets/1517-logo.png";
import logoResidency from "@/assets/residency-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container-content py-12 md:py-20 flex flex-col gap-16 md:gap-20">
        {/* Hero */}
        <section className="flex flex-col gap-6 animate-fade-in">
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
            Third Door Stories explores the hidden builder world with the communities, grants, and residencies helping young people find a real path beyond college or hustle culture.
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
            <span className="overline text-foreground/[0.35] mb-6 block">Backed by</span>
            <div className="flex items-center justify-center gap-8">
              <img src={logo1517} alt="1517 Fund" className="h-10 object-contain" />
              <img
                src={logoResidency}
                alt="The Residency"
                className="h-12 object-contain"
                style={{ filter: "invert(1)" }}
              />
            </div>
          </div>
        </section>

        {/* Essays */}
        <section className="flex flex-col gap-6">
          <span className="overline text-foreground/[0.35]">From the Studio</span>
          <div className="grid md:grid-cols-2 gap-6">
            <EssayCard
              readTime="8 min read"
              title="Why Therapy Expansion Will Never Catch Gen Z in Time"
              thesis="The mental health crisis isn't just clinical. It's structural. Not enough therapists. Too many kids in crisis. And 85% who need help can't imagine self-identifying as patients. The case for why microgrants, residencies, and hacker houses implicitly connect to mental health infrastructure in disguise. They help give purpose, peers, and accountability before the breakdown happens."
              href="/essays/why-third-door"
            />
            <EssayCard
              readTime="5 min read"
              title="The Origins of the Underworld: How the Builder Scene Actually Started"
              thesis="buildspace. 1517. Emergent Ventures. Y Combinator. The Thiel Fellowship's chaotic early years. The weird little rooms, Discord servers, and SF apartments where this whole ecosystem started, and why most of it stays invisible unless you're already in."
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
