const Card = function (props) {
  return (
    <div className="card-div">
      <img src={props.imgSrc} alt={props.imgAlt} />
      <div className="card-body">
        <h3>{props.imgAlt}</h3>
        <button className="btn">{props.btnText}</button>
      </div>
    </div>
  );
};

export default Card;
