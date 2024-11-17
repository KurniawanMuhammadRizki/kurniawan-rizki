import React from "react";
import AnimationPopupWrapper from "../animations/AnimationPopupWrapper";
import {
  SiC,
  SiCsharp,
  SiCplusplus,
  SiCss3,
  SiDart,
  SiGo,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiPhp,
  SiTypescript,
  SiFirebase,
  SiGooglecloud,
  SiVercel,
  SiCloudflare,
  SiApollographql,
  SiBootstrap,
  SiChartdotjs,
  SiCodeigniter,
  SiDaisyui,
  SiJsonwebtokens,
  SiLaravel,
  SiNpm,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiSpring,
  SiTailwindcss,
  SiVite,
  SiApache,
  SiMariadb,
  SiMicrosoftsqlserver,
  SiMysql,
  SiRedis,
  SiPostgresql,
  SiHibernate,
  SiSqlite,
  SiKubernetes,
  SiPostman,
  SiPrettier,
  SiSwagger,
  SiTrello,
  SiSupabase,
  SiFigma,
  SiCanva,
  SiGithubactions,
  SiGit,
  SiGithub,
  SiArduino,
  SiDocker,
  SiEslint,
  SiGradle,
  SiJira,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

type TechItem = {
  name: string;
  icon: React.ReactNode;
};

const techData: TechItem[] = [
  { name: "Apache", icon: <SiApache /> },
  { name: "Apollo GraphQL", icon: <SiApollographql /> },
  { name: "Arduino", icon: <SiArduino /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "C", icon: <SiC /> },
  { name: "C#", icon: <SiCsharp /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Chart.js", icon: <SiChartdotjs /> },
  { name: "Cloudflare", icon: <SiCloudflare /> },
  { name: "CodeIgniter", icon: <SiCodeigniter /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "DaisyUI", icon: <SiDaisyui /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "ESLint", icon: <SiEslint /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "GitHub Actions", icon: <SiGithubactions /> },
  { name: "Go", icon: <SiGo /> },
  { name: "Google Cloud", icon: <SiGooglecloud /> },
  { name: "Gradle", icon: <SiGradle /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "Hibernate", icon: <SiHibernate /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "MariaDB", icon: <SiMariadb /> },
  { name: "Microsoft SQL Server", icon: <SiMicrosoftsqlserver /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "NPM", icon: <SiNpm /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Prettier", icon: <SiPrettier /> },
  { name: "React", icon: <SiReact /> },
  { name: "React Query", icon: <SiReactquery /> },
  { name: "React Router", icon: <SiReactrouter /> },
  { name: "Redis", icon: <SiRedis /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Swagger", icon: <SiSwagger /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Trello", icon: <SiTrello /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Vercel", icon: <SiVercel /> },
  { name: "Vite", icon: <SiVite /> },
];

const Techstack: React.FC = () => {
  return (
    <div className="w-full mx-auto px-4 sm:px-10">
      <div className="flex items-center gap-3 mb-8">
        <RiComputerFill className="w-8 h-8" />
        <h2 className="text-2xl font-medium">My Tech Stack</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
        {techData.map((item, index) => (
          <AnimationPopupWrapper
            key={index}
            y={40}
            transition={{ ease: "easeOut", duration: 1 }}>
            <div
              key={item.name}
              className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                           border border-gray-100 flex flex-col items-center justify-center gap-2">
              {item.icon && <div className="text-black">{item.icon}</div>}
              <span className="text-sm text-center font-medium">
                {item.name}
              </span>
            </div>
          </AnimationPopupWrapper>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
