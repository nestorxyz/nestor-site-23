import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface SocialCardProps {
  className?: string;
  social: 'twitter' | 'instagram' | 'linkedin';
}

const SocialCard: React.FC<SocialCardProps> = (props) => {
  const { className, social } = props;

  return (
    <div
      className={cn(
        'group rounded-lg flex items-center justify-center',
        social === 'twitter' && 'bg-[#1c93e4]',
        social === 'instagram' &&
          'bg-gradient-to-tr from-[#f2920e] via-[#f2005c] to-[#c901b6]',
        social === 'linkedin' && 'bg-[#0a66c2]',
        className
      )}
    >
      {social === 'twitter' && (
        <FaTwitter className="text-white group-hover:scale-110" />
      )}
      {social === 'instagram' && <FaInstagram />}
      {social === 'linkedin' && <FaLinkedin />}
    </div>
  );
};

export default SocialCard;
