'use client'

import { useState } from 'react'
import { serviceCategories } from '@/data/services'
import { ServiceCard } from './ServiceCard'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { ChevronDown } from 'lucide-react'

interface ServicesProps {
  onQuoteClick: (serviceName: string) => void
}

export function Services({ onQuoteClick }: ServicesProps) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(serviceCategories.map((c, i) => [c.id, i === 0])),
  )

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Core heating work we provide for gas, oil, and LPG. Open a category to see what we offer, or
            get in touch for a custom quote.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl mx-auto">
          {serviceCategories.map((category) => (
            <Collapsible
              key={category.id}
              open={open[category.id]}
              onOpenChange={(next) => setOpen((o) => ({ ...o, [category.id]: next }))}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <CollapsibleTrigger className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left hover:bg-gray-50/80 transition-colors">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900">{category.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    open[category.id] ? 'rotate-180' : ''
                  }`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4 md:px-5 md:pb-5 border-t border-gray-100 pt-4 grid grid-cols-1 gap-4">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onQuoteClick={() => onQuoteClick(service.name)}
                    />
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  )
}
