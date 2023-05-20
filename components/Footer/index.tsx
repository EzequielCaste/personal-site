import React from 'react'
import {GITHUB_REPOSITORY} from '../../lib/constants'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="text-center text-gray-200 bg-gray-700 bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto p-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            &copy; 2023 Ezequiel Castellanos{' '}
            <a
              aria-label="Visit my profile on Twitter"
              href="https://twitter.com/Ezequiel_Caste"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden">Twitter</span>
              <FontAwesomeIcon
                size="2x"
                className="text-green-200"
                icon={faTwitterSquare}
              />

              <i className="fab fa-twitter-square"></i>
            </a>{' '}
            <a
              aria-label="Visit my LinkedIn profile"
              href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="hidden">Linkedin</span>
              <FontAwesomeIcon
                size="2x"
                className="text-green-200"
                icon={faLinkedin}
              />
            </a>
          </div>
          <a
            aria-label="View code on GitHub"
            href={`${GITHUB_REPOSITORY}`}
            className="text-green-200 font-medium hover:underline"
          >
            View code on GitHub
          </a>
        </div>
      </footer>
  )
}