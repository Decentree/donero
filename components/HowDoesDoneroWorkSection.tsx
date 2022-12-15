/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import CreateCampagin_01 from "public/images/CreateCampaign_01.png"
import CreateCampagin_02 from "public/images/CreateCampaign_02.png"
import CreateCampagin_03 from "public/images/CreateCampaign_03.png"
import { MainFontText } from "./MainFontText"
import { CreateCampaignFrame } from "./CreateCampaignFrame"

const DATA = [{
  number:1,
  picture:CreateCampagin_01.src,
  title:"Create your campaign",
  text:"Which deserves financial support"
},
{
  number:2,
  picture:CreateCampagin_02.src,
  title:"Collect donations",
  text:"As much as needed"
},
{
  number:3,
  picture:CreateCampagin_03.src,
  title:"Help your cause",
  text:"Have a positive impact on those around you"
}
]

export const HowDoesDoneroWorkSection = ()=>{

  return(
    <Section sectionExtraStyle="bg-center bg-no-repeat bg-[url('/images/ColorfulBackground.png')] xl:h-[729px] py-[50px] lg:py-[139px]">
      <div className="px-[22px]">
        <MainFontText text="HOW DOES DONERO WORK" extrastyle="text-center xl:text-left text-base"/>
        <MainFontText text="Create campaigns and collect donations via crypto" extrastyle="text-center xl:text-left text-[30px] md:text-[42px] xl:w-[615px] pb-[51px]"/>
      </div>
      <div className="justify-between xl:flex">
        {DATA.map(section=>{
          return(
            <CreateCampaignFrame number={section.number} picture={section.picture} title={section.title} text={section.text} key={section.number} />
          )
        })}
      </div>
    </Section>
  )
}