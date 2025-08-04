"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useNavigate } from "react-router-dom"
import hireDriverImage from "@/assets/hire-driver-project.jpg"
import jainSanghImage from "@/assets/jain-sangh-project.jpg"
import nagarBazaarImage from "@/assets/nagar-bazaar-project.jpg"
import filingWorldImage from "@/assets/filing-world-project.jpg"

const projects = [
  {
    name: "24ItSupport – IT Services & Products Platform",
    description:
      "Full-featured IT services platform with secure Razorpay integration, role-based dashboards, multilingual support, and comprehensive admin panel for managing bookings and services.",
    image: filingWorldImage,
    tech: ["Laravel", "MySQL", "JavaScript", "RazorPay", "HTML/CSS"],
    liveLink: "https://24itsupport.com/",
    githubLink: "https://github.com/Uday14051405/24ITSupport",
    category: "Web Platform",
    status: "Live",
    year: "2024",
  },
  {
    name: "Hire A Driver – Online Driver Booking Platform",
    description:
      "Web-based platform for booking professional drivers with user-friendly interface, booking management, and role-based access for customers and administrators.",
    image: hireDriverImage,
    tech: ["Core PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap"],
    liveLink: "https://d121.vvelocity.com/Hire_a_driver/",
    githubLink: "https://github.com/DhawalPrajapat/Hire-car-driver",
    category: "Web Platform",
    status: "Live",
    year: "2024",
  },
  {
    name: "FilingWorld – Digital Compliance & Filing Platform",
    description:
      "India's leading platform for legal, tax, and business compliance services with 100+ integrated services, role-based dashboards, and automated filing processes.",
    image: filingWorldImage,
    tech: ["Laravel", "Vue.js", "MySQL", "JavaScript", "HTML/CSS"],
    liveLink: "https://filingworld.in/sale/",
    githubLink: "https://github.com/Uday14051405/FilingWorld",
    category: "Web Platform",
    status: "Live",
    year: "2024",
  },
  {
    name: "Jain Sangh Community App",
    description:
      "Mobile application connecting the Jain community with notice board, donation requests, event participation, and seamless community management features.",
    image: jainSanghImage,
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "Payment Gateway"],
    liveLink: "https://play.google.com/store/apps/details?id=app.management.jainsangh",
    githubLink: "#",
    category: "Mobile App",
    status: "Live",
    year: "2024",
  },
  {
    name: "Nagar Bazaar – Furniture E-commerce",
    description:
      "E-commerce mobile app for furniture shopping with category filtering, detailed product views, secure cart system, and reliable delivery management.",
    image: nagarBazaarImage,
    tech: ["Flutter", "Laravel", "MySQL", "Payment Gateway", "API"],
    liveLink: "https://play.google.com/store/apps/details?id=com.webikka.nagarbazaar",
    githubLink: "#",
    category: "Mobile App",
    status: "Live",
    year: "2024",
  },
  {
    name: "Bank Statement Analyzer – Financial Tool",
    description:
      "Laravel-based financial data interpretation tool with PDF parsing, API integration, transactional categorization, and comprehensive cash flow analysis.",
    image: filingWorldImage,
    tech: ["Laravel", "MySQL", "JavaScript", "API Integration", "PDF Parser"],
    liveLink: "https://bsa.1flo.in/",
    githubLink: "https://github.com/Uday14051405/Bank-Statement-Analyzer",
    category: "Web Platform",
    status: "Live",
    year: "2024",
  },
]

export const Projects = () => {
  const navigate = useNavigate()

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-holographic">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in building scalable, user-centric applications that solve real-world problems with
            modern technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="group glass-card hover:glow-border transition-all duration-500 overflow-hidden transform hover:scale-[1.02] hover:-translate-y-2 perspective-1000 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                    {project.status || "Live"}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay with Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <Button
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm border border-primary/30"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-background/90 hover:bg-background border-border/50 backdrop-blur-sm"
                      onClick={() => window.open(project.githubLink, "_blank")}
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 group-hover:text-muted-foreground/80 transition-colors">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md font-mono border border-border/50 hover:bg-secondary/70 hover:border-primary/30 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass hover:glow-border transition-all duration-300 flex-1 hover:scale-105 bg-transparent"
                    onClick={() => window.open(project.liveLink, "_blank")}
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="hover:text-primary transition-colors flex-1 hover:bg-primary/10"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/projects")}
            className="glass-card hover:glow-border transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
