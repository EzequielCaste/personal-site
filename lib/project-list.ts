export const projects = [
  {
    name: 'Rick & Morty Memory Card Game',
    image: 'memory.webp',
    tags: ['Vite', 'Vanilla JS', 'CSS', 'React', 'Semantic UI'],
    description: `Flip a card and find the matching pair.

    This game was built using Vite + React, Vanilla JavaScript and the UI component framework Semantic UI. I've added a confetti celebration when all cards have been flipped, and a restart button to start the game again.
    
    Libraries used:
    lodash: used to shuffle the cards randomly;
    react-confetti: celebration confetti for winners;
    semantic-ui-react: used for buttons and modal`,
    codeLink: 'https://github.com/EzequielCaste/Memory-game',
    demoLink: 'https://ezecaste-memory-game.netlify.app/',
  },  
  {
    name: 'Social Media App',
    image: 'social-app.webp',
    tags: [
      'React',
      'Node.js',
      'MongoDB',
      'GraphQL',
      'mongoose',
      'Apollo Server/Client',
    ],
    description: `A social media app clone where users can register, login, create posts, like posts, and comment on them. I've added new features to the base app such as: allowing the user to edit their posts, responsive layout, light/dark theme selector, and User Profile.`,
    codeLink: 'https://github.com/EzequielCaste/React-GraphQL-Social-App',
    demoLink: 'https://ezecaste-social-app.netlify.app/',
  },
  {
    name: 'DevJobs',
    image: 'devjobs.png',
    tags: ['Next.JS', 'SASS', 'CSS Modules', 'Node-fetch'],
    description: `Job listing board where the user can search and fetch jobs from the GitHub Jobs API. `,
    codeLink: 'https://github.com/EzequielCaste/devjobs',
    demoLink: 'https://ezecaste-devjobs.vercel.app/',
  },
  {
    name: 'Weather App',
    image: 'weather.webp',
    tags: ['React', 'React Router', 'Async/Await'],
    description: `A great way to learn React is by building apps. With this weather app I learned about React Router, API Fetch, Async/Await and Lifting State.`,
    codeLink: 'https://github.com/EzequielCaste/weather-app',
    demoLink: 'https://weather-app-ecaste.vercel.app/',
  },
  {
    name: 'Portfolio / Blog Site',
    image: 'portfolio.webp',
    tags: ['Next.JS', 'TypeScript', 'Tailwind CSS', 'React-Markdown'],
    description: `
    My portfolio webpage using Next.js and Tailwind CSS to showcase some of my front-end projects. This portfolio site also hosts a blog, which I write to share my insights and knowledge on various front-end development topics. The blog posts are in markdown format, which is converted to HTML markup using the react-markdown library.
    `,
    codeLink: 'https://github.com/EzequielCaste/personal-site',
    demoLink: 'https://www.ezecastellanos.com.ar/',
  },
  {
    name: 'AO Copiers webpage',
    image: 'cover_copiers.webp',
    tags: ['React', 'Next.JS', 'TailwindCSS'],
    description: `Mobile First Responsive Landing page for local company built with Next.js and Tailwind CSS as the CSS Framework. Contact form uses a Backend I made with Node.js and Express.`,
    codeLink: 'https://github.com/EzequielCaste/copiers',
    demoLink: 'https://copiers.vercel.app/',
  },
]
