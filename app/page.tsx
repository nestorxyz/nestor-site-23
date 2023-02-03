import IntroCard from '@/components/IntroCard';
import ProjectCard from '@/components/ProjectCard';
import GithubCard from '@/components/GithubCard';
import HexagonClip from '@/components/HexagonClip';
import SocialCard from '@/components/SocialCard';

export default function Home() {
  return (
    <main className="grid grid-cols-6 gap-4">
      <IntroCard className="col-span-6" />
      <ProjectCard
        className="col-span-6 bg-gradient-to-tr from-[#8241d3] via-[#6636fa] to-[#bb64ff]"
        image_path="/misfans.svg"
        image_alt="MisFans"
        link="https://mis.fans"
        content={
          <>
            I was software engineer at <b>MisFans</b>, a toolkit for content
            creators to monetize their audience, where my primary responsibility
            was to the product, it has to work and feel good.
          </>
        }
      />
      <ProjectCard
        className="col-span-6 bg-gradient-to-tr from-[#fd7e14] via-[#FF4FCB] to-[#694fff]"
        image_path="/agotao.svg"
        image_alt="Agotao"
        link="https://agotao.com"
        content={
          <>
            I am the founder of <b>Agotao</b>, offering APIs and integrations to
            accept payments and send payouts in Peru.
          </>
        }
      />
      <ProjectCard
        className="col-span-6 bg-gradient-to-tr from-[#222222] via-[#2700FF] to-[#FF00B4]"
        image_path="/konto.svg"
        image_alt="Konto"
        link="https://konto.vercel.app/"
        content={
          <>
            I was the co-founder and CEO of <b>Konto</b>, making easier the
            group purchase of streaming subscriptions by connecting users and
            automating payments.
          </>
        }
      />

      <GithubCard className="col-span-6 h-52 md:h-64" />

      <SocialCard social="twitter" className="col-span-2 h-52 md:h-64" />
      <SocialCard social="linkedin" className="col-span-2 h-52 md:h-64" />
      <SocialCard social="instagram" className="col-span-2 h-52 md:h-64" />

      <HexagonClip />
    </main>
  );
}
