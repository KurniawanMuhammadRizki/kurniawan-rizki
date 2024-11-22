import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCtaProps {
  description: string;
  link: string;
}

const ProjectCta: React.FC<ProjectCtaProps> = ({ description, link }) => {
  return (
    <h4 className="font-bold mt-2 mb-2 flex items-center">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:underline">
        {description}
        <ArrowUpRight className="w-5 h-5 text-current" />
      </Link>
    </h4>
  );
};
export default ProjectCta;
