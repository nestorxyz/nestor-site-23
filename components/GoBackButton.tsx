'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

const GoBackButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="p-2 bg-slate-800 gap-2 flex items-center relative rounded-full hover:scale-110 transition-all group"
    >
      <IoMdArrowRoundBack className="text-white h-4 w-4" />
      <p className="whitespace-nowrap pl-4 text-white absolute left-0 translate-x-6 md:translate-x-0 md:opacity-0 group-hover:opacity-100 md:group-hover:translate-x-6 duration-300">
        Go Back
      </p>
    </button>
  );
};

export default GoBackButton;
