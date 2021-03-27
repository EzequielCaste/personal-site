import React from 'react';

export const About = () => {
  return (
    <div className="h-full w-10/12 lg:w-3/5 mx-auto my-28 lg:text-2xl space-y-4">
      <h2 className="my-5 font-bold text-4xl">About me</h2>
      <p className="">
        I am a Front End Developer and English/Spanish Translator looking for my
        first junior position. As for the Frontend I have worked with the
        frameworks: - React.js and Redux - Bookstrap and Bulma And in the
        Backend area I specialize in Node.js, Express and generally working with
        MongoDB and PostgreSQL databases.
      </p>
      <p>
        I'm also contributing to the{' '}
        <a href="https://www.freecodecamp.org/espanol/news/author/ezequiel_caste/">
          {' '}
          freeCodeCamp{' '}
        </a>
        community translating articles and the{' '}
        <a href="https://es.javascript.info/about"> Javascript.info </a>
        github repository as a Maintainer and translator or articles.
      </p>
    </div>
  );
};
