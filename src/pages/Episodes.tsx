import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EpisodeCard from "@/components/EpisodeCard";

const mockEpisodes = [
  { slug: "pilot", title: "The Side Entrance", season: "Season 1", duration: "18 min", tags: ["Microgrant", "San Francisco"] },
  { slug: "cold-email", title: "The Cold Email That Worked", season: "Season 1", duration: "22 min", tags: ["Residency", "New York"] },
  { slug: "dropout-founder", title: "Dropout to Founder in 90 Days", season: "Season 1", duration: "15 min", tags: ["Hacker House", "Austin"] },
  { slug: "grant-life", title: "Life After the Grant", season: "Season 1", duration: "20 min", tags: ["Microgrant", "Remote"] },
  { slug: "invisible-network", title: "The Invisible Network", season: "Season 1", duration: "25 min", tags: ["Programs", "Global"] },
  { slug: "building-backwards", title: "Building Backwards", season: "Season 1", duration: "17 min", tags: ["Residency", "Berlin"] },
];

const Episodes = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container-content py-12 md:py-20">
        <section className="space-y-4 mb-12">
          <h1>Episodes</h1>
          <p className="body-base text-foreground/[0.65] max-w-[640px]">
            Each episode follows one builder who found a way in through a door most people didn't know existed.
          </p>
        </section>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEpisodes.map((ep) => (
            <EpisodeCard key={ep.slug} {...ep} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Episodes;
