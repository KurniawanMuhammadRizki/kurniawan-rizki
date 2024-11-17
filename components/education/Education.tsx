import React from "react";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  subtitle1?: string;
  subtitle2?: string;
  gpa?: string;
  logo: string;
  achievements?: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "Digital Talent Incubator - Software Engineering",
    institution: "Purwadhika Digital Technology School",
    period: "March 2024 - October 2024",
    gpa: "GPA: 94.86 / 100",
    description:
      "During my Purwadhika studies, I gained full-stack engineering expertise proficiency in Typescript, Tailwind CSS,React/Next.js. Adeptness in Java, SpringBoot, PostgreSQL. Experience with APIs, microservices, Docker/Kubernetes, Git, SCRUM, CI/CD.",
    logo: "/education/education-purwadhika.webp",

    achievements: [
      "Developed responsive front-end applications with TypeScript, React, Next.js, Tailwind CSS, and tools like React Query, NextAuth, JWT, Axios, Formik, Chart.js, Framer Motion, and React Lottie.",
      "Built secure and scalable back-end systems using Java, Spring Boot, Hibernate, Redis, and PostgreSQL, with RESTful APIs and GraphQL.",
      "Designed modular software architectures using design patterns and implemented Microservice Architecture with gRPC for efficient service communication.",
      "Containerized applications with Docker, ensuring consistent environments and seamless deployments.",
      "Streamlined version control and Agile workflows with Git, Jira, and Trello.",
      "Deployed projects on Google Cloud Platform and Vercel, leveraging cloud infrastructure for scalability and reliability.",
      "Enhanced user experiences with modern animations and optimized performance using advanced tools and techniques.",
    ],
  },
  {
    degree: "Bachelor's Degree in Informatics Engineering",
    institution: "Muslim University of Indonesia",
    period: "September 2018 - March 2023",
    description:
      "In my Informatics Engineering degree program, I studied a variety of topics and skills within information technology, such as programming, systems analysis, project management, and application development.",
    gpa: "GPA: 3.52 / 4.00",
    logo: "/education/logoUMI.png",
    achievements: [
      "Mastered foundational programming concepts in Java, C++, and PHP, enabling problem-solving and application development.",
      "Studied systems analysis and design to create efficient and scalable solutions for real-world problems.",
      "Learned project management methodologies, including Agile and Waterfall, to oversee IT projects from planning to delivery.",
      "Explored database management systems (DBMS) and implemented relational databases with MySQL and PostgreSQL.",
      "Developed web applications using HTML, CSS, JavaScript, and frameworks like Laravel and CodeIgniter.",
      "Gained insights into software engineering principles and design patterns for creating maintainable and modular systems.",
      "Worked on application development projects, including mobile apps, using Android Studio and Firebase.",
      "Delved into computer networking fundamentals and cybersecurity practices to ensure secure and reliable systems.",
      "Studied emerging technologies such as artificial intelligence and machine learning, laying the groundwork for future exploration.",
    ],
  },
];

const Education = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-10 ">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8 " />
        <h2 className="text-2xl font-medium">Education</h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-black" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index}>
              <AnimationPopupWrapper
                y={40}
                transition={{ ease: "easeOut", duration: 1 }}>
                <div className="relative pl-20">
                  <div className="absolute left-0 overflow-hidden w-12 h-12 bg-white ">
                    <Image
                      src={item.logo}
                      alt={`${item.institution} logo`}
                      width={200}
                      height={200}
                      className="object-contain w-full h-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{item.degree}</h3>
                    <div className="text-gray-600">
                      <p className="text-primary-orange">{item.institution}</p>
                      <p className="text-sm">{item.period}</p>
                      {item.subtitle1 && (
                        <p className="text-sm italic font-light">
                          {item.subtitle1}
                        </p>
                      )}
                      {item.subtitle2 && (
                        <p className="text-sm italic font-light">
                          {item.subtitle2}
                        </p>
                      )}
                    </div>
                    {item.gpa && (
                      <p className="text-sm font-medium text-primary-orange">
                        {item.gpa}
                      </p>
                    )}
                    <p className="text-sm text-gray-600">{item.description}</p>

                    <ul className="list-disc text-sm text-gray-600 space-y-1 pt-2 sm:ml-4">
                      {item.achievements &&
                        item.achievements.map((achievement, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {achievement}
                          </li>
                        ))}
                    </ul>
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

export default Education;
