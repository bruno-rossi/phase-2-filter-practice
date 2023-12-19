function StarFilter({ starsFilter, setStarsFilter}) {

  return (
    <>

      <label htmlFor="star-search">Lightyears away:</label>

      <input type="number" name="star-search" value={starsFilter} onChange={event => setStarsFilter(event.target.value)} />

    </>
  )

}

export default StarFilter
