import Layout from '../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from '../components/image-gallery'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  const workwearImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-12%20at%202.45.01%20PM-UJ5tAjaG2ElyFcjT1YsfBR0NUj4fy8.jpeg",
      alt: "High Visibility Orange Workwear Set"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-12%20at%202.45.01%20PM%20(1)-SieFWefwwtWGiSbdBgYY72la1fE9TN.jpeg",
      alt: "Navy Blue Professional Workwear Set"
    }
  ]

  const helmetImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-02%20at%205.23.29%E2%80%AFPM-vgdZepQduD66oDY27no6B0JyplcgkK.png",
      alt: "Yellow Safety Helmet"
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-02%20at%205.02.07%E2%80%AFPM-eAKhRWPBgXRwwg0VevzX0QxPgACbH4.png",
      alt: "White Safety Helmet"
    }
  ]

  return (
    <Layout>
      <section className="bg-[#563B6C] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive range of high-quality PPE and workwear solutions for all industries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="helmets" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto gap-4 bg-transparent">
              <TabsTrigger 
                value="helmets"
                className="data-[state=active]:bg-[#563B6C] data-[state=active]:text-white"
              >
                Safety Helmets
              </TabsTrigger>
              <TabsTrigger 
                value="boots"
                className="data-[state=active]:bg-[#563B6C] data-[state=active]:text-white"
              >
                Work Boots
              </TabsTrigger>
              <TabsTrigger 
                value="workwear"
                className="data-[state=active]:bg-[#563B6C] data-[state=active]:text-white"
              >
                Workwear
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="helmets">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Safety Helmets</h2>
                    <p className="text-gray-600">
                      Our safety helmets are designed to provide maximum protection while ensuring comfort during long hours of wear. Available in various colors and styles to meet different industry requirements.
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>High-impact resistant shell</li>
                        <li>Adjustable suspension system</li>
                        <li>Ventilation channels for comfort</li>
                        <li>Compatible with various attachments</li>
                        <li>Meets international safety standards</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Available Colors:</h3>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-yellow-400 border"></div>
                        <div className="w-6 h-6 rounded-full bg-white border"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImageGallery images={helmetImages} />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="boots">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Work Boots</h2>
                    <p className="text-gray-600">
                      Our safety boots combine durability with comfort, providing essential protection for your feet in demanding work environments. Each pair is crafted with attention to detail and safety requirements.
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Steel toe cap protection</li>
                        <li>Oil-resistant soles</li>
                        <li>Water-resistant upper material</li>
                        <li>Anti-slip tread pattern</li>
                        <li>Cushioned insole for comfort</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Available Sizes:</h3>
                      <p className="text-gray-600">UK 6-12 (EU 39-46)</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-02%20at%204.26.52%20PM-EHsTkfegngUOo7toMaks7wnzWawqi4.jpeg"
                      alt="Safety Work Boots"
                      width={600}
                      height={400}
                      className="rounded-lg object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="workwear">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">High-Visibility Workwear</h2>
                    <p className="text-gray-600">
                      Our high-visibility workwear ensures you remain visible and safe in all working conditions. Made from durable materials with comfort and safety in mind.
                    </p>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Key Features:</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>High-visibility reflective strips</li>
                        <li>Durable fabric construction</li>
                        <li>Multiple utility pockets</li>
                        <li>Comfortable fit for all-day wear</li>
                        <li>Available in various sizes</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Available Colors:</h3>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-500 border"></div>
                        <div className="w-6 h-6 rounded-full bg-navy-800 border"></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ImageGallery images={workwearImages} />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Choosing?</h2>
            <p className="text-gray-600 mb-8">
              Our team of experts is here to help you select the right PPE for your specific needs. Contact us for personalized assistance and bulk order inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#563B6C] hover:bg-[#472f59]">
                <Link href="/contact" className="text-white">Contact Sales Team</Link>
              </Button>
              <Button variant="outline">
                <Link href="https://api.whatsapp.com/send?phone=6581925325" target="_blank" rel="noopener noreferrer">
                  Request Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

