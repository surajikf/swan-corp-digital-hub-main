import React from 'react';
import Layout from '@/components/layout/Layout';
import { Calendar, Award, TrendingUp, Globe, Factory, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-corporate.jpg';

const KeyMilestones = () => {
  const milestones = [
    {
      year: "1980",
      title: "Foundation of Swan Corp",
      description: "Established as a textile manufacturing company in Gujarat with a single spinning unit of 5,000 spindles.",
      icon: Factory,
      category: "Foundation"
    },
    {
      year: "1985",
      title: "Capacity Expansion",
      description: "Expanded textile operations to 15,000 spindles and entered into cotton yarn export markets.",
      icon: TrendingUp,
      category: "Growth"
    },
    {
      year: "1992",
      title: "Diversification into Shipbuilding",
      description: "Acquired shipyard facilities in Goa, marking entry into marine engineering and defense sectors.",
      icon: Award,
      category: "Diversification"
    },
    {
      year: "1998",
      title: "IPO Launch",
      description: "Successfully listed on BSE and NSE, raising ₹200 crores for expansion and modernization.",
      icon: TrendingUp,
      category: "Milestone"
    },
    {
      year: "2003",
      title: "International Expansion",
      description: "Established first international office in Dubai and entered Middle East textile markets.",
      icon: Globe,
      category: "Global"
    },
    {
      year: "2008",
      title: "Energy Sector Entry",
      description: "Entered renewable energy sector with wind power projects and LNG trading operations.",
      icon: Zap,
      category: "Diversification"
    },
    {
      year: "2012",
      title: "Technology Modernization",
      description: "Invested ₹500 crores in technology upgrades across all manufacturing facilities.",
      icon: Award,
      category: "Innovation"
    },
    {
      year: "2015",
      title: "Real Estate Venture",
      description: "Launched Swan Realty for residential and commercial real estate development projects.",
      icon: Factory,
      category: "Diversification"
    },
    {
      year: "2018",
      title: "Defense Contracts",
      description: "Secured major defense shipbuilding contracts worth ₹2,000 crores from Indian Navy.",
      icon: Award,
      category: "Achievement"
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Launched comprehensive ESG program with zero liquid discharge and carbon neutrality goals.",
      icon: Globe,
      category: "Sustainability"
    },
    {
      year: "2022",
      title: "₹10,000 Crore Revenue",
      description: "Achieved historic milestone of ₹10,000 crore annual revenue across all business verticals.",
      icon: TrendingUp,
      category: "Milestone"
    },
    {
      year: "2024",
      title: "Digital Transformation",
      description: "Completed Industry 4.0 implementation across all facilities with AI and IoT integration.",
      icon: Award,
      category: "Innovation"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Foundation': return 'bg-primary/10 text-primary';
      case 'Growth': return 'bg-green-100 text-green-700';
      case 'Diversification': return 'bg-gold/10 text-gold';
      case 'Milestone': return 'bg-purple-100 text-purple-700';
      case 'Global': return 'bg-blue-100 text-blue-700';
      case 'Innovation': return 'bg-orange-100 text-orange-700';
      case 'Achievement': return 'bg-red-100 text-red-700';
      case 'Sustainability': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Swan Corp Journey" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Calendar className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Our Journey</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Key <span className="text-gold">Milestones</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Four decades of strategic growth, innovation, and excellence that shaped Swan Corp 
            into India's leading industrial conglomerate
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              1980 - 2024: A Legacy of Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a single textile unit to a diversified conglomerate - explore the key moments 
              that defined our journey to industrial leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-gold to-primary"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="p-6 hover-lift">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(milestone.category)}`}>
                          {milestone.category}
                        </div>
                      </div>
                      <h3 className="font-playfair font-bold text-xl text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <milestone.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-primary text-white px-3 py-1 rounded-lg font-bold text-sm">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Future Vision */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Looking Ahead: 2025 and Beyond
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            As we continue our journey, Swan Corp remains committed to sustainable growth, 
            technological innovation, and creating value for all stakeholders while contributing 
            to India's industrial development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <TrendingUp className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">₹20,000 Cr Revenue Target</h4>
              <p className="text-sm text-gray-300">By 2030</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Globe className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Carbon Neutral Operations</h4>
              <p className="text-sm text-gray-300">By 2028</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Award className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Technology Leadership</h4>
              <p className="text-sm text-gray-300">Industry 4.0 Pioneer</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default KeyMilestones;