/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import { Button } from "./Button"
import { MainFontText } from "./MainFontText"
import Logo from "public/icons/Logo.png"
import Forrest from "public/images/Forrest.png"
import Technology from "public/images/Technology.png"

export const TopSection = ()=>{
  return(
    <Section backgroundColor="bg-main_green" sectionExtraStyle="h-[709px] pt-[37.5px]">
      <div className="flex">
        <img
          src={Logo.src}
          className="self-center"
        />
        <div className="w-full z-10">
          <Button text="Start a campagin" extrastyle="float-right"/>
        </div>
        <img 
          className="absolute top-[-30px] right-[-150px]"
          src={Forrest.src}
        />
      </div>
      <div className="flex">
        <div className="mt-[117px] flex m-auto">
          <div className="w-[684px] mr-[46px] pt-[70px]">
            <MainFontText text="HELP WHERE NECESSARY" extrastyle="text-base"/>
            <MainFontText text="Raising money for projects that matter" extrastyle="text-[42px] mb-[36px]"/>
            <Button text="Browse campaigns"/>
          </div>
          <img 
            src={Technology.src}  
            className="z-10"
          />
        </div>
      </div>
    </Section>
  )
}