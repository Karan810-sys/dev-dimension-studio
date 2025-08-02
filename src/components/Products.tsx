import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Users, Clock, BarChart3, Shield, Zap } from "lucide-react";

const products = [
  {
    id: "hrms",
    name: "HRMS Pro",
    tagline: "Complete Human Resource Management",
    description: "Streamline your HR operations with our comprehensive HRMS solution. Manage employees, payroll, attendance, and performance all in one place.",
    price: "$99",
    period: "/month",
    popular: true,
    features: [
      "Employee Management",
      "Payroll Processing",
      "Attendance Tracking",
      "Performance Reviews",
      "Leave Management",
      "Document Management",
      "Analytics & Reports",
      "Mobile App Access"
    ],
    icon: Users,
    gradient: "from-blue-500 to-cyan-500",
    demoLink: "#",
    buyLink: "#"
  },
  {
    id: "tracker",
    name: "Tracker Pro",
    tagline: "Advanced Management System",
    description: "Track and manage your projects, assets, and resources with real-time monitoring and comprehensive analytics dashboard.",
    price: "$79",
    period: "/month",
    popular: false,
    features: [
      "Real-time Tracking",
      "Asset Management",
      "Project Monitoring",
      "GPS Integration",
      "Custom Dashboards",
      "Automated Alerts",
      "Data Analytics",
      "API Integration"
    ],
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500",
    demoLink: "#",
    buyLink: "#"
  }
];

export const Products = () => {
  return (
    <section id="products" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-holographic">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional software solutions designed to streamline your business operations and boost productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={product.id} 
                className={`relative overflow-hidden glass-card hover:glow-border transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-primary/50' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} p-4 mb-4 glow-primary`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-holographic">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    {product.tagline}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </CardHeader>

                <CardContent className="pb-6">
                  <div className="mb-6">
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl font-bold text-holographic">{product.price}</span>
                      <span className="text-muted-foreground ml-2">{product.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Per organization</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(product.demoLink, '_blank')}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    className={`flex-1 bg-gradient-to-r ${product.gradient} hover:opacity-90`}
                    onClick={() => window.open(product.buyLink, '_blank')}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-holographic mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We also offer custom development services tailored to your specific business needs. 
              Contact us for enterprise solutions and volume licensing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};