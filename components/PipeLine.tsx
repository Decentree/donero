import Pipe from "public/icons/Pipe.png"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

interface IPipeLine {
    text:string
}

export const PipeLine =({text}:IPipeLine)=>{
  return(
    <div className="lg:w-fit sm:w-[450px] m-auto lg:m-0 flex flex-row mb-[8px]">
      <img
        src={Pipe.src}
        className="self-center mr-[20px] h-[16px] w-[16px]"
      />
      <p className="font-submain_font font-normal">{text}</p>
    </div>
  )
}