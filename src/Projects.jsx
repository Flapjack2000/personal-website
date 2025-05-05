import NavBar from "./NavBar"
import { Blurb, BigHeading } from "./BasicUI"
function Projects() {
  return (
    <>
      <NavBar />
      <br /><br />
      <div className="grid gap-4">
        <BigHeading text={"Projects"} />
      </div>
    </>
  )
}

export default Projects