"use client"

import { CheckCircle, Clock, Shield, Zap, Users, Trophy } from "lucide-react"

export default function USP() {
  const usps = [
    {
      icon: Zap,
      title: "Fastest Delivery",
      description: "30% faster project completion with our advanced project management software",
      stat: "30% Faster",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes with 100% quality guarantee on all projects",
      stat: "100% Quality",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "98% of our projects are delivered on or before the promised deadline",
      stat: "98% On-Time",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "500+ certified engineers and architects with 15+ years average experience",
      stat: "500+ Experts",
    },
    {
      icon: Trophy,
      title: "Award Winning",
      description: "50+ industry awards for excellence in construction and innovation",
      stat: "50+ Awards",
    },
    {
      icon: CheckCircle,
      title: "Technology Driven",
      description: "Proprietary software for real-time project tracking and management",
      stat: "Tech Powered",
    },
  ]

  const competitors = [
    { feature: "Project Management Software", us: true, others: false },
    { feature: "Real-time Progress Tracking", us: true, others: false },
    { feature: "Fixed Price Guarantee", us: true, others: false },
    { feature: "24/7 Customer Support", us: true, others: true },
    { feature: "Quality Certification", us: true, others: true },
    { feature: "On-time Delivery Guarantee", us: true, others: false },
    { feature: "Post-construction Support", us: true, others: false },
    { feature: "Transparent Pricing", us: true, others: false },
  ]

  return (
    <section id="usp" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* USPs Grid */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Why Choose</span> <span className="text-tertiary">1st Brick?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another construction company. We're your technology-powered construction partner committed to
            delivering excellence at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {usps.map((usp, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <usp.icon className="w-10 h-10 text-primary" />
              </div>
              <div className="text-3xl font-bold text-tertiary mb-2">{usp.stat}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{usp.title}</h3>
              <p className="text-gray-600">{usp.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-gray-50 rounded-2xl p-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="text-primary">1st Brick</span> vs <span className="text-gray-500">Others</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-bold text-gray-800">Features</th>
                  <th className="text-center py-4 px-6 font-bold text-primary">1st Brick</th>
                  <th className="text-center py-4 px-6 font-bold text-gray-500">Others</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-white transition-colors duration-200">
                    <td className="py-4 px-6 font-medium text-gray-700">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {item.us ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-100 mx-auto flex items-center justify-center">
                          <div className="w-3 h-0.5 bg-red-500 rounded" />
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.others ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-100 mx-auto flex items-center justify-center">
                          <div className="w-3 h-0.5 bg-red-500 rounded" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
