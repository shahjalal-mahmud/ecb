import React from 'react'
import { useInView } from 'react-intersection-observer'

const MissionGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const missions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l9 5m-9-5v8" />
        </svg>
      ),
      title: "Our Mission",
      description: "To empower Bangladeshi youth with English language skills and global competencies through innovative educational programs and national events.",
      color: "ecb-violet"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Our Vision",
      description: "A Bangladesh where every young person has the English proficiency and confidence to compete globally and contribute to national development.",
      color: "ecb-pink"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Our Objectives",
      description: "Organize nationwide competitions, provide skill development workshops, foster international exposure, and build a supportive learning community.",
      color: "ecb-yellow"
    }
  ]

  return (
    <section id="about" className="py-16 bg-ecb-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ecb-dark mb-4">
              Why English Carnival?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're more than just an organization - we're a movement dedicated to transforming 
              English education and creating opportunities for Bangladesh's youth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <div 
                key={mission.title}
                className={`glass-effect rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: inView ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-${mission.color} text-white flex items-center justify-center`}>
                  {mission.icon}
                </div>
                <h3 className="text-2xl font-poppins font-semibold text-ecb-dark mb-4">
                  {mission.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-ecb-violet mb-2">50K+</div>
              <div className="text-gray-600">Students Reached</div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-ecb-pink mb-2">64</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-ecb-yellow mb-2">500+</div>
              <div className="text-gray-600">Events Organized</div>
            </div>
            <div className="glass-effect rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-ecb-violet mb-2">100+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionGrid