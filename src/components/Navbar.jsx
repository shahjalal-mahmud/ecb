import React, { useState, useEffect } from 'react'

const Navbar = ({ onRegisterClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Our Teams', 
      href: '#teams',
      dropdown: ['Executive Team', 'Volunteers', 'Alumni']
    },
    { name: 'Events', href: '#events' },
    { name: 'Partners', href: '#partners' },
    { name: 'Resources', href: '#resources' },
    { name: 'Registration', href: '#registration' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <nav className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">ECB</span>
              </div>
              <span className="font-poppins font-bold text-xl text-ecb-dark">
                English Carnival
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.dropdown ? (
                    <details>
                      <summary className="font-semibold text-ecb-dark hover:text-ecb-violet">
                        {link.name}
                      </summary>
                      <ul className="p-2 bg-white rounded-lg shadow-lg">
                        {link.dropdown.map(item => (
                          <li key={item}>
                            <a className="text-ecb-dark hover:text-ecb-violet">
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <a 
                      href={link.href}
                      className="font-semibold text-ecb-dark hover:text-ecb-violet transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="navbar-end">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4 mr-6">
              <a href="#" className="text-ecb-dark hover:text-ecb-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-ecb-dark hover:text-ecb-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-ecb-dark hover:text-ecb-violet transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>

            {/* CTA Button - Desktop */}
            <button 
              onClick={onRegisterClick}
              className="btn btn-gradient hidden md:flex"
            >
              Participate Now
            </button>

            {/* Mobile Menu Button */}
            <div className="dropdown dropdown-end lg:hidden">
              <label 
                tabIndex={0} 
                className="btn btn-ghost btn-circle"
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
              <ul 
                tabIndex={0} 
                className="menu menu-compact dropdown-content mt-3 p-2 shadow glass-effect rounded-box w-64 space-y-2"
              >
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="font-semibold text-ecb-dark hover:text-ecb-violet hover:bg-white/50"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t">
                  <button 
                    onClick={onRegisterClick}
                    className="btn btn-gradient w-full"
                  >
                    Participate Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar