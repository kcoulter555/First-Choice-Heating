'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            What our customers say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recent Facebook reviews — screenshots on file from happy customers across Northern Ireland.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {testimonials.map((t) => (
            <a
              key={t.id}
              href="https://www.facebook.com/p/First-Choice-Heating-100089883616551/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow border border-gray-200 overflow-hidden hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              <div className="relative w-full aspect-[3/4] min-h-[240px] bg-gray-100 sm:aspect-[4/5]">
                <Image
                  src={t.imageUrl}
                  alt={`Facebook review from ${t.name}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Trusted by customers across Northern Ireland
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xl font-bold text-blue-900">5.0/5.0</span>
          </div>
        </div>
      </div>
    </section>
  )
}
