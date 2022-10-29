import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";

const Redirector = () => {
  let location = useLocation();

  useEffect(() => {
    if (!location) return;
    const dest = location.search.substring(1);
    window.location.replace(dest);
  }, [location]);

  return (
    <div style={{ height: "87vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Spin tip={"Redirigiendo a una página externa"} style={{ marginTop: "100px" }} />
    </div>
  );
};

export default Redirector;
