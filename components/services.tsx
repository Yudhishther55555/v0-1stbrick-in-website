"use client"

import { Building2, Hammer, PenTool, Cog, Home, Factory } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes built with precision and care.",
      features: ["Custom Home Design", "Apartment Complexes", "Villa Construction", "Interior Design"],
      color: "primary",
    },
    {
      icon: Factory,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes for modern businesses.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Shopping Complexes"],
      color: "secondary",
    },
    {
      icon: PenTool,
      title: "Architectural Services",
      description: "Innovative architectural designs that blend functionality with aesthetic appeal.",
      features: ["3D Modeling", "Structural Design", "Interior Planning", "Landscape Design"],
      color: "tertiary",
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our expert renovation and remodeling services.",
      features: ["Home Renovation", "Office Remodeling", "Kitchen Upgrades", "Bathroom Renovation"],
      color: "accent",
    },
    {
      icon: Cog,
      title: "Project Management",
      description: "End-to-end project management with our proprietary software solutions.",
      features: ["Timeline Management", "Quality Control", "Budget Tracking", "Real-time Updates"],
      color: "warm",
    },
    {
      icon: Home,
      title: "Maintenance Services",
      description: "Ongoing maintenance and support to keep your property in perfect condition.",
      features: ["Regular Inspections", "Preventive Maintenance", "Emergency Repairs", "Warranty Support"],
      color: "primary",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span> <span className="text-tertiary">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction and architectural services powered by cutting-edge technology and decades of
            expertise in the Indian construction industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors duration-300`}
                >
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}
