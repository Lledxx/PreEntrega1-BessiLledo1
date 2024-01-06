import Item from "../Item/Item";

const ItemList = ({ equipos }) => {
  return (
    <div className="Contenedor-Equipos">
      {equipos.map((equipo) => {
        return (
          <div key={equipo.id}>
            <Item equipo={equipo} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;