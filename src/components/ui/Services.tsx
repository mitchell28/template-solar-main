import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/app/siteConfig"
import { Button } from "@/components/Button"

export function Services() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="relative">
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          Our Services
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <h3 className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Comprehensive Energy Solutions for the Middle East
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          From district cooling to renewable energy, we provide end-to-end solutions
          that help organizations achieve their sustainability goals while optimizing
          operational efficiency.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {Object.entries(siteConfig.services).map(([key, service]) => (
          <div
            key={key}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Button asChild variant="secondary" className="mt-4">
                <Link href={`/services/${key}`}>Learn more</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}