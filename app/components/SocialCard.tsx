import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface SocialCardProps {
  className?: string;
  social: 'twitter' | 'instagram' | 'linkedin';
}

const SocialCard: React.FC<SocialCardProps> = (props) => {
  const { className, social } = props;

  return (
    <a
      href={
        social === 'twitter'
          ? 'https://twitter.com/nestorxyz'
          : social === 'instagram'
          ? 'https://instagram.com/nestorxyz'
          : 'https://linkedin.com/in/nestorxyz'
      }
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group rounded-lg flex items-center justify-center cursor-pointer',
        social === 'twitter' && 'bg-[#1c93e4]',
        social === 'instagram' &&
          'bg-gradient-to-tr from-[#f2920e] via-[#f2005c] to-[#c901b6]',
        social === 'linkedin' && 'bg-[#0a66c2]',
        className
      )}
    >
      {social === 'twitter' && (
        <FaTwitter
          size={40}
          className="text-white transition-all group-hover:scale-[1.2]"
        />
      )}
      {social === 'instagram' && (
        <FaInstagram
          size={40}
          className="text-white transition-all group-hover:scale-[1.2]"
        />
      )}
      {social === 'linkedin' && (
        <FaLinkedin
          size={40}
          className="text-white transition-all group-hover:scale-[1.2]"
        />
      )}
    </a>
  );
};

export default SocialCard;
