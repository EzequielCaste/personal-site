import React from 'react';
import {projects} from '../lib/project-list';
import {ProjectCard} from './ProjectCard';

export const Projects = () => {
  return (
    <div id="projects" className="bg-gray-500 text-gray-50 h-auto p-10">
      <h2 className="lg:my-24 my-16 font-bold text-4xl lg:text-5xl text-center">
        Some of my projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            key={project.title}
          />
        ))}
      </div>
    </div>
  );
};
