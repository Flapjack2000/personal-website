function Button({ text }) {
  return (
    <>
      <button className="border-2 max-w-fit pl-2 pr-2 pb-1 cursor-pointer text-center duration-100 hover:tracking-widest">
        {text}
        <hr />
      </button>
    </>
  )
}
export default Button;
