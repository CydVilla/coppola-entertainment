import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectorHeader.css';

function ProjectorHeader() {
  const [animationStage, setAnimationStage] = useState<'projector' | 'projection' | 'complete'>('projector');
  const [showNav, setShowNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Stage 1: Show projector video (2 seconds)
    const projectorTimer = setTimeout(() => {
      setAnimationStage('projection');
    }, 2000);

    // Stage 2: Project text onto screen (1.5 seconds)
    const projectionTimer = setTimeout(() => {
      setAnimationStage('complete');
      setShowNav(true);
    }, 3500);

    return () => {
      clearTimeout(projectorTimer);
      clearTimeout(projectionTimer);
    };
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/biography', label: 'Biography' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/investment', label: 'Investment' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="projector-header">
      <div className="header-container">
        {/* Projector Animation Stage */}
        <AnimatePresence>
          {animationStage === 'projector' && (
            <motion.div
              className="projector-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Cinema Projector Video Background */}
              <video
                className="projector-video"
                autoPlay
                muted
                playsInline
                loop
                onError={(e) => console.error('Video failed to load:', e)}
                onLoadedData={() => console.log('Video loaded successfully')}
              >
                <source src="/videos/105438-670487243.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Projector light beam effect */}
              <div className="projector-beam" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Single Logo that transitions from projected to solid */}
        <motion.div
          className="logo-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: animationStage !== 'projector' ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* White projection screen - fades away */}
          <AnimatePresence>
            {animationStage === 'projection' && (
              <motion.div
                className="projection-screen"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            )}
          </AnimatePresence>

          {/* Film Reel Icon */}
          <div className="logo-reel">
            <div className="reel-graphic">
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
          </div>

          {/* Logo Text - same element, different styling based on stage */}
          <div className={`logo-text ${animationStage === 'projection' ? 'projected' : 'solid'}`}>
            <div className="logo-line-1">COPPOLA</div>
            <div className="logo-line-2">ENTERTAINMENT</div>
          </div>

          {/* Projection effects - only visible during projection stage */}
          {animationStage === 'projection' && (
            <>
              <div className="projection-grain" />
              <div className="projection-vignette" />
            </>
          )}
        </motion.div>

        {/* Navigation */}
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

      {/* Mobile Menu */}
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

export default ProjectorHeader;

