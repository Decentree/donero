import { ContactUsSection } from "../components/ContactUsSection"
import { HowDoesDoneroWorkSection } from "../components/HowDoesDoneroWorkSection"
import { OurTeamSection } from "../components/OurTeamSection"
import { PopularCampaignsSection } from "../components/PopularCampaignsSection"
import { TopSection } from "../components/TopSection"
import { WhyCryptoSection } from "../components/WhyCryptoSection"

export default function Home() {
  return (
    <div>
      <TopSection />
      <PopularCampaignsSection />
      <HowDoesDoneroWorkSection />
      <WhyCryptoSection/>
      <OurTeamSection />
      <ContactUsSection />
    </div>
  )
}
