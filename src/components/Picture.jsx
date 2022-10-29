import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="info">
        <a style={{ color: "SteelBlue" }}>Fruta: {data.nombre}&ensp;</a>
      </div>
    </div>
  );
};

export default Picture;
