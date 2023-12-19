function MoonFilter({ moonFilter, setMoonFilter}) {

  return (
    <>

      <label htmlFor="moon-search">Search for a moon:</label>

      <input type="text" name="moon-search" value={moonFilter} onChange={event => setMoonFilter(event.target.value)} />

    </>
  )

}

export default MoonFilter
