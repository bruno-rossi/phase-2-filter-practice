function PlanetFilter({planetFilter, setPlanetFilter}) {

  function handleChange(event) {
    setPlanetFilter(event.target.value);
  }

  return (
    <select onChange={handleChange} value={planetFilter}>
      <option value="all">All</option>
      <option value="only_planets">True Planets</option>
    </select>
  )
}

export default PlanetFilter
