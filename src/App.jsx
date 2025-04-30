import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './NavBar'
import Blurb from './Blurb'

function App() {
  return (
    <>
      <NavBar />
      <br />
      <div className="grid gap-4">

        <div className="text-5xl content-center text-center justify-self-center italic">
          Hey, I'm Zach!
        </div>
        <Blurb text={"I'm a computer science and mathematics student from West Michigan. When I'm not programming, I'm playing the piano, streaming Skyrim on Twitch, running a D&D campaign, or teaching children how to fight each other with Tae Kwon Do."} />
      </div>
    </>
  )
}

export default App
