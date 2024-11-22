import React from "react";

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const ProjectHero = ({
  title,
  subtitle,
  description,
  imageUrl,
}: ProjectHeroProps) => {
  return (
    <section
      className="relative w-full h-[500px] overflow-hidden "
      data-nav-color="white">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-l from-black/90 via-black/60 to-transparent" />

      <div className="relative h-full w-full mx-auto flex">
        <div className="w-1/2" />

        <div className="w-1/2  h-full flex pt-24 pr-12">
          <div className="max-w-xl space-y-6">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
            <h2 className="text-white text-2xl font-semibold">{subtitle}</h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
