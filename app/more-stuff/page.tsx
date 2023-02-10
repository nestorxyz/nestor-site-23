import Image from 'next/image';

import HexagonClip from '@/components/HexagonClip';
import GoBackButton from '@/components/GoBackButton';
import User from './components/User';
import OldProjectCard from './components/OldProjectCard';

import data from './data';

const MoreStuffPage = () => {
  return (
    <>
      <div className="fixed inset-0 be">
        <Image
          src="/assets/training.gif"
          alt="Training"
          width={480}
          height={268}
          className="z-0 w-full h-full object-cover"
        />
        <div className="bg-black absolute inset-0 opacity-[0.69] z-10 w-full h-full"></div>
      </div>
      <div className="mx-auto z-20 h-full w-full max-w-2xl">
        <GoBackButton path="/" />
        <User />

        <div className="mt-8 flex gap-4 flex-col">
          {data.map((project) => (
            <OldProjectCard
              key={project.title}
              url={project.url}
              image_path={project.image_path}
              title={project.title}
              year={project.year}
            />
          ))}
        </div>
      </div>

      <HexagonClip />
    </>
  );
};

export default MoreStuffPage;
