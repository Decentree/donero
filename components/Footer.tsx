/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import DoneroAndDecentree from "public/icons/DoneroAndDecentree.png"
import Twitter from "public/icons/Twitter.png"
import Instagram from "public/icons/Instagram.png"
import DoneroAllRightsReserved from "public/icons/DoneroAllRightsReserved.png"

export const Footer = ()=>{
  return(
    <div>
      <Section sectionExtraStyle="px-10">
        <img 
          src={DoneroAndDecentree.src} 
          className="m-auto lg:m-0"
        />
        <p className="text-[#737373] text-sm w-[379px] m-auto lg:m-0 text-center lg:text-left pb-[59px] mt-[13px]">Our mission is to utilise blockchain to help as many people as possible.</p>
        <div className="absolute left-0 bottom-50 border-t border-[#E4E5E5] w-full mt"></div>
        <div className="lg:flex">
          <img 
            src={DoneroAllRightsReserved.src}
            className="m-auto py-5 my-5"
          />
          <div className="w-full lg:pt-10">
            <div className="m-auto mb-10 lg:mb-0 w-fit lg:float-right flex">
              <img src={Instagram.src} className="mr-10"/>
              <img src={Twitter.src}/>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}