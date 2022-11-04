import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { URL_FRONT } from "../utils/url";

const whitelist = ["https://forms.gle/m1isNQdp6kX4MxY17"];

const Redirector = () => {
  let location = useLocation();

  useEffect(() => {
    if (!location) return;
    const dest = location.search.substring(6);
    // const estaEnWhitelist = whitelist.some((pagina) => pagina === dest);
    // if (!estaEnWhitelist) {
    //   window.location.replace(URL_FRONT);
    //   return;
    // }

    window.location.replace(dest);
  }, [location]);

  return (
    <div style={{ height: "87vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Spin tip={"Redirigiendo a una página externa"} style={{ marginTop: "100px" }} />
    </div>
  );
};

export default Redirector;
