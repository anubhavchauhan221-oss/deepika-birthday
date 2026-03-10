import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import VideoGallery from './components/VideoGallery';
import MomoCake from './components/MomoCake'; 
import PolaroidGallery from './components/PolaroidGallery'; 
import './App.css';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [currentStep, setCurrentStep] = useState('videos'); // 'videos' or 'cake'

  return (
    <div className="app-container">
      {!isOpened ? (
        // Start the experience
        <WelcomeScreen onStart={() => setIsOpened(true)} />
      ) : (
        <div className="main-content">
          {/* STEP 1: Video Gallery */}
          {currentStep === 'videos' && (
            <VideoGallery onFinish={() => setCurrentStep('cake')} />
          )}

          {/* STEP 2: Momo Cake (only shows when videos are done) */}
          {currentStep === 'cake' && (
            <MomoCake onFinish={() => setCurrentStep('gallery')} />
          )}

          {/* STEP 3: Polaroid Gallery (only shows when cake is done) */}
          {currentStep === 'gallery' && (
            <PolaroidGallery />
          )}
        </div>
      )}
    </div>
  );
}

export default App;