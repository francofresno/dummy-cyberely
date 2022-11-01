import React, { createRef, useState } from "react";

import { Input, Button } from "antd";
import { URL } from "../utils/url";

const { Search: SearchAntD } = Input;

const Usuarios = () => {
  const divRef1 = createRef();
  const divRef2 = createRef();
  const divRef3 = createRef();
  const divRef4 = createRef();
  const [contraseña, setContraseña] = useState("");
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (value) => {
    fetch(`${URL}/usuarios?nombre=${value}`, {
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

  const handleClick = () => {
    fetch(`${URL}/usuarios/changePassword?newPassword=${contraseña}&usuarioId=1`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then(() => {
        divRef3.current.innerHTML = "Contraseña Cambiada";
      });
  };

  const handleClickCrear = () => {
    console.log("🚀 ~ nombre || !contraseña || !email", nombre, contraseña, email);
    if (!nombre || !password || !email) return;

    fetch(`${URL}/usuarios/crearUsuario`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        contraseña: password,
        email: email,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        divRef4.current.innerHTML = "Usuario creado";
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
      <h1 style={{ marginTop: "50px" }}>Cambiar mi contraseña</h1>
      <div style={{ width: "100%", diplay: "flex", textAlign: "-webkit-center", marginTop: "2%" }}>
        <div style={{ width: "20%", diplay: "flex", flexDirection: "row" }}>
          <Input
            placeholder="Nueva Contraseña"
            onChange={(e) => {
              setContraseña(e.target.value);
            }}
            value={contraseña}
          />
          <Button type="primary" style={{ marginTop: "5px" }} onClick={handleClick}>
            Cambiar
          </Button>
          <div ref={divRef3} style={{ marginTop: "5px" }}></div>
        </div>
      </div>
      <h1 style={{ marginTop: "50px" }}>Crear usuario</h1>
      <div style={{ width: "100%", diplay: "flex", textAlign: "-webkit-center", marginTop: "2%" }}>
        <div style={{ width: "20%", diplay: "flex", flexDirection: "row" }}>
          <Input
            placeholder="Usuario"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            value={nombre}
            style={{ marginTop: "5px" }}
          />
          <Input
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            style={{ marginTop: "5px" }}
          />
          <Input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            style={{ marginTop: "5px" }}
          />
          <Button type="primary" style={{ marginTop: "5px" }} onClick={handleClickCrear}>
            Crear
          </Button>
          <div ref={divRef4} style={{ marginTop: "5px" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
