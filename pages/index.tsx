import { ContactUsSection } from "../components/ContactUsSection"
import { HowDoesDoneroWorkSection } from "../components/HowDoesDoneroWorkSection"
import { OurTeamSection } from "../components/OurTeamSection"
import { PopularCampaignsSection } from "../components/PopularCampaignsSection"
import { TopSection } from "../components/TopSection"
import { WhyCryptoSection } from "../components/WhyCryptoSection"
import { Footer } from "../components/Footer"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <TopSection />
      <PopularCampaignsSection />
      <HowDoesDoneroWorkSection />
      <WhyCryptoSection/>
      <OurTeamSection />
      <ContactUsSection />
      <Footer />
    </div>
  )
}
