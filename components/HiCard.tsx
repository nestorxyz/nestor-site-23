import { cn } from '@/lib/utils';

interface HiCardProps {
  className?: string;
}

const HiCard: React.FC<HiCardProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(className)}>
      <h2>gm ⭐</h2>
      <p>
        My name is Nestor, I&apos;m a software engineer from Peru. Well, I
        studied industrial engineering, but I&apos;ve had more fun shipping
        products for startups and my own ventures. I&apos;m generalist, but I
        guess my interest converge in make companies win by creating products
        valuable to their users in a sustainable way.
      </p>
      <p>
        Beyond business, I think food is amazing, have 4 dogs and use Windows
        haha.
      </p>
    </div>
  );
};

export default HiCard;
