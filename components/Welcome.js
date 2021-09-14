import React from 'react';

export const Welcome = () => {
  return (
    <div className="py-5 lg:py-0 text-gray-700">
      <h4
        className="text-base sm:text-xl xl:text-2xl      
      text-center  font-medium  
      xl:py-1 xl:my-1"
      >
        Hi there!👋 I'm
      </h4>
      <h1 className="text-center text-2xl sm:text-4xl xl:text-6xl font-semibold my-4">
        Ezequiel Castellanos
      </h1>
      <h3
        className="text-gray-500 text-lg sm:text-2xl lg:text-4xl      
      font-semibold  text-center mt-1  sm:w-2/4 w-3/4 mx-auto"
      >
        Front-End Web Developer
      </h3>      
    </div>
  );
};
