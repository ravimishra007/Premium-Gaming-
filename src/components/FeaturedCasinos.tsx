
import React from 'react';
import CasinoCard from './CasinoCard';
import { casinoData } from '@/data/casinoData';

const FeaturedCasinos = () => {
  return (
    <section id="featured" className="container-padding relative">
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-casino-red/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-casino-gold/5 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">
            {/* <span className="gold-text">Featured</span> Casinos */}
            <span className="gold-text">Featured</span> Games
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium games offering the best bonuses, 
            game variety, and overall player experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casinoData.map((casino) => (
            <CasinoCard key={casino.id} casino={casino} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCasinos;
