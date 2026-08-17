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
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

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

        {/* Overlay text */}
        <div className="absolute top-1/2 left-1/2 md:left-1/4 md:w-[40%] md:text-start text-center transform -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4">
          <h1 className="md:text-4xl text-xl mx-auto md:my-3 uppercase font-bold drop-shadow-lg">
            Center for Management of UCBs
          </h1>
          <p className="md:text-xl text-base font-semibold hidden lg:block w-full drop-shadow-lg">
            From Compliance to Customer Service – We&apos;ve Got You Covered
          </p>
        </div>

        {/* Prev / Next arrows */}
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 md:left-4 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 md:p-3 focus:outline-none"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 md:right-4 z-20 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full p-2 md:p-3 focus:outline-none"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

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
