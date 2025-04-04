
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCasinos from '@/components/FeaturedCasinos';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExclusiveClick = () => {
    toast({
      title: "Coming Soon!",
      description: "Exclusive offers will be available soon. Stay tuned!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-casino-black">
      <Navbar />
      <Hero />
      
      {/* Call to action section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-casino-black via-casino-black/95 to-casino-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-md mb-6">
              Get <span className="gold-text">Exclusive Access</span> to Premium Bonuses
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Sign up now to receive VIP bonuses and promotions from our featured casino partners.
              Our members receive up to 50% more in bonuses than standard players.
            </p>
            <Button 
              onClick={handleExclusiveClick}
              className="btn-primary"
            >
              Get Exclusive Bonuses
            </Button>
          </div>
        </div>
      </section>
      
      <FeaturedCasinos />
      
      {/* Why choose us section */}
      <section id="about" className="py-24 bg-gradient-to-b from-casino-black to-casino-black/95 relative">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-casino-red/5 filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-casino-gold/5 filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              Why Choose <span className="gold-text">GAMES</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're dedicated to finding and showcasing only the most prestigious and 
              reputable online casino platforms for our discerning users.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-casino-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 15 2 2 4-4"></path>
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Vetted Casinos</h3>
              <p className="text-white/70">
                We thoroughly review and verify all casinos for security, game fairness, and payment reliability.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-casino-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Exclusive Bonuses</h3>
              <p className="text-white/70">
                Access to special promotions and bonuses not available to the general public.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-casino-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fast Payouts</h3>
              <p className="text-white/70">
                We only recommend casinos with proven track records of quick and hassle-free withdrawals.
              </p>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-casino-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Expert Reviews</h3>
              <p className="text-white/70">
                Detailed analyses by our team of gambling experts with years of industry experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-casino-gold text-casino-black p-2 rounded-full shadow-lg hover:bg-casino-darkGold transition-all z-50"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default Index;
