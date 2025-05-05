import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import NavBar from './NavBar'


import { Blurb, Button, BigHeading } from './BasicUI'


function App() {
  return (
    <>
      <NavBar />

      <div className="grid gap-12">

        <BigHeading text={"Hey, I'm Zach!"} />


        <Blurb text={"I'm a computer science and mathematics student from West Michigan. When I'm not programming, I'm playing the piano, streaming Skyrim on Twitch, running a D&D campaign, or teaching children how to fight each other with Tae Kwon Do."} />
      </div>
    </>
  )
}

export default App
