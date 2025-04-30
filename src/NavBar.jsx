import { Link } from "react-router"

function NavButton({ text, path, extraStyles }) {

  return (
    <>
      <Link to={path} className={extraStyles + " flex-1 cursor-pointer text-center hover:flex-3/8 hover:animate-bounce"}>
        <button className="cursor-pointer">
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
        <NavButton text={"Home"} path={"/"} extraStyles={""} />
        <NavButton text={"About"} path={"about"} extraStyles={"border-l-2 border-r-2"} />
        <NavButton text={"Projects"} path={"projects"} />
      </div>
    </>
  )

}

export default NavBar