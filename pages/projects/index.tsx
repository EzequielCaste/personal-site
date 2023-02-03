import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import Head from 'next/head'
import {PROJECT_SUBTITLE} from '../../lib/constants'
import {projects} from '../../lib/project-list'

import {ProjectCard} from '../../components/ProjectCard'

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{PROJECT_SUBTITLE}</title>
      </Head>
      <div
        id="projects"
        className="max-w-4xl mx-auto flex flex-col justify-center items-center bg-gray-300 text-gray-50 h-auto sm:p-10 p-2"
      >
        <div className="w-60 sm:w-auto py-5 lg:py-0 text-gray-700">
          <h1 className="text-2xl sm:text-4xl font-semibold my-4">
            My Porfolio Projects
          </h1>
          <p className="text-base sm:text-xl xl:text-2xl lg:my-8">
            These are some of the front-end projects I've been working on
            recently. They're all small, experimental projects that are meant to
            showcase the technologies I'm learning. I'm using React to build
            them and Tailwind CSS for the styling.
          </p>
        </div>
        {projects.slice(3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Layout>
  )
}
