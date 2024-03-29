import React from 'react'
import {About} from './About'
import {Links} from './Links/Links'
import {Projects} from './Projects'
import {Skills} from './Skills'
import {Welcome} from './Welcome'

export default function Home() {
  return (
    <>
      <Welcome />
      <Links />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
