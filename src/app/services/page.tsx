import { Button } from "@/components/Button"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "District Cooling",
    description: "Efficient centralized cooling solutions for large-scale developments, reducing energy consumption and operational costs.",
    image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
    link: "/services/district-cooling"
  },
  {
    title: "Energy Retrofits",
    description: "Comprehensive energy efficiency solutions to optimize existing buildings and infrastructure.",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    link: "/services/energy-retrofits"
  },
  {
    title: "Integrated Facilities Management",
    description: "End-to-end facility management services ensuring optimal operation of your assets.",
    image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg",
    link: "/services/facilities-management"
  },
  {
    title: "Renewable Energy",
    description: "Sustainable energy solutions including solar power and waste-to-energy systems.",
    image: "https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg",
    link: "/services/renewable-energy"
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-16 px-4 mx-auto max-w-6xl">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Services</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        ENGIE Solutions provides comprehensive energy and facilities management services across the Middle East,
        helping organizations achieve their sustainability goals while optimizing operational efficiency.
      </p>
      
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.title} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{service.title}</h2>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href={service.link}>Learn more</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}