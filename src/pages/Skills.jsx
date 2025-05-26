import React, { useState } from "react";
import cn from "@/lib/utils";
const Skills = () => {
  const skill = [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 83, category: "Frontend" },
    { name: "JavaScript", level: 74, category: "Frontend" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Tailwind CSS", level: 89, category: "Frontend" },
    { name: "Node.js", level: 11, category: "Backend" },
    { name: "Express.js", level: 10, category: "Backend" },
    { name: "MongoDB", level: 14, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
    { name: "VS Code", level: 95, category: "Tools" },
    { name: "Figma", level: 86, category: "Design" },
  ];
  let [activeCategory, setActiveCategory] = useState("All");
  const category = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Design",
    "Tools",
  ];
  const skillsFilter = skill.filter(
    (value) => activeCategory === "All" || value.category === activeCategory
  );
  return (
    <section id="skills" className="px-4 py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {category.map((value, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(value)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === value
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {value}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsFilter.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skills.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{
                    width: skills.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">{skills.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
