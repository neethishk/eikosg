import Layout from './components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageGallery } from './components/image-gallery'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
      <section className="bg-[#563B6C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Assurance for Every Workplace</h1>
          <p className="text-xl mb-8">Comprehensive PPE & Workwear Solutions</p>
          <Link href="/products" className="bg-white text-[#563B6C] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Explore Our Products
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 leading-relaxed">
              At Eiko, safety is our top priority. We believe that a secure working environment is the foundation of productivity and peace of mind. Our Personal Protective Equipment (PPE) is designed with cutting-edge technology to provide unparalleled protection against potential hazards. From head to toe, our premium products ensure that you're shielded from harm, enabling you to focus on what truly matters – your work. Trust Eiko for robust solutions that guard your safety, letting you work with confidence every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Premium Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Premium PPE materials that exceed safety standards</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Comprehensive Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive protection for various industries</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Advanced Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Advanced technology for comfort and safety</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Workwear</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative">
                <ImageGallery images={helmetImages} />
              </div>
              <CardHeader>
                <CardTitle>Safety Helmets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Durable and comfortable helmets for every work environment.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-02%20at%204.26.52%20PM-EHsTkfegngUOo7toMaks7wnzWawqi4.jpeg"
                alt="Safety Work Boots"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Work Boots</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Protective and sturdy boots for all-day wear and safety.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="relative">
                <ImageGallery images={workwearImages} />
              </div>
              <CardHeader>
                <CardTitle>High-Visibility Workwear</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Professional workwear sets with high visibility features and durable design.</p>
                <Button variant="outline">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Custom-Fit Workwear for Every Role</h2>
            <p className="text-gray-600 mb-8">
              We know that one size doesn't fit all, especially when it comes to work apparel. At Eiko, we offer personalized workwear solutions tailored to meet the diverse needs of every industry. Our customization options allow you to choose not just the fit, but also the fabric, ensuring comfort and durability. Whether you're in construction, healthcare, or any other field, our workwear is crafted to enhance performance while maintaining a professional look.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <h3 className="font-semibold mb-2">Personalized Fit</h3>
                <p className="text-gray-600">Improved comfort and mobility for better performance</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Durable Fabrics</h3>
                <p className="text-gray-600">Designed specifically for industrial use</p>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Professional Design</h3>
                <p className="text-gray-600">Stylish workwear that maintains professionalism</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Eco-Friendly and Sustainable Choices</h2>
            <p className="text-gray-600 mb-8">
              At Eiko, sustainability is at the heart of innovation. Our commitment to the environment drives us to provide eco-friendly PPE and workwear solutions. Using sustainable materials and eco-conscious production processes, our products not only protect you but also the planet. Choose Eiko and make a conscious decision towards a green future while ensuring your safety and comfort on the job.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sustainable Materials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Sustainable materials for eco-friendly solutions</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Global Standards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Responsible production aligning with global standards</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Long-Term Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Products designed for long-term use and minimal waste</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Contact Us on WhatsApp</h2>
            <div className="flex flex-col items-center gap-6">
              <a
                href="https://api.whatsapp.com/send?phone=6581925325"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full hover:bg-[#128C7E] transition-colors"
              >
                <span className="w-6 h-6">📱</span>
                <span>Chat with Us</span>
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
                  <p className="text-sm text-gray-600 mt-4">Scan me to order on WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Sales Enquiries</h2>
            <Card>
              <CardContent className="p-6">
                <form className="grid gap-6">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Contact Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your contact number"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your requirements"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#563B6C] hover:bg-[#472f59]">
                    <Link href="/contact" className="text-white">Submit Enquiry</Link>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  )
}

