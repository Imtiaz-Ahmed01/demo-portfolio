import React from "react";
import Project1 from "../assets/projects/Turkey.png";
import Project2 from "../assets/projects/LuxeShoes.png";
import Project3 from "../assets/projects/NexTii.png";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
const Projects = () => {
  const project = [
    {
      id: 1,
      title: "Turkey Landing Page",
      description: "Beautiful Responsive Landing Page Made With Html And Css",
      image: Project1,
      tags: ["Html", "Css", "Landing-Page"],
      demoUrl: "https://turkeyland.netlify.app/",
      githubUrl: "https://github.com/Imtiaz-Ahmed01/Turkey",
    },
    {
      id: 2,
      title: "E-Commerce Shoes Store",
      description:
        "A Complete E-commerce Online Shoes Store Made With React, Tailwindcss, React-Hot-Toast and ETC",
      image: Project2,
      tags: ["React", "TailwindCss", "E-Commerce"],
      demoUrl: "https://luxeshoes.netlify.app/",
      githubUrl: "https://github.com/Imtiaz-Ahmed01/LuxeShoes",
    },
    {
      id: 3,
      title: "Testing Page",
      description:
        "An Testing Project, With Sliding Images, A Logging Popup And Much More",
      image: Project3,
      tags: ["Html", "Css", "JavaScript"],
      demoUrl: "https://nextiii.netlify.app/",
      githubUrl: "https://github.com/Imtiaz-Ahmed01/Nextii",
    },
  ];
  return (
    <section id="projects" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here Are Some Of My Projects. Some Of Them Are Currently In
          Development, We'll Do Our Best To Complete Them
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((value, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {value?.tags?.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 text-xs border font-medium rounded-full bg-primary/10 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-1">{value.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {value.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    href={value.demoUrl}
                    target="_blank"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    href={value.githubUrl}
                    target="_blank"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-15">
          <a href="https://github.com/Imtiaz-Ahmed01" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
            Checkout My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
