import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const CareersSection = () => {
  const careerBenefits = [
    {
      icon: Users,
      title: 'Diverse Culture',
      description: 'Work with talented professionals from diverse backgrounds and experiences.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and skill development programs.'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths across multiple business verticals.'
    },
    {
      icon: Briefcase,
      title: 'Work-Life Balance',
      description: 'Flexible working arrangements and comprehensive employee benefits.'
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {careerBenefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Content */}
          <div className="animate-fade-in">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-playfair font-bold mb-4">
                Ready to Shape the Future?
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join over 15,000 professionals who are building tomorrow with Swan Corp. 
                Explore opportunities across manufacturing, real estate, defence, energy, and more.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Competitive compensation packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Health insurance and wellness programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Performance-based incentives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Employee stock ownership plans</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/careers">
                    View Open Positions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="corporate" size="lg" asChild>
                  <Link to="/careers/life-at-swan">Life at Swan</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;