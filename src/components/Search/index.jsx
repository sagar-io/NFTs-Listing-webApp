import searchImg from "../../assets/search.svg";
import catImg from "../../assets/cat.jpeg";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
        <img className="cat-img" src={catImg} alt="cat" />
      <div className="wrapper">
        <input
          placeholder="Search NFT by ID"
          value={search}
          onChange={handleInput}
        ></input>
        <img className="search-img" src={searchImg} />
      </div>
    </div>
  );

  function handleInput(e) {
    setSearch(e.target.value);
  }
};

export default Search;
