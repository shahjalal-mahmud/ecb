import { useState, useEffect, useRef } from 'react';
import { Bell, Megaphone, Pause, Play } from 'lucide-react';

const LatestNews = () => {
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef(null);

  const newsItems = [
    "Hiring campus ambassadors.",
    "Participant registration will start very soon.",
    "The event will cover all over Bangladesh.",
    "Stay tuned for more updates.",
    "Edvoy – helping students pursue their study-abroad dreams.",
    "Unlock your campus ambassador potential!"
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...newsItems, ...newsItems];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    if (isPaused) {
      ticker.style.animationPlayState = 'paused';
    } else {
      ticker.style.animationPlayState = 'running';
    }
  }, [isPaused]);

  return (
    <div className="relative bg-gradient-to-r from-[#004AAD]/10 to-[#FF6B00]/10 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg overflow-hidden mt-2">
      {/* Main Container */}
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Left Side - Latest News Badge */}
        <div className="flex items-center gap-3 z-10">
          {/* Animated Bell Icon */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-20" />
            <div className="relative bg-gradient-to-br from-[#004AAD] to-[#1E40AF] p-2 rounded-full shadow-lg">
              <Bell size={18} className="text-white" />
            </div>
          </div>
          
          {/* Latest News Label */}
          <div className="flex flex-col">
            <span className="font-poppins font-bold text-sm text-[#004AAD] uppercase tracking-wider">
              Latest News
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#004AAD] to-[#FF6B00] rounded-full" />
          </div>
        </div>

        {/* Right Side - News Ticker */}
        <div className="flex-1 ml-8 overflow-hidden">
          <div className="relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />
            
            {/* Animated Ticker */}
            <div
              ref={tickerRef}
              className="flex items-center space-x-8 animate-marquee whitespace-nowrap"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {duplicatedItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center space-x-8"
                >
                  <span className="font-inter font-medium text-gray-700 text-sm lg:text-base tracking-wide">
                    {item}
                  </span>
                  {/* Separator */}
                  <div className="w-2 h-2 bg-[#FF6B00] rounded-full opacity-60" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-4 p-2 text-[#004AAD] hover:text-[#FF6B00] transition-colors duration-200 rounded-full hover:bg-white/50 z-10"
          aria-label={isPaused ? 'Play animation' : 'Pause animation'}
        >
          {isPaused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          animation-play-state: running;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

// Alternative version with different animation approach using Tailwind config
const NewsTickerAlternative = () => {
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    "Hiring campus ambassadors.",
    "Participant registration will start very soon.",
    "The event will cover all over Bangladesh.",
    "Stay tuned for more updates.",
    "Edvoy – helping students pursue their study-abroad dreams.",
    "Unlock your campus ambassador potential!"
  ];

  return (
    <div className="w-full bg-gradient-to-r from-[#004AAD]/15 to-[#FF6B00]/15 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(0,74,173,0.15)] border border-white/30 overflow-hidden">
      <div className="flex items-center px-6 py-4">
        
        {/* Brand Badge */}
        <div className="flex items-center gap-3 shrink-0 mr-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#FF6B00] rounded-full animate-ping opacity-30" />
            <div className="relative bg-white p-2 rounded-xl shadow-lg border border-[#004AAD]/10">
              <Megaphone size={18} className="text-[#004AAD]" />
            </div>
          </div>
          <div>
            <h3 className="font-poppins font-bold text-[#004AAD] text-sm uppercase tracking-wider">
              Announcements
            </h3>
            <div className="w-full h-0.5 bg-gradient-to-r from-[#004AAD] to-[#FF6B00] rounded-full mt-1" />
          </div>
        </div>

        {/* Ticker Container */}
        <div className="flex-1 overflow-hidden relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Marquee */}
          <div 
            className={`flex space-x-8 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-8 shrink-0">
                <span className="font-inter font-semibold text-gray-800 text-sm lg:text-base tracking-wide py-1">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 bg-[#004AAD] rounded-full opacity-50" />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {newsItems.map((item, index) => (
              <div key={`dup-${index}`} className="flex items-center space-x-8 shrink-0">
                <span className="font-inter font-semibold text-gray-800 text-sm lg:text-base tracking-wide py-1">
                  {item}
                </span>
                <div className="w-1.5 h-1.5 bg-[#004AAD] rounded-full opacity-50" />
              </div>
            ))}
          </div>
        </div>

        {/* Control */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="ml-6 p-2 bg-white/80 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 shrink-0"
          aria-label={isPaused ? 'Resume ticker' : 'Pause ticker'}
        >
          {isPaused ? (
            <Play size={16} className="text-[#004AAD]" />
          ) : (
            <Pause size={16} className="text-[#004AAD]" />
          )}
        </button>
      </div>

      {/* Tailwind Animation Configuration */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-pause {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LatestNews;