import React, { useEffect, useRef } from "react";
import gsc from "./assets/tools/gsc.png";
import ahrefs from "./assets/tools/ahref.png";
import screamingfrog from "./assets/tools/screamingfrog.png";
import pagespeed from "./assets/tools/pagespeed.svg";
import wordpress from "./assets/tools/wordpress.png";
import html from "./assets/tools/html5.png";
import css from "./assets/tools/css.png";
import javascript from "./assets/tools/javascript.png";
import tailwind from "./assets/tools/tailwind.png";
import bootstrap from "./assets/tools/bootstrap.png";
import react from "./assets/tools/react.png";
import github from "./assets/tools/github.png";
import git from "./assets/tools/git.png";
import vscode from "./assets/tools/vscode.png";
import chatgpt from "./assets/tools/chatgpt.png";

const tools = [
  { name: "Google Search Console", logo: gsc },
  { name: "Ahrefs", logo: ahrefs },
  { name: "Screaming Frog", logo: screamingfrog },
  { name: "PageSpeed Insights", logo: pagespeed },
  { name: "WordPress", logo: wordpress },
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "JavaScript", logo: javascript },
  { name: "Tailwind CSS", logo: tailwind },
  { name: "Bootstrap", logo: bootstrap },
  { name: "React", logo: react },
  { name: "Github", logo: github },
  { name: "GIT", logo: git },
  { name: "Vscode", logo: vscode },
  { name: "Chatgpt", logo: chatgpt },
];

const TechStack = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    let animationFrame;
    let speed = 0.5; // control speed here (increase = faster)

    const autoScroll = () => {
      if (!container) return;

      container.scrollLeft += speed;

      // seamless loop
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#0B0F19] py-12 md:pb-28">
      <div className="bg-[#101626] max-w-[1200px] mx-auto p-2 md:px-4 rounded-lg">
        {/* <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Tools & Tech Stack
        </h2> */}

        {/* Outer scroll container (allows manual drag if desired) */}
        <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide cursor-grab active:cursor-grabbing">
          {/* Inner marquee container for continuous animation */}
          <div className="animate-marquee flex gap-1 md:gap-4 w-max">
            {/* Duplicate tools to make infinite loop seamless */}
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={index}
                className="min-w-[140px] py-2 px-1 flex flex-col items-center"
              >
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="h-6 sm:h-8 md:h-10 object-contain"
                  draggable="false"
                />
                <span className="mt-3 text-[10px] md:text-sm text-gray-400 whitespace-nowrap">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
