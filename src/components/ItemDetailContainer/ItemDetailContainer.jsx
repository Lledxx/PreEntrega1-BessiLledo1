import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailcontainer = () => {
  const [equipos, setEquipos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios("../apiEquip.json")
      .then((resp) => {
        // Verificar que el contenido cargado sea un array
        if (Array.isArray(resp.data)) {
          setEquipos(resp.data);
        } else {
          console.error("El contenido cargado no es un array:", resp.data);
        }
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, [id]);

  // Verificar que equipos sea un array antes de usar el método find
  const equipo =
    Array.isArray(equipos) && equipos.length
      ? equipos.find((equipo) => equipo.id == id)
      : null;

  return (
    <div className="ItemDetail">
      {equipo ? <ItemDetail equipo={equipo} /> : null}
    </div>
  );
};

export default ItemDetailcontainer;