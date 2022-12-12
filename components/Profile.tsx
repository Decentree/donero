/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

/*
import { MainFontText } from "./MainFontText"

interface IProfile {
  src:string,
  position:string,
  name:string,
  email:string
}

export const Profile =({src,position,name,email}:IProfile)=>{
  return(
    <div className="flex flex-col">
      <div className="mb-[-340px] z-10 rounded-2xl h-[386px] w-[294px] bg-white border border-border_green mb-10 lg:mb-0 m-auto lg:m-0">
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
      <div className="relative m-auto top-[-380px] lg:left-[12px] lg:bottom-[340px] rounded-2xl h-[352px] w-[268px] bg-main_green border border-border_green mb-10 lg:mb-0 lg:m-0">
        <p>bonjour</p>
      </div>
    </div>
  )
}
*/

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
    <div className="flex flex-col">
      <div className="mb-[-330px] z-10 rounded-2xl h-[386px] w-[294px] bg-white border border-border_green mb-10 lg:mb-0 m-auto lg:m-0">
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
      <div className="relative m-auto top-[-5px] lg:left-[12px] lg:top-[-340px] rounded-2xl h-[352px] w-[268px] bg-main_green border border-border_green mb-10 lg:mb-0 lg:m-0">
        <p>bonjour</p>
      </div>
    </div>
  )
}