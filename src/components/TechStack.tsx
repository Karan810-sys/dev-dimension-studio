import { Card } from "./ui/card";

const techStack = [
  { name: "React", experience: "4+ years", icon: "⚛️", category: "Frontend" },
  { name: "Node.js", experience: "3+ years", icon: "🟢", category: "Backend" },
  { name: "Laravel", experience: "3+ years", icon: "🔴", category: "Backend" },
  { name: "Flutter", experience: "2+ years", icon: "💙", category: "Mobile" },
  { name: "AWS", experience: "2+ years", icon: "🟠", category: "Cloud" },
  { name: "Python", experience: "3+ years", icon: "🐍", category: "Backend" },
  { name: "Django", experience: "2+ years", icon: "🎯", category: "Backend" },
  { name: "Three.js", experience: "1+ years", icon: "🎨", category: "3D" },
  { name: "TypeScript", experience: "3+ years", icon: "🔷", category: "Language" },
  { name: "PostgreSQL", experience: "3+ years", icon: "🐘", category: "Database" },
  { name: "MongoDB", experience: "2+ years", icon: "🍃", category: "Database" },
  { name: "Docker", experience: "2+ years", icon: "🐳", category: "DevOps" },
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-holographic">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across modern technologies and frameworks, 
            delivering scalable solutions for web and mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={tech.name}
              className="group glass-card hover:glow-border transition-all duration-300 cursor-pointer transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 text-center space-y-3">
                <div className="text-4xl mb-2 group-hover:animate-float">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.experience}
                </p>
                <div className="text-xs text-primary/70 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.category}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Years Experience", value: "4+" },
            { label: "Technologies", value: "25+" },
          ].map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};