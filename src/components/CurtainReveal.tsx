import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './CurtainReveal.css';

interface CurtainRevealProps {
  children: ReactNode;
  delay?: number;
  autoOpen?: boolean;
}

function CurtainReveal({ children, delay = 0, autoOpen = true }: CurtainRevealProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, autoOpen]);

  const curtainVariants = {
    closed: { scaleX: 1 },
    open: { scaleX: 0 }
  };

  return (
    <div className="curtain-reveal-container">
      <AnimatePresence>
        {!isOpen && (
          <>
            <motion.div
              className="curtain curtain-left"
              variants={curtainVariants}
              initial="closed"
              animate="closed"
              exit="open"
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-tassel tassel-left" />
            </motion.div>
            
            <motion.div
              className="curtain curtain-right"
              variants={curtainVariants}
              initial="closed"
              animate="closed"
              exit="open"
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-fold" />
              <div className="curtain-tassel tassel-right" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        className="curtain-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ delay: isOpen ? 1 : 0, duration: 0.5 }}
      >
        {children}
      </motion.div>

      {!autoOpen && !isOpen && (
        <button 
          className="reveal-button"
          onClick={() => setIsOpen(true)}
        >
          Click to Reveal
        </button>
      )}
    </div>
  );
}

export default CurtainReveal;

