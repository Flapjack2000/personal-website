function Button({ text, link }) {
  return (
    <>
      <button className="justify-self-center rounded-2xl border-2 cursor-pointer max-w-fit pl-2 pr-2  text-center duration-100 hover:tracking-widest hover:shadow-md">
        <a href={link} target="_blank">
          {text}
        </a>
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

function Video({ src, desc }) {
  return (
    <>
      <div className="w-fit justify-self-center ">
        <video autoPlay loop muted className="shadow-lg rounded-2xl max-w-100 max-h-2xl border-2 ">
          <source src={src} type="video/mp4" />
        </video>

        <VideoDesc text={desc} />
      </div>
      <br />
    </>
  )
}

function VideoDesc({ text }) {
  return (
    <div className="text-md content-center text-center max-w-180 justify-self-center">
      {text}
    </div >
  )
}

function Blurb({ text }) {
  return (
    <div className="ml-10 mr-10 text-xl content-center text-justify max-w-180 justify-self-center">
      {text}
    </div >
  )
}
export { Button };
export { Blurb };
export { BigHeading };
export { Video };