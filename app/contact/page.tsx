import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, Mail, MessageSquare } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-[#563B6C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <PhoneIcon className="w-6 h-6 text-[#563B6C]" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-gray-600">+65 8192 5325</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="w-6 h-6 text-[#563B6C]" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-gray-600">sales@eiko.sg</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <MessageSquare className="w-6 h-6 text-[#563B6C]" />
                      <div>
                        <h3 className="font-semibold">WhatsApp</h3>
                        <p className="text-gray-600">+65 8192 5325</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#563B6C] focus:ring-[#563B6C]" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#563B6C] focus:ring-[#563B6C]" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#563B6C] focus:ring-[#563B6C]" required></textarea>
                    </div>
                    <Button type="submit" className="w-full bg-[#563B6C] hover:bg-[#472f59]">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Connect with Us on WhatsApp</h2>
            <p className="text-gray-600 mb-8">
              Scan the QR code below or click the button to chat with us directly on WhatsApp.
            </p>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=6581925325"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <MessageSquare className="w-6 h-6" />
                <span>Chat with Us on WhatsApp</span>
              </a>
              
              <div className="mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eiko%20QR-L4VYPyiqDY6A7SeipXyP6tLdHFYKG2.png"
                    alt="WhatsApp QR Code"
                    width={200}
                    height={200}
                    className="mx-auto"
                  />
                  <p className="text-sm text-gray-600 mt-4">Scan to chat on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

