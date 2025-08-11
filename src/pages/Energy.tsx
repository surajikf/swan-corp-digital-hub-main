import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Zap, Droplets, Anchor, ArrowRight, Factory, Building2, Shield } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import energyImg from '@/assets/energy.jpg';

const Energy = () => {
  const energyDivisions = [
    {
      title: 'LNG & Energy Infrastructure',
      description: 'Leading LNG terminal operations, petroleum trading, and clean energy solutions contributing to India\'s energy security and clean energy transition.',
      icon: Zap,
      image: energyImg,
      highlights: ['LNG Terminals', 'Petroleum Trading', 'Renewable Energy'],
      details: [
        'State-of-the-art LNG terminal operations',
        'Strategic petroleum trading partnerships',
        'Clean energy transition initiatives',
        'Energy infrastructure development'
      ]
    },
    {
      title: 'Petrochemicals',
      description: 'Integrated petrochemical operations and global trading network serving diverse industrial and consumer applications with quality assurance.',
      icon: Droplets,
      image: energyImg,
      highlights: ['Chemical Trading', 'Distribution', 'Quality Assurance'],
      details: [
        'Global petrochemical trading network',
        'Integrated chemical operations',
        'Quality assurance and testing',
        'Industrial chemical solutions'
      ]
    },
    {
      title: 'Offshore Fabrication',
      description: 'Marine engineering and offshore structure fabrication supporting oil & gas exploration and renewable energy projects with deep water expertise.',
      icon: Anchor,
      image: energyImg,
      highlights: ['Offshore Structures', 'Marine Engineering', 'Project Management'],
      details: [
        'Offshore structure fabrication',
        'Marine engineering solutions',
        'Oil & gas exploration support',
        'Renewable energy project infrastructure'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            <span className="text-gold">Energy</span> Division
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Powering India's energy future through LNG infrastructure, petrochemicals, and offshore solutions
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Three Pillars of Energy Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Swan Corp's Energy Division operates across three strategic areas, 
              creating synergies and driving sustainable energy solutions for India's growth.
            </p>
          </div>

          {/* Energy Divisions */}
          <div className="space-y-16">
            {energyDivisions.map((division, index) => (
              <div 
                key={division.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl hover-lift">
                    <img 
                      src={division.image} 
                      alt={division.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay"></div>
                    <div className="absolute top-6 left-6">
                      <div className="w-16 h-16 bg-white/90 rounded-xl flex items-center justify-center">
                        <division.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                    {division.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {division.description}
                  </p>



                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {division.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    {division.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
            Explore Other Business Verticals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="corporate-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">Manufacturing</h3>
              <p className="text-muted-foreground mb-4">Advanced textile manufacturing and heavy engineering</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/businesses/manufacturing">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="corporate-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">Real Estate</h3>
              <p className="text-muted-foreground mb-4">Premium residential and commercial development</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/businesses/real-estate">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="corporate-card text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">Defence</h3>
              <p className="text-muted-foreground mb-4">Naval shipbuilding and defence manufacturing</p>
              <Button variant="outline" size="sm" asChild>
                <Link to="/businesses/defence">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Energy;
