import { useState, useEffect, useContext } from "react";
import NFT from "./NFT.jsx";
import "./style.css";
import { ApiContext } from "../../context/context.js";
import Search from "../Search/index.jsx";

const NFTs = () => {
  const [data, setData] = useState([]);
  const [loadCount, setLoadCount] = useState(12)
  const [searchQuery, setSearchQuery] = useState('')
  const fetchApi = useContext(ApiContext);

  useEffect(() => {
    const getNFTsData = async () => {
      const res = await fetchApi.getNFTs();
      const arr = res.toJSON().result;
      setData(arr)
    };
    getNFTsData();
  }, []);

  const nftElements = data.filter(nftData => nftData.token_id.includes(searchQuery)).slice(0, loadCount).map((nftData, id) => (
    <NFT
      key={`nft-${id}`}
      name={nftData.name}
      id={nftData.token_id}
      imgUrl={JSON.parse(nftData.metadata).image}
      data={{
        metadata: JSON.parse(nftData.metadata),
        address: nftData.token_address,
        id: nftData.token_id,
        imgUrl: JSON.parse(nftData.metadata).image,
        name: nftData.name,
        symbol: nftData.symbol,
        contract_type: nftData.contract_type,
      }}
    />
  ));
  return (
    <div className="nfts-wrapper">
      <Search
       search={searchQuery}
       setSearch={setSearchQuery}
      />
      <div className="nfts">{nftElements}</div>
      {(loadCount < 100 && searchQuery == '') ? <button className="load-more" onClick={handleLoadMore}>Load More</button>: ''}
    </div>
  );

  function handleLoadMore() {
     setLoadCount(loadCount+12);
  }
};

export default NFTs;
