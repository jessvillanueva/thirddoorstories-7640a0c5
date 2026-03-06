const SiteFooter = () => {
  return (
    <footer className="border-t border-border/[0.12] mt-20">
      <div className="container-content py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="body-small text-foreground/[0.35]">
          © 2026 Third Door Stories. Independent media for builders.
        </span>
        <a
          href="mailto:jess@thirddoorstories.com"
          className="body-small text-foreground/[0.35] hover:text-primary transition-colors"
        >
          jess@thirddoorstories.com
        </a>
      </div>
    </footer>
  );
};

export default SiteFooter;
