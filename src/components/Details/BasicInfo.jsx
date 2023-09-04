const BasicInfo = ({ floorPrice, name, owner, id, symbol, contractType }) => {
  return (
    <div className="basic-info">
      <div>
        <p className="fade">Floor Price</p>
        <p>{floorPrice / 10 ** 18}ETH</p>
      </div>

      <div>
        <p className="fade">ID</p>
        <p>{id}</p>
      </div>

      <div>
        <p className="fade">Symbol</p>
        <p>{symbol}</p>
      </div>

      <div>
        <p className="fade">Contract</p>
        <p>{contractType}</p>
      </div>

      <div>
        <p className="fade">Owner</p>
        <p>
          <abbr title={owner}>{owner.substring(0, 5)}...</abbr>
        </p>
      </div>
    </div>
  );
};

export default BasicInfo;
