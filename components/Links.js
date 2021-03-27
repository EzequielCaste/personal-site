import React from 'react';
import {Github} from './Github';
import {Twitter} from './Twitter';
import {Email} from './Email';
import {Codepen} from './Codepen';
import {Linkedin} from './Linkedin';

export const Links = () => {
  return (
    <>
      <div className="my-10 h-full w-10/12 lg:w-3/5 mx-auto space-y-4">
        <h2 className=" font-bold text-4xl">Contact info</h2>

        <div className="flex justify-center py-5">
          <a
            href="https://github.com/EzequielCaste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Github size={14} />
          </a>
          <a
            href="https://twitter.com/Ezequiel_Caste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter size={14} />
          </a>
          <a href="#contact">
            <Email size={14} />
          </a>
          <a
            href="https://codepen.io/ezequiel_/"
            id="profile-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Codepen size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin size={14} />
          </a>
        </div>
      </div>
    </>
  );
};
