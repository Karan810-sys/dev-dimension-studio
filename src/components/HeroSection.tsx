import { HeroOrb } from "./HeroOrb";
import { Button } from "./ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-30" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
          linear-gradient(hsl(var(--border)) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                  Full Stack Development
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-holographic">Creative</span>{" "}
                <br />
                <span className="text-foreground">Dev Team</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                We craft premium web and mobile experiences with cutting-edge 3D technology, 
                modern UI/UX design, and robust full-stack solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-primary"
              >
                View Our Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => navigate('/contact')}
                className="glass-card hover:glow-border transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="transition-colors hover:text-white dark:hover:text-black"
                onClick={() => window.open('https://github.com/DhawalPrajapat', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="transition-colors hover:text-white dark:hover:text-black"
                onClick={() => window.open('https://www.linkedin.com/in/dhawal-kumar-prajapat-598537238/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="transition-colors hover:text-white dark:hover:text-black"
                onClick={() => navigate('/contact')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - 3D Orb */}
          <div className="relative lg:pl-8">
            <HeroOrb />
            
            {/* Floating code snippets */}
            <div className="absolute top-10 left-4 glass-card p-3 rounded-lg animate-float">
              <code className="text-sm font-mono text-primary">React.js</code>
            </div>
            
            <div className="absolute bottom-20 right-8 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
              <code className="text-sm font-mono text-primary">Laravel</code>
            </div>
            
            <div className="absolute top-1/2 left-0 glass-card p-3 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
              <code className="text-sm font-mono text-primary">Node.js</code>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};