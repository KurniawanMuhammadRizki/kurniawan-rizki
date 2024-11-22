import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectRepositoryProps {
  frontendLink: string;
  backendLink: string;
}

const ProjectRepository: React.FC<ProjectRepositoryProps> = ({
  frontendLink,
  backendLink,
}) => {
  return (
    <div className="flex space-x-4 py-4">
      <div className="font-bold mt-2 mb-2 flex items-center">
        <Link
          href={frontendLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline">
          Frontend Repository
          <ArrowUpRight className="w-5 h-5 text-current" />
        </Link>
      </div>
      <div className="font-bold mt-2 mb-2 flex items-center">
        <Link
          href={backendLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline">
          Backend Repository
          <ArrowUpRight className="w-5 h-5 text-current" />
        </Link>
      </div>
    </div>
  );
};
export default ProjectRepository;
