import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px]">
        <span className="overline text-foreground/[0.35]">About Third Door Stories</span>
        <h1 className="mt-6 mb-8">
          We document the paths most people don't know exist.
        </h1>
        <div className="space-y-6 body-base text-foreground/[0.65]">
          <p>
            Third Door Stories is an independent documentary series about unconventional builders — 
            the ones who found microgrants, residencies, hacker houses, and programs that changed 
            the trajectory of their lives.
          </p>
          <p>
            We believe the most interesting stories in tech and culture aren't happening at the 
            well-known companies or on the expected paths. They're happening in dorm rooms, coffee 
            shops, and Slack channels that most people will never find.
          </p>
        </div>

        <section className="mt-16 space-y-6">
          <h2>Why This Exists</h2>
          <div className="space-y-6 body-base text-foreground/[0.65]">
            <p>
              Every year, thousands of ambitious people miss opportunities that could change their 
              lives — not because they aren't qualified, but because they never heard about them. 
              The information asymmetry around unconventional paths is staggering.
            </p>
            <p>
              Third Door Stories exists to close that gap. We find the people who took these paths, 
              sit down with them, and turn their stories into documentaries that anyone can watch.
            </p>
          </div>
        </section>

        <section className="mt-16 space-y-6">
          <h2>Backed By</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card-surface p-6">
              <h3 className="text-lg font-semibold">1517 Fund</h3>
              <p className="body-small text-foreground/[0.65] mt-2">Medici Grant recipient. Backing dropouts and misfits building the future.</p>
            </div>
            <div className="card-surface p-6">
              <h3 className="text-lg font-semibold">The Residency</h3>
              <p className="body-small text-foreground/[0.65] mt-2">Delta Chapter II. A builder community for unconventional creators.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
