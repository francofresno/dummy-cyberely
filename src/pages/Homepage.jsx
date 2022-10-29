import React from "react";
import Comentador from "../components/Comentador";
import Pictures from "../components/Pictures";
import Search from "../components/Search";

const Homepage = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div style={{ display: "flex" }}>
        <div style={{ width: "75%" }}>
          <Search />
          <Pictures />
        </div>
        <div style={{ marginTop: "3%", width: "20%" }}>
          <Comentador />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
