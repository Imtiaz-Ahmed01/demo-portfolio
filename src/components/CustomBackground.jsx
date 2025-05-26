import React, { useEffect, useState } from "react";

const CustomBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  const generateStars = () => {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];
    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 5 + 5, // Slower animations (5s - 10s)
      });
    }
    setStars(newStars);
  };
  const generateMeteors = () => {
    const numOfMeteors = 5;
    const newMeteors = [];
    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };
  useEffect(() => {
    generateStars();
    generateMeteors();

    let sizeHandler = () => {
      generateStars();
    };
    window.addEventListener("resize", sizeHandler);

    return () => window.removeEventListener("resize", sizeHandler);
  }, []);

  return (
    <>
      <div className="fixed inset-0  overflow-hidden pointer-events-none z-0">
        {stars.map((star) => {
          return (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                position: "absolute",
                height: `${star.size}px`,
                width: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: `${star.opacity}`,
                animationDuration: `${star.animationDuration}s`,
              }}
            />
          );
        })}
        {meteors.map((meteor) => {
          return (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                position: "absolute",
                height: `${meteor.size * 50}px`,
                width: `${meteor.size * 2}px`,
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                animationDelay: `${meteor.opacity}`,
                animationDuration: `${meteor.animationDuration}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default CustomBackground;
