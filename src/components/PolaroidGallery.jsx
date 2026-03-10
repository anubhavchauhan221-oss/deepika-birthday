import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './PolaroidGallery.css';

const PolaroidGallery = () => {
  const [photoCount, setPhotoCount] = useState(0);
  const totalPhotos = 11; 
  
  // NEW: Create a reference to control the audio player
  const audioRef = useRef(null);

  // NEW: Effect to play the audio as soon as the gallery opens
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4; // Sets volume to 40% for a nice background vibe
      // The browser allows this because she just clicked a button to get here!
      audioRef.current.play().catch(err => console.log("Audio blocked:", err));
    }
  }, []);

  // Existing effect for the photos
  useEffect(() => {
    if (photoCount < totalPhotos) {
      const timer = setTimeout(() => {
        setPhotoCount(prev => prev + 1);
      }, 800); 
      return () => clearTimeout(timer);
    }
  }, [photoCount]);

  const photoVariants = {
    initial: (custom) => ({
      scale: 0,
      y: 50,
      opacity: 0,
      rotate: (custom % 2 === 0 ? -1 : 1) * (Math.random() * 20) 
    }),
    animate: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <div className="gallery-container">
      
      {/* NEW: The hidden audio player. Make sure the src matches your exact file name! */}
      <audio ref={audioRef} src="/song.mp3" loop />

      <div className="background-overlay"></div>
      
      <div className="text-header">
        <h1>To the Most Beautiful Deepika... ❤️</h1>
        <p>A few favorite memories we've made.</p>
      </div>

      <div className="polaroid-stage">
        <AnimatePresence>
          {[...Array(photoCount)].map((_, i) => (
            <motion.div
              key={`polaroid-${i+1}`}
              custom={i + 1}
              variants={photoVariants}
              initial="initial"
              animate="animate"
              className="polaroid-wrapper"
              whileHover={{ scale: 1.1, zIndex: 20 }} 
            >
              <div className="polaroid">
                <img src={`/pic${i + 1}.jpeg`} alt={`Memory ${i + 1}`} />
                <div className="caption">Deepika ❤️ Memory #{i + 1}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PolaroidGallery;