import React from "react";
import BasicInfo from "./BasicInfo";
import Traits from "./Traits";
import "./details.css";
import Description from "./Description";
import Activity from "./Activities";

const UIDetails = ({ imgUrl, name, owner, id, symbol, contract_type, metadata, floorPrice, activities }) => {
  return (
    <div className="nft-details">
      <div className="col col-1">
        <h2 className="nft-name">{name}</h2>
        <img src={imgUrl} alt={name} />
        <Description description={metadata.description}/>
      </div>

      <div className="col col-2">
        <BasicInfo
          floorPrice={floorPrice}
          name={name}
          id={id}
          owner={owner}
          symbol={symbol}
          contractType={contract_type}
        />
        <Traits {...metadata} />
        <Activity 
          activities={activities}
        />
      </div>
    </div>
  );
};

export default UIDetails;
