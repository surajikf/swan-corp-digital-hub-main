import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="section-padding bg-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 100px,
            rgba(255,255,255,0.1) 100px,
            rgba(255,255,255,0.1) 200px
          )`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <span className="text-gold font-semibold text-sm uppercase tracking-wider">Swan Corp Story</span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
              Watch Our Journey of
              <span className="text-gold block">Excellence & Innovation</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how Swan Corp has transformed from a single textile unit in 1980 
              to becoming one of India's most diversified and respected conglomerates.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">40+</div>
                <div className="text-gray-300 text-sm">Years of Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">6</div>
                <div className="text-gray-300 text-sm">Business Verticals</div>
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary-light aspect-video">
              {/* Video Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark to-primary flex items-center justify-center">
                <div className="text-center">
                  <div 
                    className={`w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                      isPlaying ? 'bg-white/20' : 'bg-white/10'
                    }`}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8 text-white ml-0" />
                    ) : (
                      <Play className="h-8 w-8 text-white ml-1" />
                    )}
                  </div>
                  <p className="text-white/80 text-sm mt-4">Corporate Overview Video</p>
                  <p className="text-white/60 text-xs">2 minutes</p>
                </div>
              </div>
              
              {/* Progress Bar (when playing) */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <div className="h-full bg-gold w-1/3 animate-pulse"></div>
                </div>
              )}
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;