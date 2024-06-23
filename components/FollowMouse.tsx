"use client";


import React, { useState, useEffect } from 'react';

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: { clientX: any; clientY: any; }) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.body.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.body.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      setColor(randomColor);
    },300);

    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ zIndex: -1, transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      <div
        className="bg-[#4542f1] h-[31.25rem] w-[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[0rem] lg:left-[0rem] xl:left-[0rem] 2xl:left-[0rem] dark:bg-[#d86eff]"
        style={{ transform: 'translate(-50%, -50%)', backgroundColor: color }}
      ></div>
    </div>
  );
};

export default FollowMouse;
