import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import { PipeLine } from "./PipeLine"

export const WhyCryptoSection =()=>{

  const WhyCryptoSectionData = [
    "Donate with crypto currencies",
    "Direct transfer without any middleman",
    "Easier accounting",
    "Publicly verifiable donations",
    "People donate more money with crypto on average"
  ]

  return(
    <Section sectionExtraStyle="bg-main_baige h-[558.96px] py-[139px]">
      <div className="lg:flex">
        <div className="border border-black lg:w-1/2">
          <div className="px-[22px]">
            <MainFontText text="WHY CRYPTO" extrastyle="text-base"/>
            <MainFontText text="Raising funds with crypto" extrastyle="text-[42px] lg:w-[615px] pb-[51px]"/>
          </div>
          {WhyCryptoSectionData.map(text=>{
            return(
              <PipeLine text={text} key={text}/>
            )
          })}
        </div>
        <div className="border border-black w-1/2">
        </div>
      </div>
    </Section>
  )
}