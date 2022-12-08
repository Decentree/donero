import { HowDoesDoneroWorkSection } from "../components/HowDoesDoneroWorkSection"
import { OurTeamSection } from "../components/OurTeamSection"
import { TopSection } from "../components/TopSection"
import { WhyCryptoSection } from "../components/WhyCryptoSection"

export default function Home() {
  return (
    <div>
      <TopSection />
      <HowDoesDoneroWorkSection />
      <WhyCryptoSection/>
      <OurTeamSection />
    </div>
  )
}
