import React from 'react';
import Layout from '@/components/layout/Layout';
import { Heart, Users, GraduationCap, Stethoscope, TreePine, Home, Award, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/enhanced-button';
import heroImage from '@/assets/hero-corporate.jpg';

const CSR = () => {
  const initiatives = [
    {
      icon: GraduationCap,
      title: "Education & Skill Development",
      description: "Scholarship programs, school infrastructure, and vocational training centers",
      impact: "50,000+ students benefited",
      projects: [
        "Swan Education Foundation - Scholarship Program",
        "Rural School Infrastructure Development",
        "Digital Learning Centers",
        "Vocational Training for Youth"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Wellness",
      description: "Mobile medical units, health camps, and maternal care programs",
      impact: "2,00,000+ patients treated",
      projects: [
        "Mobile Medical Units in Rural Areas",
        "Maternal & Child Health Programs",
        "Free Health Check-up Camps",
        "Telemedicine Services"
      ]
    },
    {
      icon: TreePine,
      title: "Environmental Conservation",
      description: "Tree plantation drives, renewable energy, and water conservation",
      impact: "5,00,000+ trees planted",
      projects: [
        "Green Belt Development",
        "Water Conservation Projects",
        "Renewable Energy Initiatives",
        "Waste Management Programs"
      ]
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Women empowerment, rural development, and livelihood programs",
      impact: "1,00,000+ families supported",
      projects: [
        "Women's Self-Help Groups",
        "Rural Infrastructure Development",
        "Livelihood Generation Programs",
        "Digital Literacy Campaigns"
      ]
    }
  ];

  const achievements = [
    { number: "₹50 Cr", label: "Annual CSR Investment" },
    { number: "1M+", label: "Lives Impacted" },
    { number: "200+", label: "Villages Adopted" },
    { number: "15+", label: "States Covered" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Swan Corp CSR Initiatives" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Heart className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Corporate Social Responsibility</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Commitment to <span className="text-gold">Society</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Creating shared value through sustainable initiatives that empower communities 
            and protect our environment for future generations
          </p>
        </div>
      </section>

      {/* CSR Philosophy */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Our CSR Philosophy
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Swan Corp, we believe that business success and social responsibility go hand in hand. 
                Our CSR initiatives are designed to create lasting positive impact in the communities 
                where we operate, focusing on education, healthcare, environmental conservation, and 
                community development.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are committed to investing at least 2% of our average net profits over the past 
                three years in CSR activities, often exceeding this statutory requirement to maximize 
                our positive impact on society.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2.5%</div>
                  <div className="text-sm text-muted-foreground">of Net Profits Invested</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold mb-1">4</div>
                  <div className="text-sm text-muted-foreground">Key Focus Areas</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-muted-foreground text-sm">{achievement.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Our CSR Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs addressing key social and environmental challenges 
              across education, healthcare, environment, and community development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <initiative.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <div className="text-sm font-semibold text-gold">{initiative.impact}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {initiative.description}
                </p>
                <div className="space-y-3">
                  <div className="font-semibold text-foreground text-sm">Key Projects:</div>
                  {initiative.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {project}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Governance */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                CSR Governance & Implementation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our CSR activities are governed by a dedicated CSR Committee of the Board, 
                ensuring transparent, accountable, and effective implementation of all initiatives. 
                We follow robust monitoring and evaluation mechanisms to measure impact and 
                ensure optimal utilization of resources.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">ISO 26000 compliant CSR framework</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Quarterly impact assessment and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Community participation in project design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Employee volunteering programs</span>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="font-playfair font-bold text-xl text-foreground mb-6">
                CSR Committee
              </h3>
              <div className="space-y-4">
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-foreground">Priya Sharma</div>
                  <div className="text-sm text-muted-foreground">Chairperson - Independent Director</div>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-foreground">Nikhil Merchant</div>
                  <div className="text-sm text-muted-foreground">Member - Managing Director</div>
                </div>
                <div className="pb-4 border-b border-gray-200">
                  <div className="font-semibold text-foreground">Dr. Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Member - Independent Director</div>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Anita Desai</div>
                  <div className="text-sm text-muted-foreground">Member - Executive Director</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Partner with us in creating positive social impact. Whether you're an NGO, 
            educational institution, or community organization, let's work together 
            to build a better tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              Volunteer Program
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CSR;