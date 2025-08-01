import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hireDriverImage from "@/assets/hire-driver-project.jpg";
import jainSanghImage from "@/assets/jain-sangh-project.jpg";
import nagarBazaarImage from "@/assets/nagar-bazaar-project.jpg";
import filingWorldImage from "@/assets/filing-world-project.jpg";

const allProjects = [
  {
    name: "Hire A Driver",
    description: "Premium ride-sharing platform with real-time tracking, smart matching algorithms, and seamless payment integration. Built for modern urban mobility.",
    image: hireDriverImage,
    tech: ["PHP", "jQuery", "MySQL", "Javascript", "Bootstrap"],
    liveLink: "https://d121.vvelocity.com/Hire_a_driver/",
    githubLink: "https://github.com/DhawalPrajapat/Hire-car-driver",
    category: "Website",
    status: "Live",
    year: "2024"
  },
  {
    name: "Jain Sangh App",
    description: "Community management platform for religious organizations with event scheduling, member directory, and spiritual content management system.",
    image: jainSanghImage,
    tech: ["Flutter", "Laravel", "MySQL", "Firebase", "Payment Gateway"],
    liveLink: "https://play.google.com/store/apps/details?id=app.management.jainsangh",
    githubLink: "#",
    category: "Mobile App",
    status: "Live",
    year: "2024"
  },
  {
    name: "Nagar Bazaar",
    description: "Local marketplace connecting vendors and customers with inventory management, order tracking, and multi-vendor support for small businesses.",
    image: nagarBazaarImage,
    tech: ["React", "Node.js", "PostgreSQL", "AWS S3", "Razorpay"],
    liveLink: "https://play.google.com/store/apps/details?id=com.webikka.nagarbazaar",
    githubLink: "#",
    category: "Web Platform",
    status: "Live",
    year: "2024"
  },
  {
    name: "FilingWorld",
    description: "Comprehensive legal and tax filing platform with document management, automated workflows, and compliance tracking for businesses.",
    image: filingWorldImage,
    tech: ["Laravel", "Vue.js", "MySQL", "RazorPay", "API"],
    liveLink: "https://filingworld.in/sale/",
    githubLink: "https://github.com/Uday14051405/FilingWorld",
    category: "Web Platform & Mobile App",
    status: "Live",
    year: "2025"
  },
  {
    name: "24ItSupport – IT Services & Products Platform",
    description: "Comprehensive IT services and product platform with service booking, enquiry management, secure Razorpay integration, multilingual support, and role-based dashboards for users, admins, and providers.",
    image: nagarBazaarImage,
    tech: ["Laravel", "Vue.js", "MySQL", "RazorPay", "API"],
    liveLink: "https://24itsupport.com/",
    githubLink: "https://github.com/Uday14051405/24ITSupport",
    category: "Web Platform & Mobile App",
    status: "Development",
    year: "2024"
  },
  {
    name: "Bank Statement Analyzer – Financial Data Interpretation Tool",
    description: "Bank statement analysis tool with automated PDF data extraction, transactional categorization, cash flow insights, and responsive user interface.",
    image: filingWorldImage,
    tech: ["Laravel", "MySQL", "JavaScript", "API Integration", "PDF Parser"],
    liveLink: "https://bsa.1flo.in/",
    githubLink: "https://github.com/Uday14051405/Bank-Statement-Analyzer",
    category: "Web Platform",
    status: "Live",
    year: "2024"
  }
];

const AllProjects = () => {
  const navigate = useNavigate();

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
                className="hover:text-primary transition-colors"
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

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-holographic">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our complete collection of projects showcasing innovative solutions, 
            cutting-edge technology, and exceptional user experiences across various industries.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <Card
                key={project.name}
                className="group glass-card hover:glow-border transition-all duration-500 overflow-hidden transform hover:scale-[1.02] perspective-1000 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="glass hover:glow-border transition-all duration-300 flex-1"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Live Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="hover:text-primary transition-colors flex-1"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
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