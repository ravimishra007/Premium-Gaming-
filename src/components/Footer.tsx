
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-casino-black border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif gold-text mb-4">GAMES</h3>
            <p className="text-white/70 mb-4">
              Your premier destination for discovering the best online gaming experiences. We curate only the finest and most reputable casino platforms.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-casino-gold transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-casino-gold transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-casino-gold transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#featured" className="text-white/60 hover:text-casino-gold transition-colors">Featured Casinos</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Bonuses</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Game Guides</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Responsible Gaming</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-casino-gold transition-colors">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-white/60 mb-4">Subscribe to get updates on new casinos and exclusive bonus offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 text-white rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-casino-gold"
              />
              <button 
                type="submit" 
                className="bg-casino-gold hover:bg-casino-darkGold text-casino-black rounded-r-lg px-4 py-2 font-medium"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 text-center text-white/40 text-sm">
          <p>© 2025 GAMES. All rights reserved. This website is for entertainment purposes only.</p>
          <p className="mt-2">Gambling involves risk. Please gamble responsibly and only bet what you can afford to lose.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
