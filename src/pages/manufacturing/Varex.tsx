import React from 'react';
import Layout from '@/components/layout/Layout';
import { Scan, Shield, Truck, Settings, ExternalLink, Award, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import defenceImg from '@/assets/defence.jpg';

const Varex = () => {
  const capabilities = [
    {
      icon: Scan,
      title: "X-ray Cargo Scanning",
      description: "Advanced X-ray imaging systems for cargo containers and vehicles",
      details: [
        "High-energy X-ray imaging (up to 9 MeV)",
        "Automatic threat detection algorithms",
        "Real-time image processing and analysis",
        "Multi-view scanning capabilities"
      ]
    },
    {
      icon: Shield,
      title: "Security Inspection",
      description: "Comprehensive security screening solutions for ports and borders",
      details: [
        "Vehicle and cargo screening systems",
        "Baggage and parcel inspection",
        "People screening systems",
        "Explosive and narcotic detection"
      ]
    },
    {
      icon: Truck,
      title: "Mobile Scanning Units",
      description: "Portable and mobile scanning systems for field operations",
      details: [
        "Truck-mounted scanning systems",
        "Relocatable inspection systems",
        "Rapid deployment capabilities",
        "Remote operation and monitoring"
      ]
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Complete integration with existing security infrastructure",
      details: [
        "RFID and barcode integration",
        "Database management systems",
        "Network connectivity solutions",
        "Training and support services"
      ]
    }
  ];

  const features = [
    {
      title: "High Penetration Power",
      description: "9 MeV linear accelerator technology for maximum cargo penetration",
      icon: "⚡"
    },
    {
      title: "Automatic Detection",
      description: "AI-powered threat detection with minimal false alarms",
      icon: "🤖"
    },
    {
      title: "High Throughput",
      description: "Process up to 120 containers per hour with minimal delays",
      icon: "🚀"
    },
    {
      title: "Remote Operation",
      description: "Safe operation from control room with radiation protection",
      icon: "🛡️"
    }
  ];

  const applications = [
    {
      name: "Seaports",
      description: "Container and cargo screening at international ports",
      deployments: "25+ installations"
    },
    {
      name: "Airports",
      description: "Air cargo and baggage screening systems",
      deployments: "15+ installations"
    },
    {
      name: "Border Crossings",
      description: "Vehicle and cargo inspection at border checkpoints",
      deployments: "30+ installations"
    },
    {
      name: "Customs Facilities",
      description: "Import/export cargo verification and screening",
      deployments: "20+ installations"
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={defenceImg} 
            alt="Varex Cargo Scanning Equipment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Scan className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Varex Cargo Scanning</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Advanced <span className="text-gold">Security Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Leading manufacturer of high-energy X-ray cargo scanning systems 
            for ports, airports, and border security applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">9 MeV</div>
              <div className="text-sm text-gray-300">X-ray Energy</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">90+</div>
              <div className="text-sm text-gray-300">Systems Deployed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">15+</div>
              <div className="text-sm text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure & Capabilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Infrastructure & Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Varex operates state-of-the-art manufacturing facilities with advanced R&D capabilities 
              to develop cutting-edge cargo scanning and security inspection systems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Manufacturing Excellence
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Linear Accelerator Production</div>
                    <div className="text-sm text-muted-foreground">High-energy X-ray source manufacturing and testing</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Detector Assembly</div>
                    <div className="text-sm text-muted-foreground">Advanced imaging detector arrays and electronics</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Software Development</div>
                    <div className="text-sm text-muted-foreground">AI-powered image processing and threat detection algorithms</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">System Integration</div>
                    <div className="text-sm text-muted-foreground">Complete turnkey solutions with commissioning and training</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Certified</h4>
                <p className="text-muted-foreground text-sm">IEC 62304 & FDA Compliant</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Security</h4>
                <p className="text-muted-foreground text-sm">IAEA Safety Standards</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Support</h4>
                <p className="text-muted-foreground text-sm">24/7 Technical Support</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Scan className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Innovation</h4>
                <p className="text-muted-foreground text-sm">Continuous R&D</p>
              </Card>
            </div>
          </div>

          {/* Core Capabilities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                      {capability.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {capability.description}
                </p>
                <div className="space-y-3">
                  <div className="font-semibold text-foreground text-sm">Key Features:</div>
                  {capability.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Technical Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced technology features that make Varex systems the preferred choice 
              for critical security applications worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-playfair font-bold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <Card key={index} className="p-6 hover-lift">
                <h3 className="font-playfair font-bold text-lg text-foreground mb-3">
                  {app.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {app.description}
                </p>
                <div className="text-xs font-semibold text-primary">
                  {app.deployments}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Specifications */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-6">
                Advanced X-ray Technology
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Varex cargo scanning systems utilize cutting-edge linear accelerator technology 
                to provide unparalleled image quality and threat detection capabilities for 
                the most demanding security environments.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">9 MeV</div>
                  <div className="text-sm text-muted-foreground">Maximum Energy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">120/hr</div>
                  <div className="text-sm text-muted-foreground">Container Throughput</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">0.1%</div>
                  <div className="text-sm text-muted-foreground">False Alarm Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gold mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">Detection Accuracy</div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6">
                System Specifications
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-muted-foreground">X-ray Energy</span>
                  <span className="font-semibold text-foreground">3-9 MeV Variable</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-muted-foreground">Penetration</span>
                  <span className="font-semibold text-foreground">400mm Steel</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-muted-foreground">Scan Speed</span>
                  <span className="font-semibold text-foreground">0.2-5.0 m/min</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-muted-foreground">Image Resolution</span>
                  <span className="font-semibold text-foreground">2mm @ 1m</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-muted-foreground">Operating Temp</span>
                  <span className="font-semibold text-foreground">-20°C to +50°C</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Power Requirement</span>
                  <span className="font-semibold text-foreground">440V, 3-Phase</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Learn More About Varex Solutions
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Discover our complete range of cargo scanning systems and security solutions. 
            Visit SDHI's Heavy Fabrication page for detailed technical specifications 
            and deployment case studies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg" className="px-8">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit SDHI's Heavy Fabrication Page
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary px-8">
              <Scan className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Manufacturing Unit</h4>
              <p className="text-sm text-gray-300">SDHI Complex, Vasco da Gama, Goa 403802</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Sales Enquiry</h4>
              <p className="text-sm text-gray-300">+91 832 2515555<br />+91 832 2515556</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Technical Support</h4>
              <p className="text-sm text-gray-300">varex@sdhi.com<br />support@varex.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Varex;