/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MainFontText } from "./MainFontText"

interface ICreateCampaginFrame {
    number:number,
    picture:string,
    title:string,
    text:string
}

export const CreateCampaignFrame = ({number,picture,title,text}:ICreateCampaginFrame)=>{
  return(
    <div className="CreateCampaignFrame m-auto mt-[50px] xl:mt-[0px] xl:m-0 border border-[#FFE3A1] w-[358px] h-[264px] rounded-2xl">
      <img 
        className="m-auto w-[326px] h-[163px] mb-[24px]"
        src={picture}
      />
      <div className="w-[326px] m-auto px-[15px]">
        <MainFontText extrastyle="text-base" text={title} />
        <p className="text-sm font-main_font font-normal text-[#855B16] h-[44px]">{text}</p>
      </div>
      <p className="relative right-[22px] bottom-[280px] rounded-full bg-[#FFFCF2] border border-[#FFE3A1] w-[44px] h-[44px] text-center font-semibold text-[22px] pt-[5px]">{number}</p>
    </div>
  )
}