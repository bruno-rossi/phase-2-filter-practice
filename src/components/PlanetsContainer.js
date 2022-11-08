import PlanetFilter from "./PlanetFilter"
import PlanetCard from "./PlanetCard"

function PlanetsContainer() {

  const planetsURL = "http://localhost:4000/planets"

  return (
    <div className="white-border-top">

      <h2>Planets of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the planets, map through and display them. Use the PlanetFilter component to allow users to filter true planets from planetoids.</p>

      <PlanetFilter />

      <div className="grid column-3">

        {/* show your planets here! */}

      </div>



    </div>
  )

}

export default PlanetsContainer
