import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import { Profile } from "./Profile"
import Taticek from "public/images/Taticek.png"
import Schinzel from "public/images/Schinzel.png"
import Martykan from "public/images/Martykan.png"


export const OurTeamSection = ()=>{

  const OurTeamSectionData = [
    {
      src:Taticek.src,
      position:"CEO",
      name:"JOSEF TATÍČEK",
      email:"JOSEF@DECENTREE.COM"
    },
    {
      src:Schinzel.src,
      position:"CTO",
      name:"ADAM SCHINZEL",
      email:"ADAM@DECENTREE.COM"
    },
    {
      src:Martykan.src,
      position:"HEAD OF ENGINEERING",
      name:"TOMÁŠ MARTYKÁN",
      email:"TOMAS@DECENTREE.COM"
    },
  ]

  return(
    <Section sectionExtraStyle="bg-main_green h-[736px] pt-[90px]" >
      <div className="text-center">
        <MainFontText text="OUR TEAM" extrastyle="text-base"/>
        <MainFontText text="Who are we?" extrastyle="text-[42px] pb-[51px]"/>
      </div>
      <div className="flex w-[946px] justify-between m-auto">
        {OurTeamSectionData.map(person=>{
          return(
            <Profile src={person.src} position={person.position} name={person.name} email={person.email} key={person.name} />
          )
        })}
      </div>
    </Section>
  )
}