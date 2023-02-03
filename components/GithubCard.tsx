import { SiGithub } from 'react-icons/si';

const GithubCard: React.FC = () => {
  return (
    <div className="px-6 py-4 relative">
      <div className="bg-gradient-to-b from-white to-black bg-opacity-10 absolute top-0 left-0 w-full h-full" />
      <SiGithub className="absolute bottom-4 left-6 text-white text-4xl" />

      <section>
        <article>
          <p>konto</p>
          <p className="truncate whitespace-nowrap">
            Web application that facilitates the group purchase of streaming
            subscriptions by connecting users and automating payments.
          </p>
        </article>
      </section>
    </div>
  );
};

export default GithubCard;
