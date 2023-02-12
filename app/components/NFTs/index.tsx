'use client';

import { useState } from 'react';
import { OwnedNftsResponse } from 'alchemy-sdk';
import { CircleEllipsis } from 'lucide-react';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';

import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

import Modal from '@/components/Modal';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu';
import { Button } from '@/components/button';

interface NFTModal {
  media: string;
  image: boolean;
  title: string;
  tokenId: string;
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

  const { toast } = useToast();

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
                    tokenId: nft.tokenId,
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
          <div className="bg-black p-4 sm:rounded-xl sm:p-6 max-h-[95vh] overflow-y-auto">
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
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(nft.tokenId);
                        toast({
                          title: '✅ Copied',
                          description: 'Token ID copied to clipboard',
                          duration: 3000,
                        });
                      }}
                    >
                      Copy token ID
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        window.open(
                          `https://polygonscan.com/token/${nft.contract_address}?a=${nft.tokenId}`,
                          '_blank'
                        );
                      }}
                    >
                      View on PolygonScan
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <Button
                size="lg"
                className="rounded-full w-full hover:bg-pink-600 active:scale-95 transition-all bg-pink-500"
                onClick={() => {
                  window.open(
                    `https://opensea.io/assets/matic/${nft.contract_address}/${nft.tokenId}`,
                    '_blank'
                  );
                }}
              >
                <BsFillArrowUpRightSquareFill className="mr-2" />
                View on OpenSea
              </Button>

              <div className="text-white space-y-3">
                <h3 className="font-semibold text-lg">📖 Description</h3>
                <p className="text-black-300">{nft.description}</p>
              </div>

              {nft.attributes && (
                <div className="text-white space-y-3">
                  <h3 className="font-semibold text-lg">🎨 Properties</h3>
                  <div className="flex flex-wrap gap-2">
                    {nft.attributes.map((attribute, index) => {
                      if (
                        !(
                          attribute.trait_type &&
                          typeof attribute.trait_type === 'string'
                        ) ||
                        !(
                          attribute.value && typeof attribute.value === 'string'
                        )
                      )
                        return null;

                      return (
                        <div
                          key={index}
                          className="rounded-xl text-sm font-medium px-3 py-1 border-2 border-pink-500"
                        >
                          <p className="uppercase text-pink-500">
                            {attribute.trait_type}
                          </p>
                          <p className="text-white">{attribute.value}</p>
                        </div>
                      );
                    })}
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
