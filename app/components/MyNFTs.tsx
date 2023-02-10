import { OwnedNftsResponse } from 'alchemy-sdk';
import { cn } from '@/lib/utils';

interface MyNFTsProps {
  myNFTs: OwnedNftsResponse;

  className?: string;
}

const MyNFTs: React.FC<MyNFTsProps> = (props) => {
  const { myNFTs, className } = props;

  return (
    <section className={cn('grid grid-cols-2 gap-4', className)}>
      {myNFTs.ownedNfts.map((nft) => {
        const isImage = nft.media[0].raw.match(/.(jpg|jpeg|png|gif)$/i);
        const isIPFS = nft.media[0].raw.substring(0, 4) === 'ipfs';

        if (isIPFS) {
          nft.media[0].raw = `https://ipfs.io/ipfs/${nft.media[0].raw.substring(
            6
          )}`;
        }

        return (
          <article key={nft.tokenId}>
            {isImage ? (
              <img
                src={nft.media[0].raw}
                alt={nft.title}
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <video
                src={nft.media[0].raw}
                className="w-full h-full rounded-lg object-cover"
                autoPlay
                loop
                muted
              />
            )}
          </article>
        );
      })}
    </section>
  );
};

export default MyNFTs;
