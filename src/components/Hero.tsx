
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-casino-black via-casino-black/90 to-casino-black z-0"></div>

      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-casino-red/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-casino-gold/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-casino-red/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Card symbols floating in background */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        {['♠', '♥', '♦', '♣'].map((symbol, index) => (
          <div 
            key={index}
            className="absolute text-6xl animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="gold-text">Premium</span> Gaming Experience
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
            Discover exclusive casino platforms offering the most rewarding bonuses 
            and thrilling gaming experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button className="btn-primary text-lg px-8 py-6">
              Explore Casinos
            </Button>
            <Button variant="outline" className="border-casino-gold text-casino-gold hover:bg-casino-gold hover:text-casino-black text-lg px-8 py-6">
              View Bonuses
            </Button>
          </div>

          <button 
            onClick={scrollToFeatured}
            className="animate-bounce mt-16 p-2 rounded-full border border-casino-gold/50 text-casino-gold"
            aria-label="Scroll down"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
