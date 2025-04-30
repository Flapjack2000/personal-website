import { Link } from "react-router"

function NavButtonBorder() {
  return (
    <>
      <div className="border-1"></div>
    </>
  )
}

function NavButton({ text, path }) {

  return (
    <>
      <Link to={path} className={" flex-1 cursor-pointer text-center hover:flex-1/2 hover:animate-bounce"}>
        <button className="cursor-pointer ">
          {text}
        </button>
      </Link >
    </>
  )
}

function NavBar() {
  return (
    <>
      <div className="flex border-b-2">
        <NavButton text={"Home"} path={"/"} />
        <NavButtonBorder />
        <NavButton text={"About"} path={"../about"} />
        <NavButtonBorder />
        <NavButton text={"Projects"} path={"../projects"} />
      </div>
    </>
  )

}

export default NavBar