import Image from 'next/image';

import { cn } from '@/lib/utils';

interface IntroCardProps {
  className?: string;
}

const IntroCard: React.FC<IntroCardProps> = (props) => {
  const { className } = props;

  return (
    <article
      className={cn(
        'bg-gradient-to-b from-black via-[#FF4FCB] to-[#694fff] flex rounded-lg p-4 gap-4 flex-col md:flex-row items-center justify-center',
        className
      )}
    >
      <Image
        src="/assets/nestor.png"
        alt="Nestor"
        width={400}
        height={400}
        className="sm:w-32 sm:h-32 h-28 w-28 hexagon-clip-path"
      />
      <div className="text-center">
        <h1 className="sm:text-4xl text-3xl font-bold text-white">
          Hi! I&apos;m Nestor
        </h1>
        <p className="text-lg sm:text-xl text-black-50">
          Software Engineer • Founder • Geek
        </p>
      </div>
    </article>
  );
};

export default IntroCard;
