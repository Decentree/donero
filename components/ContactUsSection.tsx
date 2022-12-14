import { Section } from "./Section"
import { MainFontText } from "./MainFontText"
import { Button } from "./Button"

export const ContactUsSection = ()=>{
    
  return(
    <Section sectionExtraStyle="bg-[url('/images/ColorfulBackground.png')] py-[50px] lg:py-[0] lg:pt-[177px] lg:pb-[180px] px-[20px] lg:px-[347px] mb-[100px] lg:mb-0">
      <div className="text-center">
        <MainFontText text="CONTACT US" extrastyle="text-base"/>
        <MainFontText text="Do you want to start a campaign?" extrastyle="text-[30px] md:text-[42px] pb-[7px]"/>
        <p className="font-main_font font-normal">Leave us your email and we will contact you with all the information</p>
      </div>
      <div className="flex w-full">
        <Button href="mailto://info@decentree.com" extrastyle="mt-[41px] m-auto w-[139px]" text="Contact us"/>
      </div>
    </Section>
  )
}

/*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(`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'" > sendgrid.env`)
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error:any) => {
      console.error(error)
    })*/