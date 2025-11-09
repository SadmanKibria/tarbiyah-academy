"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/img1.jpg",
      title: "Qur'an & Sunnah for Children",
      subtitle: "Build a strong foundation in Islamic knowledge",
      cta: "Learn More",
    },
    {
      image: "/img1.jpg",
      title: "Islamic Diploma Program",
      subtitle: "Advanced studies in Fiqh, Aqeedah & Tafsir",
      cta: "Explore Diploma",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl shadow-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-6 sm:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-balance drop-shadow-lg">
          {slides[currentSlide].title}
        </h1>
        <p className="text-base sm:text-lg text-balance max-w-2xl drop-shadow-lg mb-6 opacity-95">
          {slides[currentSlide].subtitle}
        </p>
        <Link
          href="/enroll"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-semibold py-2.5 px-6 rounded-lg hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:gap-3"
        >
          {slides[currentSlide].cta}
          <ChevronRight size={20} />
        </Link>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              index === currentSlide ? "bg-secondary w-8 h-2.5" : "bg-white/50 hover:bg-white/75 w-2.5 h-2.5"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
