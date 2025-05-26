import { ArrowDown } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen px-4 flex justify-center items-center flex-col"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="animate-fade-in opacity-0">Hi, I'm </span>
            <span className="animate-fade-in-delay-1 text-primary opacity-0">
              Imtiaz{" "}
            </span>
            <span className="animate-fade-in-delay-2 ml-2 text-gradient opacity-0">
              Ahmed
            </span>
          </h1>
          <p className="animate-fade-in-delay-3 max-2-2xl mx-auto md:text-xl opacity-0 text-lg text-muted-foreground">
            A front-end adventurer forging immersive interfaces with React,
            Tailwind, and curiosity. Always leveling up, one project at a time.
          </p>
        </div>
        <div className="animate-fade-in-delay-4 opacity-0 pt-10 ">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col  items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
