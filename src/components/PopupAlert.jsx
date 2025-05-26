import React, { useEffect, useState } from "react";

const PopupAlert = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setAnimate(false);
    const timer = setTimeout(() => setShow(false), 400); 
    return () => clearTimeout(timer);
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md transition-opacity duration-500 ease-out"
      onClick={closeModal} 
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white dark:bg-card text-foreground dark:text-white
          p-8 rounded-3xl max-w-sm w-[90%] shadow-2xl text-center
          transform transition-all duration-400 ease-in-out
          ${animate ? "opacity-100 scale-100 float" : "opacity-0 scale-90"}
          border border-border relative overflow-hidden
        `}
      >
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
          <div className="star top-10 left-10 animate-[pulse-subtle_5s_ease-in-out_infinite]"></div>
          <div className="star bottom-5 right-12 animate-[pulse-subtle_6s_ease-in-out_infinite_reverse]"></div>
          <div className="meteor top-0 left-1/2 animate-[meteor_7s_linear_infinite] [animation-delay:-3s]"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-red-500 relative z-10 animate-[fade-in_0.7s_ease-out_forwards]">
          ⚠️ Alert!
        </h2>
        <p className="text-base mt-5 text-muted-foreground relative z-10 mb-6 animate-[fade-in_0.7s_ease-out_0.2s_forwards]">
          This is a <strong className="text-foreground">demo portfolio</strong>.
          <br />
          And Made With Youtube Tutorial
          <br />
          Some features may be limited. Please explore wisely.
        </p>
        <button
          onClick={closeModal}
          className="cosmic-button relative z-10 animate-[fade-in_0.7s_ease-out_0.4s_forwards]"
        >
          Got It
        </button>
      </div>
    </div>
  );
};

export default PopupAlert;