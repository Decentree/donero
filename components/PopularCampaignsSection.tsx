/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import { MainFontText } from "./MainFontText"
import { Section } from "./Section"
import VectorLeft from "public/icons/VectorLeft.png"
import VectorRight from "public/icons/VectorRight.png"
import ComingSoon from "public/images/ComingSoon.png"

export const PopularCampaignsSection = ()=>{
  return(
    <Section sectionExtraStyle="lg:h-[562px] px-[10px] pt-[67px] pb-[32px]">
      <div className="mx-[22px] flex">
        <MainFontText extrastyle="w-full text-[22px]" text="Popular Campaigns"/>
        <div>
          <div className="flex float-right h-[35px]">
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
      <img 
        src={ComingSoon.src}
        className="mt-[6px]"
      />
    </Section>
  )
}