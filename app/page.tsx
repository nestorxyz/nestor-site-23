import Image from 'next/image';
import HexagonClip from '@/components/HexagonClip';

import IntroCard from './components/IntroCard';
import ProjectCard from './components/ProjectCard';
import GithubCard from './components/GithubCard';
import SocialCard from './components/SocialCard';
import HiCard from './components/HiCard';
import MoreStuffCard from './components/MoreStuffCard';

export default function Home() {
  return (
    <main className="bg-black min-h-screen w-full">
      <div className="mx-auto max-w-4xl px-4 lg:px-0 py-5 md:py-10 flex flex-col gap-10">
        <div className="grid grid-cols-6 gap-4">
          <IntroCard className="col-span-6 sm:col-span-4" />
          <Image
            src="/assets/deku.gif"
            alt="Deku"
            width={300}
            height={100}
            className="col-span-2 h-full object-cover rounded-lg hidden sm:block"
          />

          <ProjectCard
            className="col-span-6 sm:col-span-3 bg-gradient-to-tr from-[#8241d3] via-[#6636fa] to-[#bb64ff]"
            image_path="/misfans.svg"
            image_alt="MisFans"
            link="https://mis.fans"
            content={
              <>
                I was software engineer at <b>MisFans</b>, a toolkit for content
                creators to monetize their audience, where my primary
                responsibility was to the product, it has to work and feel good.
              </>
            }
          />
          <ProjectCard
            className="col-span-6 sm:col-span-3 bg-gradient-to-tr from-[#fd7e14] via-[#FF4FCB] to-[#694fff]"
            image_path="/agotao.svg"
            image_alt="Agotao"
            link="https://agotao.com"
            content={
              <>
                I am the founder of <b>Agotao</b>, offering APIs and
                integrations to accept payments and send payouts in Peru.
              </>
            }
          />

          <HiCard className="col-span-6 my-6 md:col-span-4 md:row-span-2" />
          <SocialCard
            social="twitter"
            className="col-span-2 md:h-auto h-32 md:mt-6"
          />
          <SocialCard
            social="linkedin"
            className="col-span-2 md:col-span-1 h-32 md:h-auto md:mb-6"
          />
          <SocialCard
            social="instagram"
            className="col-span-2 h-32 md:h-auto md:col-span-1 md:mb-6"
          />

          <GithubCard className="col-span-6 sm:col-span-3 h-52 md:h-64" />

          <ProjectCard
            className="col-span-6 sm:col-span-3 bg-gradient-to-tr from-[#222222] via-[#2700FF] to-[#FF00B4]"
            image_path="/konto.svg"
            image_alt="Konto"
            link="https://konto.vercel.app/"
            content={
              <>
                I was the co-founder and CEO of <b>Konto</b>, making easier the
                group purchase of streaming subscriptions by connecting users
                and automating payments.
              </>
            }
          />

          <MoreStuffCard className="col-span-6 sm:col-span-3" />

          <HexagonClip />
        </div>
      </div>
    </main>
  );
}
