import clsx from "clsx"

interface IMainFontText {
    text:string,
    extrastyle?:string
}

export const MainFontText =({text,extrastyle}:IMainFontText)=>
{
  return(
    <p className={clsx("font-main_font font-semibold", extrastyle)}>
      {text}
    </p>
  )
}