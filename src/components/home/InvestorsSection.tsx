import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Users, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const InvestorsSection = () => {

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-gold/5">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-semibold text-sm uppercase tracking-wider">Investor Relations</span>
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mt-2 mb-6">
            Building Value for 
            <span className="text-primary block">Our Stakeholders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Swan Corp is committed to creating sustainable value through transparent 
            governance, strategic growth, and consistent performance across all business segments.
          </p>
        </div>



        {/* Key Information Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Financial Reports */}
          <div className="corporate-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg">Financial Reports</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Access our quarterly and annual financial statements, investor presentations, and key metrics.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/investors/financials">View Reports</Link>
            </Button>
          </div>

          {/* Governance */}
          <div className="corporate-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                <Shield className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-lg">Governance</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Learn about our board composition, committees, and governance practices.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/investors/governance">Learn More</Link>
            </Button>
          </div>

          {/* Contact IR */}
          <div className="corporate-card p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg">Investor Contact</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Get in touch with our investor relations team for queries and support.
            </p>
            <Button variant="outline" size="sm" asChild className="w-full">
              <Link to="/investors/contact">Contact IR</Link>
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="corporate" size="xl" asChild>
            <Link to="/investors">
              Explore Investor Relations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;