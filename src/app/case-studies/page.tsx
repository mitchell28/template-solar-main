import Image from "next/image"

const caseStudies = [
  {
    title: "King Salman Park",
    location: "Riyadh, Saudi Arabia",
    description: "Implementation of district cooling system serving 16,000 RT of cooling capacity for the cultural and entertainment destination.",
    image: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg",
    results: ["40% reduction in energy consumption", "60,000 tons CO2 saved annually", "24/7 operational efficiency"]
  },
  {
    title: "Dubai Airports",
    location: "Dubai, UAE",
    description: "Comprehensive energy retrofit and facilities management for Terminal 1 and Terminal 2.",
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg",
    results: ["30% reduction in energy costs", "Improved passenger comfort", "Enhanced operational efficiency"]
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="pt-32 pb-16 px-4 mx-auto max-w-6xl">
      <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Case Studies</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-3xl">
        Discover how ENGIE Solutions has helped organizations across the Middle East achieve their sustainability
        goals while optimizing operational efficiency.
      </p>

      <div className="mt-16 space-y-16">
        {caseStudies.map((study) => (
          <div key={study.title} className="grid gap-8 md:grid-cols-2 items-center">
            <div className="aspect-video relative overflow-hidden rounded-xl">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{study.title}</h2>
              <p className="mt-1 text-emerald-600 font-medium">{study.location}</p>
              <p className="mt-4 text-gray-600">{study.description}</p>
              <div className="mt-6">
                <h3 className="font-medium text-gray-900">Key Results:</h3>
                <ul className="mt-2 space-y-2">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-gray-600">
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
    </main>
  )
}