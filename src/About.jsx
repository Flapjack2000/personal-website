import NavBar from "./NavBar"
import Blurb from "./Blurb"

function About() {
  return (
    <>
      <NavBar />

      <div className="grid gap-4">
        <svg>
          <circle />
        </svg>


        <Blurb text={"Hi"} />

      </div>
    </>
  )
}

export default About