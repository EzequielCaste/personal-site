import React from 'react';

export default function Home() {
  return (
    <div className="m-3.5 p-10 space-y-4">
      <h1 className="text-6xl">Hi! I'm Ezequiel.👋</h1>
      <h2 className="text-4xl">Welcome to my Portfolio.</h2>
      <h3 className="text-2xl w-9/12">
        Self-taught front-end developer and English/Spanish translator with
        experience in group projects. I have contributed with translations and
        as Maintainer of the GitHub repository in Spanish of the open-source
        tutorial Javascript.info. Currently looking for a position in a company
        aligned with my mission and values.
      </h3>

      <div className="text-4xl">
        <a
          href="https://github.com/EzequielCaste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github ml-3"></i>
        </a>
        <a
          href="https://twitter.com/Ezequiel_Caste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter ml-3"></i>
        </a>
        <a href="#contact">
          <i className="far fa-envelope ml-3"></i>
        </a>
        <a
          href="https://codepen.io/ezequiel_/"
          id="profile-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-codepen ml-3"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin ml-3"></i>
        </a>
      </div>
    </div>
  );
}
