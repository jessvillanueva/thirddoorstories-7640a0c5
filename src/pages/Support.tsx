import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px]">
        <span className="overline text-foreground/[0.35]">Support Third Door Stories</span>
        <h1 className="mt-6 mb-8">
          Help us document the paths that matter.
        </h1>
        <p className="body-base text-foreground/[0.65] mb-12">
          Third Door Stories is independent media. No ads, no sponsors dictating content. 
          Your support directly funds production, travel, and keeping this free for everyone.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card-surface p-6 space-y-4">
            <span className="overline text-foreground/[0.35]">Free</span>
            <h3>Community</h3>
            <ul className="space-y-2 body-small text-foreground/[0.65]">
              <li>• All public episodes</li>
              <li>• Email updates on new stories</li>
              <li>• Access to the Third Door Map</li>
            </ul>
          </div>

          <div className="card-highlight p-6 space-y-4 border border-primary/20">
            <span className="overline text-primary">$10/month</span>
            <h3>Underdog Supporter</h3>
            <ul className="space-y-2 body-small text-foreground/[0.65]">
              <li>• Everything in Community</li>
              <li>• Extended interviews</li>
              <li>• Director's commentary</li>
              <li>• Behind-the-scenes content</li>
              <li>• Early access to new episodes</li>
            </ul>
            <Button variant="gold" size="lg" className="w-full mt-2">
              Become a Supporter
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Support;
