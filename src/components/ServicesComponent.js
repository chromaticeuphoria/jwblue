import React, { useRef, useState } from "react";

const ServicesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // Function to play video
  const playVideo = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Function to pause video
  const pauseVideo = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
    >
      <h1 style={{color: isHovered ? 'transparent' : 'white'}}>Video Loading...</h1>
      <video
        ref={videoRef}
        height="720" // Adjust the size of the video player
        style={{ objectFit: 'contain' }}
        src="img/video/jw1920.mp4"
        preload="auto"
      />
    </div>
  );
};

export default ServicesComponent;
