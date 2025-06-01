"use client"

import { Check, Star, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹2,500",
      period: "per sq ft",
      description: "Perfect for small residential projects",
      features: [
        "Basic construction materials",
        "Standard finishing",
        "Project timeline: 6-8 months",
        "Basic project management",
        "1-year warranty",
        "Email support",
      ],
      popular: false,
      color: "secondary",
    },
    {
      name: "Premium",
      price: "₹3,500",
      period: "per sq ft",
      description: "Most popular choice for quality construction",
      features: [
        "Premium construction materials",
        "High-quality finishing",
        "Project timeline: 4-6 months",
        "Advanced project management software",
        "3-year warranty",
        "24/7 phone support",
        "Real-time progress tracking",
        "Quality inspections",
      ],
      popular: true,
      color: "primary",
    },
    {
      name: "Luxury",
      price: "₹5,000",
      period: "per sq ft",
      description: "Ultimate luxury with premium features",
      features: [
        "Luxury construction materials",
        "Designer finishing",
        "Project timeline: 3-4 months",
        "Full software suite access",
        "5-year warranty",
        "Dedicated project manager",
        "Smart home integration",
        "Premium interior design",
        "Landscaping included",
      ],
      popular: false,
      color: "tertiary",
    },
  ]

  const additionalServices = [
    { service: "Architectural Design", price: "₹50-100 per sq ft" },
    { service: "Interior Design", price: "₹500-1500 per sq ft" },
    { service: "Landscaping", price: "₹200-500 per sq ft" },
    { service: "Project Management Software", price: "₹10,000 per month" },
    { service: "3D Visualization", price: "₹25,000 per project" },
    { service: "Structural Engineering", price: "₹30-50 per sq ft" },
  ]

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Transparent</span> <span className="text-tertiary">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden costs, no surprises. Choose the package that best fits your project needs with our competitive and
            transparent pricing structure.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                plan.popular ? "border-primary shadow-xl scale-105" : "hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 text-sm font-medium">
                  <Star className="inline w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <CardTitle className="text-2xl font-bold text-gray-800">{plan.name}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className={`text-4xl font-bold text-${plan.color}`}>{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`w-5 h-5 text-${plan.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : `bg-${plan.color} hover:bg-${plan.color}/90`
                  } text-white`}
                  size="lg"
                >
                  {plan.popular ? (
                    <>
                      <Zap className="w-4 h-4 mr-2" />
                      Get Started
                    </>
                  ) : (
                    "Choose Plan"
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Additional Services</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <h4 className="font-semibold text-gray-800 mb-2">{item.service}</h4>
                <p className="text-primary font-bold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financing Options */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Flexible Payment Options</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-primary/5 rounded-xl">
              <h4 className="font-bold text-primary mb-2">Easy EMI</h4>
              <p className="text-gray-600">0% interest for first 6 months</p>
            </div>
            <div className="p-6 bg-secondary/5 rounded-xl">
              <h4 className="font-bold text-secondary mb-2">Milestone Payments</h4>
              <p className="text-gray-600">Pay as construction progresses</p>
            </div>
            <div className="p-6 bg-tertiary/5 rounded-xl">
              <h4 className="font-bold text-tertiary mb-2">Bank Loans</h4>
              <p className="text-gray-600">Partner bank loan assistance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-6">Need a custom quote? Our experts are here to help you plan your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4">
              Get Custom Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-tertiary text-tertiary hover:bg-tertiary hover:text-white px-8 py-4"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
