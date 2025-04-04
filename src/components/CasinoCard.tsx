import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';
import type { Casino } from '@/data/casinoData';
// import { Link } from 'react-router-dom';

interface CasinoCardProps {
  casino: Casino;
}

const CasinoCard: React.FC<CasinoCardProps> = ({ casino }) => {

  return (
    <Card 
      className="glass-card group overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transform hover:-translate-y-2"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Casino logo and rating */}
        <div className="flex justify-between items-start mb-6">
          <div className="bg-white/10 p-1 rounded-lg w-16 h-16 flex items-center justify-center">
            <img src={casino.logo} alt={casino.name} className="max-w-full max-h-full" />
          </div>
          <div className="flex items-center">
            <Star className="text-casino-gold h-5 w-5 mr-1 fill-casino-gold" />
            <span className="text-white font-semibold">{casino.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Casino name and description */}
        <h3 className="text-xl font-bold font-serif mb-2 text-white group-hover:text-casino-gold transition-colors">
          {casino.name}
        </h3>
        <p className="text-white/70 mb-4 flex-grow">
          {casino.description}
        </p>

        {/* Bonus offer */}
        <div className="bg-casino-gold/10 border border-casino-gold/20 rounded-lg p-4 mb-4">
          <h4 className="text-sm uppercase font-semibold text-casino-gold mb-1">Bonus Offer</h4>
          <p className="text-white font-medium">{casino.bonusOffer}</p>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {casino.features.map((feature, index) => (
              <span 
                key={index} 
                className="text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/70"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <Button 
          className="w-full  bg-casino-red hover:bg-casino-darkRed text-white flex items-center justify-center gap-2 group-hover:animate-pulse-gold"
        >
          <a href={`/redirect?id=${casino.url}`} target='_blank' rel='noopener noreferrer' 
           className='flex items-center justify-center gap-2'>   
            Try Your Luck 💸<ExternalLink size={16} />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default CasinoCard;
