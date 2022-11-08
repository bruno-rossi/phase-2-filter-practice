import StarFilter from "./StarFilter"
import StarCard from "./StarCard"

function StarsContainer() {

  const starsURL = "http://localhost:4000/stars"

  return (
    <div className="white-border-top">

      <h2>Stars of the Solar System</h2>

      {/* You can delete the <p> tag once you've completed the deliverable */}
      <p>Use the provided URL to fetch the stars, map through and display them. Use the StarFilter component to allow users to find stars that many light years or further from the sun.</p>

      <StarFilter />

      <div className="grid column-3">

        {/* show your stars here! */}

      </div>

    </div>
  )

}

export default StarsContainer
