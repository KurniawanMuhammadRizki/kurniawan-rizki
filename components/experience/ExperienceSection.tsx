import React from "react";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";
import Experience from "./Experience";

const ExperienceSection: React.FC = () => {
  return (
    <section data-nav-color="black" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-0 h-fit pt-32">
            <AnimationPopupWrapper
              y={40}
              transition={{ ease: "easeOut", duration: 1 }}>
              <div className="pr-8">
                <h1 className="text-4xl font-bold mb-4">My Experience</h1>
                <p className="text-lg text-gray-600">
                  Throughout my career as a Software Developer, I've had the
                  privilege of working with some very talented people.
                </p>
              </div>
            </AnimationPopupWrapper>
          </div>

          <div className="pt-32">
            <Experience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
