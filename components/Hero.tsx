'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onQuoteClick: () => void
}

export function Hero({ onQuoteClick }: HeroProps) {
  return (
    <section id="home" className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486367045_630113176661464_1017841337394941125_n-WV2CuhAuOqvJpZDF2oqfxX6Zg6B7ft.jpg"
          alt="Modern boiler and heating system installation"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Expert Heating Solutions for Your Home
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Professional boiler servicing, installation & repairs across Northern Ireland. 
          Gas Safe registered. Available 24/7 for emergencies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onQuoteClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors text-lg"
          >
            Request Free Quotation
            <ArrowRight className="w-5 h-5" />
          </button>
          <a
            href="#services"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}
