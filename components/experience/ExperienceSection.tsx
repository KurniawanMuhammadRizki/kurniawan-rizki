import React from "react";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";
import Education from "../education/Education";
import Experience from "./Experience";
const experiences = [
  { role: "Creative Director", company: "Westcom", year: "2024 - 2025" },
  { role: "Design Director", company: "Teamled", year: "2023 - 2024" },
  { role: "Senior Designer", company: "Triple Works", year: "2022 - 2023" },
  { role: "Designer", company: "On Form", year: "2022 - 2023" },
  { role: "Junior Designer", company: "ANYA", year: "2021 - 2022" },
  // Duplicate entries untuk contoh scroll
  { role: "Creative Director", company: "Westcom", year: "2024 - 2025" },
  { role: "Design Director", company: "Teamled", year: "2023 - 2024" },
  { role: "Senior Designer", company: "Triple Works", year: "2022 - 2023" },
  { role: "Designer", company: "On Form", year: "2022 - 2023" },
  { role: "Junior Designer", company: "ANYA", year: "2021 - 2022" },
];

const ExperienceSection = () => {
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
