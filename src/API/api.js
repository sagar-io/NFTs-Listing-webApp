import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

const chain = EvmChain.ETHEREUM;
const marketplace = 'opensea'

class ApiFetch {
  constructor() {
    Moralis.start({
      apiKey:
        import.meta.env.VITE_API_KEY,
    });
  }

  getNFTs = async () =>{
    return await Moralis.EvmApi.nft.getContractNFTs({
      address: "0x1A92f7381B9F03921564a437210bB9396471050C",
      chain,
    })}


    getOwner = async (address, tokenId) =>
    await Moralis.EvmApi.nft.getNFTTokenIdOwners({
      address,
      chain,
      tokenId
    });

    getFloorPrice = async (address) =>
    await Moralis.EvmApi.nft.getNFTLowestPrice({
      address,
      chain: EvmChain.ETHEREUM,
      marketplace: "opensea",
    });
    
    getActivities = async (address) => 
     await Moralis.EvmApi.nft.getNFTTrades({
        chain,
        marketplace,
        limit: 10,
        address
     })

     getTransfers = async (address) => 
     await Moralis.EvmApi.nft.getNFTTrades({
        chain,
        marketplace,
        limit: 10,
        address
     })
}

export default ApiFetch;
