import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/Button"

const caseStudies = [
  {
    title: "King Salman Park",
    location: "Riyadh, Saudi Arabia",
    description:
      "Implementation of district cooling system serving 16,000 RT of cooling capacity for the cultural and entertainment destination.",
    image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg",
    results: [
      "40% reduction in energy consumption",
      "60,000 tons CO2 saved annually",
      "24/7 operational efficiency",
    ],
  },
  {
    title: "Dubai Airports",
    location: "Dubai, UAE",
    description:
      "Comprehensive energy retrofit and facilities management for Terminal 1 and Terminal 2.",
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
    results: [
      "30% reduction in energy costs",
      "Improved passenger comfort",
      "Enhanced operational efficiency",
    ],
  },
]

export function CaseStudies() {
  return (
    <section className="mx-auto max-w-6xl">
      <div className="relative">
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          Case Studies
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <h3 className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Success Stories from Across the Region
        </h3>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Discover how we've helped organizations achieve their sustainability goals
          while optimizing operational efficiency.
        </p>
      </div>

      <div className="mt-16 space-y-16">
        {caseStudies.map((study) => (
          <div
            key={study.title}
            className="grid gap-8 md:grid-cols-2 items-center"
          >
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {study.title}
              </h3>
              <p className="mt-1 text-emerald-600 font-medium">{study.location}</p>
              <p className="mt-4 text-gray-600">{study.description}</p>
              <div className="mt-6">
                <h4 className="font-medium text-gray-900">Key Results:</h4>
                <ul className="mt-2 space-y-2">
                  {study.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild variant="secondary">
          <Link href="/case-studies">View all case studies</Link>
        </Button>
      </div>
    </section>
  )
}