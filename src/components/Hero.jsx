import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap } from 'lucide-react'; // Using Lucide for clean, academic icons

const Hero = () => {
  // Brand Colors
  const colors = {
    royalBlue: '#004AAD',
    orangeAccent: '#FF6B00',
    deepBlueHover: '#1E40AF',
    softBlueWhite: '#F4F7FF',
    mutedGray: '#64748B',
    cleanWhite: '#FFFFFF',
  };

  // Framer Motion Variants for Staggered Fade-In
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  // Framer Motion Variants for Floating Shapes (Adds global/innovative vibe)
  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <section 
      className="relative min-h-[90vh] md:min-h-screen bg-gradient-to-br from-[#F4F7FF] to-white overflow-hidden flex items-center"
      // Academic, soft gradient background
    >
      {/* ----------------------------------------------------
        1. BACKGROUND VISUALS & ANIMATED SHAPES
        ---------------------------------------------------- 
      */}
      
      {/* Abstract Animated Floating Blobs */}
      <motion.div 
        className="absolute top-[5%] left-[10%] w-48 h-48 bg-[#FF6B00]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute bottom-[15%] right-[5%] w-60 h-60 bg-[#004AAD]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        variants={floatingVariants}
        animate="float"
        style={{ animationDelay: '2s' }}
      />

      {/* Hero Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* ----------------------------------------------------
            2. LEFT SIDE: TEXT CONTENT & CTAS
            ---------------------------------------------------- 
          */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Title */}
            <motion.h1 
              className="text-5xl md:text-6xl xl:text-7xl font-['Poppins'] font-extrabold mb-3 leading-tight"
              style={{ color: colors.royalBlue }}
              variants={itemVariants}
            >
              English Carnival <br className="hidden md:inline" /> Bangladesh
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl font-['Inter'] font-semibold mb-6 tracking-wide"
              style={{ color: colors.orangeAccent }}
              variants={itemVariants}
            >
              Empowering Young Minds Through English — Learn, Connect & Grow!
            </motion.p>

            {/* Body Description */}
            <motion.p 
              className="text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ color: colors.mutedGray }}
              variants={itemVariants}
            >
              “Join Bangladesh’s biggest English learning movement — uniting students, educators, and young leaders nationwide.”
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              {/* Primary CTA: Participate Now */}
              <motion.a
                href="/participate"
                whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(0, 74, 173, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-lg px-8 rounded-full text-white font-['Poppins'] font-bold tracking-wider transition-all duration-300 shadow-xl"
                style={{ backgroundColor: colors.royalBlue, borderColor: colors.royalBlue }}
              >
                <Zap size={20} />
                Participate Now
              </motion.a>

              {/* Secondary CTA: Join the Team (Outline Style) */}
              <motion.a
                href="/team-join"
                whileHover={{ backgroundColor: colors.royalBlue, color: colors.cleanWhite, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-lg px-8 rounded-full font-['Poppins'] font-semibold tracking-wider transition-all duration-300"
                style={{ 
                  color: colors.royalBlue, 
                  borderColor: colors.royalBlue, 
                  backgroundColor: colors.cleanWhite,
                }}
              >
                <Users size={20} />
                Join the Team
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ----------------------------------------------------
            3. RIGHT SIDE: VISUAL (Image with Animation & Overlay)
            ---------------------------------------------------- 
          */}
          <motion.div 
            className="lg:w-1/2 w-full mt-10 lg:mt-0 relative aspect-video lg:aspect-auto max-w-lg lg:max-w-none"
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 50, delay: 0.4 }}
          >
            {/* The Image */}
            <img 
              src="/ecb-hero-bg.png" 
              alt="English Carnival Bangladesh event photo" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-blue-900/20"
            />
            
            {/* Semi-Transparent Gradient Overlay for Readability/Style */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{ background: `linear-gradient(135deg, ${colors.royalBlue} 0%, ${colors.orangeAccent} 100%)` }}
            />
            
            {/* International-style Overlay Text */}
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full shadow-lg">
              <span className="font-['Poppins'] text-sm md:text-base font-bold" style={{ color: colors.royalBlue }}>
                #NationalMovement
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;