function NavButton({ text }) {
  return (
    <>
      <button>{text}</button>

    </>
  )
}

function NavBar() {
  return (
    <>
      <NavButton text={"Home"} />
      <NavButton text={"About"} />
      <NavButton text={"Projects"} />


    </>
  )

}

export default NavBar