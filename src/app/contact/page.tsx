import { Button } from "@/components/Button"
import { siteConfig } from "@/app/siteConfig"
import { RiMailFill, RiMapPinFill, RiPhoneFill } from "@remixicon/react"

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-32">
      <div className="relative">
        <h2 className="relative text-lg font-semibold tracking-tight text-orange-500">
          Get in Touch
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <h1 className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 sm:text-4xl">
          Let's discuss your sustainability goals
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          Our team of experts is ready to help you transform your operations with innovative energy solutions tailored to your needs.
        </p>
      </div>

      <div className="mt-12 grid gap-16 md:grid-cols-2">
        <div className="space-y-10">
          <div className="space-y-6">
            {Object.entries(siteConfig.offices).map(([country, office]) => (
              <div key={country} className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-100 p-3 text-orange-600">
                    <RiMapPinFill className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">{office.city}</h2>
                    <p className="mt-1 text-gray-600">{office.address}</p>
                    <div className="mt-4 flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <RiPhoneFill className="size-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <RiMailFill className="size-4" />
                        <span>contact@engie.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl bg-white p-8 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent" />
            <div className="relative">
              <h3 className="text-xl font-semibold text-gray-900">Send us a message</h3>
              <p className="mt-2 text-gray-600">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="mt-8 space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}