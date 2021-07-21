import React from 'react';

export const About = () => {
  const box = `tracking-wide font-serif my-12 font-bold mx-auto text-4xl md:w-max`;
  return (
    <div
      id="about"
      className="bg-gray-300 text-gray-700 text-base h-auto p-5 lg:p-20 sm:p-14 mx-auto sm:text-xl lg:text-3xl space-y-6 "
    >
      <h2 className="my-14 text-center font-bold text-4xl">About me</h2>
      {/* <p>
        Hi there! My name is Ezequiel Castellanos and I'm a Front-End web
        developer and English/Spanish translator based in Salta, Argentina.
      </p> */}
      <div className="md:w-3/4 lg:w-2/3 space-y-5 mx-auto md:pb-14 md:space-y-14">
        <p>
          I enjoy creating applications and websites that are accessible and
          interactive. I aim to learn and improve my skills on the latest web
          technologies and challenge myself every day to learn something new and
          become a more effective developer.
        </p>
        <p id="about">
          I enjoy volunteering my time to help translate articles and tutorials
          such as the{' '}
          <a href="https://es.javascript.info/about">Javascript.info</a>{' '}
          open-source tutorial with translations and as a maintainer of the
          Spanish GitHub repository. I'm also part of the{' '}
          <a href="https://www.freecodecamp.org/espanol/news/author/ezequiel_caste/">
            freeCodeCamp translator community
          </a>
          , contributing with translation and review of articles.
        </p>
      </div>

      {/* <p>
        Years later, I decided to study Systems Engineering expecting to dive
        into programming, but it took a while (many courses) to finally get to
        do some coding. So I started to investigate programming languages such
        as Visual Basic 6, C and later JavaScript.
      </p>
      <p>I was young and eager to learn how to make computers do stuff.</p>
      <p>
        Later in college we learned how to code in C, this is when I started to
        learn new skills,{' '}
        <strong>
          Pseudocode, Array data structure, Multi-dimensional arrays and
          Algorithms
        </strong>{' '}
        were some of the fundamental topics we learned. The main focus of our
        teacher was that we acquire <strong>problem-solving skills</strong>, I
        remember his first response to any of our questions was:
      </p>
      <div className={box}>did you do it on paper?</div> */}

      {/* <p>
        Since May 2019 I have contributed to the open source JavaScript Tutorial
        (http://javascript.info) as Maintainer and Translator of the{' '}
        <a href="https://es.javascript.info/about">
          JavaScript Spanish tutorial
        </a>
        , translating various articles of the tutorial, reviewing translations,
        coordinating the effort of a team of translators. Keeping the Discord
        server active. I'm also contributing to the{' '}
        <a href="https://www.freecodecamp.org/espanol/news/author/ezequiel_caste/">
          {' '}
          freeCodeCamp{' '}
        </a>
        community translating articles.
      </p>
      <div>
        Currently learning more in depth:
        <div className={box}>React.js, Next.js, Tailwind CSS and SASS</div>
      </div> */}
    </div>
  );
};
