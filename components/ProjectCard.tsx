import React from 'react'
import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLink} from '@fortawesome/free-solid-svg-icons'

export const ProjectCard = ({project}) => {
  const {name, image, tags, description, codeLink, demoLink} = project
  const btn =
    'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition-colors mr-4'

  return (
    <div className="py-6">
      <div className="flex flex-col sm:flex-row max-w-sm md:max-w-3xl xl:max-w-5xl bg-gray-700 shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-full h-48 md:h-auto sm:w-1/3 bg-cover"
          style={{backgroundImage: `url(/images/${image})`}}
        ></div>
        <div className="w-full sm:w-2/3 p-4 md:p-8">
          <span className="font-medium text-2xl my-3 mr-5">{name}</span>
          <Link
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Visit the project"
            href={demoLink}
          >
            <FontAwesomeIcon
              className="text-gray-400 hover:text-gray-200"
              icon={faExternalLink}
            />
          </Link>
          <div className="flex flex-col">
            <span>Tecnologies used:</span>
            <ul className="flex flex-wrap justify-evenly items-center my-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="mx-0.5 lg:mx-1.5 text-green-200 list-none"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-2 text-md">{description}</p>

          <div className="flex item-center justify-center mt-3">
            <a
              aria-label="Visit the project"
              className={btn}
              href={demoLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Demo
            </a>
            <a
              aria-label="View the code on GitHub"
              className={btn}
              href={codeLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
