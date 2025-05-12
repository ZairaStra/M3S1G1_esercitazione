const Section = function (props) {
  return (
    <div className="general-container ">
      <div className="cards-container">{props.children}</div>
    </div>
  );
};

export default Section;
