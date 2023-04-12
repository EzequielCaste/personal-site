import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Links = () => {
  return (
    <>
      <div className="my-20 flex flex-col justify-center items-center h-full sm:w-2/4 w-10/12 lg:w-2/5 mx-auto space-y-8">
        <h3 className="text-semibold text-lg tracking-wider text-gray-700">
          Let's get in touch
        </h3>
        <div className="flex w-full lg:w-1/2 justify-between py-5">
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
          <a
            href="https://twitter.com/Ezequiel_Caste"
            rel="noopener noreferrer"
            target="_blank"
            aria-label='Check out my Twitter profile'
          >
            {' '}
            <span className="hidden">Twitter</span>
            <FontAwesomeIcon
              size="3x"
              className="text-gray-700 transition ease-in-out duration-300 hover:text-fuchsia-700"
              icon={faTwitter}
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
            href="https://codepen.io/ezequiel_/"
            id="profile-link"
            rel="noopener noreferrer"
            target="_blank"
            aria-label='View all my projects on Codepen'
          >
            <span className="hidden">Codepen</span>
            <FontAwesomeIcon
              size="3x"
              className="text-gray-700 transition ease-in-out duration-300 hover:text-fuchsia-700"
              icon={faCodepen}
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
        <span title='Keep Scrolling...' aria-label='Scroll down' href="#" className="scroll-down" address="true"></span>
      </div>
    </>
  );
};
