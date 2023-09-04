import descriptionImg from "../../assets/description.svg";

const Description = ({ description }) => {
  return (
    <div className="description">
      <div className="center">
        <img src={descriptionImg} />
        <h3>Description</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Description;
