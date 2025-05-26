import React from "react";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t px-12 py-12 relative border-border mt-12 pt-8 flex flex-wrap items-center justify-between">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Imtiazahmed.co. All rights reserved.
      </p>
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
