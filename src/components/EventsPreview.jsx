import React from 'react'
import { useInView } from 'react-intersection-observer'

const PartnersCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partners = [
    { name: "Ministry of Education", logo: "/partners/education-ministry.png" },
    { name: "British Council", logo: "/partners/british-council.png" },
    { name: "US Embassy", logo: "/partners/us-embassy.png" },
    { name: "University of Dhaka", logo: "/partners/du.png" },
    { name: "BRAC University", logo: "/partners/brac.png" },
    { name: "The Daily Star", logo: "/partners/daily-star.png" },
    { name: "Prothom Alo", logo: "/partners/prothom-alo.png" },
    { name: "Basis", logo: "/partners/basis.png" },
  ]

  return (
    <section id="partners" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ecb-dark mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading organizations to create maximum impact
            </p>
          </div>

          <div className="relative">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Carousel */}
            <div className="flex space-x-8 overflow-x-auto py-4 scrollbar-hide">
              {partners.map((partner, index) => (
                <div 
                  key={partner.name}
                  className="flex-shrink-0 w-40 h-20 bg-gray-100 rounded-xl flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    animation: inView ? `slideIn 0.5s ease-out ${index * 100}ms both` : 'none'
                  }}
                >
                  <div className="text-center">
                    <div className="font-semibold text-gray-600 text-sm">
                      {partner.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
            
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </section>
  )
}

export default PartnersCarousel