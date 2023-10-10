import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BlogCardProps {
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const { className } = props;

  return (
    <a
      href="https://blog.nestormamani.com"
      target="_blank"
      rel="noreferrer"
      className={cn(
        'hover:scale-95 group transition-all duration-700 cursor-pointer rounded-lg text-white overflow-hidden',
        className
      )}
    >
      <div className="flex w-full flex-col h-full justify-center items-center relative">
        <Image
          src="/assets/blog.png"
          alt="Blog"
          width={480}
          height={480}
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="bg-black opacity-70 z-10 absolute inset-0 w-full h-full"></div>
        <p className="text-4xl text-center z-20 font-extrabold">
          I write at{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.nestormamani.com"
            className="text-blue-400 group-hover:underline"
          >
            blog.nestormamani.com
          </a>
        </p>{' '}
      </div>
    </a>
  );
};

export default BlogCard;
