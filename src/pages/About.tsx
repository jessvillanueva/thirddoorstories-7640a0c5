import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import logo1517 from "@/assets/1517-logo.png";
import logoResidency from "@/assets/residency-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20 max-w-[720px]">

        {/* Hero */}
        <span className="overline text-foreground/[0.35]">
          About Third Door Stories
        </span>
        <h1 className="mt-6 mb-8">
          I investigate the paths most people don&apos;t know exist.
        </h1>

        <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
          <p>
            Third Door Stories is a small documentary studio and essay lab mapping the hidden
            builder world for young people stuck between{" "}
            <span className="italic">&quot;get a degree or fail&quot;</span> and{" "}
            <span className="italic">&quot;drop out and hustle.&quot;</span> I focus on the builder
            ecosystem most guidance counselors have never heard of: microgrants, residencies,
            hacker houses, and communities that can quietly change the trajectory of a life.
          </p>
        </div>

        {/* Why This Exists */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>The Information Gap No One Talks About</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              When I was 15 or 16, I was choosing between three paths.
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Door 1: a $52K business degree leading to consulting, a comfortable career, and a life on script.</li>
              <li>Door 2: elite connections and inherited access.</li>
              <li>Door 3: actually learning how to help people, independently, through building and freelancing from scratch.</li>
            </ul>
            <p>
              No one named Door 3 for me. I stumbled into it through persistence, curiosity, and
              seizing the whispers I kept overhearing in the right communities.
            </p>
            <p>
              By the time I chose it at 16, I saw something I haven&apos;t heard from any guidance
              counselor or college advisor: the real infrastructure for taking risks during
              someone&apos;s 20s already exists. It just stays invisible unless someone happens to find
              the right person, Discord server, or dinner table.
            </p>
            <p>
              Most people never find it and I haven&apos;t seen anyone fully piece it together beyond
              forums and spreadsheets.
            </p>
            <p>
              That&apos;s the gap Third Door Stories exists to close.
            </p>
          </div>
        </section>

        {/* My Story */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>My Story</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              When I was 14, I finished my work early in class, convinced my teachers to excuse me
              out, and rode a bus every month to crash a science club with kids that played with fire
              and exploded bottles with baking soda and vinegar. They were nerdy, experimental, and
              fun-loving. It sparked me. That one room redefined the ceiling for what felt possible
              to me.
            </p>
            <p>
              Over the next few years I repeated that move at bigger scales. I found builder
              networks like Socratica, V2, 1517 Fund, and The Residency. Not school clubs one hears
              about in newsletters. Communities found through late night DMs, side chats, and
              half hidden posts. Same kid, different rooms. Completely different ceiling.
            </p>
            <p>
              By 16 I could see the full track ahead of me: business school, small business
              consulting, a respectable career. And I could also feel, for the first time, that it
              probably wouldn&apos;t be fulfilling. I&apos;d spent enough time doing real business cases
              early to de-romanticize the fantasy. Spending seven more years optimizing for that
              path would be educational. But I wasn&apos;t confident the other side was any greener.
            </p>
            <p>
              So I pivoted. From a full degree to a five course adult diploma. From the Sauder
              path to independent building in social good and documentary filmmaking.
            </p>
            <p>
              Along the way I earned my way into the builder world one step at a time:
            </p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>a $1,000 Medici grant from 1517 Fund</li>
              <li>a Top 20 finish in The Residency&apos;s Delta Chapter II as the only filmmaker in the cohort</li>
              <li>buildspace s5 with a trip to San Francisco for demo day</li>
              <li>swung by Socratica nodes, V2, Cansbridge, and other builder and founder events locally with heating potential</li>
            </ul>
            <p>
              The first unsolicited person who paid for the Patreon told me exactly what she
              valued: &quot;the part about the hacker houses, residencies, and microgrants.&quot;
            </p>
            <p>
              That was the moment documenting this world felt necessary over a one-off film.
            </p>
          </div>
        </section>

        {/* What Third Door Stories Is */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>A Map of the Messy Middle</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              Third Door Stories is a documentary series and essay lab about the identity shifts,
              critical decisions, and messy middles of builders who took the third door and the
              real infrastructure that made it viable.
            </p>
            <p>
              Episodes run 10 to 20 minutes and focus on the parts that don&apos;t fit neatly on a
              résumé: money stress, program departures, family conversations, and the months when
              nothing works. Outcomes are context, not the whole story.
            </p>
            <p>
              The first pilot was shot during The Residency&apos;s Delta Chapter II, a three week
              builder sprint where I placed Top 20 out of over 1,500 participants globally. It was
              a 27 minute conversation with Brian Scudamore, founder of 1-800-GOT-JUNK?, cut into
              a short episode using borrowed gear. From cold email to public launch in 24 days, it
              generated early revenue and the first Patreon supporters, proof there&apos;s real appetite
              for this kind of documentation.
            </p>
            <p>What I&apos;m mapping across documentary episodes, essays, and posts:</p>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              <li>Microgrants like 1517 Medici, Emergent Ventures, and Bagel Fund</li>
              <li>Residencies like Nautilus and The Residency</li>
              <li>Hacker houses like FR8 and ecosystems in SF, Waterloo, and Vancouver</li>
              <li>Builder communities like Socratica, Cansbridge, and others</li>
              <li>
                First client stories, product validation without VC, and navigating family pressure
              </li>
            </ul>
          </div>
        </section>

        {/* How It's Different */}
        <section className="mt-16 flex flex-col gap-6">
          <h2>Peer Documentation, Not Polished Hindsight</h2>
          <div className="flex flex-col gap-6 body-base text-foreground/[0.65]">
            <p>
              I&apos;m not a 35 year old filmmaker looking back with tidy hindsight. I&apos;m 18, in
              Vancouver, living the same tradeoffs I&apos;m documenting. The films feel more like a
              peer conversation than a polished lecture because they are.
            </p>
            <p>
              Most education tools act like cookbooks. They hand someone recipes and frameworks. Third
              Door Stories is closer to a cooking show for alternative lives. Someone watches a person
              actually cook an unconventional path in real time, sees the mistakes, and understands
              what &quot;golden brown&quot; looks like before ever trying it themselves.
            </p>
            <p>
              AI tools can tell someone how to start a company. College counselors can help package a
              project. What they can&apos;t show is what it feels like to be 17 or 22, taking a
              real leap, dealing with self doubt, and shipping anyway. That emotional terrain is
              what Third Door Stories documents.
            </p>
            <p>
              The project is radically independent. No university partners deciding which stories
              are on brand. No investors pushing for hyper growth. No film school gatekeeping what
              counts as real cinema. The goal isn&apos;t virality. By 2030, I want exploring Door 3 to
              feel as normal and legible as writing a college application essay.
            </p>
          </div>
        </section>

        {/* Backed By */}
        <section className="mt-16 mb-8 flex flex-col gap-8 rounded-2xl p-8" style={{ backgroundColor: '#121212' }}>
          <h2>Backed By</h2>
          <div className="flex items-center justify-center gap-8">
            <img src={logo1517} alt="1517 Fund" className="h-10 object-contain" />
            <img src={logoResidency} alt="The Residency" className="h-12 object-contain" />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">1517 Medici Grant</span>
              <p className="body-small text-foreground/[0.65]">
                A small, fast microgrant from 1517 Fund designed to help young builders ship their
                next concrete step with no pitch deck required. Third Door Stories received a $1,000
                Medici grant to fund early production.
              </p>
            </div>
            <div className="card-surface p-6 flex flex-col gap-3">
              <span className="overline text-primary">The Residency — Delta Chapter II Top 20</span>
              <p className="body-small text-foreground/[0.65]">
                Delta Chapter II is a three week builder sprint hosted by The Residency. Third Door
                Stories was selected as a Top 20 finalist out of over 1,500 participants globally,
                as the only filmmaker in the cohort. The pilot episode was shot and launched there
                in 24 days.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mt-16 mb-8 flex flex-col gap-6 body-base text-foreground/[0.65]">
          <p>
            I investigate what problems are out there, why they matter, and, above all, whether
            they&apos;re worth the battle for someone. I&apos;ll let you decide if that someone might
            be you. Let&apos;s map it.
          </p>
          <div className="flex flex-col gap-3">
            <p>
              🔓 <span className="text-foreground font-medium">Free:</span> Subscribe on YouTube for full episodes.
            </p>
            <p>
              🗺️ <span className="text-foreground font-medium">Deeper layer:</span> Join the Patreon for full uncut
              interviews, case-study breakdowns (timelines, financials, first-client tactics), and the
              live-updated map of 25+ microgrants, 10+ residencies, and 20+ hacker houses.
            </p>
          </div>
          <p className="text-foreground/[0.45] body-small">
            Subjects and dates will evolve. Episodes will drop async by default as I earn access and do the work.
          </p>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
};

export default About;
