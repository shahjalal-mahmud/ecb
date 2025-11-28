import React from 'react'
import { useInView } from 'react-intersection-observer'

const CTABand = ({ onRegisterClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-ecb-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-ecb-pink rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-white mb-6">
            Ready to join the carnival?
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't miss this opportunity to enhance your English skills, build confidence, 
            and connect with like-minded peers across Bangladesh.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={onRegisterClick}
              className="btn btn-lg bg-white text-ecb-violet border-none hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 font-semibold px-8 py-4 text-lg"
            >
              Register Today!
            </button>
            
            <button className="btn btn-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-ecb-violet transform hover:scale-105 transition-all duration-200 font-semibold px-8 py-4 text-lg">
              Learn More
            </button>
          </div>
          
          <div className="mt-8 text-white/70 text-sm">
            <p>Limited spots available for upcoming events • Early registration recommended</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABand