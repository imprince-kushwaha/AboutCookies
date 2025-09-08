import React from 'react';

const CoffeeProcess = () => {
  return (
    <>
      {/* Desktop / Tablet Image */}
      <img
        src="/src/assets/coffee-process.png"
        alt="Coffee Process Desktop"
        className="hidden lg:block px-32 py-12"
      />

      {/* Mobile Image */}
      <img
        src="/src/assets/coffee-process-mobile.png"
        alt="Coffee Process Mobile"
        className="block lg:hidden px-4 py-8"
      />
    </>
  );
};

export default CoffeeProcess;
