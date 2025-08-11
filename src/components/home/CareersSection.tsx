import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const CareersSection = () => {

  return (
    <section className="section-padding bg-gradient-to-br from-primary-dark to-primary text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Join Our Team</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
            Build Your Career with 
            <span className="text-gold block">Swan Corp</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Be part of a dynamic organization that values innovation, excellence, and personal growth. 
            Discover opportunities across our diverse business portfolio.
          </p>
        </div>

        <div className="text-center">
          <Button variant="gold" size="xl" asChild>
            <Link to="/careers">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;