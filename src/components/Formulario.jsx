import React, { useEffect, useState } from "react";
import { ARRAY_CATEGORIAS } from "../constantes";

const Formulario = ({ consultaAPI }) => {
  return (
    <div>
      <form>
        <label htmlFor="categoria">Buscar por categoria</label>
        <select
          name="categoria"
          onChange={(event) => {
            consultaAPI(event.target.value);
          }}
        >
          {ARRAY_CATEGORIAS.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Formulario;
