import React from "react";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";
import Techstack from "./Techstack";

const TechstackSection: React.FC = () => {
  return (
    <section data-nav-color="black" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-0 h-fit pt-32 pb-8">
            <AnimationPopupWrapper
              y={40}
              transition={{ ease: "easeOut", duration: 1 }}>
              <div className="pr-8">
                <h1 className="text-4xl font-bold mb-4">My Tech Stack</h1>
                <p className="text-lg text-gray-600">
                  Over the years, I&apos;ve built expertise in a wide range of
                  technologies, including front-end frameworks, back-end
                  systems, cloud platforms, and development tools, enabling me
                  to deliver robust and scalable solutions.
                </p>
              </div>
            </AnimationPopupWrapper>
          </div>

          <div className="pt-32 pb-4">
            <Techstack />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechstackSection;
