import React, { useState } from 'react';
import { Search, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const TopHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="bg-primary-dark text-white py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        {/* Ticker Symbol */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-medium">BSE:</span>
            <span className="text-gold font-semibold">533202</span>
            <span className="text-green-400">+2.45%</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <span className="font-medium">NSE:</span>
            <span className="text-gold font-semibold">SWAN</span>
            <span className="text-green-400">₹485.50</span>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6">
          {/* Global Presence */}
          <Link 
            to="/global-presence" 
            className="flex items-center space-x-2 hover:text-gold transition-colors duration-300"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">Global Presence</span>
          </Link>

          {/* Search */}
          <div className="relative">
            {!isSearchOpen ? (
              <div 
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center space-x-2 hover:text-gold transition-colors duration-300 cursor-pointer"
              >
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
              </div>
            ) : (
              <form onSubmit={handleSearch} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-40 h-8 text-sm bg-white/10 border-white/20 text-white placeholder:text-white/70"
                  autoFocus
                />
                <button type="submit" className="text-gold hover:text-white transition-colors">
                  <Search className="h-4 w-4" />
                </button>
                <button 
                  type="button"
                  onClick={() => {setIsSearchOpen(false); setSearchQuery('');}}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;