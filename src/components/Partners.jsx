import React from 'react';

const Partners = () => {
  const partners = [
    // Skill Partners
    {
      id: 1,
      name: "Grameenphone Academy",
      category: "Skill Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center leading-tight">
          GP Academy
        </div>
      )
    },
    {
      id: 2,
      name: "Keeron",
      category: "Skill Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          K
        </div>
      )
    },
    {
      id: 3,
      name: "BrioLearn",
      category: "Skill Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center leading-tight">
          BrioLearn
        </div>
      )
    },
    {
      id: 4,
      name: "SkillForge",
      category: "Skill Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center">
          SF
        </div>
      )
    },

    // Knowledge Partners
    {
      id: 5,
      name: "Aston University",
      category: "Knowledge Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Aston Uni
        </div>
      )
    },
    {
      id: 6,
      name: "Pearson PTE",
      category: "Knowledge Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
          PTE
        </div>
      )
    },
    {
      id: 7,
      name: "TOEFL",
      category: "Knowledge Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          T
        </div>
      )
    },
    {
      id: 8,
      name: "Oxford ELLT",
      category: "Knowledge Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Oxford ELLT
        </div>
      )
    },
    {
      id: 9,
      name: "Global English Institute",
      category: "Knowledge Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          GEI
        </div>
      )
    },

    // Media Partners
    {
      id: 10,
      name: "The Daily Star",
      category: "Media Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Daily Star
        </div>
      )
    },
    {
      id: 11,
      name: "Youth Wave",
      category: "Media Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center">
          YW
        </div>
      )
    },
    {
      id: 12,
      name: "Tech Insights",
      category: "Media Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Tech Insights
        </div>
      )
    },
    {
      id: 13,
      name: "Star Campus",
      category: "Media Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-lime-600 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Star Campus
        </div>
      )
    },

    // Strategic Partners
    {
      id: 14,
      name: "Digital Bangladesh",
      category: "Strategic Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center text-white font-bold text-xs text-center leading-tight">
          Digital BD
        </div>
      )
    },
    {
      id: 15,
      name: "EdTech Hub",
      category: "Strategic Partner",
      logo: (
        <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-sm text-center">
          ETH
        </div>
      )
    }
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(30deg, transparent 49%, rgba(59, 130, 246, 0.3) 50%, transparent 51%),
                             linear-gradient(150deg, transparent 49%, rgba(139, 92, 246, 0.3) 50%, transparent 51%)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proudly collaborating with global leaders, innovators, and educators
          </p>
        </div>

        {/* Infinite Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-50 via-purple-50/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Carousel */}
          <div className="overflow-hidden py-4">
            <div className="flex space-x-8 animate-scroll hover:animation-pause group">
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-64 group/item"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full">
                    {/* Logo Container */}
                    <div className="flex justify-center mb-4">
                      <div className="transform group-hover/item:scale-110 transition-transform duration-300">
                        {partner.logo}
                      </div>
                    </div>
                    
                    {/* Partner Info */}
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 text-sm mb-2 group-hover/item:text-gray-900 transition-colors line-clamp-2">
                        {partner.name}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-xs font-medium rounded-full border border-blue-200">
                        {partner.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
          width: max-content;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Partners;