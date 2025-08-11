"use client"

import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import hireDriverImage from "@/assets/hire-driver-project.jpg"
import jainSanghImage from "@/assets/jain-sangh-project.jpg"
import nagarBazaarImage from "@/assets/nagar-bazaar-project.jpg"
import filingWorldImage from "@/assets/filing-world-project.jpg"

const projects = [
  {
    name: "Hire A Driver",
    description: "Premium ride-sharing platform with real-time tracking, smart matching algorithms, and seamless payment integration. Built for modern urban mobility.",
    images: ['/src/assets/projects/HireDriver1.png', '/src/assets/projects/HireDriver2.png', '/src/assets/projects/HireDriver3.png', '/src/assets/projects/HireDriver4.png'],
    tech: ["PHP", "jQuery", "MySQL", "Node.js", "React"],
    liveLink: "https://d121.vvelocity.com/Hire_a_driver/",
    githubLink: "https://github.com/DhawalPrajapat/Hire-car-driver",
    category: "Website",
    status: "Live",
    year: "2024"
  },
  {
    name: "Jain Sangh App",
    description: "Community management platform for religious organizations with event scheduling, member directory, and spiritual content management system.",
    images: ['/src/assets/projects/JainSangh1.jpg'],
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "Payment Gateway"],
    liveLink: "https://play.google.com/store/apps/details?id=app.management.jainsangh",
    githubLink: "#",
    category: "Mobile App",
    status: "Live",
    year: "2024"
  },
  {
    name: "Fastag – Figma UI design",
    description: "Design for a digital toll payment and vehicle management system featuring user-friendly dashboard, vehicle linking screens, wallet recharge flow, transaction history, KYC process, and mobile-responsive layouts for seamless toll management experience.",
    images: ['/src/assets/projects/Fastag1.png', '/src/assets/projects/Fastag2.png', '/src/assets/projects/Fastag3.png', '/src/assets/projects/Fastag4.png', '/src/assets/projects/Fastag5.png', '/src/assets/projects/Fastag6.png',],
    tech: ["Figma", "UI/UX"],
    liveLink: "https://www.figma.com/design/UQaMWsQYTTmLVqkvZOJZY5/Fastag?node-id=5-133&p=f",
    githubLink: "",
    category: "UI/UX",
    status: "",
    year: "2025"
  },
  {
    name: "Spot On Tech – IT Support & Technology Management",
    description:
      "Comprehensive IT support platform that streamlines technology management for businesses, reducing downtime and improving operational efficiency. Provides a single point of contact for handling tech issues, vendor coordination, and problem resolution to keep business operations running smoothly.",
    images: [
      "/src/assets/projects/SpotOnTech1.png",
      "/src/assets/projects/SpotOnTech2.png",
      "/src/assets/projects/SpotOnTech3.png",
      "/src/assets/projects/SpotOnTech4.png"
    ],
    tech: ["WordPress", "PHP", "JavaScript", "HTML/CSS", "Responsive Design"],
    liveLink: "https://spotontech.com/",
    githubLink: "",
    category: "Website",
    status: "Live",
    year: "2025"
  },
  {
    name: "Nagar Bazaar – Furniture E-commerce",
    description: "Local marketplace connecting vendors and customers with inventory management, order tracking, and multi-vendor support for small businesses.",
    images: ['/src/assets/projects/NagarBazaar1.jpg', '/src/assets/projects/NagarBazaar2.jpg', '/src/assets/projects/NagarBazaar3.jpg', '/src/assets/projects/NagarBazaar4.jpg', '/src/assets/projects/NagarBazaar5.jpg',],
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Razorpay"],
    liveLink: "https://play.google.com/store/apps/details?id=com.webikka.nagarbazaar",
    githubLink: "#",
    category: "Mobile App",
    status: "Live",
    year: "2024"
  },
  {
    name: "TeacherBuilder – Online Teacher Certification Platform",
    description:
      "Accredited online platform for Texas alternative teacher certification with step-by-step onboarding, flexible online coursework, TExES exam preparation, and first-year teaching support to help aspiring educators achieve certification efficiently.",
    images: [
      "/src/assets/projects/TeacherBuilder1.png",
      "/src/assets/projects/TeacherBuilder2.png",
      "/src/assets/projects/TeacherBuilder3.png",
      "/src/assets/projects/TeacherBuilder4.png",
      "/src/assets/projects/TeacherBuilder5.png"
    ],
    tech: ["React", "Node.js", "PHP", "MySQL", "JavaScript"],
    liveLink: "https://www.teacherbuilder.com/",
    githubLink: "",
    category: "Website",
    status: "Live",
    year: "2025"
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
                {/* Swiper Slider */}
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  className="w-full h-48"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="relative w-full h-48 overflow-hidden">
                        {/* Blurred background */}
                        <img
                          src={img}
                          alt="background-blur"
                          className="absolute inset-0 w-full h-full object-cover filter blur-md scale-110"
                        />
                        {/* Clear centered image */}
                        <img
                          src={img}
                          alt={`${project.name} ${i + 1}`}
                          className="relative z-10 h-full mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm">
                    {project.status || "Live"}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-primary/20 text-primary text-xs px-3 py-1 rounded-full font-medium border border-primary/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Quick Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm border border-primary/30"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Live
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md font-mono border border-border/50 hover:bg-secondary/70 hover:border-primary/30 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  {project.liveLink && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass hover:glow-border transition-all duration-300 flex-1"
                      onClick={() => window.open(project.liveLink, "_blank")}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                  )}
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
