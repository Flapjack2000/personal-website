import NavBar from "./NavBar"
import { Button, BigHeading, Blurb, Video } from "./BasicUI"

function About() {
  return (
    <>
      <NavBar />
      <br /><br />

      <div className="mr-1 ml-1 grid gap-4">
        <BigHeading text={"Tae Kwon Do"} />
        <Blurb text={"I've been practicing Tae Kwon Do since I was 8 years old. I earned my black belt in 2022, and I'm currently an assistant instructor."} />
        <Video desc={"Board Breaking | March 2025 Lowell HS Expo"} src="src\assets\2025_lowell_expo_board_breaking.mp4" />

        <img className="w-80 justify-self-center" src="src\assets\twitch_wordmark_extruded_purple.svg" />

        <Button text={"View Channel"} link="https://www.twitch.tv/flapjackzach2" />
        <Blurb text={"Come join my stream on Fridays at 7:00 PM! Usually I'm playing Skyrim, Balatro, or chess."} />
        <br />
      </div>
    </>
  )
}

export default About;