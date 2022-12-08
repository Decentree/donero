/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MainFontText } from "./MainFontText"
import { Section } from "./Section"
import VectorLeft from "public/icons/VectorLeft.png"
import VectorRight from "public/icons/VectorRight.png"

export const PopularCampaignsSection = ()=>{
  return(
    <Section sectionExtraStyle="h-[562px] pt-[67px] pb-[32px]">
      <div className="flex">
        <MainFontText extrastyle="w-full text-[22px]" text="Popular Campaigns"/>
        <div>
          <div className="flex float-right">
            <img 
              className="self-center mr-[36.5px]"
              src={VectorLeft.src}
            />
            <img 
              className="self-center"
              src={VectorRight.src}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}