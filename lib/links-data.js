export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/#about',
    text: 'about',
  },
  {
    id: 3,
    url: '/#projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/posts',
    text: 'blog',
  },
  {
    id: 5,
    url: 'mailto:ezequiel.caste@gmail.com',
    text: 'contact',
  },
  {
    id: 6,
    url: 'https://github.com/EzequielCaste/CV/raw/main/Ezequiel%20Castellanos%20Resume.pdf',
    text: 'resume',
  },
];
/*
text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium 
${router.pathname === '/' && 'hover:bg-gray-900'}

text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium

text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium active:bg-gray-900

text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium  
${router.pathname.includes('/posts') && 'bg-gray-900'}

text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium

text-gray-900 px-3 py-2 float-right bg-gray-300 rounded-md text-sm font-medium

*/
