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

function BigHeading({ text }) {
  return (
    <div className="text-5xl content-center text-center justify-self-center italic">
      {text}
    </div>
  )
}

function Blurb({ text }) {
  return (
    <div className="text-xl content-center text-justify max-w-180 justify-self-center">
      {text}
    </div >
  )
}
export { Button };
export { Blurb };
export { BigHeading };