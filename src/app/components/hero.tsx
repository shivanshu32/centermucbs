"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/slider1.png', alt: 'Slide 1' },
  { src: '/slider2.png', alt: 'Slide 2' },
  { src: '/slider3.png', alt: 'Slide 3' },
  { src: '/slider4.png', alt: 'Slide 4' },
  { src: '/slider5.png', alt: 'Slide 5' },
  { src: '/slider6.png', alt: 'Slide 6' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrent(index)

  return (
    <div className="overflow-hidden relative w-full">
      <div className="relative h-[40vh] md:h-[70vh] lg:h-[80vh] w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover w-full h-full"
            />
          </div>
        ))}

        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
