import React from 'react';

const CampusAmbassadorSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      {/* Enhanced Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-royal-blue/20 to-deep-purple/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 bg-gradient-to-r from-deep-purple/20 to-royal-blue/20 rounded-full blur-3xl animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-r from-royal-blue/15 to-purple-400/15 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse-medium"></div>
      </div>

      {/* Enhanced Geometric patterns */}
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-8 h-8 sm:w-12 sm:h-12 border-2 border-royal-blue/30 rounded-lg rotate-45 animate-float"></div>
      <div className="absolute bottom-20 left-10 sm:bottom-32 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 border-2 border-deep-purple/30 rounded-full animate-float-slower"></div>
      <div className="absolute top-32 left-10 sm:top-40 sm:left-40 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-royal-blue/40 to-deep-purple/40 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-10 right-32 w-5 h-5 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full animate-ping-slow"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="relative z-10 space-y-6 md:space-y-8 order-2 lg:order-1">
          {/* Main Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Are Hiring{' '}
              <span className="bg-gradient-to-r from-royal-blue to-deep-purple bg-clip-text text-transparent">
                Campus Ambassadors!
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
              Are you passionate about developing your leadership skills, expanding your network, and becoming a part of a dynamic community? English Carnival Bangladesh is looking for enthusiastic Campus Ambassadors to represent us at your institution. This is your chance to develop essential skills, gain valuable experience, and make a real impact on your campus.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-royal-blue to-deep-purple rounded-xl text-white font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-royal-blue/25 transform w-full sm:w-auto">
              <span className="relative z-10">Know More About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-deep-purple to-royal-blue rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-xl bg-white/20 blur-md group-hover:blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </button>
            
            <button className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-white/80 backdrop-blur-sm border border-royal-blue/20 rounded-xl text-royal-blue font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform w-full sm:w-auto">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-royal-blue/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 pt-4 md:pt-6">
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-royal-blue/10 to-royal-blue/20 rounded-xl flex items-center justify-center border border-royal-blue/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-royal-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700 font-medium">Leadership</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-deep-purple/10 to-deep-purple/20 rounded-xl flex items-center justify-center border border-deep-purple/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-deep-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700 font-medium">Communication</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-[120px]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500/10 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/20">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base text-gray-700 font-medium">Impact</span>
            </div>
          </div>
        </div>

        {/* Right Column - Image Container */}
        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="relative z-10">
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-royal-blue/30 to-deep-purple/30 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300 animate-pulse-slow"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                {/* Glass morphism frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-sm"></div>
                
                {/* Image Container */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center p-4 sm:p-6 md:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/5 via-purple-500/5 to-deep-purple/5"></div>
                  
                  {/* Abstract shapes behind the image */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-royal-blue/15 to-purple-400/15 rounded-full animate-float"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-400/15 to-deep-purple/15 rounded-lg rotate-45 animate-float-slower"></div>
                  
                  {/* Central Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img 
                      src="/hiring.png" 
                      alt="Campus Ambassador Program"
                      className="w-full h-full object-contain scale-90 group-hover:scale-95 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-gradient-to-r from-royal-blue to-deep-purple text-white px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-lg transform rotate-3 animate-float-slower">
              <div className="flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm sm:text-base font-semibold">Premium Opportunity</span>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-700 px-3 py-2 rounded-lg shadow-lg transform -rotate-6 animate-float">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-sm font-medium">Limited Spots</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator for mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-royal-blue/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CampusAmbassadorSection;