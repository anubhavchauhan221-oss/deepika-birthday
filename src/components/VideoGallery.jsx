import React, { useState } from 'react';
import './VideoGallery.css';

function VideoGallery({ onFinish }) {
  // We use a single state to track the progress through the 4 videos
  const [currentVideo, setCurrentVideo] = useState(1);
  const totalVideos = 7; // Updated to 4 memories

  const handleNext = () => {
    if (currentVideo < totalVideos) {
      setCurrentVideo(prev => prev + 1);
    } else {
      // Once the 4th video is done, we trigger the cake
      if (onFinish) onFinish();
    }
  };

  return (
    <div className="video-container">
      <h2>Wishes from Friends 💌</h2>
      
      <div className="video-wrapper fade-in">
        <p>Message {currentVideo} of {totalVideos}...</p>
        
        <video 
          key={`memory-video-${currentVideo}`} // Key forces React to reload the video tag for each new source
          className="custom-video" 
          controls 
          autoPlay 
          onEnded={handleNext} // Automatically goes to next video or cake when finished
        >
          {/* Dynamic source path based on currentVideo number */}
          <source src={`/memory${currentVideo}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="controls">
          <button className="next-btn" onClick={handleNext}>
            {currentVideo === totalVideos ? "Finish & Cut Cake! 🎂" : "Next Memory ➡️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoGallery;