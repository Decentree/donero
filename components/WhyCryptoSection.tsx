/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import { PipeLine } from "./PipeLine"
import Ethereum from "public/images/Ethereum.png"

export const WhyCryptoSection =()=>{

  const WhyCryptoSectionData = [
    "Global donations made easy",
    "Direct transfer without any middleman",
    "Easier accounting",
    "Publicly verifiable donations",
    "People donate more money with crypto on average"
  ]

  return(
    <Section sectionExtraStyle="bg-main_baige lg:h-[558.96px] py-[90px] lg:py-[139px]">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <div className="px-[22px]">
            <MainFontText text="WHY CRYPTO" extrastyle="text-center lg:text-left text-base"/>
            <MainFontText text="Raising funds with crypto" extrastyle="text-center lg:text-left text-[30px] md:text-[42px] lg:w-[615px] pb-[51px]"/>
          </div>
          <div className="px-10 lg:px-[22px]">
            {WhyCryptoSectionData.map(text=>{
              return(
                <PipeLine text={text} key={text}/>
              )
            })}
          </div>
        </div>
        <img 
          src={Ethereum.src}
          className="m-auto lg:m-0 relative right-[50px] lg:bottom-[120px] lg:right-[100px]"
        />
      </div>
    </Section>
  )
}