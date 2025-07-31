import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import hireDriverImage from "@/assets/hire-driver-project.jpg";
import jainSanghImage from "@/assets/jain-sangh-project.jpg";
import nagarBazaarImage from "@/assets/nagar-bazaar-project.jpg";
import filingWorldImage from "@/assets/filing-world-project.jpg";

const projects = [
  {
    name: "Hire A Driver",
    description: "Premium ride-sharing platform with real-time tracking, smart matching algorithms, and seamless payment integration. Built for modern urban mobility.",
    image: hireDriverImage,
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Stripe"],
    liveLink: "#",
    githubLink: "#",
    category: "Mobile App"
  },
  {
    name: "Jain Sangh App",
    description: "Community management platform for religious organizations with event scheduling, member directory, and spiritual content management system.",
    image: jainSanghImage,
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "Payment Gateway"],
    liveLink: "#",
    githubLink: "#",
    category: "Mobile App"
  },
  {
    name: "Nagar Bazaar",
    description: "Local marketplace connecting vendors and customers with inventory management, order tracking, and multi-vendor support for small businesses.",
    image: nagarBazaarImage,
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Razorpay"],
    liveLink: "#",
    githubLink: "#",
    category: "Web Platform"
  },
  {
    name: "FilingWorld",
    description: "Comprehensive legal and tax filing platform with document management, automated workflows, and compliance tracking for businesses.",
    image: filingWorldImage,
    tech: ["Laravel", "Vue.js", "MySQL", "AWS", "DocuSign API"],
    liveLink: "#",
    githubLink: "#",
    category: "Business Platform"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Featured <span className="text-holographic">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing our expertise in building scalable, user-centric applications 
            that solve real-world problems with modern technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className="group glass-card hover:glow-border transition-all duration-500 overflow-hidden transform hover:scale-[1.02] perspective-1000 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="glass hover:glow-border transition-all duration-300"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="hover:text-primary transition-colors"
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
            className="glass-card hover:glow-border transition-all duration-300"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};