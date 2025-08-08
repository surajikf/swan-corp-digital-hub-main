import React from 'react';
import Layout from '@/components/layout/Layout';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const offices = [
    {
      title: 'Corporate Headquarters',
      address: 'Swan Corp House, Nariman Point, Mumbai - 400021, Maharashtra',
      phone: '+91 22 6666 7777',
      email: 'info@swancorp.in',
      type: 'Head Office'
    },
    {
      title: 'Manufacturing Unit - Gujarat',
      address: 'Swan Industrial Estate, GIDC Ankleshwar, Gujarat - 393001',
      phone: '+91 2646 123456',
      email: 'manufacturing@swancorp.in',
      type: 'Manufacturing'
    },
    {
      title: 'Defence Shipyard - Goa',
      address: 'Swan Defence Harbour, Vasco da Gama, Goa - 403802',
      phone: '+91 832 123456',
      email: 'defence@swancorp.in',
      type: 'Defence'
    },
    {
      title: 'Energy Division - Chennai',
      address: 'Swan Energy Complex, Ennore Port, Chennai - 600057, Tamil Nadu',
      phone: '+91 44 6666 7777',
      email: 'energy@swancorp.in',
      type: 'Energy'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
            Contact <span className="text-gold">Swan Corp</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get in touch with our team across India for business inquiries and partnerships
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto container-padding -mt-16 relative z-10">
        {/* Contact Form */}
        <section className="mb-16">
          <Card className="p-8 shadow-xl">
            <h2 className="text-2xl font-playfair font-bold text-foreground mb-6 text-center">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Enter your company name" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Inquiry Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business Enquiry</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="investment">Investment</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="careers">Careers</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Business Vertical
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business vertical" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="defence">Defence</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                      <SelectItem value="petrochemicals">Petrochemicals</SelectItem>
                      <SelectItem value="offshore">Offshore Fabrication</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your inquiry..." 
                  className="min-h-[120px]"
                />
              </div>

              <Button variant="corporate" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </section>

        {/* Office Locations */}
        <section>
          <h2 className="text-3xl font-playfair font-bold text-foreground mb-8 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-playfair font-semibold text-lg text-foreground">
                        {office.title}
                      </h3>
                      <span className="bg-gold/10 text-gold px-2 py-1 rounded text-xs font-medium">
                        {office.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;