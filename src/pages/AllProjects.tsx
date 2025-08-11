import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const allProjects = [
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
    name: "24ItSupport – IT Services & Products Platform",
    description: "Comprehensive IT services and product platform with service booking, enquiry management, secure Razorpay integration, multilingual support, and role-based dashboards for users, admins, and providers.",
    images: ['/src/assets/projects/24ItSupport1.png', '/src/assets/projects/24ItSupport5.jpg', '/src/assets/projects/24ItSupport2.png', '/src/assets/projects/24ItSupport6.jpg', '/src/assets/projects/24ItSupport3.png', '/src/assets/projects/24ItSupport4.png', '/src/assets/projects/24ItSupport7.jpg', '/src/assets/projects/24ItSupport8.jpg',],
    tech: ["Laravel", "Vue.js", "MySQL", "RazorPay", "API"],
    liveLink: "https://24itsupport.com/",
    githubLink: "",
    category: "Website & Mobile App",
    status: "Development",
    year: "2024"
  },
  {
    name: "Multi-Industry UI Design Collection",
    description: "A diverse collection of Figma UI designs across industries including eldercare, fashion e-commerce, SEO tools, pet tracking, automotive toll systems, and industrial manufacturing. Each design features user-centric layouts, responsive structures, and tailored flows—ranging from product catalogs and dashboards to real-time tracking and healthcare interfaces—demonstrating versatility in creating functional and visually appealing digital experiences.",
    images: ['/src/assets/projects/FootGlider1.png', '/src/assets/projects/Kyndmark1.png', '/src/assets/projects/RankIt1.png', '/src/assets/projects/UnitedRubber1.png', '/src/assets/projects/Welldercare1.png', '/src/assets/projects/FootGlider3.png', '/src/assets/projects/Kyndmark4.png', '/src/assets/projects/RankIt4.png', '/src/assets/projects/UnitedRubber6.png', '/src/assets/projects/Welldercare4.png'],
    tech: ["Figma", "UI/UX", "Figma Password: Cre8ive@2025"],
    liveLink: "https://www.figma.com/design/KVVuiiFFPoY8CbDgxSEoFF/Portfolio?node-id=0-1&t=mkdXZHqKq6UUWX9w-1",
    githubLink: "",
    category: "UI/UX",
    status: "",
    year: "2025"
  },
  {
    name: "Toy Shop – E-commerce Platform for Toys & Games",
    description: "Toy e-commerce platform with dynamic product catalog, secure checkout, admin dashboard, payment integration, and mobile-responsive design for seamless toy and game shopping experience.",
    images: ['/src/assets/projects/ToyEcom1.png', '/src/assets/projects/ToyEcom2.png', '/src/assets/projects/ToyEcom3.png', '/src/assets/projects/ToyEcom4.png', '/src/assets/projects/ToyEcom5.png', '/src/assets/projects/ToyEcom6.png',],
    tech: ["Laravel", "MySQL", "JavaScript", "HTML/CSS", "Payment Gateway", "Bootstrap", "React"],
    liveLink: "",
    githubLink: "https://github.com/timberlin12/Toy-Ecommerce",
    category: "Website",
    status: "Devloping",
    year: "2024"
  },
  {
    name: "Pet Tracker – Figma UI design",
    description: "Design for a smart pet monitoring app featuring real-time location tracking, activity monitoring dashboard, health record screens, reminder system, and mobile-responsive design to ensure pet safety and well-being.",
    images: ['/src/assets/projects/PetTracker1.png', '/src/assets/projects/PetTracker2.png', '/src/assets/projects/PetTracker3.png', '/src/assets/projects/PetTracker4.png', '/src/assets/projects/PetTracker5.png', '/src/assets/projects/PetTracker6.png'],
    tech: [ "Figma", "UI/UX"],
    liveLink: "https://www.figma.com/design/sDcYE1741ZbRQcol9hCc3S/PETPAL?node-id=44-763&p=f",
    githubLink: "",
    category: "UI/UX",
    status: "",
    year: "2025"
  },
  {
    name: "CRM System – Real Estate Client & Lead Management",
    description: "Custom CRM system for real estate lead management with client tracking, property listings, task assignments, communication history, and performance monitoring built using Core PHP.",
    images: ['/src/assets/projects/CRM1.png', '/src/assets/projects/CRM2.png', '/src/assets/projects/CRM3.jpg', '/src/assets/projects/CRM4.jpg',],
    tech: [ "Laravel", "Core PHP", "MySQL", "JavaScript", "API Integration"],
    liveLink: "https://roharealty.com/",
    githubLink: "",
    category: "Website and Mobile App",
    status: "Live",
    year: "2022"
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
  }
];

const AllProjects = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? allProjects
    : allProjects.filter(project =>
        selectedCategory === "UI/UX"
          ? project.category.toLowerCase().includes("ui") || project.category.toLowerCase().includes("ux")
          : project.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/30 border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="transition-colors hover:text-white dark:hover:text-black"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border/50" />
              <h1 className="text-xl font-bold text-holographic">All Projects</h1>
            </div>
            
            <Button variant="outline" className="glass hover:glow-border transition-all duration-300">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section + Filters */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-holographic">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our complete collection of projects showcasing innovative solutions, 
            cutting-edge technology, and exceptional user experiences across various industries.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {["All", "Mobile App", "UI/UX", "Website"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`glass transition-all duration-300 
                            ${selectedCategory === cat ? "glow-border" : ""} 
                            text-black dark:text-white`}>
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.name}
                className="group glass-card hover:glow-border transition-all duration-500 overflow-hidden transform hover:scale-[1.02] perspective-1000 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 3000, // auto slide every 3 seconds
                      disableOnInteraction: false,
                    }}
                    className="w-full h-48"
                  >
                    {project.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="relative w-full h-48 overflow-hidden">
                          {/* Blurred background image */}
                          <img
                            src={img}
                            alt="background-blur"
                            className="absolute inset-0 w-full h-full object-cover filter blur-md scale-110"
                          />

                          {/* Centered clear image */}
                          <img
                            src={img}
                            alt={`${project.name} ${i + 1}`}
                            className="relative z-10 h-full mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full font-medium border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-secondary/20 text-secondary-foreground text-xs px-2 py-1 rounded-full font-medium border border-secondary/30">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded-md font-mono border border-border/50"
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
                    {/* project.githubLink && (
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="hover:text-primary transition-colors flex-1"
                        onClick={() => window.open(project.githubLink, "_blank")}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    )*/}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Have a project in mind?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your ideas to life with our expertise 
            in modern web and mobile development.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-primary"
            onClick={() => navigate('/#contact')}
          >
            Start a Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
