import React from 'react';

export const About = () => {
  const box = `tracking-wide font-serif my-12 font-bold mx-auto text-4xl md:w-max`;
  return (
    <div
      id="about"
      className="bg-gray-200 text-gray-700 text-base h-auto p-5 lg:p-20 sm:p-14 mx-auto sm:text-xl lg:text-3xl space-y-6 "
    >
      <div className="md:w-3/4 lg:w-2/3 space-y-5 mx-auto md:pb-14 md:space-y-14 lg:max-w-7xl">
        <h2 className="my-14 text-center font-bold text-4xl">About me</h2>
        <p>
          I'm a self-taught front end developer specializing in <strong>JavaScript</strong>. I have experience working with <strong>React</strong> and backend technologies, such as Node.js, Express, MongoDB, and GraphQL.

          I like helping new developers achieve their goals, I also contribute to online open-source communities with translations, fixes, and reviews of technical articles.
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
    </div>
  );
};
