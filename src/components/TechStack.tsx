import { Card } from "./ui/card"

const techStack = [
  { name: "React", experience: "4+ years", icon: "⚛️", category: "Frontend" },
  { name: "Laravel", experience: "4+ years", icon: "🔴", category: "Backend" },
  { name: "Node.js", experience: "3+ years", icon: "🟢", category: "Backend" },
  { name: "Flutter", experience: "2+ years", icon: "💙", category: "Mobile" },
  { name: "Vue.js", experience: "3+ years", icon: "🟩", category: "Frontend" },
  { name: "Core PHP", experience: "5+ years", icon: "🐘", category: "Backend" },
  { name: "MySQL", experience: "4+ years", icon: "🗄️", category: "Database" },
  { name: "JavaScript", experience: "4+ years", icon: "🟨", category: "Language" },
  { name: "TypeScript", experience: "3+ years", icon: "🔷", category: "Language" },
  { name: "WordPress", experience: "3+ years", icon: "📝", category: "CMS" },
  { name: "AWS", experience: "2+ years", icon: "🟠", category: "Cloud" },
  { name: "Firebase", experience: "2+ years", icon: "🔥", category: "Backend" },
  { name: "Docker", experience: "2+ years", icon: "🐳", category: "DevOps" },
  { name: "Git", experience: "4+ years", icon: "📚", category: "Version Control" },
  { name: "Bootstrap", experience: "4+ years", icon: "🎨", category: "CSS Framework" },
  { name: "Tailwind CSS", experience: "3+ years", icon: "🌊", category: "CSS Framework" },
]

export const TechStack = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-holographic">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our expertise spans across modern technologies and frameworks, delivering scalable solutions for web and
            mobile platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <Card
              key={tech.name}
              className="group glass-card hover:glow-border transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 text-center space-y-3 relative overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="text-4xl mb-2 group-hover:animate-float relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 relative z-10">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                  {tech.experience}
                </p>
                <div className="text-xs text-primary/70 font-mono opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                  {tech.category}
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 border-2 border-primary/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { label: "Projects Completed", value: "10+" },
            { label: "Happy Clients", value: "5+" },
            { label: "Years Experience", value: "3+" },
            { label: "Technologies", value: "10+" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
