import clsx from "clsx"
import { MainFontText } from "./MainFontText"

interface IButton {
  text:string,
  disabled?:any,
  extrastyle?:string
}

export const Button = ({text,disabled,extrastyle}:IButton)=>{
  return(
    <button 
      className={clsx("hover:bg-[#FFE3A1]/80 bg-[#FFE3A1] h-[48px] rounded-md px-[22px]",extrastyle)} 
      type="submit" 
      disabled={disabled}
    >
      <MainFontText extrastyle="text-sm uppercase" text={text}/>
    </button>
  )
}