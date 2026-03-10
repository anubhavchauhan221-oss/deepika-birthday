import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './MomoCake.css';

// Added 'onFinish' so it can trigger the Polaroid Gallery
const MomoCake = ({ onFinish }) => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [wishMade, setWishMade] = useState(false);

  const blowCandles = () => {
    if (!candlesLit) return;
    setCandlesLit(false);
    setTimeout(() => {
      setWishMade(true);
    }, 1000);
  };

  return (
    <div className="cake-container">
      <div className="message-area">
        {!wishMade ? (
          <motion.h2 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Make a wish, Deepika... <br />
            <span>and tap the candles to blow them</span>
          </motion.h2>
        ) : (
          <motion.h2 initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            Happy Birthday, Beautiful! ❤️
          </motion.h2>
        )}
      </div>

      <div className="cake-stage">
        

        {/* The Momo Cake (Kept exactly as you had it) */}
        <div className="momo-grid">
          <div className="momo-layer top">
            <div className="momo"></div>
            <div className="momo"></div>
          </div>
          <div className="momo-layer bottom">
            <div className="momo"></div>
            <div className="momo"></div>
            <div className="momo"></div>
          </div>
        </div>

        {/* The Candles (Kept exactly as you had it) */}
        <div className="candles-row">
          {[1, 2, 3].map((i) => (
            <div key={i} className="candle" onClick={blowCandles}>
              {candlesLit && (
                <motion.div 
                  className="flame"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ repeat: Infinity, duration: 0.2 }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="cake-plate"></div>
      </div>

      {/* NEW SECTION: The button to move to the Polaroid Gallery */}
      <AnimatePresence>
        {wishMade && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }} // Appears smoothly half a second after the wish is made
            style={{ marginTop: '40px', zIndex: 20 }}
          >
            <button className="next-slide-btn" onClick={onFinish}>
              See Our Memories ❤️
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MomoCake;