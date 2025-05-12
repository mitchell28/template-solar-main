import { CallToAction } from "@/components/ui/CallToAction"
import { Hero } from "@/components/ui/Hero"
import { Services } from "@/components/ui/Services"
import { CaseStudies } from "@/components/ui/CaseStudies"
import { ContactSection } from "@/components/ui/ContactSection"

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Services />
      </div>
      <div className="mt-24 px-4 xl:px-0">
        <CaseStudies />
      </div>
      <div className="mt-24 mb-40 px-4 xl:px-0">
        <ContactSection />
      </div>
      <div className="mt-16 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}
