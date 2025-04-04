export interface Casino {
  id: string;
  name: string;
  logo: string;
  description: string;
  rating: number;
  bonusOffer: string;
  url: string;
  features: string[];
}

export const casinoData: Casino[] = [
  {
    id: "royal-flush",
    name: "Royal Flush Casino",
    logo: "/casino.jpeg",
    description: "Tap into limited-time partner deals! Enjoy exclusive bonuses and special promotions available only for a short period. Don't miss out on these incredible offers!",
    rating: 4.9,
    bonusOffer: "300% Welcome Bonus up to $3000",
    url: "casino123",
    features: ["VIP Program", "24/7 Customer Support", "Fast Payouts", "1000+ Games"]
  },
  {
    id: "golden-palace",
    name: "Golden Palace",
    logo: "/casino.jpeg",
    description: "Tap into exclusive partner deals! Access VIP tables and high-stakes games with our premium partners. Experience luxury gaming at its finest!",
    rating: 4.8,
    bonusOffer: "200% Deposit Match + 100 Free Spins",
    url: "betworld",
    features: ["Live Dealers", "Mobile App", "Weekly Promotions", "Loyalty Rewards"]
  },
  {
    id: "diamond-club",
    name: "Diamond Club",
    logo: "/casino.jpeg",
    description: "Tap into premium partner deals! Discover elite tournaments and special events with our top-tier gaming partners. Elevate your gaming experience today!",
    rating: 4.7,
    bonusOffer: "$5000 High Roller Welcome Package",
    url: "casino123",
    features: ["High Stakes Tables", "Exclusive Tournaments", "Private Games", "Dedicated Host"]
  },
  {
    id: "vegas-elite",
    name: "Vegas Elite",
    logo: "/casino.jpeg",
    description: "Tap into special partner deals! Unlock unique rewards and bonus opportunities with our trusted partners. Your next big win could be just around the corner!",
    rating: 4.6,
    bonusOffer: "250% First Deposit + 50 Free Spins",
    url: "betworld",
    features: ["Slots Tournaments", "Progressive Jackpots", "Crypto Payments", "Weekend Races"]
  },
  {
    id: "fortune-lounge",
    name: "Fortune Lounge",
    logo: "/casino.jpeg",
    description: "Tap into VIP partner deals! Get priority access to exclusive games and personalized service with our premium partners. Experience the ultimate in gaming luxury!",
    rating: 4.5,
    bonusOffer: "100% Welcome Bonus up to $1000 + 200 Free Spins",
    url: "casino123",
    features: ["Table Game Variety", "Daily Bonuses", "Fast Verification", "Secure Banking"]
  },
  {
    id: "platinum-kings",
    name: "Platinum Kings",
    logo: "/casino.jpeg",
    description: "Tap into luxury partner deals! Indulge in high-end gaming experiences with our elite partners. Enjoy the finest selection of games and rewards!",
    rating: 4.8,
    bonusOffer: "$2000 Welcome Package + 150 Free Spins",
    url: "betworld",
    features: ["No Wagering Bonuses", "Fast Withdrawals", "Weekend Cashback", "Exclusive Slots"]
  }
];
