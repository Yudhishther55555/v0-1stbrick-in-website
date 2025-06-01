"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, IndianRupee } from "lucide-react"

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
      location: "Mumbai, Maharashtra",
      duration: "18 months",
      budget: "₹10 Crores",
      units: "20 Units",
      image: "/placeholder.svg?height=300&width=400",
      description: "Premium residential complex with modern amenities and smart home features.",
      status: "Completed",
      year: "2023",
    },
    {
      id: 2,
      title: "Corporate Office Tower",
      category: "commercial",
      location: "Bangalore, Karnataka",
      duration: "24 months",
      budget: "₹15 Crores",
      units: "10 Floors",
      image: "/placeholder.svg?height=300&width=400",
      description: "State-of-the-art office building with sustainable design and modern facilities.",
      status: "Completed",
      year: "2023",
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      category: "industrial",
      location: "Pune, Maharashtra",
      duration: "15 months",
      budget: "₹8 Crores",
      units: "10,000 sq ft",
      image: "/placeholder.svg?height=300&width=400",
      description: "Modern manufacturing facility with automated systems and quality infrastructure.",
      status: "Completed",
      year: "2022",
    },
    {
      id: 4,
      title: "Shopping Mall Complex",
      category: "commercial",
      location: "Delhi NCR",
      duration: "30 months",
      budget: "₹120 Crores",
      units: "200 Stores",
      image: "/placeholder.svg?height=300&width=400",
      description: "Large-scale retail complex with entertainment zones and parking facilities.",
      status: "Ongoing",
      year: "2024",
    },
    {
      id: 6,
      title: "Affordable Housing",
      category: "residential",
      location: "Hyderabad, Telangana",
      duration: "20 months",
      budget: "₹40 Crores",
      units: "200 Units",
      image: "/placeholder.svg?height=300&width=400",
      description: "Government-backed affordable housing project with modern amenities.",
      status: "Completed",
      year: "2022",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Our</span> <span className="text-tertiary">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects across India. From residential complexes to commercial
            towers, we've built landmarks that stand the test of time.
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
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IndianRupee className="w-4 h-4 text-tertiary" />
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{project.units}</span>
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

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-in">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">₹1000+</div>
              <div className="text-gray-600">Crores Worth Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-tertiary mb-2">25+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
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
