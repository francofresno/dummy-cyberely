import React from "react";
import Picture from "../components/Picture";
import dataMock from "../__mock__/imagenesMock";

const Pictures = () => {
  return (
    <div className="pictures">
      {dataMock &&
        dataMock.map((d) => {
          return <Picture data={d} />;
        })}
    </div>
  );
};

export default Pictures;
