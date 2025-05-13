const Section = function (props) {
  return (
    <div className="section-container">
      <div className="section-title">
        <h3>{props.sectionTitle}</h3>
        <a href=".banner">Up</a>
      </div>
      <div className="{props.className}">{props.children}</div>
    </div>
  );
};

export default Section;
