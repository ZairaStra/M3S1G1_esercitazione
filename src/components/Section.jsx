const Section = function (props) {
  return (
    <div className="general-container ">
      <div className="{props.className}">{props.children}</div>
    </div>
  );
};

export default Section;
