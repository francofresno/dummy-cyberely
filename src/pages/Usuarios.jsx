import React, { createRef, useState } from "react";

import { Input, Button } from "antd";

const { Search: SearchAntD } = Input;

const Usuarios = () => {
  const divRef1 = createRef();
  const divRef2 = createRef();
  const divRef3 = createRef();
  const [contraseña, setContraseña] = useState("");

  const handleSearch = (value) => {
    fetch(`http://localhost:5000/usuarios?nombre=${value}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data?.rows?.length) return;
        divRef1.current.innerHTML = data.rows[0].nombre;
        divRef2.current.innerHTML = data.rows[0].email;
      });
  };

  const handleContraseñaChange = (e) => {
    setContraseña(e.target.value);
  };

  const handleClick = () => {
    fetch(`http://localhost:5000/usuarios/changePassword?newPassword=${contraseña}&usuarioId=1`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        divRef3.current.innerHTML = "Contraseña Cambiada";
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1>Buscador de usuarios</h1>
      <div style={{ width: "100%", diplay: "flex", textAlign: "-webkit-center", marginTop: "2%" }}>
        <div style={{ width: "20%", diplay: "flex", flexDirection: "column" }}>
          <SearchAntD placeholder="Buscar" onSearch={handleSearch} enterButton />
          <br></br>
          <br></br>
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "10px", fontWeight: 800 }}>Buscaste: </span>
            <div ref={divRef1}></div>
          </div>
          <div style={{ display: "flex" }}>
            <span style={{ marginRight: "10px", fontWeight: 800 }}>Email: </span>
            <div ref={divRef2}></div>
          </div>
        </div>
      </div>
      <h1 style={{ marginTop: "50px" }}>Cambiar contraseña</h1>
      <div style={{ width: "100%", diplay: "flex", textAlign: "-webkit-center", marginTop: "2%" }}>
        <div style={{ width: "20%", diplay: "flex", flexDirection: "row" }}>
          <Input placeholder="Nueva Contraseña" onChange={handleContraseñaChange} value={contraseña} />
          <Button type="primary" style={{ marginTop: "5px" }} onClick={handleClick}>
            Cambiar
          </Button>
          <div ref={divRef3} style={{ marginTop: "5px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
