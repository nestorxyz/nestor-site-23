import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MoreStuffCardProps {
  className?: string;
}

const MoreStuffCard: React.FC<MoreStuffCardProps> = (props) => {
  const { className } = props;

  return (
    <Link href="/more-stuff">
      <div className={cn(className)}>More stuff</div>
    </Link>
  );
};

export default MoreStuffCard;
