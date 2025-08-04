import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Mail, Phone, Linkedin, ExternalLink, Sparkles, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

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
                className="transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border/50" />
              <h1 className="text-xl font-bold text-holographic">Get In Touch</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-holographic">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Get in touch and let's create 
            exceptional digital experiences together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="Your first name"
                        className="glass hover:glow-border transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Your last name"
                        className="glass hover:glow-border transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="glass hover:glow-border transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone (Optional)
                    </label>
                    <Input 
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="glass hover:glow-border transition-all duration-300"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select className="w-full px-3 py-2 bg-background border border-border rounded-md glass hover:glow-border transition-all duration-300 text-foreground">
                      <option value="">Select a project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="fullstack">Full Stack Solution</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project, goals, and requirements..."
                      rows={5}
                      className="glass hover:glow-border transition-all duration-300"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 glow-primary"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Info & Details */}
              <div className="space-y-8">
                {/* Contact Cards */}
                <div className="space-y-6">
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

                {/* Why Choose Us */}
                <Card className="glass-card p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Why Choose Our Team?
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span>3+ years of proven experience</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span>Modern tech stack & best practices</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span>End-to-end project delivery</span>
                    </div>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <span>24/7 support & maintenance</span>
                    </div>
                  </div>
                </Card>

                {/* Availability Status */}
                <Card className="glass-card p-6 text-center">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-foreground">
                      Available for new projects
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Currently accepting new client work and exciting project collaborations.
                    </p>
                    <div className="flex justify-center">
                      <div className="flex items-center space-x-2 text-sm text-primary">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Available for hire</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;