import { useState, useEffect, useContext } from "react";
import NFT from "./NFT.jsx";
import "./style.css";
import { ApiContext } from "../../context/context.js";

const NFTs = () => {
  const [data, setData] = useState([]);
  // const [loadData, setLoadData] = useState([
  const [loadCount, setLoadCount] = useState(12)
  const fetchApi = useContext(ApiContext);

  useEffect(() => {
    const getNFTsData = async () => {
      const res = await fetchApi.getNFTs();
      const arr = res.toJSON().result;
      // setData(prev => ({
      //   loadData: arr.splice(0, loadCount),
      //   totalData: arr,
      // }))
      setData(arr)
    };
    getNFTsData();
  }, []);

  console.log(data);

  const nftElements = data.slice(0, loadCount).map((nftData, id) => (
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
      <div className="nfts">{nftElements}</div>
      {loadCount < 100 ? <button className="load-more" onClick={handleLoadMore}>Load More</button>: ''}
    </div>
  );

  function handleLoadMore() {
     setLoadCount(loadCount+12);
  }
};

export default NFTs;
