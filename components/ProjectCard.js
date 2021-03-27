import React from 'react';
import Image from 'next/image';

export const ProjectCard = ({project}) => {
  const {name, image, tags, description, codeLink, demoLink} = project;
  const btn =
    'text-white px-3 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-800 transition-colors';

  return (
    <div className="bg-gray-700 flex flex-col items-center p-5 rounded shadow-lg">
      <a href={demoLink}>
        <Image
          className="rounded-md"
          src={`/images/${image}`}
          width={300}
          height={200}
        />
      </a>
      <div className="">
        <div className="font-medium text-2xl my-3">{name}</div>
        <div className="text-md">{description}</div>
        {/* <div className="flex justify-around mt-5">
          <a className={btn} href={demoLink}>
            Demo
          </a>
          <a className={btn} href={codeLink}>
            Code
          </a>
        </div> */}
      </div>
    </div>
  );
};
