import { useState } from "react";
import { Button } from "@/components/ui/button";

const EmailCaptureBar = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="card-surface p-6 md:p-8">
      <p className="body-base text-foreground/[0.65] mb-4">
        Get early access to new episodes and essays. No spam.
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
          <Button type="submit" variant="gold" size="lg">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default EmailCaptureBar;
