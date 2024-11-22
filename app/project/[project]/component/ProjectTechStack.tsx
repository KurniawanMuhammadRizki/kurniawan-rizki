import ImageAnimationWrapper from "@/components/animations/ImageAnimationWrapper";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

interface ProjectTechStackProps {
  techData: TechItem[];
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ techData }) => {
  return (
    <div className="flex flex-col space-y-4 py-8">
      <h1 className="text-xl md:text-2xl font-semibold leading-relaxed text-black mb-4">
        Tech Stack
      </h1>
      <div className="flex gap-6 overflow-x-auto">
        {techData.map((item, index) => (
          <ImageAnimationWrapper
            key={index}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}>
            <div
              key={item.name}
              className="p-4 w-[150px] bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                         border border-gray-100 flex flex-col items-center justify-center gap-2">
              {item.icon && <div className="text-black">{item.icon}</div>}
              <span className="text-sm text-center font-medium">
                {item.name}
              </span>
            </div>
          </ImageAnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechStack;
