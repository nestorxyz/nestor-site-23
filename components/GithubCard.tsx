import { SiGithub } from 'react-icons/si';
import { FaArrowRight } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface GithubCardProps {
  className?: string;
}

const GithubCard: React.FC<GithubCardProps> = (props) => {
  const { className } = props;

  return (
    <a
      href="https://github.com/nestoredduardo"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'px-6 py-4 relative isolate h-52 md:h-64 bg-neutral-300 overflow-hidden group rounded-lg',
        className
      )}
    >
      <section className="flex flex-col gap-3 -mx-2 md:mx-0 md:group-hover:-translate-y-10 duration-300">
        <article className="px-3 py-2 bg-neutral-200 rounded-lg ring-1 ring-neutral-100 shadow-lg">
          <p className="font-semibold">konto</p>
          <p className="truncate font-light text-xs text-black-500 whitespace-nowrap">
            Web application that facilitates the group purchase of streaming
            subscriptions by connecting users and automating payments.
          </p>
        </article>
        <article className="px-3 py-2 bg-neutral-200 rounded-lg ring-1 ring-neutral-100 shadow-lg">
          <p className="font-semibold">nestor-site-23 </p>
          <p className="truncate font-light text-xs text-black-500 whitespace-nowrap">
            My 2023 personal website, built with Next.js 13
          </p>
        </article>
        <article className="px-3 py-2 bg-neutral-200 rounded-lg ring-1 ring-neutral-100 shadow-lg">
          <p className="font-semibold">agotao</p>
          <p className="truncate font-light text-xs text-black-500 whitespace-nowrap">
            The code is private🕵️...for now
          </p>
        </article>
        <article className="px-3 py-2 bg-neutral-200 rounded-lg ring-1 ring-neutral-100 shadow-lg">
          <p className="font-semibold">misfans-nft-erc721-metadata</p>
          <p className="truncate font-light text-xs text-black-500 whitespace-nowrap">
            Feature to show NFT blocks in the profile page
          </p>
        </article>
      </section>
      <div className="absolute top-0  bottom-0 left-0 right-0 bg-gradient-to-t from-[#000000de] to-transparent md:opacity-60 group-hover:opacity-100 duration-300"></div>{' '}
      <div className="absolute text-white bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
        <SiGithub className="w-8 h-8 md:w-10 md:h-10 drop-shadow -translate-y-5 md:translate-y-0 group-hover:-translate-y-5 duration-300" />
        <div className="flex items-center gap-2 absolute bottom-0 left-0 px-6 -translate-y-5 md:translate-y-0 md:opacity-0 group-hover:opacity-100 group-hover:-translate-y-5 duration-300">
          <h4>My Github</h4>
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default GithubCard;
