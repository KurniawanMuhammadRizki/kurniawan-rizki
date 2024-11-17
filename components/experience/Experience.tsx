import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";

type ExperienceItem = {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  logo: string;
  summary: string;
};

const experienceData: ExperienceItem[] = [
  {
    position: "Freelance Web Developer",
    company: "Universitas Muslim Indonesia",
    location: "Makassar",
    period: "March 2023 - March 2024",
    logo: "/education/logoUMI.png",
    achievements: [
      "Building a responsive web application designed for revolutionize asset and inventory management at the UMI Waqf Foundation (YW-UMI). This includes institutions like the Muslim University of Indonesia, Ibnu Sina Hospital Makassar, RSGM UMI Makassar, and various ventures. Armed with HTML, CSS, JavaScript, MySQL, PHP, Bootstrap, and CodeIgniter, our mission is to shape an intuitive and efficient system.",
      "Building a responsive web application module for the Usman bin Affan Library of the Muslim University of Indonesia. It aims to simplify the administrative process for students as a graduation requirement at the university. The technologies used in this project include HTML, CSS, JavaScript, jQuery, MySQL, and PHP Native.",
      "Collaboration with the backend development team, we integrated APIs to create a unified website that aligned various entities under UMI Waqf Foundation (YW-UMI).",
    ],
    summary:
      "This experience has strengthened my ability to translate complex business needs into intuitive and efficient web applications, improving data accuracy and streamlining workflows for diverse institutions. Working with multiple stakeholders from various organizations within YW-UMI enhanced my communication and collaboration skills, ensuring all needs were met within the project's scope and timeline.",
  },
  {
    position: "IT Support Intern",
    company: "PT.Bank Sulselbar",
    location: "Makassar",
    period: "Nov 2021 - Jan 2022",
    logo: "/experience/logoBankSulselbar.png",
    achievements: [
      "Inputting, verifying, and validating payment orders document.",
      "Assist staff manage the Anti Money Laundering System.",
      "Assist the IT team in troubleshooting and configuring workstations",
    ],
    summary:
      "This experience has strengthened my attention to detail, ability to work collaboratively across teams, and technical problem-solving skills.",
  },
];

const Experience = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-10 ">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8 " />
        <h2 className="text-2xl font-medium">Experience</h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-black" />

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index}>
              <AnimationPopupWrapper
                y={40}
                transition={{ ease: "easeOut", duration: 1 }}>
                <div className="relative pl-20">
                  <div className="absolute left-0 overflow-hidden w-12 h-12 bg-white">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{item.position}</h3>
                    <div className="text-gray-600">
                      <p className="text-primary-orange">{item.company}</p>
                      <p className="text-sm">
                        {item.location} | {item.period}
                      </p>
                    </div>

                    <ul className="list-disc text-sm text-gray-600 space-y-1 pt-2 sm:ml-4">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <p className="text-gray-600">{item.summary}</p>
                  </div>
                </div>
              </AnimationPopupWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
