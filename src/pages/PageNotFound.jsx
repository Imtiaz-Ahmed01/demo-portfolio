import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  let navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <p className="font-bold text-4xl sm:text-6xl text-primary">404</p>
        <h1 className="text-3xl sm:text-5xl font-semibold text-foreground mt-4">
          Page Not Found
        </h1>
        <p className="text-lg sm:text-xl mt-4 text-foreground/60 leading-relaxed">
          Sorry, we could not find the page you are looking for.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="group px-6 py-3 flex items-center justify-center gap-3 font-poppins bg-blue-600 rounded text-white hover:bg-blue-500 cursor-pointer font-bold transition-transform duration-200"
          >
            <MoveLeft className="group-hover:-translate-x-1 duration-150" />
            Go Back Home
          </button>
          <button
            onClick={() => navigate("/ContactUs")}
            className="group flex items-center justify-center gap-3 text-lg font-poppins cursor-pointer font-bold text-blue-600 hover:text-blue-500 transition-transform duration-200"
          >
            Contact Support
            <MoveRight className="group-hover:translate-x-1 duration-150" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
