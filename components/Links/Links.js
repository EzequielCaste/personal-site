import React from 'react';
import {Scroller} from '../Scroller';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  
  faGithub,
  faLinkedin,  
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Links = () => {
  return (
    <>
      <div className="my-5 mb-24 flex flex-col justify-center items-center h-full sm:w-2/4 w-5/12 lg:w-2/5 mx-auto space-y-4 max-w-sm">
        <div className="flex w-full sm:w-1/2 justify-between py-16">
          <a
            href="https://github.com/EzequielCaste"
            rel="noopener noreferrer"
            target="_blank"
            aria-label='View all my projects on GitHub'
          >
            <span className="hidden">GitHub</span>
            <FontAwesomeIcon
              size="3x"
              className="text-gray-700 transition ease-in-out duration-300 hover:text-fuchsia-700"
              icon={faGithub}
            />
          </a>
      
          <a aria-label='Send me an email at ezequiel.caste@gmail.com' href="mailto:ezequiel.caste@gmail.com">
            <span className="hidden">Email</span>
            <FontAwesomeIcon
              size="3x"
              className="text-gray-700 transition ease-in-out duration-300 hover:text-fuchsia-700"
              icon={faEnvelope}
            />
          </a>
          
          <a
            href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label='Connect with me on LinkedIn'
          >
            <span className="hidden">Linkedin</span>
            <FontAwesomeIcon
              size="3x"
              className="text-gray-700 transition ease-in-out duration-300 hover:text-fuchsia-700"
              icon={faLinkedin}
            />
          </a>
        </div>
        <Scroller />
      </div>
    </>
  );
};
