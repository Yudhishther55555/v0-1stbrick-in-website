"use client"

import { Smartphone, Monitor, BarChart3, Calendar, Users, FileText, Camera, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Software() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track project progress, costs, and timelines with live dashboards",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling optimization for maximum efficiency",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless communication between architects, engineers, and workers",
    },
    {
      icon: FileText,
      title: "Document Management",
      description: "Centralized storage for all project documents and approvals",
    },
    {
      icon: Camera,
      title: "Progress Monitoring",
      description: "Photo and video documentation with automated progress tracking",
    },
    {
      icon: MessageSquare,
      title: "Client Portal",
      description: "Dedicated client dashboard for real-time project updates",
    },
  ]

  const benefits = [
    "Reduce project delays by 40%",
    "Improve cost accuracy by 35%",
    "Enhance team productivity by 50%",
    "Increase client satisfaction by 60%",
  ]

  return (
    <section id="software" className="py-20 bg-gradient-to-br from-tertiary/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Technology Innovation</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Construction</span>{" "}
            <span className="text-tertiary">Management Software</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proprietary project management platform revolutionizes how construction projects are planned, executed,
            and delivered. Experience the future of construction management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Software Preview */}
          <div className="relative animate-slide-in-left">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Construction Management Software Dashboard"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />

              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-white rounded-lg p-3 shadow-lg animate-bounce-in">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live Updates</span>
                </div>
              </div>

              <div
                className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-lg animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-sm font-medium text-gray-600">Project Progress</div>
                <div className="text-2xl font-bold text-primary">87%</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Powerful Features for Modern Construction</h3>
              <p className="text-gray-600 mb-6">
                Built specifically for the Indian construction industry, our software addresses unique challenges and
                requirements of local projects.
              </p>
            </div>

            <div className="grid gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Proven Results That Matter</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-tertiary text-tertiary hover:bg-tertiary hover:text-white"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-primary/5 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Active Projects</div>
              </div>
              <div className="text-center p-6 bg-secondary/5 rounded-xl">
                <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center p-6 bg-tertiary/5 rounded-xl">
                <div className="text-3xl font-bold text-tertiary mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
              <div className="text-center p-6 bg-accent/5 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile App Section */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Available on All Platforms</h3>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-3">
              <Monitor className="w-8 h-8 text-primary" />
              <span className="font-medium">Web Dashboard</span>
            </div>
            <div className="flex items-center space-x-3">
              <Smartphone className="w-8 h-8 text-secondary" />
              <span className="font-medium">Mobile App</span>
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access your projects anywhere, anytime. Our responsive web platform and native mobile apps ensure you're
            always connected to your construction projects.
          </p>
        </div>
      </div>
    </section>
  )
}
