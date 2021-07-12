import React from 'react';
import {projects} from '../lib/project-list';
import {ProjectCard} from './ProjectCard';

export const Projects = () => {
  return (
    <div id="projects" className="bg-gray-300 text-gray-50 h-auto sm:p-10 p-2">
      <h2 className="lg:my-24 my-16 font-bold text-4xl lg:text-5xl text-center text-gray-700">
        Some of my projects
      </h2>
      <div className="flex flex-col lg:flex-row justify-center">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};
