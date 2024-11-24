"use client";

import NotFoundAnimation from "@/components/animations/NotFoundAnimation";
import projectData from "@/types/project/ProjectData";
import { useParams } from "next/navigation";
import ProjectDetail from "./component/ProjectDetail";
import ProjectHero from "./component/ProjectHero";

const Page = () => {
  const { project } = useParams<{ project: string }>();

  const currentProject = projectData[project as keyof typeof projectData];

  if (!currentProject) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <NotFoundAnimation />
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="text-gray-600">
          Please check the URL or try again later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <ProjectHero {...currentProject.hero} />
      <ProjectDetail {...currentProject} />
      <div className="h-10"></div>
    </div>
  );
};

export default Page;
