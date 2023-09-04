import ToolImg from "../../assets/tools.svg";

const Traits = ({ attributes }) => {
  const traitElements = attributes.map((attr, id) => (
    <Trait key={`trait-${id}`} heading={attr.trait_type} name={attr.value} />
  ));

  return (
    <div className="traits-wrapper">
      <div className="center">
        <img src={ToolImg} />
        <h3>Traits &#40;{attributes.length}&#41;</h3>
      </div>

      <div className="traits">
        {traitElements}
      </div>
    </div>
  );
};

const Trait = ({ heading, name }) => (
  <div className="trait">
    <p className="heading">{heading}</p>
    <p>{name}</p>
  </div>
);

export default Traits;
