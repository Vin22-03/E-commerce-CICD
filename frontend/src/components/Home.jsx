import React from 'react';
import quickLootLogo from '../assets/quicklooot.png';

const Home = () => {
  return (
    <div className="flex justify-center mt-2 mb-0">
      <img
        src={quickLootLogo}
        alt="QuickLoot Logo"
        className="w-64 h-64 object-contain"
      />
    </div>
  );
};

export default Home;
