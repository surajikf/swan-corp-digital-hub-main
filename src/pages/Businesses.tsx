import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Factory, Building2, Shield, Zap, Droplets, Anchor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import manufacturingImg from '@/assets/manufacturing.jpg';
import realEstateImg from '@/assets/real-estate.jpg';
import defenceImg from '@/assets/defence.jpg';
import energyImg from '@/assets/energy.jpg';

const Businesses = () => {
  const businessVerticals = [
    {
      title: 'Manufacturing',
      description: 'Advanced textile manufacturing, shipbuilding, and heavy engineering solutions with state-of-the-art facilities and cutting-edge technology.',
      icon: Factory,
      image: manufacturingImg,
      href: '/businesses/manufacturing',
      highlights: ['Textile Mills', 'Shipbuilding', 'Heavy Engineering']
    },
    {
      title: 'Real Estate',
      description: 'Premium residential and commercial development projects across major Indian cities with focus on sustainable and smart infrastructure.',
      icon: Building2,
      image: realEstateImg,
      href: '/businesses/real-estate',
      highlights: ['Residential', 'Commercial', 'Smart Cities']
    },
    {
      title: 'Defence',
      description: 'Naval shipbuilding, vessel repair, and ammunition manufacturing supporting India\'s defence capabilities and national security.',
      icon: Shield,
      image: defenceImg,
      href: '/businesses/defence',
      highlights: ['Naval Shipbuilding', 'Vessel Repair', 'Ammunition Manufacturing']
    },
    {
      title: 'Energy',
      description: 'LNG terminals, petroleum trading, petrochemicals, and offshore solutions contributing to India\'s energy security and clean energy transition.',
      icon: Zap,
      image: energyImg,
      href: '/businesses/energy',
      highlights: ['LNG Terminals', 'Petroleum Trading', 'Offshore Fabrication']
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Our <span className="text-gold">Business Verticals</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Diversified portfolio driving growth across key sectors of the Indian economy
          </p>
        </div>
      </section>

      {/* Business Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Four Pillars of Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Swan Corp's diversified business portfolio spans across strategic sectors, 
              creating synergies and driving sustainable value creation.
            </p>
          </div>

          {/* Business Cards */}
          <div className="space-y-12">
            {businessVerticals.map((business, index) => (
              <div 
                key={business.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
                    <img 
                      src={business.image} 
                      alt={business.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
                        <business.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                    {business.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {business.description}
                  </p>



                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {business.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Button variant="corporate" size="lg" asChild>
                    <Link to={business.href}>
                      Explore {business.title}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Businesses;