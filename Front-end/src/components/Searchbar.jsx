import "../styles/SearchBar.css";
export const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Buscar objeto por nombre"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};
