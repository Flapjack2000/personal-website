import { Link } from "react-router"

function VerticalBorder() {
  return (
    <>
      <div className="border-1"></div>
    </>
  )
}

function NavButton({ text, path }) {

  return (
    <>
      <Link to={path} className="hover:shadow-lg flex-1 cursor-pointer text-center duration-100 hover:flex-1/2 hover:tracking-widest">
        <button className="cursor-pointer ">
          {text}
          <hr />
        </button>
      </Link >
    </>
  )
}

function NavBar() {
  return (
    <>
      <div className="bg-white sticky top-0 flex border-b-2">
        <NavButton text={"Home"} path={"/"} />
        <VerticalBorder />
        <NavButton text={"About"} path={"../about"} />
        <VerticalBorder />
        <NavButton text={"Projects"} path={"../projects"} />
      </div>
    </>
  )

}

export default NavBar