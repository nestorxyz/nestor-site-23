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
        here Nestor 👉 builder, former industrial engineer who found more
        enjoyment in shipping products for startups and my own ventures.
      </p>
      <p>
        i go all in at early-stage startups. what that means? ownership,
        autonomy, working on something 1000/hr and have fun 🚢 things with cool
        people.
      </p>
      <p>beyond building. i ❤️ food, have 4 dogs and use Windows</p>
    </div>
  );
};

export default HiCard;
