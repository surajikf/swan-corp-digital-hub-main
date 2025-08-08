import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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

  const navigationItems = [
    {
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'Overview', href: '/about' },
        { label: 'Leadership Team', href: '/about/leadership' },
        { label: 'Our Journey', href: '/about/milestones' },
        { label: 'CSR', href: '/about/csr' },
      ]
    },
    {
      label: 'Businesses',
      href: '/businesses',
      dropdown: [
        { label: 'Manufacturing', href: '/businesses/manufacturing' },
        { label: 'Real Estate', href: '/businesses/real-estate' },
        { label: 'Defence', href: '/businesses/defence' },
        { label: 'Energy', href: '/businesses/energy' },
        { label: 'Petrochemicals', href: '/businesses/petrochemicals' },
        { label: 'Offshore Fabrication', href: '/businesses/offshore' },
      ]
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
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button variant="corporate" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
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
              <div className="px-4 pt-4 border-t border-border">
                <Button variant="corporate" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default MainHeader;