'use client'

import { useState, type ComponentType, type SVGProps } from 'react'
import { ChevronDown } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  onQuoteClick: () => void
}

export function ServiceCard({ service, onQuoteClick }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const Lucide = LucideIcons as Record<string, ComponentType<SVGProps<SVGSVGElement>>>
  const IconComponent = Lucide[service.icon] ?? LucideIcons.Zap

  return (
    <div className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 md:p-5 cursor-pointer hover:bg-gray-50/80 transition-colors"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsExpanded(!isExpanded)
          }
        }}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="bg-orange-500 text-white p-2.5 rounded-lg flex-shrink-0">
              <IconComponent className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-blue-900 leading-snug">{service.name}</h4>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
              isExpanded ? 'transform rotate-180' : ''
            }`}
            aria-hidden
          />
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 pl-[3.25rem]">{service.description}</p>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-100 p-4 md:p-5 bg-gray-50/60 animate-in fade-in">
          <h5 className="font-semibold text-blue-900 mb-3">Key benefits</h5>
          <ul className="space-y-2 mb-6">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onQuoteClick()
            }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
          >
            Request custom quote
          </button>
        </div>
      )}
    </div>
  )
}
