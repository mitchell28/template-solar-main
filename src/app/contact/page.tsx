import { Button } from "@/components/Button"
import { siteConfig } from "@/app/siteConfig"

export default function ContactPage() {
  return (
    <main className="pt-32 pb-16 px-4 mx-auto max-w-6xl">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600">
            Get in touch with our team to discuss how ENGIE Solutions can help you achieve your sustainability goals.
          </p>

          <div className="mt-12 space-y-8">
            {Object.entries(siteConfig.offices).map(([country, office]) => (
              <div key={country}>
                <h2 className="font-semibold text-gray-900">{office.city}</h2>
                <p className="mt-2 text-gray-600">{office.address}</p>
                <p className="mt-1 text-gray-600">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </main>
  )
}