import Image from 'next/image';

interface OldProjectCardProps {
  url: string;
  image_path: string;
  title: string;
  year: string | number;
}

const OldProjectCard: React.FC<OldProjectCardProps> = (props) => {
  const { url, image_path, title, year } = props;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative hover:scale-105 px-[66px] text-center py-5 bg-black flex justify-center text-white transition-transform duration-150 ease-in-out rounded-[4px]"
    >
      <Image
        src={image_path}
        alt={title}
        width={100}
        height={100}
        className="w-12 left-1 object-cover h-12 absolute top-1/2 -translate-y-1/2 rounded-[4px]"
      />

      <h3 className="uppercase">
        {title} • {year}
      </h3>
    </a>
  );
};

export default OldProjectCard;
