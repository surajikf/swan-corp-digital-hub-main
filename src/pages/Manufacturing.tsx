import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { 
  Factory, 
  Ship, 
  Settings, 
  Award, 
  MapPin, 
  Users, 
  TrendingUp, 
  ExternalLink,
  Filter,
  Search,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import manufacturingImg from '@/assets/manufacturing.jpg';
import defenceImg from '@/assets/defence.jpg';

const Manufacturing = () => {
  const [filterCount, setFilterCount] = useState('all');
  const [filterWeave, setFilterWeave] = useState('all');
  const [filterFabric, setFilterFabric] = useState('all');
  const [filterProcess, setFilterProcess] = useState('all');

  const textileProducts = [
    { 
      name: 'Premium Cotton Fabric', 
      count: '40s', 
      weave: 'Plain', 
      fabric: 'Cotton', 
      process: 'Ring Spun',
      application: 'Apparel, Home Textiles',
      image: manufacturingImg
    },
    { 
      name: 'Blended Polyester', 
      count: '30s', 
      weave: 'Twill', 
      fabric: 'Poly-Cotton', 
      process: 'Open End',
      application: 'Industrial, Workwear',
      image: manufacturingImg
    },
    { 
      name: 'High-Performance Technical Fabric', 
      count: '60s', 
      weave: 'Jacquard', 
      fabric: 'Technical', 
      process: 'Compact',
      application: 'Technical, Automotive',
      image: manufacturingImg
    },
    { 
      name: 'Organic Cotton Yarn', 
      count: '50s', 
      weave: 'Plain', 
      fabric: 'Organic Cotton', 
      process: 'Ring Spun',
      application: 'Premium Apparel',
      image: manufacturingImg
    },
    { 
      name: 'Recycled Fiber Blend', 
      count: '20s', 
      weave: 'Twill', 
      fabric: 'Recycled', 
      process: 'Open End',
      application: 'Sustainable Fashion',
      image: manufacturingImg
    },
    { 
      name: 'Ultra-Fine Cotton', 
      count: '80s', 
      weave: 'Satin', 
      fabric: 'Cotton', 
      process: 'Compact Ring',
      application: 'Luxury Textiles',
      image: manufacturingImg
    }
  ];

  const filteredProducts = textileProducts.filter(product => {
    return (filterCount === 'all' || product.count === filterCount) &&
           (filterWeave === 'all' || product.weave === filterWeave) &&
           (filterFabric === 'all' || product.fabric === filterFabric) &&
           (filterProcess === 'all' || product.process === filterProcess);
  });

  const facilities = [
    {
      name: 'Swan Mills - Gujarat',
      location: 'Ankleshwar, Gujarat',
      type: 'Textile Manufacturing',
      capacity: '50,000 spindles',
      products: 'Cotton & Blended Yarns',
      certifications: ['ISO 9001', 'GOTS', 'OEKO-TEX']
    },
    {
      name: 'SDHI Shipyard - Goa',
      location: 'Vasco da Gama, Goa',
      type: 'Shipbuilding & Repair',
      capacity: '2 Dry Docks',
      products: 'Naval Vessels, Commercial Ships',
      certifications: ['ISO 14001', 'OHSAS 18001', 'Defence Quality Standard']
    },
    {
      name: 'Heavy Engineering - Mumbai',
      location: 'JNPT, Mumbai',
      type: 'Heavy Fabrication',
      capacity: '50,000 MT/Year',
      products: 'Offshore Structures, Industrial Equipment',
      certifications: ['API Q1', 'ISO 3834', 'CE Marking']
    }
  ];

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={manufacturingImg} 
            alt="Swan Manufacturing Facilities" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Factory className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Manufacturing Division</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Excellence in <span className="text-gold">Manufacturing</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Advanced textile manufacturing, shipbuilding, and heavy engineering solutions 
            powered by innovation and precision
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">40+</div>
              <div className="text-sm text-gray-300">Years of Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">3</div>
              <div className="text-sm text-gray-300">Manufacturing Units</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">₹3,000 Cr</div>
              <div className="text-sm text-gray-300">Annual Revenue</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto container-padding">
        {/* Overview */}
        <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Swan Manufacturing Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Swan Corp's manufacturing division represents four decades of industrial excellence, 
              spanning textile manufacturing, naval shipbuilding, and heavy engineering. Our 
              state-of-the-art facilities combine traditional craftsmanship with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                Quality Excellence
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                ISO certified facilities ensuring world-class quality standards across all manufacturing processes.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                Skilled Workforce
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over 2,000 skilled professionals driving innovation and operational excellence.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-lift">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-playfair font-semibold text-lg text-foreground mb-3">
                Continuous Growth
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Consistent expansion and modernization to meet evolving market demands.
              </p>
            </Card>
          </div>
        </section>

        {/* Business Units */}
        <section className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Our Manufacturing Divisions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our specialized manufacturing capabilities across textile, shipbuilding, and cargo scanning equipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Textile - Swan Mills */}
            <Card className="p-8 hover-lift cursor-pointer group" onClick={() => window.location.href = '/manufacturing/swan-mills'}>
              <div className="relative mb-6">
                <img 
                  src={manufacturingImg} 
                  alt="Swan Mills Textile Manufacturing" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Factory className="h-8 w-8 mb-2" />
                  <h3 className="font-playfair font-bold text-xl">Swan Mills</h3>
                  <p className="text-sm">Textile Excellence</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-playfair font-semibold text-lg text-foreground">
                  Premium Textile Manufacturing
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced spinning technology producing premium cotton and blended yarns with sustainable practices and international quality standards.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    50,000 spindles capacity
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    GOTS & OEKO-TEX certified
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    Endless product filtering
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Explore Swan Mills →
                </Button>
              </div>
            </Card>

            {/* Shipbuilding - SDHI */}
            <Card className="p-8 hover-lift cursor-pointer group" onClick={() => window.location.href = '/manufacturing/sdhi'}>
              <div className="relative mb-6">
                <img 
                  src={defenceImg} 
                  alt="SDHI Shipbuilding" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Ship className="h-8 w-8 mb-2" />
                  <h3 className="font-playfair font-bold text-xl">SDHI</h3>
                  <p className="text-sm">Naval Excellence</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-playfair font-semibold text-lg text-foreground">
                  Shipbuilding & Heavy Engineering
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading shipyard specializing in naval vessel construction, ship repair, and heavy engineering for defense and commercial applications.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    2 dry dock facilities
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    Defense quality standards
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    50+ vessels delivered
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Explore SDHI →
                </Button>
              </div>
            </Card>

            {/* Cargo Scanning - Varex */}
            <Card className="p-8 hover-lift cursor-pointer group" onClick={() => window.location.href = '/manufacturing/varex'}>
              <div className="relative mb-6">
                <img 
                  src={defenceImg} 
                  alt="Varex Cargo Scanning" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Settings className="h-8 w-8 mb-2" />
                  <h3 className="font-playfair font-bold text-xl">Varex</h3>
                  <p className="text-sm">Security Systems</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-playfair font-semibold text-lg text-foreground">
                  Cargo Scanning Equipment
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Advanced X-ray cargo scanning systems for ports, airports, and border security with cutting-edge detection technology.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    9 MeV X-ray technology
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    90+ systems deployed
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    15+ countries served
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Explore Varex →
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Manufacturing;