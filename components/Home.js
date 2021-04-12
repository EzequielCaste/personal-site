import React from 'react';
import {About} from './About';
import {Links} from './Links';
import {Projects} from './Projects';
import {Welcome} from './Welcome';

export default function Home() {
  return (
    <>
      <Welcome />
      <Links />
      <About />
      <Projects />
    </>
  );
}
