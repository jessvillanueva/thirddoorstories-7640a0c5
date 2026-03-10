import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

import { Button } from "@/components/ui/button";

const PATREON_JOIN = "https://www.patreon.com/15019639/join";
const YOUTUBE = "https://www.youtube.com/@thirddoorstories";
const TWITTER = "https://x.com/jayveesme";
const INSTAGRAM = "https://www.instagram.com/jayveesdotme";
const PATREON_FREE = "https://www.patreon.com/cw/thirddoorstories";

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px] animate-fade-in">
        <span className="overline text-foreground/[0.35]">Support Third Door Stories</span>
        <h1 className="mt-6 mb-8">
          Help document the paths that matter.
        </h1>
        <p className="body-base text-foreground/[0.65] mb-12">
          Third Door Stories is independent media. No ads, no sponsors dictating content.
          There are free ways to follow along and paid ways to go deeper.
        </p>

        {/* What You Get */}
        <section className="mb-16">
          <h2 className="mb-8">What do you get?</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Free Tier */}
            <div className="card-surface p-6 flex flex-col gap-4">
              <span className="overline text-accent">Free</span>
              <h3>Follow Along</h3>
              <ul className="flex flex-col gap-3 body-small text-foreground/[0.65]">
                <li>• Full finished episodes on YouTube</li>
                <li>• Clips on X / Instagram</li>
                <li>• Public essays and maps on Medium</li>
                <li>• Free membership on Patreon for updates</li>
              </ul>
              <p className="body-small text-foreground/[0.45] mt-auto">
                If you stay on free, you still get the core stories.
              </p>
            </div>

            {/* Patreon Tier */}
            <div className="card-highlight p-6 flex flex-col gap-4 border border-primary/20">
              <span className="overline text-primary">Patreon (the deeper layer)</span>
              <h3>Go Deeper</h3>
              <ul className="flex flex-col gap-3 body-small text-foreground/[0.65]">
                <li>• Early access to new episodes</li>
                <li>• Full uncut interviews (not just the 10-min cut)</li>
                <li>• Case-study breakdowns with exact timelines, financial breakdowns, and "how I got my first client/grant" steps</li>
                <li>• Direct access to me and a community of like-minded thinkers</li>
                <li>• The live-updated map of 25+ microgrants, 10+ residencies, 20+ hacker houses, demo days, and fellowships</li>
              </ul>
              <p className="body-small text-foreground/[0.45] mt-auto">
                If you join the Patreon, you get the deeper infrastructure underneath the stories.
              </p>
            </div>
          </div>
        </section>

        {/* Free Ways to Support */}
        <section className="mb-16">
          <h2 className="mb-6">Free ways to support</h2>
          <p className="body-base text-foreground/[0.65] mb-6">
            Not everyone can pay, and that's completely fine. These help just as much:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" className="card-surface p-5 flex flex-col gap-2 group hover:bg-[hsl(var(--card-highlight))] transition-all duration-200">
              <span className="body-small font-medium text-foreground group-hover:text-primary transition-colors">Subscribe on YouTube</span>
              <span className="body-small text-foreground/[0.45]">Watch full episodes for free and help the algorithm surface them.</span>
            </a>
            <a href={TWITTER} target="_blank" rel="noopener noreferrer" className="card-surface p-5 flex flex-col gap-2 group hover:bg-[hsl(var(--card-highlight))] transition-all duration-200">
              <span className="body-small font-medium text-foreground group-hover:text-primary transition-colors">Follow on X</span>
              <span className="body-small text-foreground/[0.45]">Behind-the-scenes updates, clips, and real-time thoughts.</span>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="card-surface p-5 flex flex-col gap-2 group hover:bg-[hsl(var(--card-highlight))] transition-all duration-200">
              <span className="body-small font-medium text-foreground group-hover:text-primary transition-colors">Follow on Instagram</span>
              <span className="body-small text-foreground/[0.45]">Visual stories, short clips, and episode teasers.</span>
            </a>
            <a href={PATREON_FREE} target="_blank" rel="noopener noreferrer" className="card-surface p-5 flex flex-col gap-2 group hover:bg-[hsl(var(--card-highlight))] transition-all duration-200">
              <span className="body-small font-medium text-foreground group-hover:text-primary transition-colors">Join Patreon (free tier)</span>
              <span className="body-small text-foreground/[0.45]">Get notified when new episodes and essays drop.</span>
            </a>
          </div>
        </section>


        {/* Paid Tiers */}
        <section className="mb-8">
          <h2 className="mb-6">Paid membership tiers</h2>
          <p className="body-base text-foreground/[0.65] mb-6">
            Your support directly funds production, travel, and keeping everything free for everyone else.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Underdog Supporter */}
            <div className="card-surface p-6 flex flex-col gap-4">
              <span className="overline text-primary">CA$6.97 / month</span>
              <h3>Underdog Supporter</h3>
              <p className="body-small text-foreground/[0.45]">
                For people who want to quietly keep this series alive and see more than just the final trailer. Founding supporters are recognized as the OG underdogs.
              </p>
              <ul className="flex flex-col gap-2 body-small text-foreground/[0.65]">
                <li>• Early releases (videos & written pieces, 1–2 weeks early)</li>
                <li>• Monthly personal updates (longform essays or video reflections)</li>
                <li>• Raw cuts & director's commentary</li>
                <li>• Case study deep dives on education, work & creativity</li>
                <li>• Behind-the-scenes content</li>
              </ul>
              <a href={PATREON_JOIN} target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button variant="outline" size="lg" className="w-full">
                  Join on Patreon
                </Button>
              </a>
            </div>

            {/* Third Door Circle */}
            <div className="card-highlight p-6 flex flex-col gap-4 border border-primary/20">
              <span className="overline text-primary">CA$14.97 / month</span>
              <h3>Third Door Circle</h3>
              <p className="body-small text-foreground/[0.45]">
                For those who live in the builder and creator world, and want closer access and community.
              </p>
              <p className="body-small text-foreground/[0.65] font-medium">Everything in Underdog Supporter, plus:</p>
              <ul className="flex flex-col gap-2 body-small text-foreground/[0.65]">
                <li>• Monthly office hours call (group Zoom, coming soon)</li>
                <li>• Early access to unedited interviews</li>
                <li>• Private creator chat (coming soon)</li>
                <li>• Credit in episodes</li>
              </ul>
              <a href={PATREON_JOIN} target="_blank" rel="noopener noreferrer" className="mt-2">
                <Button variant="gold" size="lg" className="w-full">
                  Become a Member
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Support;
