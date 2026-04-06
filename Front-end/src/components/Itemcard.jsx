export const ItemCard = ({
  item,
  mostrarMenu,
  setMostrarMenu,
  onDelete,
  onEdit,
}) => {
  return (
    <div>
      <p>ID: {item.id}</p>
      <p>Nombre: {item.Name}</p>
      <p>Icon: {item.Icon}</p>
      <p>Tipo de objeto: {item.Typeitem}</p>
      <p>Cita: {item.Quote}</p>
      <p>Descripción: {item.Description}</p>
      <p>Calidad: {item.Quality}</p>

      <button
        onClick={() => setMostrarMenu(mostrarMenu === item.id ? null : item.id)}
      >
        ⋮
      </button>

      {mostrarMenu === item.id && (
        <div>
          <button onClick={() => onEdit(item.id)}>Editar</button>
          <button onClick={() => onDelete(item.id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};
