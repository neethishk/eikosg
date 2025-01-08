'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] max-h-[400px]">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={previousImage}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm"
          onClick={nextImage}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`relative flex-shrink-0 cursor-pointer rounded-lg overflow-hidden ${
              currentIndex === index ? 'ring-2 ring-[#563B6C]' : ''
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={60}
              height={80}
              className="h-20 w-15 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

