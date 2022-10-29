import React from "react";
import { Button } from "antd";

const Footer = () => {
  const handleVerImagen = () => {
    window.location.replace(`redirect/dest?https://forms.gle/m1isNQdp6kX4MxY17`);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "15%",
        backgroundColor: "rgb(206, 206, 206)",
        height: "60px",
        padding: "10px",
      }}
    >
      <div style={{ marginTop: "8px" }}>
        <b>Cyberely TEST PAGE</b>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginRight: "10px" }}>Ayudanos respondiendo este formulario:</div>
        <Button onClick={handleVerImagen} type="primary">
          Form Google
        </Button>
      </div>
    </div>
  );
};

export default Footer;
