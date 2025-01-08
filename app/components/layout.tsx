import Link from 'next/link'
import Image from 'next/image'
import MobileMenu from './mobile-menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/high%20quality%20logo-XTpLuyE8nKw3COKdeoDvKkwxvHP62u.png"
              alt="EIKO.SG Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-[#563B6C]">Home</Link>
            <Link href="/products" className="text-gray-600 hover:text-[#563B6C]">Products</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#563B6C]">Contact Us</Link>
            <Link href="/about" className="text-gray-600 hover:text-[#563B6C]">About Us</Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2024 Eiko.sg | PPE & Workwear Solutions</p>
            <div className="mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=6581925325"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#25D366] transition-colors"
              >
                <span className="w-5 h-5">📱</span>
                <span>Contact us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

