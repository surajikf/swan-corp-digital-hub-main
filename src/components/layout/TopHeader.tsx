import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Globe, 
  Phone, 
  ChevronDown, 
  X,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';

const TopHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English', flag: '🇺🇸' },
    { code: 'HI', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'GU', name: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'MR', name: 'मराठी', flag: '🇮🇳' }
  ];

  const globalPresence = [
    { country: 'India', cities: ['Mumbai', 'Delhi', 'Chennai', 'Bangalore'] },
    { country: 'UAE', cities: ['Dubai', 'Abu Dhabi'] },
    { country: 'Singapore', cities: ['Singapore'] },
    { country: 'UK', cities: ['London'] }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="bg-primary-dark text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-sm">
          {/* Left Section - Ticker & Global Presence */}
          <div className="flex items-center space-x-6">
            {/* Ticker Symbol */}
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span className="font-mono font-bold text-gold">SWAN</span>
              <span className="text-xs text-gray-300">₹1,247.50</span>
              <span className="text-xs text-green-400">+2.45%</span>
              <span className="text-xs text-gray-300">NSE: SWANCORP</span>
            </div>

            {/* Global Presence Link */}
            <Link
              to="/global-presence"
              className="flex items-center space-x-1 hover:text-gold transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>Global Presence</span>
            </Link>
          </div>

          {/* Right Section - Language, Search, Contact */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-gold transition-colors"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span>{languages.find(lang => lang.code === selectedLanguage)?.flag}</span>
                <span>{selectedLanguage}</span>
                <ChevronDown className="h-3 w-3" />
              </button>
              
              {/* Language Dropdown */}
              {isLanguageOpen && (
                <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-lg border border-border mt-1 z-50">
                  <div className="py-2">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-primary hover:text-white transition-colors ${
                          selectedLanguage === language.code ? 'bg-primary text-white' : 'text-foreground'
                        }`}
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          setIsLanguageOpen(false);
                        }}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="relative">
              <button
                className="flex items-center space-x-1 hover:text-gold transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              
              {/* Search Overlay */}
              {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20">
                  <div className="w-full max-w-2xl mx-4">
                    <form onSubmit={handleSearch} className="relative">
                      <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search for businesses, news, careers..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-12 pr-12 py-4 text-lg bg-white rounded-lg border-0 focus:ring-2 focus:ring-primary focus:outline-none"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={() => setIsSearchOpen(false)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2"
                        >
                          <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <Link 
              to="/contact"
              className="flex items-center space-x-1 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;