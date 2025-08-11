import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Businesses', href: '/businesses' },
    { label: 'Investors', href: '/investors' },
    { label: 'Careers', href: '/careers' },
    { label: 'Media', href: '/media' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const businessVerticals = [
    { label: 'Manufacturing', href: '/businesses/manufacturing' },
    { label: 'Real Estate', href: '/businesses/real-estate' },
    { label: 'Defence', href: '/businesses/defence' },
    { label: 'Energy', href: '/businesses/energy' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
    { label: 'Investor Grievances', href: '/investors/grievances' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-playfair font-bold">Swan Corp</span>
                <span className="text-sm text-gold">Building Tomorrow</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A leading Indian conglomerate with diversified business interests across manufacturing, 
              real estate, defence, and energy sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-sm">+91 22 6666 7777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-sm">info@swancorp.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Verticals */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">Our Businesses</h3>
            <ul className="space-y-3">
              {businessVerticals.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-playfair font-semibold mb-6 text-gold">Legal & Social</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-primary hover:bg-gold transition-colors duration-300 rounded-lg"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-300">
              © {currentYear} Swan Corp. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-300">
                CIN: L17110GJ1980PLC003924 | BSE: 533202 | NSE: SWAN
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;