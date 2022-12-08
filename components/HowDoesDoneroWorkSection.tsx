/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import CollectDonations from "public/images/CollectDonations.png"
import CreateYourCampaign from "public/images/CreateYourCampaign.png"
import HelpYourCause from "public/images/HelpYourCause.png"
import { MainFontText } from "./MainFontText"


export const HowDoesDoneroWorkSection = ()=>{

  return(
    <Section sectionExtraStyle="h-[729px] py-[139px]">
      <div className="px-[22px]">
        <MainFontText text="HOW DOES DONERO WORK" extrastyle="text-base"/>
        <MainFontText text="Create campaigns and collect dontations via crypto" extrastyle="text-[42px] w-[615px] pb-[51px]"/>
      </div>
      <div className="justify-between flex">
        <img src={CollectDonations.src} />
        <img src={CreateYourCampaign.src} />
        <img src={HelpYourCause.src} />
      </div>
    </Section>
  )
}