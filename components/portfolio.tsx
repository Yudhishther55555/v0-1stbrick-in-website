"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Residential Complex",
      category: "residential",
      location: "Jaipur",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium residential complex with modern amenities and smart home features.",
      status: "Completed",
      year: "2023",
    },
    {
      id: 2,
      title: "Luxury Residential Bungalow",
      category: "residential",
      location: "Jaipur",
      image: "/placeholder.svg?height=300&width=400",
      description: "Elegant bungalow with luxury features and eco-friendly materials.",
      status: "Completed",
      year: "2023",
    },
    {
      id: 3,
      title: "Villa Construction",
      category: "residential",
      location: "Jaipur",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium villa with modern amenities and smart home features.",
      status: "Completed",
      year: "2022",
    },
    {
      id: 4,
      title: "Residential Bungalow",
      category: "residential",
      location: "Jaipur",
      image: "/placeholder.svg?height=300&width=400",
      description: "Large-scale bungalow with open spaces and custom design.",
      status: "Ongoing",
      year: "2024",
    },
    {
      id: 6,
      title: "Affordable Housing",
      category: "residential",
      location: "Jaipur",
      image: "/placeholder.svg?height=300&width=400",
      description: "Affordable housing project with modern amenities.",
      status: "Completed",
      year: "2022",
    },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span>{" "}
            <span className="text-tertiary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across India.
            From residential complexes to commercial towers, we've built
            landmarks that stand the test of time.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-primary hover:bg-primary/90"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              } transition-all duration-300`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-orange-500 hover:bg-orange-600"
                    } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-800">{project.year}</Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
