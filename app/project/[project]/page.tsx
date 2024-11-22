"use client";

import { useParams } from "next/navigation";
import ProjectDetail from "./component/ProjectDetail";
import ProjectHero from "./component/ProjectHero";
import { SiGraphql, SiNextdotjs, SiSpring } from "react-icons/si";

const Page = () => {
  const { project } = useParams<{ project: string }>();

  // Data proyek
  const projectData = {
    title: "Rooms",
    descriptionList: [
      "Property rental platform developed collaboratively with a partner",
      "Frontend: Next.js | Backend: Spring with GraphQL",
      "Role: Full-stack developer, worked on both frontend and backend implementations",
    ],
    techStack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Spring", icon: <SiSpring /> },
      { name: "GraphQL", icon: <SiGraphql /> },
    ],
    carousel: {
      projectsName: "rooms",
      imageNumber: 6,
    },
    cta: {
      description: "View Project",
      link: "https://www.rooms.co.id",
    },
    hero: {
      title: project,
      subtitle: "Property Renting Website",
      description:
        "Property Renting Web App helps users compare accommodation prices by date, influenced by holidays and manually set special dates.",
      imageUrl: "/projects/rooms/rooms-0.jpeg",
    },
  };

  return (
    <div>
      <ProjectHero {...projectData.hero} />
      <ProjectDetail {...projectData} />
      <section className="w-full h-[500px]" data-nav-color="black"></section>
      <div className="h-10"></div>
    </div>
  );
};

export default Page;
