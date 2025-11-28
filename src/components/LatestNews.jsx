import React from 'react'
import { useInView } from 'react-intersection-observer'

const LatestNews = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const newsItems = [
    {
      id: 1,
      title: "National English Olympiad 2024",
      date: "Dec 15, 2023",
      excerpt: "Registration for the biggest English competition in Bangladesh is now open for students nationwide.",
      category: "Competition",
      color: "ecb-violet"
    },
    {
      id: 2,
      title: "Regional Workshop Series",
      date: "Dec 10, 2023",
      excerpt: "Join our free workshops in Dhaka, Chittagong, and Sylhet to improve your English communication skills.",
      category: "Workshop",
      color: "ecb-pink"
    },
    {
      id: 3,
      title: "Volunteer Recruitment Drive",
      date: "Dec 5, 2023",
      excerpt: "We're looking for passionate volunteers to help organize events across Bangladesh.",
      category: "Opportunity",
      color: "ecb-yellow"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ecb-dark mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest events, competitions, and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article 
                key={item.id}
                className={`bg-ecb-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: inView ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold mb-4 bg-${item.color}`}>
                  {item.category}
                </div>
                <h3 className="text-xl font-poppins font-semibold text-ecb-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <button className="text-ecb-violet font-semibold hover:text-ecb-pink transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn-outline-primary px-8">
              View All News
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestNews