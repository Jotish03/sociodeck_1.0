import React, { useState, useEffect } from 'react';
import Confetti from 'react-dom-confetti';

const ComingSoon = () => {
  const [confettiActive, setConfettiActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Confetti will be active for 2 seconds
  };

  useEffect(() => {
    // Detect if the user is on a mobile device or iOS
    const userAgent = navigator.userAgent;
    const isMobileDevice = /Mobi/i.test(userAgent) || /Android/i.test(userAgent);
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);

    setIsMobile(isMobileDevice || isIOSDevice);
  }, []);

  const confettiConfig = {
    angle: 90,
    spread: isMobile ? 45 : 90,
    startVelocity: isMobile ? 30 : 60,
    elementCount: isMobile ? 50 : 200,
    dragFriction: 0.1,
    duration: 2000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#ff718d', '#78ff44', '#a864fd'],
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl">
        {/* Replace the image source with your own image */}
        <img src="./images/logo.webp" alt="" className="mb-[-20px] inline-block h-64 w-64 flex-none object-cover" />
        
        <div className="text-center">
          {/* Replace the text content with your own content */}
          <h1 className="text-[#000000] font-bold mb-4 text-4xl md:text-6xl">Coming Soon</h1>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <p className="text-[#000] max-w-[440px] text-sm mx-5 my-5">
              Unlock Your Digital Potential with Sociodeck: Coming Soon to Elevate Your Marketing Game!
            </p>
          </div>

          <div className="text-center">
            <button onClick={toggleConfetti} className=" rounded-full bg-black px-8 py-4 text-white font-semibold">
              Celebrate
            </button>
            <Confetti active={confettiActive} className="flex items-center justify-center" config={confettiConfig} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
