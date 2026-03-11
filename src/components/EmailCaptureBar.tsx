import { useState } from "react";
import { Button } from "@/components/ui/button";

const PUBLICATION_ID = "bec1e30d-1ef3-4808-93cd-ffde841b69d5";

const EmailCaptureBar = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://embeds.beehiiv.com/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          publication_id: PUBLICATION_ID,
          email,
        }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card-surface p-6 md:p-8">
      <h3 className="text-lg font-bold text-foreground mb-1">Unlatched — The Newsletter</h3>
      <p className="body-base text-foreground/[0.65] mb-4">
        Investigating the hidden paths young builders take when college and hustle culture aren't always the answer. No spam.
      </p>
      {submitted ? (
        <p className="text-primary body-base font-medium">You're in. We'll be in touch.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-11 px-4 bg-background border border-border/[0.12] rounded-xl text-foreground placeholder:text-foreground/[0.35] focus:outline-none focus:border-primary/50 transition-colors"
            required
          />
          <Button type="submit" variant="gold" size="lg" disabled={loading}>
            {loading ? "Subscribing…" : "Subscribe"}
          </Button>
          {error && <p className="text-destructive text-sm">{error}</p>}
        </form>
      )}
      <a
        href="https://thirddoorstories.beehiiv.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 body-small text-foreground/[0.45] hover:text-primary transition-colors"
      >
        Read past issues →
      </a>
    </div>
  );
};

export default EmailCaptureBar;
