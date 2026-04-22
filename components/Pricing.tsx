'use client'

import { ArrowRight } from 'lucide-react'

interface PricingProps {
  onQuoteClick: () => void
}

export function Pricing({ onQuoteClick }: PricingProps) {
  const pricingTiers = [
    {
      title: 'Maintenance',
      description: 'Regular servicing & preventative care',
      items: [
        'Annual boiler servicing',
        'System health checks',
        'Efficiency optimization',
        'Emergency support',
      ],
      featured: false,
    },
    {
      title: 'Repairs',
      description: 'Diagnostic & repair services',
      items: [
        'Same-day call-outs where possible',
        'Parts & labour to agreed scope',
        'Clear pricing on quotation',
        '24/7 emergency support',
      ],
      featured: true,
    },
    {
      title: 'Installation',
      description: 'New system installation',
      items: [
        'Complete system design',
        'Professional installation',
        'Full commissioning',
        'Warranty coverage as applicable',
      ],
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Pricing & Quotations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer competitive, transparent pricing with no hidden costs. We don’t publish “from” prices here — every job is
            different — but we provide a free, itemised, custom quote so you know exactly what to expect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden transition-shadow ${
                tier.featured
                  ? 'shadow-xl scale-105 md:scale-100 bg-blue-900 text-white'
                  : 'shadow hover:shadow-lg bg-gray-50'
              }`}
            >
              <div className={`p-8 ${tier.featured ? 'bg-blue-900' : 'bg-gray-50'}`}>
                <h3 className={`text-2xl font-bold mb-2 ${tier.featured ? 'text-white' : 'text-blue-900'}`}>
                  {tier.title}
                </h3>
                <p className={`mb-6 ${tier.featured ? 'text-blue-100' : 'text-gray-600'}`}>
                  {tier.description}
                </p>
              </div>

              <div className={`p-8 pt-0 ${tier.featured ? 'bg-blue-900' : 'bg-gray-50'}`}>
                <ul className="space-y-3 mb-8">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${tier.featured ? 'bg-orange-400' : 'bg-orange-500'}`} />
                      <span className={tier.featured ? 'text-blue-100' : 'text-gray-700'}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={onQuoteClick}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    tier.featured
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  Request Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Get Your Free Custom Quote
          </h3>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us today for a detailed, obligation-free quotation tailored to your specific needs.
          </p>
          <button
            onClick={onQuoteClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2 text-lg"
          >
            Request Quote Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
