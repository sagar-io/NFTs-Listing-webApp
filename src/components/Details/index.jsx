import { useLocation } from "react-router-dom";
import UIDetails from "./UIDetails";
import { useEffect, useContext, useState } from "react";
import { ApiContext } from "../../context/context";

const Details = () => {
  const location = useLocation();
  const fetchApi = useContext(ApiContext);
  const data = location.state.data;
  const { id, address } = data;
  const [owner, setOwner] = useState("-");
  const [floorPrice, setFloorPrice] = useState("-");
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetchApi.getOwner(address, id);
      setOwner(res.toJSON().result[0].owner_of);

      const price = await fetchApi.getFloorPrice(address);
      setFloorPrice(price.jsonResponse.price);

      const activities = await fetchApi.getActivities(address);
      const rawActivities = activities.response.result;
      const filteredActivities = [];
      rawActivities.map((rawAct) => {
        filteredActivities.push({
          buyerAddress: rawAct.buyerAddress._value,
          sellerAddress: rawAct.sellerAddress._value,
          timeStamp: rawAct.blockTimestamp,
          price: rawAct.price.rawValue.value,
        });
      });

      setActivities(filteredActivities);
    };
    getData();
  }, []);

  return (
    <div>
      <UIDetails {...data} floorPrice={floorPrice} owner={owner} activities={activities} />
    </div>
  );
};

export default Details;
