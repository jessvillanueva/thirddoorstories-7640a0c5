import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import logo1517 from "@/assets/1517-logo.png";
import logoResidency from "@/assets/residency-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px] animate-fade-in">
        {/* Hero */}
        <span className="overline text-foreground/[0.35]">
          About Third Door Stories
        </span>
        <h1 className="mt-6 mb-8">
          I investigate the paths most people don&apos;t know exist.
        </h1>

        <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
          <p>
            Third Door Stories is a small documentary studio about hidden Door 3
            paths for young people stuck between{" "}
            <span className="italic">&quot;get a degree or fail&quot;</span> and{" "}
            <span className="italic">&quot;drop out and hustle.&quot;</span> I focus on
            the builder world most guidance counselors never mention:
            microgrants, residencies, hacker houses, and programs that can
            quietly change the trajectory of a life.
          </p>
        </div>

        {/* Why This Exists */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>Why This Exists</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              Every year, thousands of ambitious people miss opportunities that
              could change their lives — not because they aren&apos;t capable, but
              because they never hear about them. The information gap around
              unconventional paths is huge, and most of it lives in whisper
              networks instead of public maps.
            </p>
            <p>
              Mental health and personal agency are usually treated like
              willpower problems when they&apos;re mostly downstream of
              environment. Most young adults are stuck in rooms that can&apos;t give
              them what they actually need. Third Door Stories exists to close
              that gap by turning real builder journeys and the places behind
              them into documentaries anyone can watch for free.
            </p>
          </div>
        </section>

        {/* My Story */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>My Story</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              When I was 14, I finished my work early in middle school, convinced
              my teachers to let me leave, and rode a bus to crash a science club
              with older kids. They were nerdy, experimental, and fun‑loving.
              That one room quietly reset my ceiling for what was possible.
            </p>
            <p>
              Over the next few years, I repeated that move at larger scales. I
              found builder networks like Socratica, V2, 1517 Fund, and The
              Residency — not school clubs in newsletters, but communities you
              discover through late‑night DMs, side chats, and half‑hidden posts.
              Same kid, different rooms. Completely different ceiling.
            </p>
            <p>
              By 16, I could see the track in front of me: a $52K business
              degree, consulting, and a comfortable scripted life. At the same
              time, I was meeting founders and residency leads who showed me a
              third door: actually learn how to help people, from scratch, on
              my own terms. No one told me Door 3 existed, but I chose it
              anyway — pivoting from a full degree to a five‑course adult
              diploma and from the Sauder path to independent building in social
              good and documentary storytelling.
            </p>
            <p>
              Along the way, I earned a $1,000 Medici grant from 1517, became a
              Top 20 finalist in The Residency&apos;s Delta Chapter II as the only
              filmmaker in my cohort, joined Buildspace S5, and embedded in
              builder communities from Vancouver to San Francisco. The first
              person who paid for the Patreon told me exactly what she valued:
              &quot;the part about the hacker houses, residencies, and microgrants.&quot;
              That was the moment it clicked that documenting this world
              mattered.
            </p>
          </div>
        </section>

        {/* What Third Door Stories Is */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>What Third Door Stories Is</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              Third Door Stories is a documentary series and essay lab mapping
              the hidden builder ecosystem: the microgrants, residencies, hacker
              houses, and fellowships that almost never show up in official
              college brochures. Episodes run 10–20 minutes and focus on the
              messy middle — money stress, program departures, and family
              conversations — with outcomes as context instead of the whole
              story.
            </p>
            <p>
              AI tools can tell you how to start a company. College counselors
              can help package a project. What they can&apos;t show you is what it
              feels like to be 17 or 22, taking a real leap, dealing with
              self‑doubt, and shipping anyway. That emotional terrain is what
              Third Door Stories documents.
            </p>
            <p>
              The first pilot was shot during The Residency&apos;s Delta Chapter II:
              a 27‑minute conversation with Brian Scudamore, founder of
              1‑800‑GOT‑JUNK?, cut into a short pilot using borrowed gear. From
              cold email to public launch in 24 days, it generated early revenue
              and the first Patreon supporters — proof there&apos;s real appetite
              for this kind of documentation. Distribution is simple: YouTube as
              the free front door, Patreon for recurring support and deeper
              cuts, and a film‑festival track for credibility over virality.
            </p>
          </div>
        </section>

        {/* How It's Different */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>How It&apos;s Different</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              I&apos;m not a 35‑year‑old filmmaker looking back with tidy hindsight.
              I&apos;m 18, in Vancouver, living the same tradeoffs I&apos;m documenting:
              finishing an adult diploma, leaving the default path, and building
              an independent studio with no institutional safety net. The films
              feel more like a peer conversation than a polished lecture.
            </p>
            <p>
              Most education tools act like cookbooks: they give you recipes and
              frameworks. Third Door Stories is closer to a cooking show for
              alternative lives. You watch someone actually &quot;cook&quot; an
              unconventional path in real time, see the mistakes, and feel what
              &quot;golden brown&quot; looks like before you ever try it yourself.
            </p>
            <p>
              The project is radically independent. There are no university
              partners deciding which stories are on‑brand, no investors pushing
              for hyper‑growth, and no film school gatekeeping what counts as
              &quot;real&quot; cinema. The goal isn&apos;t virality; it&apos;s to build a
              multi‑season archive of real paths between roughly 17 and 21 so
              that, by 2030, exploring Door 3 feels as normal and concrete as
              writing a college application essay.
            </p>
          </div>
        </section>

        {/* If This Is For You */}
        <section className="mt-16 mb-8 flex flex-col gap-6">
          <h2>If This Is For You</h2>
          <div className="flex flex-col gap-4 body-base text-foreground/[0.65]">
            <p>
              If you&apos;re a student, early‑career builder, or quietly restless
              person who feels trapped between &quot;play it safe&quot; and &quot;burn the
              boats,&quot; these stories are for you. If you grew up far from the
              hubs where this world is visible and you&apos;re just now learning
              that microgrants, residencies, and hacker houses even exist,
              they&apos;re especially for you.
            </p>
            <p>
              Start with Episode 0, wander the Third Door Map, and if it hits,
              join the newsletter or Patreon and send an episode to the one
              friend who needs proof that Door 3 is real.
            </p>
          </div>
        </section>

        {/* Backed by */}
        <section className="mt-16 mb-8 flex flex-col gap-8">
          <h2>Backed By</h2>
          <div className="flex items-center justify-center gap-8">
            <img src={logo1517} alt="1517 Fund" className="h-10 object-contain" />
            <img src={logoResidency} alt="The Residency" className="h-12 object-contain" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">1517's Medici Grant</span>
              <p className="body-small text-foreground/[0.65]">
                A small, fast microgrant from 1517 Fund designed to help young builders ship their next concrete step — no strings attached, no pitch deck required. Third Door Stories received a $1,000 Medici grant to fund early production.
              </p>
            </div>
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">The Residency — Delta Chapter II Top 20</span>
              <p className="body-small text-foreground/[0.65]">
                The Residency is a builder residency for early-stage founders and creators shipping ambitious projects. Third Door Stories was selected as a Top 20 finalist in Delta Chapter II — the only filmmaker in the cohort — where the pilot episode was shot and launched in 24 days.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
