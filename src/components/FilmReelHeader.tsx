import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './FilmReelHeader.css';

function FilmReelHeader() {
  const [isAnimating, setIsAnimating] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setShowNav(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/biography', label: 'Biography' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/investment', label: 'Investment' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="film-reel-header">
      <div className="header-container">
        <motion.div
          className="film-reel-container"
          initial={{ scale: 1 }}
          animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 1],
          }}
        >
          <div className="film-reel">
            <div className="reel-center">
              <div className="reel-holes">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="reel-hole" />
                ))}
              </div>
            </div>
            {[...Array(3)].map((_, ringIndex) => (
              <div key={ringIndex} className={`reel-ring ring-${ringIndex + 1}`} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="logo-text"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <div className="logo-line-1">COPPOLA</div>
          <div className="logo-line-2">ENTERTAINMENT</div>
        </motion.div>

        <AnimatePresence>
          {showNav && (
            <motion.nav
              className="main-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="nav-desktop">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default FilmReelHeader;

