import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Recycle, Heart, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const SustainabilitySection = () => {
  const esgInitiatives = [
    {
      icon: Leaf,
      title: 'Environmental',
      description: 'Committed to reducing carbon footprint and promoting clean energy solutions.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Heart,
      title: 'Social',
      description: 'Empowering communities through education, healthcare, and skill development.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Award,
      title: 'Governance',
      description: 'Maintaining highest standards of transparency and ethical business practices.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Sustainability & ESG</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mt-2 mb-6">
              Building a 
              <span className="text-primary block">Sustainable Future</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Swan Corp, sustainability is not just a commitment—it's integral to our business strategy. 
              We believe in creating value that extends beyond financial returns to encompass environmental 
              stewardship, social responsibility, and ethical governance.
            </p>



            <Button variant="corporate" size="lg" asChild>
              <Link to="/about/csr">
                Our CSR Initiatives
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* ESG Cards */}
          <div className="space-y-6">
            {esgInitiatives.map((initiative, index) => (
              <div 
                key={initiative.title}
                className="corporate-card p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${initiative.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <initiative.icon className={`h-6 w-6 ${initiative.color}`} />
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-foreground mb-2">
                      {initiative.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;