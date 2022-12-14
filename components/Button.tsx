import clsx from "clsx"
import { MainFontText } from "./MainFontText"

interface IButton {
  text:string,
  disabled?:any,
  extrastyle?:string,
  href?:string
}

export const Button = ({text,disabled,extrastyle, href}:IButton)=>{
  return(
    <button 
      className={clsx("active:bg-button_background hover:bg-button_background/80 bg-button_background h-[48px] rounded-md px-[22px]",extrastyle)} 
      type="submit" 
      disabled={disabled}
    >
      <a href={href}>
        <MainFontText extrastyle="text-sm text-button_text uppercase" text={text}/>
      </a>
    </button>
  )
}