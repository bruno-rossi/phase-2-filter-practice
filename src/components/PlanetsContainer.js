import React, {useState, useEffect} from "react"
import PlanetFilter from "./PlanetFilter"
import PlanetCard from "./PlanetCard"

function PlanetsContainer() {

  const [planets, setPlanets] = useState([])
  const [planetFilter, setPlanetFilter] = useState("all");

  const planetsURL = "http://localhost:4000/planets"

  useEffect(() => {
    fetch(planetsURL)
    .then(response => response.json())
    .then(data => setPlanets(data))
  }, []);

  const filteredPlanets = planetFilter === "a ll" ? planets : planets.filter(planet => planet.is_planet);

  return (
    <div className="white-border-top">

      <h2>Planets of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      {/* <p>Use the provided URL to fetch the planets, map through and display them. Use the PlanetFilter component to allow users to filter true planets from planetoids.</p> */}

      <PlanetFilter planetFilter={planetFilter} setPlanetFilter={setPlanetFilter} />

      <div className="grid column-3">

        {filteredPlanets.map(planet => <PlanetCard key={planet.id} planet={planet} />)}

      </div>



    </div>
  )

}

export default PlanetsContainer
