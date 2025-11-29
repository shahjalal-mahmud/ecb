import React from 'react';

const Vision = () => {
  const visionPoints = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Leading Carnival",
      description: "To be the leading English language carnival in Bangladesh, inspiring a nation of confident communicators."
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
        </svg>
      ),
      title: "Sustainable Platform",
      description: "To create a sustainable platform for lifelong English language learning and development."
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Regional Excellence Hub",
      description: "To position Bangladesh as a hub of English language excellence in the region."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaping the future of English language education in Bangladesh
          </p>
        </div>

        {/* Main Vision Card */}
        <div className="relative mb-12">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-20"></div>
          
          {/* Main container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-2xl shadow-lg">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Building a Future of Confident Communicators
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a Bangladesh where every individual has the confidence and capability to express themselves fluently in English, 
                opening doors to global opportunities and fostering international understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Points - Stepper Layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 to-indigo-300 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-8 md:space-y-12">
            {visionPoints.map((point, index) => (
              <div
                key={point.id}
                className={`group relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-6 md:mb-0`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 text-white rounded-xl flex items-center justify-center shadow-md">
                          {point.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">
                          {point.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Indicator */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;