import './style.sass'

export default function SearchBar({
  filterText = '',
  inDesired = false,
  setFilterText = () => null,
  setInDesired = () => null,
}) {
  return (
    <form className="filter-form">
      <input
        type="text"
        className="search-input"
        placeholder="Поиск по названию"
        value={filterText}
        onChange={ (evt) => setFilterText(evt.target.value)}
      />
      <label>
        <input
          type="checkbox"
          className="checkbox-input"
          value={inDesired}
          onChange={ (evt) => setInDesired(evt.target.checked)}
        />
        Только в списке желаемого
      </label>
    </form>
  )
}
