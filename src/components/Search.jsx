import React, { createRef } from "react";
import { Input } from "antd";
import { URL } from "../utils/url";

const { Search: SearchAntD } = Input;

const Search = () => {
  const divRef = createRef();

  const handleSearch = (value) => {
    fetch(`${URL}/busqueda?q=${value}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        const busquedaMessage = `Error al buscar: ${data}`;
        divRef.current.innerHTML = busquedaMessage;
      });
  };

  return (
    <div style={{ width: "100%", diplay: "flex", textAlign: "-webkit-center", marginTop: "2%" }}>
      <div style={{ width: "20%", diplay: "flex", flexDirection: "column" }}>
        <SearchAntD placeholder="Buscar imágenes" onSearch={handleSearch} enterButton />
        <div ref={divRef} style={{ color: "red" }}></div>
      </div>
    </div>
  );
};

export default Search;
