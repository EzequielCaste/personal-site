import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = ({project}) => {
  const {name, image, tags, description, codeLink, demoLink} = project;
  const btn =
    'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition-colors mr-4';

  return (
    <div className="sm:my-5 sm:mx-auto md:w-auto md:mx-1 lg:max-w-xs">
      <div className="flex flex-col sm:flex-row lg:flex-col h-full mb-10 bg-gray-700  justify-between items-center p-1 sm:p-4 rounded shadow-lg">
        <Link href={demoLink}>
          <img
            alt={`Thumbnail for ${name}`}
            className="rounded-md md:w-1/2 lg:w-full cursor-pointer"
            src={`/images/${image}`}
            width={350}
            height={200}
          />
        </Link>
        <div className="p-4">
          <div className="font-medium text-2xl my-3">{name}</div>
          <div className="flex flex-col">
            <span>Tecnologies used:</span>
            <ul className="flex justify-evenly items-center my-2">
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
          <div className="text-md">{description}</div>
        </div>
        <div className="sm:flex sm:flex-col lg:flex-row lg:justify-center lg:items-center lg:space-y-0 sm:space-y-5 my-5">
          <a className={btn} href={demoLink}>
            Demo
          </a>
          <a className={btn} href={codeLink}>
            Code
          </a>
        </div>
      </div>
    </div>
  );
};
