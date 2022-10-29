import React, { createRef } from "react";
import { Input } from "antd";

const { Search: SearchAntD } = Input;

const Search = () => {
  const divRef = createRef();

  const handleSearch = (value) => {
    const busquedaMessage = `Error al buscar: ${value}`;
    divRef.current.innerHTML = busquedaMessage;
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
