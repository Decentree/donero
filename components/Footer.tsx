/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Section } from "./Section"
import DoneroAndDecentree from "public/icons/DoneroAndDecentree.svg"

export const Footer = ()=>{
  const today = new Date()
  const year = today.getFullYear()

  return(
    <div>
      <Section sectionExtraStyle="px-10 mt-[55px]">
        <div className="mt-[21.5px] m-auto lg:m-0 w-fit">
          <DoneroAndDecentree />
        </div>
        <p className="w-[379px] m-auto lg:m-0 mb-[10px] pt-[20px] lg:pb-[59px] text-[#737373] text-sm text-center lg:text-left">Our mission is to utilise blockchain to help as many people as possible.</p>
        <div className="absolute left-0 bottom-50 border-t border-[#E4E5E5] w-full"></div>
        <div className="lg:flex items-center lg:h-[87px]">
          <p className="my-5 lg:my-0 sm:w-[500px] text-[#737373] text-sm m-auto lg:m-0 text-center lg:text-left">Copyright © {year} Donero Foundation s.r.o. All rights reserved.</p>
        </div>
      </Section>
    </div>
  )
}