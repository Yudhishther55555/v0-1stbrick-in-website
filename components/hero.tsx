"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Building, Users, Award, Clock } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
    title: "Building Your Dreams",
    subtitle: "Into Reality",
    description: "India's most trusted construction partner...",
    image: "/hero1.jpg",
  },
    {
    title: "Architectural Excellence",
    subtitle: "Meets Innovation",
    description: "Award-winning designs powered by advanced...",
    image: "/hero2.jpg",
  },
  {
    title: "Smart Construction",
    subtitle: "For Modern India",
    description: "Revolutionary project management solutions...",
    image: "/hero3.jpg",
  },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-32">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-tertiary/10" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-tertiary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">{slides[currentSlide].title}</span>
                <br />
                <span className="text-tertiary">{slides[currentSlide].subtitle}</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">{slides[currentSlide].description}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
  size="lg"
  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg"
  asChild
>
  <a href="#contact">
    Start Your Project
    <ArrowRight className="ml-2 w-5 h-5" />
  </a>
</Button>

              <Button
                variant="outline"
                size="lg"
                className="border-tertiary text-tertiary hover:bg-tertiary hover:text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={slides[currentSlide].image || "/placeholder.svg"}
                alt="Construction Project"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-tertiary">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
