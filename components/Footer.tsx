'use client'

import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook } from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/p/First-Choice-Heating-100089883616551/'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">First Choice Heating</h3>
            <p className="text-gray-400 text-sm mb-4">
              Professional boiler servicing, installation, and repairs across Northern Ireland.
            </p>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-orange-500 transition">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500 transition">Reviews</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#faq" className="hover:text-orange-500 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Lisburn</li>
              <li>Belfast</li>
              <li>Antrim</li>
              <li>Ballymena</li>
              <li>30-mile radius</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={18} className="text-orange-500" />
                <a href="tel:+447759344555" className="hover:text-orange-500 transition">
                  +44 7759 344555
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={18} className="text-orange-500" />
                <a href="mailto:David@firstchoiceheatingni.com" className="hover:text-orange-500 transition">
                  David@firstchoiceheatingni.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-orange-500" />
                <span>Lisburn, Northern Ireland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} First Choice Heating. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-10 items-end">
          <a
            href="https://www.gassaferegister.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-12 w-[min(200px,70vw)] opacity-90 hover:opacity-100 transition-opacity"
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
            className="relative h-12 w-[min(200px,70vw)] opacity-90 hover:opacity-100 transition-opacity"
          >
            <Image
              src="/oftec-registered.svg"
              alt="OFTEC registered technician"
              width={200}
              height={64}
              className="h-12 w-auto object-contain object-left"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
