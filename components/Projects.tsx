import Link from 'next/link'
import React from 'react'
import {projects} from '../lib/project-list'
import {ProjectCard} from './ProjectCard'

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center items-center bg-gray-300 text-gray-50 h-auto sm:p-10 sm:pb-24 p-2 pb-8"
    >
      <h2 className="lg:my-24 my-16 font-bold text-4xl lg:text-5xl text-center text-gray-700">
        Some of my projects
      </h2>
      <div>
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <Link
        className="sm:mt-20 text-gray-700 hover:text-gray-500 font-semibold"
        href="/projects"
      >
        View more projects
      </Link>
    </div>
  )
}
