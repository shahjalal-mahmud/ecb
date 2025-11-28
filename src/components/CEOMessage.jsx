import React from 'react'
import { useInView } from 'react-intersection-observer'

const CEOMessage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-effect rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CEO Image */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                    <div className="w-60 h-60 bg-white rounded-full flex items-center justify-center">
                      <div className="w-56 h-56 bg-gray-200 rounded-full flex items-center justify-center text-ecb-dark font-semibold">
                        CEO Photo
                      </div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-ecb-yellow rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-ecb-pink rounded-full"></div>
                </div>
              </div>

              {/* Message Content */}
              <div className="order-1 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ecb-dark mb-6">
                  Message from our CEO
                </h2>
                
                <blockquote className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed italic">
                  "English Carnival Bangladesh was born from a simple belief: every young Bangladeshi 
                  deserves the opportunity to master English and compete on the global stage. What 
                  started as a small initiative has grown into a national movement, touching the lives 
                  of thousands of students across all 64 districts."
                </blockquote>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our journey continues with the same passion and commitment. We're not just teaching 
                  English; we're building confidence, fostering leadership, and creating pathways to 
                  international opportunities for our youth.
                </p>

                <div className="space-y-2">
                  <div className="font-poppins font-semibold text-ecb-violet text-xl">
                    Shahriar Ahmed
                  </div>
                  <div className="text-gray-500">
                    Chief Executive Officer, English Carnival Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CEOMessage