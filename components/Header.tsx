'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {
  onPhoneClick: () => void
  onQuoteClick: () => void
}

export function Header({ onPhoneClick, onQuoteClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-10 w-[148px] overflow-hidden flex items-center justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/First%20Choice%20Heating%20Logo-gPxgTDq6mzFrLMVB9m0m6XVFZptQfw.jpg"
                  alt="First Choice Heating Logo"
                  width={180}
                  height={60}
                  className="h-[3.25rem] w-auto max-w-none object-center [clip-path:inset(8%_0_12%_0)]"
                />
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onPhoneClick}
              className="flex items-center gap-2 text-blue-900 hover:text-orange-500 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+44 7759 344555</span>
            </button>
            <button
              onClick={onQuoteClick}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={onPhoneClick}
              className="text-blue-900 hover:text-orange-500"
            >
              <Phone className="w-6 h-6" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-900"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onQuoteClick={() => {
          onQuoteClick()
          setMobileMenuOpen(false)
        }}
        navLinks={navLinks}
      />
    </header>
  )
}
