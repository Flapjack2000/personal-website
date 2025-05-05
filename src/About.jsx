import NavBar from "./NavBar"
import Blurb from "./Blurb"

function About() {
  return (
    <>
      <NavBar />
      <br /><br />

      <div className="grid gap-4">


        <Blurb text={"Hi"} />

      </div>
    </>
  )
}

export default About