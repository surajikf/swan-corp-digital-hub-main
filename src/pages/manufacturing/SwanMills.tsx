import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Factory, Award, Globe, TrendingUp, Filter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import manufacturingImg from '@/assets/manufacturing.jpg';

const SwanMills = () => {
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
    },
    { 
      name: 'Bamboo Blend Yarn', 
      count: '40s', 
      weave: 'Plain', 
      fabric: 'Bamboo-Cotton', 
      process: 'Ring Spun',
      application: 'Eco-friendly Apparel',
      image: manufacturingImg
    },
    { 
      name: 'Industrial Canvas', 
      count: '16s', 
      weave: 'Plain', 
      fabric: 'Cotton-Poly', 
      process: 'Open End',
      application: 'Industrial, Canvas',
      image: manufacturingImg
    }
  ];

  const filteredProducts = textileProducts.filter(product => {
    return (filterCount === 'all' || product.count === filterCount) &&
           (filterWeave === 'all' || product.weave === filterWeave) &&
           (filterFabric === 'all' || product.fabric === filterFabric) &&
           (filterProcess === 'all' || product.process === filterProcess);
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={manufacturingImg} 
            alt="Swan Mills Textile Manufacturing" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto container-padding text-center text-white">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Factory className="h-12 w-12 text-gold" />
            <span className="text-gold font-semibold text-lg uppercase tracking-wider">Swan Mills</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Textile <span className="text-gold">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8">
            Leading textile manufacturer producing premium cotton and blended yarns 
            with advanced spinning technology and sustainable practices
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">50,000</div>
              <div className="text-sm text-gray-300">Spindles Capacity</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">40+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-gold mb-1">100+</div>
              <div className="text-sm text-gray-300">Product Varieties</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Swan Mills Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Swan Mills represents four decades of textile manufacturing excellence, combining 
              traditional craftsmanship with cutting-edge technology to produce world-class 
              cotton and blended yarns for diverse applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Infrastructure & Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Advanced Spinning Technology</div>
                    <div className="text-sm text-muted-foreground">50,000 spindles with latest ring spinning and compact spinning systems</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Quality Control Laboratory</div>
                    <div className="text-sm text-muted-foreground">State-of-the-art testing facility with international standards (ASTM, ISO)</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Sustainable Manufacturing</div>
                    <div className="text-sm text-muted-foreground">Zero liquid discharge, solar power, and eco-friendly processes</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-foreground">Certified Processes</div>
                    <div className="text-sm text-muted-foreground">GOTS, OEKO-TEX, and ISO 9001 certified organic cotton processing</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover-lift">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Quality</h4>
                <p className="text-muted-foreground text-sm">ISO 9001:2015 Certified</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Globe className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Export</h4>
                <p className="text-muted-foreground text-sm">50+ Countries Served</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Capacity</h4>
                <p className="text-muted-foreground text-sm">24/7 Operations</p>
              </Card>
              <Card className="p-6 text-center hover-lift">
                <TrendingUp className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-playfair font-semibold text-lg mb-2">Growth</h4>
                <p className="text-muted-foreground text-sm">15% Annual Growth</p>
              </Card>
            </div>
          </div>

          {/* Expertise & Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-xl text-foreground mb-4">
                Product Range
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Cotton yarns from 16s to 80s count</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Blended yarns (Cotton-Polyester, Modal)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Technical textiles for automotive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">Organic and sustainable varieties</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-xl text-foreground mb-4">
                Applications
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Apparel & Fashion Industry</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Home Textiles & Furnishing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Industrial & Technical Textiles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Export Markets Worldwide</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h4 className="font-playfair font-semibold text-xl text-foreground mb-4">
                Certifications
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">ISO 9001:2015 Quality Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">GOTS Organic Cotton Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">OEKO-TEX Standard 100</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-sm">ISO 14001 Environmental Management</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Filtering & Endless Scroll */}
      <section className="section-padding bg-secondary">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
              Explore Our Textile Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our comprehensive range of cotton and blended yarns with advanced filtering options
            </p>
          </div>
          
          {/* Filters */}
          <Card className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-6 w-6 text-primary" />
              <h3 className="font-playfair font-semibold text-xl text-foreground">
                Filter Products
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <Label className="text-sm font-medium text-foreground mb-2">Count</Label>
                <Select value={filterCount} onValueChange={setFilterCount}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Counts" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Counts</SelectItem>
                    <SelectItem value="16s">16s</SelectItem>
                    <SelectItem value="20s">20s</SelectItem>
                    <SelectItem value="30s">30s</SelectItem>
                    <SelectItem value="40s">40s</SelectItem>
                    <SelectItem value="50s">50s</SelectItem>
                    <SelectItem value="60s">60s</SelectItem>
                    <SelectItem value="80s">80s</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-foreground mb-2">Weave</Label>
                <Select value={filterWeave} onValueChange={setFilterWeave}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Weaves" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Weaves</SelectItem>
                    <SelectItem value="Plain">Plain</SelectItem>
                    <SelectItem value="Twill">Twill</SelectItem>
                    <SelectItem value="Jacquard">Jacquard</SelectItem>
                    <SelectItem value="Satin">Satin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-foreground mb-2">Fabric</Label>
                <Select value={filterFabric} onValueChange={setFilterFabric}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Fabrics" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Fabrics</SelectItem>
                    <SelectItem value="Cotton">Cotton</SelectItem>
                    <SelectItem value="Poly-Cotton">Poly-Cotton</SelectItem>
                    <SelectItem value="Technical">Technical</SelectItem>
                    <SelectItem value="Organic Cotton">Organic Cotton</SelectItem>
                    <SelectItem value="Recycled">Recycled</SelectItem>
                    <SelectItem value="Bamboo-Cotton">Bamboo-Cotton</SelectItem>
                    <SelectItem value="Cotton-Poly">Cotton-Poly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium text-foreground mb-2">Process</Label>
                <Select value={filterProcess} onValueChange={setFilterProcess}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Processes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Processes</SelectItem>
                    <SelectItem value="Ring Spun">Ring Spun</SelectItem>
                    <SelectItem value="Open End">Open End</SelectItem>
                    <SelectItem value="Compact">Compact</SelectItem>
                    <SelectItem value="Compact Ring">Compact Ring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="p-4 hover-lift">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h4 className="font-playfair font-semibold text-lg text-foreground mb-2">
                  {product.name}
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex justify-between">
                    <span>Count:</span>
                    <span className="font-semibold">{product.count}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weave:</span>
                    <span className="font-semibold">{product.weave}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fabric:</span>
                    <span className="font-semibold">{product.fabric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Process:</span>
                    <span className="font-semibold">{product.process}</span>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mb-3">
                  <span className="font-semibold">Applications:</span> {product.application}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Request Quote
                </Button>
              </Card>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No products found matching the selected filters. Please adjust your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry Form CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <Card className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Product Enquiry
              </h2>
              <p className="text-lg text-muted-foreground">
                Get in touch with our textile experts for custom solutions and bulk orders
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Enter your company name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="product">Product Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select product type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cotton">Cotton Yarns</SelectItem>
                      <SelectItem value="blended">Blended Yarns</SelectItem>
                      <SelectItem value="technical">Technical Textiles</SelectItem>
                      <SelectItem value="organic">Organic Cotton</SelectItem>
                      <SelectItem value="custom">Custom Requirements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="quantity">Estimated Quantity</Label>
                  <Input id="quantity" placeholder="Enter estimated quantity" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="requirements">Detailed Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Please describe your specific requirements, including count, weave, application, etc."
                  rows={4}
                />
              </div>
              
              <div className="text-center">
                <Button size="lg" className="px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  Submit Enquiry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact our Swan Mills team for more information about our textile products and capabilities
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="text-sm text-gray-300">Swan Mills, Ankleshwar Industrial Estate, Gujarat 393002</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="text-sm text-gray-300">+91 26463 12345<br />+91 26463 12346</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-8 w-8 text-gold mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="text-sm text-gray-300">mills@swancorp.com<br />exports@swancorp.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SwanMills;