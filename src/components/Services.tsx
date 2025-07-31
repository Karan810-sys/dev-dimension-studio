import { Card } from "./ui/card";
import { Code, Smartphone, Palette, Cloud, Database, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Full-stack web applications with modern frameworks like React, Node.js, and Laravel. Responsive, scalable, and SEO-optimized solutions.",
    features: ["React & Next.js", "Node.js & Laravel", "REST & GraphQL APIs", "Progressive Web Apps"]
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps using Flutter and React Native. Beautiful interfaces with seamless user experiences.",
    features: ["Flutter Development", "React Native", "iOS & Android", "App Store Deployment"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design with modern aesthetics. From wireframes to high-fidelity prototypes using Figma and design systems.",
    features: ["User Research", "Figma Prototyping", "Design Systems", "3D Interfaces"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable cloud infrastructure on AWS, automated deployments, and CI/CD pipelines for reliable application delivery.",
    features: ["AWS Services", "Docker & Kubernetes", "CI/CD Pipelines", "Monitoring & Logs"]
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description: "Robust backend systems with secure APIs, database optimization, and microservices architecture for enterprise solutions.",
    features: ["Database Design", "API Development", "Microservices", "Security & Auth"]
  },
  {
    icon: Zap,
    title: "3D & Animations",
    description: "Interactive 3D experiences using Three.js, WebGL, and modern animation libraries for engaging user interfaces.",
    features: ["Three.js Development", "WebGL Shaders", "CSS3D Animations", "Interactive Experiences"]
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            What We <span className="text-holographic">Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions combining creativity with technical excellence 
            to bring your vision to life across all platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group glass-card hover:glow-border transition-all duration-500 transform hover:scale-105 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4 h-full flex flex-col">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 text-primary group-hover:animate-float" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-xs text-muted-foreground"
                    >
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process section */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <h3 className="text-2xl font-bold text-center mb-12 animate-fade-in-up">
            Our <span className="text-holographic">Process</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your vision and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Develop", desc: "Building with modern technologies" },
              { step: "04", title: "Deploy", desc: "Launching and ongoing support" }
            ].map((phase, index) => (
              <div 
                key={phase.step} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/20">
                  <span className="text-primary font-bold font-mono">{phase.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};