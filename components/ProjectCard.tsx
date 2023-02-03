import Image from 'next/image';

import { cn } from '@/lib/utils';

interface ProjectCardProps {
  className?: string;
  image_path: string;
  image_alt: string;
  content: React.ReactNode;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { className, content, image_path, image_alt, link } = props;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'hover:scale-95 transition-all duration-700 cursor-pointer rounded-lg text-white p-6',
        className
      )}
    >
      <Image
        src={`/assets${image_path}`}
        alt={image_alt}
        width={400}
        height={400}
        className="h-8 mb-6"
      />
      <p>{content}</p>
    </a>
  );
};

export default ProjectCard;
