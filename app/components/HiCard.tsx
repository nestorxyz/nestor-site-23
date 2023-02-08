import { cn } from '@/lib/utils';

interface HiCardProps {
  className?: string;
}

const HiCard: React.FC<HiCardProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        'p-6 text-white space-y-2 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] rounded-lg',
        className
      )}
    >
      <h2 className="text-xl font-semibold">gm ⭐</h2>
      <p>
        My name is Nestor, and I&apos;m a software engineer from Peru. I studied
        industrial engineering, but I&apos;ve found more enjoyment in shipping
        products for startups and my own ventures.
      </p>
      <p>
        I am a generalist and my interests converge in making companies win by
        creating valuable products for their users in a sustainable way.
      </p>
      <p>
        Beyond business, I think food is amazing, have 4 dogs and use Windows
        haha.
      </p>
    </div>
  );
};

export default HiCard;
