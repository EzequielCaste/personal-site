import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCodepen,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

export const Links = () => {
  return (
    <>
      <div className="my-20 text-center h-full w-10/12 lg:w-2/5 mx-auto space-y-4">
        <div className="flex justify-between py-5">
          <a
            href="https://github.com/EzequielCaste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="w-14 animate-icons" icon={faGithub} />
          </a>
          <a
            href="https://twitter.com/Ezequiel_Caste"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="w-14 animate-icons" icon={faTwitter} />
          </a>
          <a href="mailto:ezequiel.caste@gmail.com">
            <FontAwesomeIcon className="w-14 animate-icons" icon={faEnvelope} />
          </a>
          <a
            href="https://codepen.io/ezequiel_/"
            id="profile-link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="w-14 animate-icons" icon={faCodepen} />
          </a>
          <a
            href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon className="w-14 animate-icons" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
};