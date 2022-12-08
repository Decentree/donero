/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MainFontText } from "./MainFontText"

interface IProfile {
  src:string,
  position:string,
  name:string,
  email:string
}

export const Profile =({src,position,name,email}:IProfile)=>{
  return(
    <div className="rounded-2xl h-[386px] w-[294px] bg-white border border-border_green">
      <img
        src={src}
        className="m-auto mt-[12px]"
      />
      <div className="mx-[18px] my-[19px]">
        <MainFontText text={position} extrastyle="text-text_green text-xs"/>
        <MainFontText text={name} extrastyle="" />
        <MainFontText text={email} extrastyle="text-text_green"/>
      </div>
    </div>
  )
}