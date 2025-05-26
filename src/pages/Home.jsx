import React from "react";
import ThemeChanger from "../components/ThemeChanger";
import CustomBackground from "../components/CustomBackground";
import Navbar from "../components/Navbar";
import HeroSection from "./HeroSection";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../components/Footer";
import PopupAlert from "../components/PopupAlert";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <PopupAlert />
        <ThemeChanger />
        <CustomBackground />
        <Navbar />
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
