import React from 'react';
import { projects } from '../lib/project-list';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  return (
    <div className="bg-gray-500 text-gray-50 h-auto p-10">
      <h2 className="font-medium mb-12 text-5xl text-center">
        Some of my projects
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};
