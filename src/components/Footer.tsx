const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">&lt;</span>
          Built by Shamit Gautam
          <span className="text-primary"> /&gt;</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground/50 mt-1">
          © {new Date().getFullYear()} • All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
