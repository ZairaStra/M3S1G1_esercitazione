const ImageComponent = function (props) {
  return (
    <div className="img-div">
      <img src={props.imgSrc} alt="image-description" />
    </div>
  );
};

export default ImageComponent;
