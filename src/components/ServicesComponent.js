import React, { useState } from "react";
import YouTube from 'react-youtube';

const ServicesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const videoOptions = {
    height: '720', // Adjust the size of the video player
    width: '1280', // Adjust the width to maintain 16:9 aspect ratio
    playerVars: {
      autoplay: isHovered ? 1 : 0,
    },
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 style={{color: isHovered ? 'transparent' : 'white'}}></h1>
      <YouTube
        videoId="OzEI4hXXKaM"
        opts={videoOptions}
      />
    </div>
  );
};

export default ServicesComponent;
