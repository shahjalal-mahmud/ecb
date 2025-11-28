import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Facebook, 
  Linkedin, 
  Youtube, 
  ChevronRight 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Colors based on branding
  const colors = {
    primary: '#004AAD',
    accent: '#FF6B00',
    text: '#1E293B', // Slate-800
    hoverBg: '#F4F7FF'
  };

  // Scroll detection for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation Items
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Teams', href: '/teams' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' },
    { name: 'Resource', href: '/resource' },
    { name: 'Contact', href: '/contact' },
    { name: 'Registration', href: '/register', isCta: true },
  ];

  return (
    <>
      {/* ----------------------------------------------------
        1. TOP MINI-BAR
        Premium dark blue strip for high-level context
        ---------------------------------------------------- 
      */}
      <div className="bg-[#004AAD] text-white py-2 px-4 md:px-8 text-sm font-['Inter'] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Welcome Text */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-medium tracking-wide text-center sm:text-left"
          >
            Welcome to English Carnival Bangladesh
          </motion.div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline opacity-80 text-xs uppercase tracking-wider">Follow Us:</span>
            <div className="flex gap-3">
              <SocialIcon Icon={Facebook} href="https://www.facebook.com/englishcarnivalbangladesh" />
              <SocialIcon Icon={Linkedin} href="https://www.linkedin.com/company/english-carnival-bangladesh/" />
              <SocialIcon Icon={Youtube} href="https://www.youtube.com/@englishcarnivalbangladesh" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------
        2. MAIN NAVBAR
        Sticky, Glassy, Shadowed, Interactive
        ---------------------------------------------------- 
      */}
      <nav 
        className={`sticky top-0 z-40 transition-all duration-300 w-full border-b border-gray-100/50
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.07)] py-2' 
            : 'bg-white py-4 shadow-sm'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <motion.a 
            href="/"
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Using object-contain to prevent distortion as requested */}
            <img 
              src="/public/ecb-logo-165x75.png" 
              alt="ECB Logo" 
              className="h-12 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </motion.a>

          {/* DESKTOP MENU ITEMS */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, index) => (
              <React.Fragment key={item.name}>
                {item.isCta ? (
                  /* CTA BUTTON (Registration) */
                  <motion.a
                    href={item.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-4 px-6 py-2.5 rounded-full bg-[#004AAD] text-white font-['Poppins'] font-semibold text-sm shadow-lg shadow-blue-900/20 hover:bg-[#003982] hover:shadow-blue-900/30 transition-all duration-200 flex items-center gap-2"
                  >
                    {item.name}
                    <ChevronRight size={14} strokeWidth={3} />
                  </motion.a>
                ) : (
                  /* STANDARD MENU ITEM */
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-3 py-2 text-[15px] font-['Inter'] font-medium text-slate-700 hover:text-[#004AAD] transition-colors duration-200 group"
                  >
                    {item.name}
                    
                    {/* Animated Floating Underline */}
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6B00] rounded-full"
                        initial={{ opacity: 0, width: "0%" }}
                        animate={{ opacity: 1, width: "100%" }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE (Hamburger) */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsMobileOpen(true)}
              className="p-2 text-[#004AAD] bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* ----------------------------------------------------
        3. MOBILE MENU (DRAWER)
        Glassy overlay + animated side menu
        ---------------------------------------------------- 
      */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-[300px] bg-white z-[60] shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="p-5 flex justify-between items-center border-b border-gray-100">
                <span className="font-['Poppins'] font-bold text-[#004AAD] text-lg">Menu</span>
                <button 
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 overflow-y-auto py-4 px-2">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setIsMobileOpen(false)}
                      className={`
                        px-4 py-3 rounded-lg font-['Inter'] font-medium text-base transition-all
                        ${item.isCta 
                          ? 'bg-[#004AAD] text-white mt-4 text-center shadow-md' 
                          : 'text-slate-700 hover:bg-blue-50 hover:text-[#004AAD] hover:pl-6'
                        }
                      `}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Drawer Footer (Socials) */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <p className="text-xs text-slate-400 font-['Inter'] mb-3 text-center uppercase tracking-widest">Connect With Us</p>
                <div className="flex justify-center gap-6">
                  <SocialIcon Icon={Facebook} href="#" color="#004AAD" mobile />
                  <SocialIcon Icon={Linkedin} href="#" color="#004AAD" mobile />
                  <SocialIcon Icon={Youtube} href="#" color="#FF0000" mobile />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper Component for Social Icons with Hover Glow
const SocialIcon = ({ Icon, href, color, mobile }) => (
  <a 
    href={href}
    className={`
      transition-all duration-300 transform hover:scale-110 
      ${mobile ? 'text-slate-600' : 'text-white/90 hover:text-white'}
    `}
  >
    <Icon 
      size={mobile ? 24 : 18} 
      className={mobile ? "" : "hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"}
      style={mobile && color ? { color: color } : {}}
    />
  </a>
);

export default Navbar;