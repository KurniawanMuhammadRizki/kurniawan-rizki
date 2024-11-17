"use client";
import React, { useEffect, Suspense } from "react";
import Lenis from "lenis";
import TechstackSection from "@/components/techstack/TechstackSection";
import SectionSeparator from "@/components/SectionSeparator";

const Hero = React.lazy(() => import("@/components/Hero"));
const ProjectsSection = React.lazy(
  () => import("@/components/projects/ProjectsSection")
);
const ProfileSection = React.lazy(
  () => import("@/components/profile/ProfileSection")
);
const ExperienceSection = React.lazy(
  () => import("@/components/experience/ExperienceSection")
);
const EducationSection = React.lazy(
  () => import("@/components/education/EducationSection")
);
const CertificationSection = React.lazy(
  () => import("@/components/certifications/CertificationSection")
);
const ContactSection = React.lazy(
  () => import("@/components/contact/ContactSection")
);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <SectionSeparator
        id="projects"
        imgUrl="/images/montain.jpg"
        title="Projects"
        subTitle="a lot of creativity, a lot of coffee, and endless coding these projects are the result!"
      />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
      <SectionSeparator
        id="about"
        imgUrl="/images/city.jpg"
        title="About"
        subTitle="Through a blend of passion, academic foundation, real-world skills, and personal values. Discover the journey that shaped my perspective in software development"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <EducationSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CertificationSection />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TechstackSection />
      </Suspense>
      <SectionSeparator
        id="contact"
        imgUrl="/images/sea.jpg"
        title="Contact"
        subTitle="Let's make magic happen! Connect with me, and let's build something amazing together. I'm here and ready to chat!"
      />
      <Suspense fallback={<div>Loading...</div>}>
        <ContactSection />
      </Suspense>

      <div className="h-10 bg-black"></div>
    </div>
  );
}
