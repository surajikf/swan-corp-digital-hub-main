import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Factory, Building2, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessVerticals = [
    {
      title: 'Manufacturing',
      href: '/businesses/manufacturing',
      icon: Factory,
      description: 'Advanced textile manufacturing and heavy engineering solutions',
      subSectors: [
        { label: 'Textile Mills', href: '/businesses/manufacturing' },
        { label: 'Shipbuilding', href: '/businesses/manufacturing' },
        { label: 'Heavy Engineering', href: '/businesses/manufacturing' },
        { label: 'Varex Imaging', href: '/businesses/manufacturing/varex' },
        { label: 'SDHI Systems', href: '/businesses/manufacturing/sdhi' },
        { label: 'Swan Mills', href: '/businesses/manufacturing/swan-mills' }
      ]
    },
    {
      title: 'Real Estate',
      href: '/businesses/real-estate',
      icon: Building2,
      description: 'Premium residential and commercial development projects',
      subSectors: [
        { label: 'Residential Projects', href: '/businesses/real-estate' },
        { label: 'Commercial Development', href: '/businesses/real-estate' },
        { label: 'Smart Cities', href: '/businesses/real-estate' },
        { label: 'Infrastructure', href: '/businesses/real-estate' }
      ]
    },
    {
      title: 'Defence',
      href: '/businesses/defence',
      icon: Shield,
      description: 'Naval shipbuilding and defence manufacturing',
      subSectors: [
        { label: 'Naval Shipbuilding', href: '/businesses/defence' },
        { label: 'Vessel Repair', href: '/businesses/defence' },
        { label: 'Ammunition Manufacturing', href: '/businesses/defence' },
        { label: 'Defence Systems', href: '/businesses/defence' }
      ]
    },
    {
      title: 'Energy',
      href: '/businesses/energy',
      icon: Zap,
      description: 'LNG infrastructure, petrochemicals, and offshore solutions',
      subSectors: [
        { label: 'LNG & Energy Infrastructure', href: '/businesses/energy' },
        { label: 'Petrochemicals', href: '/businesses/energy' },
        { label: 'Offshore Fabrication', href: '/businesses/energy' },
        { label: 'Petroleum Trading', href: '/businesses/energy' }
      ]
    }
  ];

  const navigationItems = [
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Businesses',
      href: '/businesses',
      isMegaMenu: true,
      businessVerticals: businessVerticals
    },
    {
      label: 'Investors',
      href: '/investors'
    },
    {
      label: 'Careers',
      href: '/careers'
    },
    {
      label: 'Media',
      href: '/media'
    }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-playfair font-bold text-primary">Swan Corp</span>
              <span className="text-xs text-muted-foreground -mt-1">Building Tomorrow</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname.startsWith(item.href) 
                      ? 'text-primary border-b-2 border-primary' 
                      : 'text-foreground'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.isMegaMenu && <ChevronDown className="h-4 w-4" />}
                </Link>
                


                {/* Mega Menu for Businesses */}
                {item.isMegaMenu && (
                  <div className="absolute top-full left-0 w-screen max-w-6xl bg-white shadow-2xl rounded-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 -ml-32">
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {item.businessVerticals.map((business) => (
                          <div key={business.title} className="space-y-4">
                            {/* Business Header */}
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <business.icon className="h-5 w-5 text-primary" />
                              </div>
                              <div>
                                <h3 className="font-playfair font-semibold text-foreground">
                                  {business.title}
                                </h3>
                                <p className="text-xs text-muted-foreground mt-1">
                                  {business.description}
                                </p>
                              </div>
                            </div>

                            {/* Sub-sectors */}
                            <div className="space-y-2">
                              {business.subSectors.map((subSector) => (
                                <Link
                                  key={subSector.label}
                                  to={subSector.href}
                                  className="flex items-center justify-between group/item py-2 px-3 rounded-md hover:bg-primary/5 transition-colors duration-200"
                                >
                                  <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                                    {subSector.label}
                                  </span>
                                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover/item:text-primary transition-colors opacity-0 group-hover/item:opacity-100" />
                                </Link>
                              ))}
                            </div>

                            {/* View All Button */}
                            <div className="pt-2">
                              <Link
                                to={business.href}
                                className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                              >
                                View All {business.title}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg">
            <div className="py-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block px-4 py-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;