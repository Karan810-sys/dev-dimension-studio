import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Mail, Phone, Linkedin, ExternalLink, Sparkles } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-holographic">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's create 
            exceptional digital experiences together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - CTA */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Ready to work together?
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a startup looking to make a mark or an established business 
                  seeking digital transformation, we're here to bring your vision to life with 
                  cutting-edge technology and creative excellence.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Custom development solutions</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Modern design & user experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <span>Scalable & maintainable code</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-primary group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:animate-float" />
                Let's Work Together
              </Button>
            </div>

            {/* Right side - Contact cards */}
            <div className="space-y-6 animate-slide-in-right">
              <Card className="glass-card hover:glow-border transition-all duration-300 p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <a 
                      href="tel:+919116556124" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 9116556124
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card hover:glow-border transition-all duration-300 p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a 
                      href="mailto:dhawalprajapat421@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      dhawalprajapat421@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card hover:glow-border transition-all duration-300 p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">LinkedIn</h4>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="glass-card hover:glow-border transition-all duration-300 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Figma Portfolio</h4>
                      <p className="text-sm text-muted-foreground">Password: Cre8ive@2025</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="hover:text-primary">
                    View
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-16 pt-12 border-t border-border/50 text-center">
            <div className="space-y-4 animate-fade-in-up">
              <h4 className="text-lg font-semibold text-foreground">
                Available for new projects
              </h4>
              <p className="text-muted-foreground">
                Currently accepting new client work and exciting project collaborations.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 text-sm text-primary">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};