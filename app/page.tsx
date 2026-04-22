'use client'

import { useState } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Pricing } from '@/components/Pricing'
import { Testimonials } from '@/components/Testimonials'
import { About } from '@/components/About'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { QuoteModal } from '@/components/QuoteModal'
import { ContactFormModal } from '@/components/ContactFormModal'
import { PhoneCallModal } from '@/components/PhoneCallModal'

export default function Home() {
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [showPhoneModal, setShowPhoneModal] = useState(false)
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined)

  const handleQuoteClick = (serviceName?: string) => {
    setSelectedService(serviceName)
    setShowQuoteModal(true)
  }

  const handleContactClick = () => {
    setShowContactModal(true)
  }

  const handlePhoneClick = () => {
    setShowPhoneModal(true)
  }

  return (
    <main className="bg-white">
      <Header onPhoneClick={handlePhoneClick} onQuoteClick={handleQuoteClick} />
      <Hero onQuoteClick={handleQuoteClick} />
      <Services onQuoteClick={handleQuoteClick} />
      <Pricing onQuoteClick={handleQuoteClick} />
      <Testimonials />
      <About />
      <FAQ />
      <Contact onContactClick={handleContactClick} />
      <Footer onPhoneClick={handlePhoneClick} onContactClick={handleContactClick} />

      <QuoteModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        serviceName={selectedService}
      />
      <ContactFormModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
      <PhoneCallModal
        isOpen={showPhoneModal}
        onClose={() => setShowPhoneModal(false)}
      />
    </main>
  )
}
