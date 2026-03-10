import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      
      {/* --- THE PEACEFUL NIGHT SCENERY --- */}
      <div className="scenery-bg">
        <div className="sky">
          {/* Replaced Sun with Crescent Moon */}
          <div className="moon"></div>
          <div className="rainbow"></div>
          
          {/* Fluffy Night Clouds */}
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
          
        </div>
        
        {/* Darker, peaceful mountains */}
        <div className="mountains">
          <div className="mountain mountain-1"></div>
          <div className="mountain mountain-2"></div>
          <div className="mountain mountain-3"></div>
        </div>

        {/* Dim River with Textured Fishes */}
        <div className="river">
          <div className="fish fish-1"></div>
          <div className="fish fish-2"></div>
          <div className="fish fish-3"></div>
        </div>
      </div>

      {/* --- YOUR ORIGINAL CONTENT BOX --- */}
      <div className="welcome-content">
        <h1>For Deepika ✨</h1>
        <p>
          "Ek pyara sa khwaab, jo meri haqeeqat ban gaya..."<br />  
A little world crafted with love, just for you.
        </p>
        <button className="start-button" onClick={onStart}>
          Enter the Magic
        </button>
      </div>
      
    </div>
  );
};

export default WelcomeScreen;