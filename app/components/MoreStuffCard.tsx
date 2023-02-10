import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MoreStuffCardProps {
  className?: string;
}

const MoreStuffCard: React.FC<MoreStuffCardProps> = (props) => {
  const { className } = props;

  return (
    <Link
      href="/more-stuff"
      className={cn(
        'flex hover:scale-95 transition-all duration-700 justify-center items-center relative rounded-lg',
        className
      )}
    >
      <Image
        src="/assets/training.gif"
        alt="Training"
        width={480}
        height={268}
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      <div className="bg-black opacity-50 z-10 absolute inset-0 w-full h-full"></div>
      <div className="z-20 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 items-center flex gap-2">
        <p className="text-3xl font-extrabold text-white">
          My road zero to sth
        </p>
      </div>
    </Link>
  );
};

export default MoreStuffCard;
