'use client';

import { useState } from 'react';
import { OwnedNftsResponse } from 'alchemy-sdk';
import { CircleEllipsis, CircleEllipsisIcon } from 'lucide-react';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

import { cn } from '@/lib/utils';

import Modal from '@/components/Modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '@/components/button';

/*
{
  contract: {
    address: '0x33efef36816d62341d17b87a19c555b123f92034',
    name: 'CRYPTOTALKS',
    symbol: 'PLTZ',
    totalSupply: '198',
    tokenType: 'ERC721',
    openSea: {
      floorPrice: undefined,
      collectionName: undefined,
      safelistRequestStatus: undefined,
      imageUrl: undefined,
      description: undefined,
      externalUrl: undefined,
      twitterUsername: undefined,
      discordUrl: undefined,
      lastIngestedAt: '2023-02-11T07:22:51.000Z'
    },
    contractDeployer: '0x27225be8e569d7f980fe6ce655c8a5bc82f94f95',
    deployedBlockNumber: 26315425
  },
  tokenId: '175',
  tokenType: 'ERC721',
  title: 'CRYPTOTALKS #175',
  description: 'This Platzi badge is a digital collectible item created as an NFT (non-fungible token) powered by the blockchain.',
  timeLastUpdated: '2023-01-18T00:46:24.227Z',
  metadataError: undefined,
  rawMetadata: {
    date: 1648096077020,
    image: 'ipfs://QmQvxoTz7diEGm44MLqBigZkWwLRGJCF5ndvP2Fd6E1TSf/175.png',
    dna: 'c8bce0e05a9c5bbba0d3f556ce6e50d5a5fcee76',
    name: 'CRYPTOTALKS #175',
    description: 'This Platzi badge is a digital collectible item created as an NFT (non-fungible token) powered by the blockchain.',
    edition: 175,
    attributes: [ [Object], [Object], [Object], [Object], [Object] ],
    compiler: 'GNDX'
  },
  tokenUri: {
    gateway: 'https://alchemy.mypinata.cloud/ipfs/QmTm9YkWrdj6Nip6LTmDWpSsnK99uXfKG1p5csNmrQ8XLr/175.json',
    raw: 'https://gateway.pinata.cloud/ipfs/QmTm9YkWrdj6Nip6LTmDWpSsnK99uXfKG1p5csNmrQ8XLr/175.json'
  },
  media: [
    {
      gateway: 'https://nft-cdn.alchemy.com/matic-mainnet/8e9da559b46f4b0894485e80216a0adf',
      thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnailv2/matic-mainnet/8e9da559b46f4b0894485e80216a0adf',
      raw: 'ipfs://QmQvxoTz7diEGm44MLqBigZkWwLRGJCF5ndvP2Fd6E1TSf/175.png',
      format: 'png',
      bytes: 51477
    }
  ],
  spamInfo: undefined,
  balance: 1
} 
*/

interface NFTModal {
  media: string;
  image: boolean;
  title: string;
  contract_address: string;
  description: string;
  attributes?: Record<string, unknown>[];
}

interface MyNFTsProps {
  myNFTs: OwnedNftsResponse;

  className?: string;
}

const isImage = (url: string) => {
  return !url.match(/\.(mp4|webm|ogg)$/i);
};

const isIPFS = (url: string) => {
  return url.substring(0, 4) === 'ipfs';
};

const MyNFTs: React.FC<MyNFTsProps> = (props) => {
  const { myNFTs, className } = props;

  const [open, setOpen] = useState(false);
  const [nft, setNft] = useState<NFTModal>();

  console.log(myNFTs.ownedNfts[0]);

  return (
    <>
      <section className={cn(className)}>
        <p className="text-2xl mb-6 font-bold bg-gradient-to-r from-teal-200 to-teal-500 bg-clip-text text-transparent">
          NFTs
        </p>
        <div className="columns-2">
          {myNFTs.ownedNfts.map((nft) => {
            const image = isImage(nft.media[0].raw);
            const IPFS = isIPFS(nft.media[0].raw);

            if (IPFS) {
              nft.media[0].raw = `https://ipfs.io/ipfs/${nft.media[0].raw.substring(
                7
              )}`;
            }

            return (
              <article
                key={nft.tokenId}
                className="mb-4 hover:scale-105 transition-all cursor-pointer hover:border rounded-lg overflow-hidden"
                onClick={() => {
                  setOpen(true);
                  console.log(nft.rawMetadata?.attributes);
                  setNft({
                    media: nft.media[0].raw,
                    image,
                    title: nft.title,
                    contract_address: nft.contract.address,
                    description: nft.description,
                    attributes: nft.rawMetadata?.attributes,
                  });
                }}
              >
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={nft.media[0].raw}
                    alt={nft.title}
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={nft.media[0].raw}
                    className="object-cover"
                    autoPlay
                    loop
                    muted
                  />
                )}
              </article>
            );
          })}
        </div>
      </section>

      <Modal showModal={open} setShowModal={setOpen}>
        {nft && (
          <div className="bg-black p-4 sm:rounded-xl sm:p-6">
            <div className="w-full max-w-sm mx-auto space-y-6">
              {nft.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={nft.media}
                  alt={nft.title}
                  className="object-cover h-64 w-full rounded-lg"
                />
              ) : (
                <video
                  src={nft.media}
                  className="object-cover w-full rounded-lg h-64"
                  autoPlay
                  loop
                  muted
                />
              )}
              <div className="flex gap-4">
                <h2 className="text-white font-bold text-2xl">{nft.title}</h2>
                <DropdownMenu>
                  <DropdownMenuTrigger className="h-fit">
                    <CircleEllipsis className="text-pink-400 h-6 w-6" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Copy token ID</DropdownMenuItem>
                    <DropdownMenuItem>View on PolygonScan</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button
                size="lg"
                className="rounded-full w-full hover:bg-pink-600 active:scale-95 transition-all bg-pink-500"
              >
                <BsFillArrowUpRightSquareFill className="mr-2" />
                View on OpenSea
              </Button>

              <div>
                <h3>Description</h3>
                <p>{nft.description}</p>
              </div>

              {nft.attributes && (
                <div>
                  <h3>Properties</h3>
                  <div className="flex flex-wrap gap-2">
                    {nft.attributes.map((attribute, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-full px-2 py-1 text-sm text-white"
                      ></div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MyNFTs;
