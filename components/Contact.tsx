'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

interface ContactProps {
  onContactClick: () => void
}

export function Contact({ onContactClick }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Have a question or ready to get started? Contact David and the team today. We respond to all inquiries within 72 hours.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Call Us
                  </h3>
                  <a
                    href="tel:+447759344555"
                    className="text-lg font-bold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    +44 7759 344555
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Available 24/7 for emergencies
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Email Us
                  </h3>
                  <a
                    href="mailto:David@firstchoiceheatingni.com"
                    className="text-lg font-bold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    David@firstchoiceheatingni.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Response within 72 hours
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">
                    Service Area
                  </h3>
                  <p className="text-lg font-bold text-orange-500">
                    Lisburn, Northern Ireland
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Serving 30-mile radius (Belfast, Antrim, Ballymena & surrounding areas)
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h4 className="font-semibold text-blue-900 mb-4">
                Certified & Trusted
              </h4>
              <div className="flex flex-wrap items-end gap-6">
                <a
                  href="https://www.gassaferegister.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-12 w-[min(200px,50vw)] relative opacity-90 hover:opacity-100"
                >
                  <Image
                    src="/gas-safe-registered.svg"
                    alt="Gas Safe Register"
                    width={200}
                    height={64}
                    className="h-12 w-auto object-contain object-left"
                  />
                </a>
                <a
                  href="https://www.oftec.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-12 w-[min(200px,50vw)] relative opacity-90 hover:opacity-100"
                >
                  <Image
                    src="/oftec-registered.svg"
                    alt="OFTEC registered"
                    width={200}
                    height={64}
                    className="h-12 w-auto object-contain object-left"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">
              Quick Message
            </h3>
            <p className="text-gray-600 mb-6">
              Use the form below to send us a message. For faster response to urgent heating issues, please call directly.
            </p>

            <button
              onClick={onContactClick}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4"
            >
              Open Contact Form
            </button>

            <div className="text-sm text-gray-600 bg-blue-50 p-4 rounded-lg">
              <p>
                <strong>Emergencies?</strong> Call <a href="tel:+447759344555" className="font-semibold text-orange-500">+44 7759 344555</a> immediately for same-day response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
