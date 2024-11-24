"use client";
import React, { useEffect, Suspense } from "react";
import Lenis from "lenis";
import TechstackSection from "@/components/techstack/TechstackSection";
import SectionSeparator from "@/components/SectionSeparator";
import LoadingStateAnimation from "@/components/animations/LoadingStateAnimation";

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
      <Suspense fallback={<LoadingStateAnimation />}>
        <Hero />
      </Suspense>
      <SectionSeparator
        id="projects"
        imgUrl="/images/montain.jpg"
        title="Projects"
        subTitle="a lot of creativity, a lot of coffee, and endless coding these projects are the result!"
      />

      <Suspense fallback={<LoadingStateAnimation />}>
        <ProjectsSection />
      </Suspense>
      <SectionSeparator
        id="about"
        imgUrl="/images/city.jpg"
        title="About"
        subTitle="Through a blend of passion, academic foundation, real-world skills, and personal values. Discover the journey that shaped my perspective in software development"
      />
      <Suspense fallback={<LoadingStateAnimation />}>
        <ProfileSection />
      </Suspense>
      <Suspense fallback={<LoadingStateAnimation />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<LoadingStateAnimation />}>
        <EducationSection />
      </Suspense>
      <Suspense fallback={<LoadingStateAnimation />}>
        <CertificationSection />
      </Suspense>
      <Suspense fallback={<LoadingStateAnimation />}>
        <TechstackSection />
      </Suspense>
      <SectionSeparator
        id="contact"
        imgUrl="/images/sea.jpg"
        title="Contact"
        subTitle="Let's make magic happen! Connect with me, and let's build something amazing together. I'm here and ready to chat!"
      />
      <Suspense fallback={<LoadingStateAnimation />}>
        <ContactSection />
      </Suspense>

      <div className="h-10 bg-black"></div>
    </div>
  );
}
