import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="info">
        <div style={{ color: "SteelBlue" }}>Fruta: {data.nombre}&ensp;</div>
      </div>
    </div>
  );
};

export default Picture;
