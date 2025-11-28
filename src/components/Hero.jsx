import { motion } from 'framer-motion';
import { Play, Users, Award, Calendar } from 'lucide-react';

const Hero = () => {
  // Floating animation variants
  const floatingAnimation = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Staggered text animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Stats data
  const stats = [
    { icon: Users, number: "50K+", label: "Students Empowered" },
    { icon: Award, number: "100+", label: "Events Organized" },
    { icon: Calendar, number: "25+", label: "Cities Reached" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#F4F7FF] to-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/public/ecb-hero-bg.jpg")',
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />
      </div>

      {/* Floating Abstract Shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-72 h-72 bg-[#004AAD]/5 rounded-full blur-3xl"
        variants={floatingAnimation}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-20 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl"
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-56 h-56 bg-[#004AAD]/10 rounded-full blur-2xl"
        variants={floatingAnimation}
        animate="animate"
        transition={{ delay: 4 }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-2">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold text-gray-900 leading-tight mb-6"
              variants={itemVariants}
            >
              English Carnival{' '}
              <span className="text-[#004AAD]">Bangladesh</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-[#004AAD] leading-tight mb-4"
              variants={itemVariants}
            >
              Empowering Young Minds Through English —{' '}
              <span className="text-[#FF6B00]">Learn, Connect & Grow!</span>
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 font-inter leading-relaxed mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Join Bangladesh's biggest English learning movement — uniting students, 
              educators, and young leaders nationwide in a vibrant celebration of language and leadership.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-[#004AAD] to-[#1E40AF] text-white px-8 py-4 rounded-full font-inter font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Participate Now
                <Play size={20} className="ml-1" />
              </motion.button>
              
              <motion.button
                className="border-2 border-[#004AAD] text-[#004AAD] px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-[#004AAD] hover:text-white transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Team
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-2xl"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <stat.icon className="text-[#004AAD]" size={20} />
                    <div className="font-poppins font-bold text-2xl text-gray-900">
                      {stat.number}
                    </div>
                  </div>
                  <div className="font-inter text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/ecb-hero-bg.png"
                  alt="ECB Students Community"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#004AAD]/20 to-transparent" />
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center">
                    <Award className="text-[#FF6B00]" size={24} />
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-gray-900">National Awards</div>
                    <div className="font-inter text-sm text-gray-600">2023-2024</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#004AAD]/10 rounded-full flex items-center justify-center">
                    <Users className="text-[#004AAD]" size={24} />
                  </div>
                  <div>
                    <div className="font-poppins font-bold text-gray-900">Active Community</div>
                    <div className="font-inter text-sm text-gray-600">10K+ Members</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;