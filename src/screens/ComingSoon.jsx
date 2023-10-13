import React, { useState } from 'react';
import Confetti from 'react-dom-confetti';

const ComingSoon = () => {
  const [confettiActive, setConfettiActive] = useState(false);

  const toggleConfetti = () => {
    setConfettiActive(true);
    setTimeout(() => {
      setConfettiActive(false);
    }, 2000); // Confetti will be active for 2 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl">
        <img src="./images/logo.jpg" alt="" className="mb-[-20px] inline-block h-64 w-64 flex-none object-cover" />
        <div className="text-center">
          <h1 className="text-[#000000] font-bold mb-4 text-4xl md:text-6xl">Coming Soon</h1>
          <div className="mb-5 md:mb-6 lg:mb-8">
            <p className="text-[#636262] max-w-[479px] text-sm">
              Unlock Your Digital Potential with Sociodeck: Coming Soon to Elevate Your Marketing Game!
            </p>
          </div>
          <div className="text-center">
            <button onClick={toggleConfetti} className="rounded-full bg-black px-8 py-4 text-white font-semibold">
              Celebrate
            </button>
            <Confetti className="flex items-center justify-center" active={confettiActive} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
