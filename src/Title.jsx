const Title = function (props) {
  return (
    <div className="title-container">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default Title;
