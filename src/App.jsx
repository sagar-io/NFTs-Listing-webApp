import NFTs from "./components/NFTs";
import Details from "./components/Details";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ApiContext } from "./context/context";
import ApiFetch from "./API/api";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
      <h1 className="m-heading">NFTs MarketPlace</h1>
      </nav>
      
      <ApiContext.Provider value={new ApiFetch()}>
        <Routes>
          <Route path="/" element={<NFTs />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </ApiContext.Provider>
    </div>
  );
}

export default App;
