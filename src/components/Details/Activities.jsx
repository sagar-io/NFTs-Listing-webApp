import activityImg from "../../assets/activity.svg";
import Activity from "./Activity";
import { timeComp } from "../../utilities/timeComparator";

const Activities = ({ activities }) => {
  const activityElements = activities.map((act, id) => {
    let { price, buyerAddress, sellerAddress, timeStamp } = act;
    price = parseInt(price) / 10 ** 18;
    let timeDifference = timeComp(timeStamp);
    if (timeDifference == undefined) timeDifference = `${id + 1} minutes ago`;

    return (
      <Activity
        key={`activity-${id}`}
        price={price}
        buyer={buyerAddress}
        seller={sellerAddress}
        time={timeDifference}
      />
    );
  });

  return (
    <div className="activity-wrapper">
      <div className="center">
        <img src={activityImg} alt="activity" />
        <h2>Activity</h2>
      </div>

      <div className="activities">
        <table>
          <thead>
            <tr className="tb-head">
              <th>ACTION</th>
              <th>PRICE(ETH)</th>
              <th>SELLER</th>
              <th>BUYER</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>{activityElements}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
