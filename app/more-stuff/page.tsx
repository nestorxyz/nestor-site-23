import HexagonClip from '@/components/HexagonClip';
import User from './components/User';
import GoBackButton from '@/components/GoBackButton';

const MoreStuffPage = () => {
  return (
    <>
      <div className="mx-auto h-full w-full max-w-2xl">
        <GoBackButton />
        <User />
      </div>

      <HexagonClip />
    </>
  );
};

export default MoreStuffPage;
