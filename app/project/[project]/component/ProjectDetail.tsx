import Carousel from "@/components/projects/Carousel";
import ProjectCta from "./ProjectsCta";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectDetailProps {
  title: string;
  descriptionList: string[];
  techStack: { name: string; icon: React.ReactNode }[];
  carousel: {
    projectsName: string;
    imageNumber: number;
  };
  cta: {
    description: string;
    link: string;
  };
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  title,
  descriptionList,
  techStack,
  carousel,
  cta,
}) => {
  return (
    <section className="w-full px-5 sm:px-10 py-8" data-nav-color="black">
      <h1 className="text-xl md:text-2xl font-semibold leading-relaxed text-black mb-4">
        {title}
      </h1>
      <ul className="list-disc pl-5">
        {descriptionList.map((desc, index) => (
          <li key={index}>{desc}</li>
        ))}
      </ul>

      <ProjectCta description={cta.description} link={cta.link} />
      <Carousel
        projectsName={carousel.projectsName}
        imageNumber={carousel.imageNumber}
      />
      <ProjectTechStack techData={techStack} />
    </section>
  );
};

export default ProjectDetail;
