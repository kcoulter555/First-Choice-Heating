'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PhoneCallModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PhoneCallModal({ isOpen, onClose }: PhoneCallModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Call David</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <p className="text-gray-600 text-center">
            Ready to speak with David about your heating needs?
          </p>

          <a
            href="tel:+447759344555"
            className="flex items-center justify-center w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            Call +44 7759 344555
          </a>

          <p className="text-sm text-gray-500 text-center">
            Available 24/7 for emergencies
          </p>

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}
