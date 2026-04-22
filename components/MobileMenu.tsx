'use client'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onQuoteClick: () => void
  navLinks: Array<{ label: string; href: string }>
}

export function MobileMenu({ isOpen, onClose, onQuoteClick, navLinks }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
      <nav className="flex flex-col p-4 space-y-3">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-gray-700 hover:text-blue-900 font-medium py-2 px-4 rounded transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={onQuoteClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-left"
        >
          Request Quote
        </button>
      </nav>
    </div>
  )
}
