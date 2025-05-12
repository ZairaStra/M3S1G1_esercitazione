const Main = function (props) {
  return (
    <div className="general-container ">
      <div className="title-container">
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>

      <div className="cards-container">{props.children}</div>
    </div>
  );
};

export default Main;
