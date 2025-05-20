import { useEffect, useRef } from 'react';

const BackgroundMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/src/assets/background-music.mp3');
    audioRef.current = audio;
    
    const setupAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.loop = true;
        
        // Try to play the audio
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log('Audio playback prevented:', error);
          });
        }
      }
    };

    // Setup audio when component mounts
    setupAudio();

    // Cleanup when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return null; // No need to render anything
};

export default BackgroundMusic; 