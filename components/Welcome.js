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
      {/* <h3 className="text-xl lg:text-4xl text-center font-bold mt-1 sm:text-2xl">
        I'm a Front-End web developer and English/Spanish translator based in
        Salta, Argentina.
        
        Front-End developer and English/Spanish translator.
      </h3> */}

      {/* <div className="text-xl space-y-4 my-10 sm:w-4/5 mx-auto sm:space-y-8 lg:text-2xl xl:space-y-2 xl:my-4 xl:w-1/2">
        <p>
          Currently learning more in depth <strong>React.js</strong>,
          <strong> Next.js</strong>, <strong>Tailwind CSS</strong> and
          <strong> SASS</strong>.
        </p>
      </div> */}
    </div>
  );
};
