import React from 'react';
import { Github } from './Github';
import { Twitter } from './Twitter';
import { Email } from './Email';
import { Codepen } from './Codepen';
import { Linkedin } from './Linkedin';

export default function Home() {
  return (
    <div className="m-3.5 p-5 space-y-5 flex flex-col justify-center items-center sm:justify-between">
      <div className="py-10 lg:py-0">
        <h1 className="text-4xl text-center py-5 font-bold sm:text-5xl xl:text-6xl xl:py-10">
          Hi!👋
          <br /> I'm Ezequiel.
        </h1>
        <h3 className="text-xl text-center font-bold mt-1 sm:text-2xl">
          Front-end developer and English/Spanish translator.
        </h3>

        <div className="text-xl space-y-4 my-10 sm:w-4/5 mx-auto sm:space-y-8 lg:w-3/6 lg:text-2xl">
          <p>
            I enjoy making websites, drinking
            <a href="https://en.wikipedia.org/wiki/Mate_(drink)"> mate</a> and
            baking homemade pizza 🍕.​
          </p>
          <p>
            I started creating websites as a hobby and now I&#x27;ve realized
            this can be more than a hobby. So I decided to learn{' '}
            <strong>HTML, CSS and JavaScript</strong>, thanks to the great
            developer community at freeCodeCamp and FrontEndCafé.
          </p>
          <p>
            Currently learning more in depth <strong>React.js</strong>,{' '}
            <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and{' '}
            <strong>SASS</strong>.
          </p>
        </div>

        <div className="text-2xl flex justify-center pt-5">
          <a
            href="https://github.com/EzequielCaste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={12} />
          </a>
          <a
            href="https://twitter.com/Ezequiel_Caste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter size={12} />
          </a>
          <a href="#contact">
            <Email size={12} />
          </a>
          <a
            href="https://codepen.io/ezequiel_/"
            id="profile-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Codepen size={12} />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
