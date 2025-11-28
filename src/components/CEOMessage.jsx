import { motion } from 'framer-motion';
import { Quote, Award, Users, Target } from 'lucide-react';

const CEOMessage = () => {
  const message = `On behalf of the English Carnival Bangladesh team, I extend a heartfelt welcome to all of you who have joined us on this exciting linguistic journey.

Our mission is to create a vibrant platform where language lovers can connect, learn, and celebrate the beauty and power of English. We believe that language is a bridge that connects cultures, fosters understanding, and opens doors to endless possibilities.

We are committed to providing a welcoming and inclusive environment where everyone feels valued and inspired. Join us as we embark on this exciting adventure together.`;

  const stats = [
    { icon: Users, value: '50K+', label: 'Students Reached' },
    { icon: Award, value: '100+', label: 'Events Hosted' },
    { icon: Target, value: '25+', label: 'Cities Covered' }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#FAFAFA] via-white to-[#F4F7FF] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#004AAD] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 mb-4">
            <Quote className="text-[#FF6B00]" size={20} />
            <span className="font-poppins font-semibold text-[#004AAD] text-sm uppercase tracking-wider">
              Leadership Vision
            </span>
          </div>
          <h2 className="font-poppins font-bold text-4xl lg:text-5xl text-gray-900 mb-4">
            Message from Our <span className="text-[#004AAD]">CEO</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#004AAD] to-[#FF6B00] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - CEO Portrait & Info */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* CEO Portrait Container */}
            <div className="relative mb-8">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#004AAD] to-[#FF6B00] rounded-full opacity-20 blur-lg animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#004AAD] to-[#FF6B00] rounded-full opacity-30"></div>
              
              {/* Main Portrait */}
              <div className="relative bg-white rounded-full p-2 shadow-2xl">
                <img
                  src="/ceo.png"
                  alt="Md. Asaduzzaman Rony - CEO, English Carnival Bangladesh"
                  className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-inner"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-lg">
                <Award className="text-white" size={24} />
              </div>
            </div>

            {/* CEO Info */}
            <div className="text-center lg:text-left">
              <motion.h3
                className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Md. Asaduzzaman Rony
              </motion.h3>
              <motion.p
                className="font-inter font-semibold text-[#004AAD] text-lg mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                CEO, ECB (Fake Image)
              </motion.p>
              
              {/* Signature Style */}
              <motion.div
                className="font-dancing text-2xl text-gray-700 border-t border-gray-200 pt-4 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="bg-gradient-to-r from-[#004AAD] to-[#FF6B00] bg-clip-text text-transparent">
                  Leading with Vision
                </span>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto text-[#004AAD] mb-2" size={24} />
                  <div className="font-poppins font-bold text-gray-900 text-lg">{stat.value}</div>
                  <div className="font-inter text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Message Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Main Message Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#004AAD] to-[#FF6B00]"></div>
              
              {/* Content */}
              <div className="pl-8 pr-6 py-8 lg:pl-10 lg:pr-8 lg:py-10">
                {/* Quote Icon */}
                <div className="flex items-start mb-6">
                  <div className="bg-[#004AAD]/10 p-3 rounded-2xl">
                    <Quote className="text-[#004AAD]" size={28} />
                  </div>
                </div>

                {/* Message Text */}
                <div className="space-y-6">
                  {message.split('\n\n').map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="font-inter text-gray-700 leading-relaxed text-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Closing Signature */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p className="font-poppins font-semibold text-gray-900 text-lg">
                    — Md. Asaduzzaman Rony, CEO
                  </p>
                  <p className="font-inter text-sm text-gray-600 mt-1">
                    English Carnival Bangladesh
                  </p>
                </motion.div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#004AAD]/5 to-transparent rounded-tl-3xl"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#FF6B00] rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#004AAD] rounded-full shadow-lg opacity-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;