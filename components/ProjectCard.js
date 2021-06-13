import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCard = ({project}) => {
  const {name, image, tags, description, codeLink, demoLink} = project;
  const btn =
    'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition-colors mr-4';

  return (
    <div className="my-10">
      <div className="h-full mb-10 bg-gray-700 flex flex-col justify-between items-center p-10 rounded shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
        <Link href={demoLink}>
          <img
            className="rounded-md"
            src={`/images/${image}`}
            width={300}
            height={200}
          />
        </Link>
        <div className="">
          <div className="font-medium text-2xl my-3">{name}</div>
          <div className="text-md">{description}</div>
        </div>
        <div className="mt-5">
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
