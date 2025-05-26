import React from "react";
import ThemeChanger from "../components/ThemeChanger";
import CustomBackground from "../components/CustomBackground";
import Navbar from "../components/Navbar";
import PageNotFound from "./PageNotFound";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <>
      <ThemeChanger />
      <CustomBackground />
      <Navbar />
      <PageNotFound />
      <Footer />
    </>
  );
};

export default NotFound;
