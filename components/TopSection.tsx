/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import Donero from "public/icons/Donero.svg"
import Forrest from "public/images/Forrest.png"
import Technology from "public/images/Technology.png"

export const TopSection = ()=>{
  return(
    <Section backgroundColor="min-h-[400px] bg-main_green" sectionExtraStyle="lg:h-[709px] pt-[37.5px]">
      <div className="mx-[22px] flex px-10 xl:px-0 mb-[-450px] sm:mb-[-500px]">
        <div>
          <Donero />
        </div>
        {/*
          <div className="w-full z-10">
            <Button text="Start a campagin" extrastyle="float-right"/>
          </div>
        */}
      </div>
      <img 
        className="z-[0] relative top-[400px] left-[720px]"
        src={Forrest.src}
      />
      <div className="flex">
        <div className="mt-[117px] text-center lg:text-left lg:flex m-auto">
          <div className="m-auto lg:w-[684px] xl:mr-[74px] pt-[20px] lg:pt-[70px] p-2 lg:p-0">
            <MainFontText text="HELP WHERE NECESSARY" extrastyle="text-base"/>
            <MainFontText text="Raising money for projects that matter" extrastyle="z-10 relative xl:w-[684px] mt-[20px] lg:mt-[0px] mb-[36px] px-[22px] md:px-0 text-[42px] lg:text-[64px]"/>
            {/*
              <Button extrastyle="mb-10 lg:mb-0" text="Browse campaigns"/>
            */}
          </div>
          <img 
            src={Technology.src}  
            className="m-auto lg:m-0 mb-10 lg:mb-0 z-10"
          />
        </div>
      </div>
    </Section>
  )
}