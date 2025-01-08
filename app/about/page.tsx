import Layout from '../components/layout'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneIcon, Mail, MessageSquare } from 'lucide-react'

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-[#563B6C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Eiko</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted partner in workplace safety and personal protective equipment
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Company</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  At Eiko, we are committed to providing high-quality Personal Protective Equipment (PPE) and workwear solutions. With years of experience in the industry, we understand the importance of safety in the workplace and strive to offer products that meet and exceed safety standards.
                </p>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="flex flex-col items-center text-center">
                    <PhoneIcon className="w-10 h-10 text-[#563B6C] mb-2" />
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">+65 8192 5325</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Mail className="w-10 h-10 text-[#563B6C] mb-2" />
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">sales@eiko.sg</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <MessageSquare className="w-10 h-10 text-[#563B6C] mb-2" />
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+65 8192 5325</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or need a custom solution? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#563B6C] hover:bg-[#472f59]">
                <Link href="/contact" className="text-white">Contact Us</Link>
              </Button>
              <Button variant="outline">
                <Link href="https://api.whatsapp.com/send?phone=6581925325" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

