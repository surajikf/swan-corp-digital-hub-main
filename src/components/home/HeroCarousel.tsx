import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/enhanced-button';
import { useNavigate } from 'react-router-dom';

// Import hero images
import heroImage1 from '@/assets/hero-corporate.jpg';
import heroImage2 from '@/assets/manufacturing.jpg';
import heroImage3 from '@/assets/energy.jpg';
import heroImage4 from '@/assets/defence.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      id: 1,
      image: heroImage1,
      title: 'Building Tomorrow, Together',
      subtitle: 'A diversified Indian conglomerate with interests across manufacturing, real estate, defence, energy, and offshore fabrication.',
      ctaText: 'About Us',
      ctaLink: '/about',
      videoUrl: '/videos/corporate-overview.mp4'
    },
    {
      id: 4,
      image: heroImage4,
      title: 'Our Business Portfolio',
      subtitle: 'Explore our diverse business verticals across manufacturing, real estate, defence, and energy sectors.',
      ctaText: 'View All Businesses',
      ctaLink: '/businesses',
      videoUrl: '/videos/defence.mp4'
    },
    {
      id: 2,
      image: heroImage2,
      title: 'Manufacturing Excellence',
      subtitle: 'Advanced textile manufacturing, shipbuilding, and heavy engineering solutions with state-of-the-art facilities.',
      ctaText: 'Discover Manufacturing',
      ctaLink: '/businesses/manufacturing',
      videoUrl: '/videos/manufacturing.mp4'
    },
    {
      id: 3,
      image: heroImage3,
      title: 'Energy for the Future',
      subtitle: 'LNG terminals, petroleum trading, petrochemicals, and offshore solutions contributing to India\'s energy security.',
      ctaText: 'Explore Energy',
      ctaLink: '/businesses/energy',
      videoUrl: '/videos/energy.mp4'
    }
  ];

  useEffect(() => {
    if (isPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handlePlayPause = () => {
    if (isPaused) {
      setIsPaused(false);
    } else {
      setIsPaused(true);
    }
  };



  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          {/* Background Image/Video */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                <div className={`transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                    {slide.title.split(' ').map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`inline-block transition-all duration-700 delay-${500 + wordIndex * 100} ${
                          index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                </div>

                <div className={`transition-all duration-1000 delay-500 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>

                <div className={`transition-all duration-1000 delay-700 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="group"
                      onClick={() => navigate(slide.ctaLink)}
                    >
                      {slide.ctaText}
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button variant="corporate" size="xl" className="group" onClick={handlePlayPause}>
                      {isPaused ? (
                        <Play className="mr-2 h-5 w-5" />
                      ) : (
                        <Pause className="mr-2 h-5 w-5" />
                      )}
                      {isPaused ? 'Play Video' : 'Pause Video'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div
          className="h-full bg-gold transition-all duration-1000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
