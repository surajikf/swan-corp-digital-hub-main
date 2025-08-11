import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Award, Users, Globe, Target, Eye, Heart, Lightbulb, ChevronRight, MapPin, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-corporate.jpg';

const About = () => {
  const leadership = [
    {
      name: "Nikhil Merchant",
      position: "Managing Director & CEO",
      image: heroImage,
      overview: "Leading Swan Corp with strategic vision and operational excellence for over 15 years. Expert in industrial growth and sustainable business practices.",
      subtopics: [
        "Strategic Planning & Corporate Governance",
        "Mergers & Acquisitions Leadership", 
        "Industrial Policy & Government Relations",
        "Sustainable Development & ESG Implementation"
      ]
    },
    {
      name: "Priya Sharma",
      position: "Chief Financial Officer",
      image: heroImage,
      overview: "Financial strategist with 12+ years experience in corporate finance, investor relations, and capital markets across diverse industrial sectors.",
      subtopics: [
        "Financial Planning & Analysis",
        "Capital Structure Optimization",
        "Investor Relations & Market Strategy",
        "Risk Management & Compliance"
      ]
    },
    {
      name: "Rajesh Kumar",
      position: "Chief Operating Officer",
      image: heroImage,
      overview: "Operations expert driving manufacturing excellence and supply chain optimization across all business verticals with focus on Industry 4.0.",
      subtopics: [
        "Manufacturing Excellence & Lean Operations",
        "Supply Chain Optimization",
        "Technology Integration & Digitalization",
        "Quality Management & Process Innovation"
      ]
    },
    {
      name: "Anita Desai",
      position: "Chief Technology Officer",
      image: heroImage,
      overview: "Technology visionary leading digital transformation and innovation initiatives across the conglomerate's diverse business portfolio.",
      subtopics: [
        "Digital Transformation Strategy",
        "Innovation & R&D Leadership",
        "IT Infrastructure & Cybersecurity",
        "Emerging Technologies & AI Implementation"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Swan Corp Corporate Headquarters" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="mb-6">
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Since 1980</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            About <span className="text-gold">Swan Corp</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Four decades of industrial leadership, innovation, and commitment to excellence 
            across diverse business verticals
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Our Journey Since 1980
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Swan Corp began as a single textile manufacturing unit in Gujarat and has evolved into 
                one of India's most respected conglomerates. Our journey reflects our commitment to 
                innovation, quality, and sustainable growth across diverse industries.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Today, we operate across six major business verticals, employing over 15,000 professionals 
                and generating annual revenues of ₹12,000 crores. Our success is built on strong values, 
                strategic vision, and unwavering commitment to stakeholder value creation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg">
                  <Link to="/key-milestones">
                    <Calendar className="mr-2 h-5 w-5" />
                    Our Journey - Key Milestones
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/businesses">
                    <ChevronRight className="mr-2 h-5 w-5" />
                    Explore Our Businesses
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Excellence</h3>
                <p className="text-muted-foreground text-sm">Committed to world-class standards</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">People First</h3>
                <p className="text-muted-foreground text-sm">Empowering our workforce</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Global Vision</h3>
                <p className="text-muted-foreground text-sm">International partnerships</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-playfair font-semibold text-lg mb-2">Sustainability</h3>
                <p className="text-muted-foreground text-sm">Responsible business practices</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Vision, Mission & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our foundational principles that guide every decision and drive our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized conglomerate that creates sustainable value through 
                innovation, excellence, and responsible business practices, setting new benchmarks 
                in industrial leadership.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-gold" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build diversified businesses that contribute to economic growth while maintaining 
                the highest standards of quality, safety, and environmental stewardship, creating 
                value for all stakeholders.
              </p>
            </Card>
            
            <Card className="p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrity, Innovation, Excellence, Sustainability, and People First - these values 
                guide our decisions, shape our corporate culture, and define our commitment to society.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* MD's Message */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Managing Director - Nikhil Merchant" 
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <span className="text-gold font-semibold uppercase tracking-wider">Leadership Message</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Message from the Managing Director
              </h2>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "At Swan Corp, we believe that sustainable growth comes from balancing economic progress 
                with social responsibility. Our four-decade journey has been marked by strategic diversification, 
                technological advancement, and an unwavering commitment to our stakeholders."
              </blockquote>
              <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                "As we look towards the future, we remain focused on innovation, sustainability, and creating 
                value that extends beyond financial returns to encompass environmental stewardship and 
                community development."
              </blockquote>
              <div className="pt-4 border-t border-gray-200">
                <div className="font-semibold text-foreground text-lg">Nikhil Merchant</div>
                <div className="text-muted-foreground">Managing Director & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our C-suite executives who drive Swan Corp's strategic vision and operational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto md:mx-0"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <div className="text-primary font-semibold mb-4">{leader.position}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {leader.overview}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones CTA */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Four Decades of Excellence
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Discover the key milestones that have shaped Swan Corp's journey from a single textile unit 
            to a diversified industrial conglomerate
          </p>
          <Button asChild variant="secondary" size="lg" className="mb-4">
            <Link to="/key-milestones">
              <Calendar className="mr-2 h-5 w-5" />
              Explore Our Journey - Key Milestones
            </Link>
          </Button>
        </div>
      </section>

      {/* CSR */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="text-gold font-semibold uppercase tracking-wider">Corporate Social Responsibility</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Commitment to Society
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Swan Corp's CSR initiatives focus on education, healthcare, environmental conservation, 
                and community development. We believe in creating shared value that benefits society 
                while strengthening our business.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">₹50 Cr</div>
                  <div className="text-sm text-muted-foreground">Annual CSR Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1M+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
              <Button asChild variant="default" size="lg">
                <Link to="/csr">
                  <Heart className="mr-2 h-5 w-5" />
                  Learn More About Our CSR
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Education</h4>
                <p className="text-muted-foreground text-sm">Scholarship programs and school infrastructure development</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Healthcare</h4>
                <p className="text-muted-foreground text-sm">Mobile medical units and rural healthcare initiatives</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Environment</h4>
                <p className="text-muted-foreground text-sm">Tree plantation and renewable energy projects</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Community</h4>
                <p className="text-muted-foreground text-sm">Skill development and women empowerment programs</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;