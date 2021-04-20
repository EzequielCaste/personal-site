import React from 'react';

export const About = () => {
  const box = `my-12 transform font-bold bg-gradient-to-r from-green-400 to-green-200 mx-auto p-10 text-2xl rounded-xl md:w-max`;
  return (
    <div
      id="about"
      className="h-auto p-10 lg:w-3/5 mx-auto my-28 text-xl lg:text-3xl space-y-6"
    >
      <h2 className="my-5 font-bold text-4xl">About me</h2>
      <p>
        Hi there! My name is Ezequiel Castellanos and I'm a Front-end web
        developer and English/Spanish translator based in Salta, Argentina.
      </p>
      <p>
        I enjoy making websites, drinking mate, baking homemade pizza, and also
        researching and learning new technologies. When I'm not coding, I'm
        taking care of my vegetable garden, listening to music or watching
        tutorials on Youtube.
      </p>
      <p id="about">
        I discovered programming more than 15 years ago and since then I have
        been studying on a self-taught basis. I built my blog page with a very
        basic knowledge of <strong>HTML</strong>, <strong>CSS</strong> and some
        <strong> jQuery</strong>.
      </p>
      <p>
        It was nothing fancy but it was an indicator of what I was passionate
        about:
      </p>

      <div className={box}>
        Building websites and learning new technologies.
      </div>

      <p>
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
      <div className={box}>did you do it on paper?</div>

      <p>
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
      </div>
    </div>
  );
};
