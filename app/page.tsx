"use client";
import React, { useEffect, Suspense } from "react";
import Lenis from "lenis";
import TechstackSection from "@/components/techstack/TechstackSection";
import Section from "@/components/SectionSeparator";
import SectionSeparator from "@/components/SectionSeparator";
import CertificationSection from "@/components/certifications/CertificationSection";
//import ProjectsSection from "@/components/projects/ProjectsSection";
//import ProfileSection from "@/components/profile/ProfileSection";
//import ExperienceSection from "@/components/experience/ExperienceSection";
//import EducationSection from "@/components/education/EducationSection";
//import Hero from "@/components/Hero";

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
        imgUrl="/images/montain.jpg"
        title="Projects"
        subTitle="a lot of creativity, a lot of coffee, and endless coding these projects are the result!"
      />

      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsSection />
      </Suspense>
      <SectionSeparator
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
        <TechstackSection />
      </Suspense>
      <SectionSeparator
        imgUrl="/images/sea.jpg"
        title="Contact"
        subTitle="Let's make magic happen! Connect with me, and let's build something amazing together. I'm here and ready to chat!"
      />
      <CertificationSection />

      <div className="h-5"></div>
    </div>
  );
}
{
  /* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> */
}
