import Image from 'next/image';

const User: React.FC = () => {
  return (
    <div className="flex items-center text-center flex-col w-full h-full">
      <Image
        src="/assets/nestor.png"
        alt="Nestor"
        width={400}
        height={400}
        className="h-24 w-24 hexagon-clip-path mb-4"
      />
      <h1 className="text-[20px] font-bold text-white">@nestoredduardo</h1>
      <p className="text-black-100">
        Things I have done in the past, some of them might be broken 🫡
      </p>
    </div>
  );
};

export default User;
