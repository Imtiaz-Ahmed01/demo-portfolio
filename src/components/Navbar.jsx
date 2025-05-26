import React, { useEffect, useState } from "react";
import cn from "@/lib/utils";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  let navItems = [
    {
      name: "Home",
      href: "#hero",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Skills",
      href: "#skills",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];
  let [isScrolled, setIsScrolled] = useState(false);
  let [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    let scrollHandler = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <>
      <nav
        className={cn(
          "container fixed z-40 w-full transition-all duration-300",
          isScrolled
            ? "py-4 bg-background/80 backdrop:blur-md shadow-xs"
            : "py-7"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="font-bold text-xl text-primary flex items-center"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Imtiaz Ahmed</span>{" "}
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navItems.map((value, key) => (
              <a
                key={key}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
                href={value.href}
              >
                {value.name}
              </a>
            ))}
          </div>

          <button
            className="md:hidden z-50 p-2 text-foreground"
            onClick={() => setIsMenu((prev) => !prev)}
            aria-label={isMenu ? "Close Manu" : "Open Menu"}
          >
            {isMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop:blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenu
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="text-xl flex flex-col space-y-8">
              {navItems.map((value, key) => (
                <a
                  key={key}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-semibold"
                  href={value.href}
                  onClick={() => setIsMenu(false)}
                >
                  {value.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
