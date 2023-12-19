import React, {useState, useEffect} from "react"
import MoonFilter from "./MoonFilter"
import MoonCard from './MoonCard'

function MoonsContainer() {

  const [ moons, setMoons ] = useState([]);
  const [ moonFilter, setMoonFilter ] = useState("");

  const moonsURL = "http://localhost:4000/moons"

  useEffect(() => {
    fetch(moonsURL)
    .then(res => res.json())
    .then(data => setMoons(data))
  }, []);

  const filteredMoons = moons.filter(moon => moon.name.toLowerCase().includes(moonFilter.toLowerCase()));

  return (
    <div className="white-border-top">

      <h2>Moons</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the moons, map through and display them. Use the MoonFilter component to allow users to see moons based on name. This should happen as the user types into the form.</p>

      <MoonFilter moonFilter={moonFilter} setMoonFilter={setMoonFilter} />

      <div className="grid column-3">

        {filteredMoons.map(moon => <MoonCard key={moon.id} moon={moon} />)}

      </div>

    </div>
  )

}

export default MoonsContainer
