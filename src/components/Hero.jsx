import React from 'react'
import { useInView } from 'react-intersection-observer'

const Hero = ({ onRegisterClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section 
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(236, 72, 153, 0.6) 100%), url("/hero-bg.jpg") center/cover'
      }}
    >
      {/* Decorative SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-10 left-10 w-20 h-20 text-ecb-yellow/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-20 w-16 h-16 text-ecb-pink/20" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <svg className="absolute top-1/3 right-1/4 w-12 h-12 text-ecb-violet/20" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
            English Carnival
            <span className="block text-ecb-yellow">Bangladesh</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl font-inter font-semibold text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering Young Minds Through English
          </p>
          
          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join national events, build confidence, and connect with global opportunities. 
            Be part of Bangladesh's premier English education movement.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={onRegisterClick}
              className="btn btn-lg btn-gradient text-lg px-8 py-4 font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Participate Now
            </button>
            <button className="btn btn-lg btn-outline-primary text-lg px-8 py-4 font-semibold text-white border-white hover:bg-white hover:text-ecb-violet transform hover:scale-105 transition-all duration-200">
              Join the Team
            </button>
          </div>
          
          {/* Latest News Ticker */}
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4">
              <span className="font-semibold text-white text-sm uppercase tracking-wider">
                Latest News:
              </span>
              <div className="flex-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap">
                  <span className="text-white text-sm mx-4">
                    🎉 National English Olympiad 2024 registration is now open!
                  </span>
                  <span className="text-white text-sm mx-4">
                    📢 Call for volunteers for upcoming regional events
                  </span>
                  <span className="text-white text-sm mx-4">
                    🏆 Winners of the 2023 Speech Competition announced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero