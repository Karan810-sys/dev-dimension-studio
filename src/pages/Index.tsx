import { useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

const Index = () => {
  useEffect(() => {
    // Set dark theme by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <main className="relative">
      <ThemeToggle />
      <HeroSection />
      <TechStack />
      <Projects />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-holographic">Creative Dev Team</h3>
              <p className="text-sm text-muted-foreground">Premium Web & Mobile Development</p>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Creative Dev Team. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
