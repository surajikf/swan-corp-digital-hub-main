import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Building2, Shield, Zap, Droplets, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import manufacturingImg from '@/assets/manufacturing.jpg';
import realEstateImg from '@/assets/real-estate.jpg';
import defenceImg from '@/assets/defence.jpg';
import energyImg from '@/assets/energy.jpg';

const BusinessVerticals = () => {
  const businesses = [
    {
      title: 'Manufacturing',
      description: 'Advanced textile manufacturing and heavy engineering solutions',
      icon: Factory,
      image: manufacturingImg,
      href: '/businesses/manufacturing'
    },
    {
      title: 'Real Estate',
      description: 'Premium residential and commercial development projects',
      icon: Building2,
      image: realEstateImg,
      href: '/businesses/real-estate'
    },
    {
      title: 'Defence',
      description: 'Naval shipbuilding, repair, and ammunition manufacturing',
      icon: Shield,
      image: defenceImg,
      href: '/businesses/defence'
    },
    {
      title: 'Energy',
      description: 'LNG terminals, petroleum trading, petrochemicals, and offshore solutions',
      icon: Zap,
      image: energyImg,
      href: '/businesses/energy'
    }
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our <span className="text-primary">Business Verticals</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Swan Corp operates across diverse industries, leveraging synergies to create 
            sustainable value for stakeholders and contribute to India's economic growth.
          </p>
        </div>

        {/* Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businesses.map((business, index) => (
            <div 
              key={business.title}
              className="corporate-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 rounded-t-xl overflow-hidden">
                <img 
                  src={business.image} 
                  alt={business.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                    <business.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                  {business.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {business.description}
                </p>
                
                <Button variant="outline" size="sm" asChild className="group">
                  <Link to={business.href}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="default" size="xl" asChild>
            <Link to="/businesses">
              Explore All Businesses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessVerticals;