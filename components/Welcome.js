import React from 'react';

export const Welcome = () => {
  return (
    <div className="py-5 lg:py-0 my-28">
      <h1 className="text-4xl text-center py-5 font-bold sm:text-5xl xl:text-6xl xl:py-10 xl:my-4">
        Hi!👋
        <br /> I'm Ezequiel.
      </h1>
      <h3 className="text-xl lg:text-4xl text-center font-bold mt-1 sm:text-2xl">
        Front-end developer and English/Spanish translator.
      </h3>

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
