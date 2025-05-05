import NavBar from './NavBar'
import { Blurb, BigHeading } from './BasicUI'


function App() {
  return (
    <>
      <NavBar />
      <br /><br />
      <div className="grid gap-12">

        <BigHeading text={"Hey, I'm Zach!"} />

        <Blurb text={"I'm a computer science and mathematics student from West Michigan. When I'm not programming, I'm playing the piano, streaming Skyrim on Twitch, running a D&D campaign, or teaching children how to fight each other with Tae Kwon Do."} />

        <Blurb text={""} />
      </div>
    </>
  )
}

export default App
