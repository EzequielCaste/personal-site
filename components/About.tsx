import React from 'react'
import Scroller from './Scroller/index'

export const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-200 text-gray-700 text-base h-auto p-5 pb-16 lg:p-20 sm:p-14 mx-auto sm:text-xl lg:text-3xl space-y-6 "
    >
      <div className="flex flex-col gap-5 justify-center items-center w-11/12 lg:w-2/3 mx-auto md:pb-14 sm:leading-normal lg:max-w-3xl">
        <h2 className="my-14 text-center font-bold text-4xl">About me</h2>
        <p>
          Hi, I'm Ezequiel, a Frontend Web Developer specialized in React, who
          lives in Argentina 📌
        </p>
        <p>
          My greatest quality is being self-taught and having the ability to
          identify and implement effective solutions.
        </p>

        <p>
          I also volunteer as an English/Spanish translator for{' '}
          <a href="https://es.javascript.info/about">Javascript.info</a>, an
          open-source tutorial, and at{' '}
          <a href="https://www.freecodecamp.org/espanol/news/author/ezequiel_caste/">
            freeCodeCamp
          </a>
          , contributing with translation and review of articles.
        </p>
        <Scroller />
      </div>
    </section>
  )
}
