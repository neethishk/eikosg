'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 z-50">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="/" className="text-gray-600 hover:text-[#563B6C]" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/products" className="text-gray-600 hover:text-[#563B6C]" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-[#563B6C]" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-[#563B6C]" onClick={() => setIsOpen(false)}>About Us</Link></li>
          </ul>
        </nav>
      )}
    </div>
  )
}

