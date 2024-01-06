import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [equipos, setEquipos] = useState([]);
  let { categoryId } = useParams();

  useEffect(() => {
    axios("../apiEquip.json").then((resp) =>
      setEquipos(
        categoryId
          ? resp.data.filter((equipo) => equipo.genero == categoryId)
          : resp.data
      )
    );
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId}</h2>
      <ItemList className="Contenedor-Equipos" equipos={equipos} />
    </div>
  );
};

export default ItemListContainer;