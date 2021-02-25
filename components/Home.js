import React from 'react';

export default function Home() {
  return (
    <div className="m-3.5 p-10 space-y-5 h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl">Hi! I'm Ezequiel.👋</h1>
      <h3 className="text-2xl mt-5">
        Front-end developer and English/Spanish translator.
      </h3>

      <div className="text-4xl">
        <a
          href="https://github.com/EzequielCaste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github mr-3"></i>
        </a>
        <a
          href="https://twitter.com/Ezequiel_Caste"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-twitter mr-3"></i>
        </a>
        <a href="#contact">
          <i className="far fa-envelope mr-3"></i>
        </a>
        <a
          href="https://codepen.io/ezequiel_/"
          id="profile-link"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-codepen mr-3"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin mr-3"></i>
        </a>
      </div>
    </div>
  );
}
