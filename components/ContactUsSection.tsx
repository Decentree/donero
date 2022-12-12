import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import { Button } from "./Button"
import { useState } from "react"

export const ContactUsSection = ()=>{

  const [loading, isLoading] = useState(false)
  const [error, isError] = useState(false)
  const [sent, isSent] = useState(false)

  const onSubmit = (event:any) => {
    isLoading(true)
    const formData = new FormData(event.target)
    fetch("/email", {method: "POST", body: JSON.stringify(Object.fromEntries(formData)), 
      headers:{
        "Content-Type": "application/json"
      }}).then(()=>isSent(true)).catch(() => isError(true)).finally(() => isLoading(false))
  }

    
  return(
    <Section sectionExtraStyle="bg-[url('/images/ColorfulBackground.png')] py-[50px] lg:py-[0] lg:pt-[177px] lg:pb-[180px] px-[20px] lg:px-[347px] mb-[100px] lg:mb-0">
      <div className="text-center">
        <MainFontText text="CONTACT US" extrastyle="text-base"/>
        <MainFontText text="Do you want to start a campaign?" extrastyle="text-[30px] md:text-[42px] pb-[7px]"/>
        <p className="font-main_font font-normal">Leave us your email and we will contact you with all the information</p>
      </div>
      <form className="sm:flex m-auto mt-[41px] w-fit" method="post" onSubmit={onSubmit}>
        <input 
          className="w-fit w-[320px] lg:w-[383px] h-[48px] mr-[16px] pl-6 border border-[#E6E6E6] rounded-xl main-input my-4" name="email" aria-label="Email" required
          type="email" 
          placeholder="Email" 
          disabled={loading || error || sent}
        />
        <div className="flex">
          <Button extrastyle="m-auto w-[139px]" text="Contact us"/>
        </div>
      </form>
    </Section>
  )
}

/*#if loading}
				Sending..
			{:else if error} Error occured
			{:else if sent} Successfuly sent
			{:else} Send 
        {/if*/