import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Globe, Target } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const AboutOverview = () => {
  const highlights = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering world-class products and services across all business verticals.'
    },
    {
      icon: Users,
      title: 'People First',
      description: 'Our talented workforce of 15,000+ professionals drives innovation and growth.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Operations spanning across India with strategic international partnerships.'
    },
    {
      icon: Target,
      title: 'Sustainability',
      description: 'Building a sustainable future through responsible business practices and ESG initiatives.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="text-gold font-semibold text-sm uppercase tracking-wider">About Swan Corp</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mt-2 mb-6">
                Four Decades of 
                <span className="text-primary block">Industrial Leadership</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since 1980, Swan Corp has evolved into one of India's most respected conglomerates, 
              with diversified interests spanning manufacturing, real estate, defence, energy, 
              and offshore fabrication. Our commitment to excellence, innovation, and sustainable 
              growth has positioned us as a leader in every sector we operate.
            </p>



            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/about">
                  Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about/leadership">Meet Our Leadership</Link>
              </Button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title}
                className="corporate-card p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;