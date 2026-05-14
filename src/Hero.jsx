import React from "react";
import picture from "./assets/profile.png";

// Reminder for deployment to push main
// 1. git add .
// 2. git commit -m "Add new component"
// 3. git push origin main
// to from main to gh-pages
// 4. npm run build
// 5. npm run deploy

function Hero() {
  return (
    <section className="py-16 md:py-28 bg-[#0B0F19] text-[#E5E7EB]">
      <div className="mx-auto px-2 md:px-4 max-w-[1200px] flex flex-row items-center gap-4 md:gap-8">
        {/* Left: Profile Image (30%) */}
        <div className="w-[30%] flex justify-center">
          <div className="w-24 h-36 sm:w-32 sm:h-42 md:w-60 md:h-80 rounded-3xl overflow-hidden">
            <img
              src={picture}
              alt="Alsharieff Kallun"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Content (70%) */}
        <div className="w-[70%] text-left space-y-2 sm:space-y-4 md:space-y-6">
          <h1 className="text-lg sm:text-2xl md:text-5xl font-extrabold tracking-wide uppercase">
            Alsharieff Kallun
          </h1>

          <h2 className="text-sm md:text-2xl font-extrabold tracking-wide uppercase">
            SEO Specialist
          </h2>

          <p className="text-xs sm:text-sm md:text-lg text-[#9CA3AF] font-bold leading-relaxed">
            Building fast, SEO-optimized websites using AI-driven tools and
            modern technologies. Passionate about learning new programming
            languages, frameworks, and tools to stay ahead in web development
            and SEO.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-2 sm:gap-4 mt-2 sm:mt-4 md:mt-6 justify-start">
            <a
              href="#portfolio"
              className="bg-[#1A73E8] hover:bg-[#0965dd] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full font-semibold text-center transition-shadow shadow-md text-[10px] md:text-sm"
            >
              Portfolio
            </a>

            <a
              href="https://drive.google.com/file/d/12-6QUX_Efd9Cuh9y_kFf59bcyIbJxdOS/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1F2937] hover:bg-[#2A2F3A] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-3 rounded-full font-semibold flex items-center justify-center gap-1 sm:gap-2 md:gap-2 transition-shadow shadow-md text-[10px] md:text-sm"
            >
              <svg
                className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
