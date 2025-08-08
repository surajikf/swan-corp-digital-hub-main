import React from 'react';
import Layout from '@/components/layout/Layout';
import { Ship, Anchor, Award, Shield, Wrench, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import defenceImg from '@/assets/defence.jpg';

const SDHI = () => {
  const capabilities = [
    {
      icon: Ship,
      title: "Naval Vessel Construction",
      description: "Advanced warship and patrol vessel construction for Indian Navy and Coast Guard",
      details: [
        "Corvettes and Frigates up to 3,000 tons",
        "Fast Attack Craft and Patrol Vessels",
        "Offshore Patrol Vessels (OPV)",
        "Naval Auxiliary Vessels"
      ]
    },
    {
      icon: Anchor,
      title: "Ship Repair & Maintenance",
      description: "Comprehensive repair and refit services for naval and commercial vessels",
      details: [
        "Dry dock facilities up to 150m length",
        "Engine overhaul and maintenance",
        "Hull repair and modification",
        "System upgrades and modernization"
      ]
    },
    {
      icon: Wrench,
      title: "Heavy Engineering",
      description: "Precision fabrication for offshore and industrial applications",
      details: [
        "Offshore platform structures",
        "Pressure vessels and tanks",
        "Industrial equipment fabrication",
        "Custom engineering solutions"
      ]
    },
    {
      icon: Shield,
      title: "Defense Equipment",
      description: "Specialized defense equipment and weapon system integration",
      details: [
        "Weapon mounting systems",
        "Radar and communication integration",
        "Combat management systems",
        "Life support systems"
      ]
    }
  ];

  const projects = [
    {
      name: "Anti-Submarine Warfare Corvette",
      client: "Indian Navy",
      status: "Under Construction",
      value: "₹1,200 Cr",
      completion: "2025"
    },
    {
      name: "Fast Patrol Vessel Series",
      client: "Indian Coast Guard",
      status: "Delivered",
      value: "₹800 Cr",
      completion: "2023"
    },
    {
      name: "Offshore Patrol Vessel",
      client: "Export Customer",
      status: "Sea Trials",
      value: "₹600 Cr",
      completion: "2024"
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={defenceImg} 
            alt="SDHI Shipyard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Ship className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Swan Defence Heavy Industries</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Shipbuilding <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Leading shipyard specializing in naval vessel construction, ship repair, 
            and heavy engineering for defense and commercial applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">50+</div>
              <div className="text-sm text-gray-300">Vessels Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">2</div>
              <div className="text-sm text-gray-300">Dry Docks</div>
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
              SDHI operates state-of-the-art shipbuilding facilities with advanced technology 
              and skilled workforce to deliver world-class naval and commercial vessels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                World-Class Facilities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Dry Dock Facilities</div>
                    <div className="text-sm text-muted-foreground">Two dry docks: 150m x 25m and 120m x 20m capacity</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Heavy Fabrication Shop</div>
                    <div className="text-sm text-muted-foreground">50,000 sq.m covered area with automated welding systems</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Machine Shop</div>
                    <div className="text-sm text-muted-foreground">CNC machining centers and precision engineering equipment</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Design & Engineering</div>
                    <div className="text-sm text-muted-foreground">Advanced CAD/CAM systems and simulation capabilities</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Quality</h4>
                <p className="text-muted-foreground text-sm">ISO 9001:2015 & Defence Quality Standards</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Security</h4>
                <p className="text-muted-foreground text-sm">Defense Security Guidelines Compliant</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Maintenance</h4>
                <p className="text-muted-foreground text-sm">24/7 Emergency Repair Services</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Ship className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Delivery</h4>
                <p className="text-muted-foreground text-sm">100% On-Time Project Completion</p>
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
                  <div className="font-semibold text-foreground text-sm">Key Offerings:</div>
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

      {/* Recent Projects */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Major Projects & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Delivering cutting-edge naval vessels and marine engineering solutions 
              for defense forces and commercial clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    project.status === 'Under Construction' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {project.status}
                  </div>
                  <div className="text-lg font-bold text-primary">{project.value}</div>
                </div>
                <h3 className="font-playfair font-bold text-lg text-foreground mb-2">
                  {project.name}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Client:</span>
                    <span className="font-semibold">{project.client}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completion:</span>
                    <span className="font-semibold">{project.completion}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-lift">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">ISO 9001:2015</h4>
              <p className="text-muted-foreground text-sm">Quality Management System</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <Shield className="h-12 w-12 text-gold mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Defense Standard</h4>
              <p className="text-muted-foreground text-sm">MOD Quality Assurance</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">API Q1</h4>
              <p className="text-muted-foreground text-sm">Offshore Fabrication</p>
            </Card>
            <Card className="p-6 text-center hover-lift">
              <Ship className="h-12 w-12 text-gold mx-auto mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Lloyd's Register</h4>
              <p className="text-muted-foreground text-sm">Maritime Certification</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Visit SDHI Website
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Explore our complete range of shipbuilding capabilities, ongoing projects, 
            and detailed technical specifications on our dedicated SDHI website
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="secondary" size="lg" className="px-8">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visit SDHI Home Page
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary px-8">
              <Ship className="mr-2 h-5 w-5" />
              View Projects Gallery
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Visit Shipyard</h4>
              <p className="text-sm text-gray-300">SDHI Shipyard, Vasco da Gama, Goa 403802</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Contact Sales</h4>
              <p className="text-sm text-gray-300">+91 832 2512345<br />+91 832 2512346</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-sm text-gray-300">info@sdhi.com<br />projects@sdhi.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SDHI;