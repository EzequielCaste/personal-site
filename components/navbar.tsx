import {useState} from 'react';
import Link from 'next/link';
import {links} from '../lib/links-data';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const desktopLinks =
    'text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium capitalize ';

  const mobileLinks =
    'block text-gray-100 px-3 py-2 text-center rounded-md text-base font-medium hover:bg-gray-900 hover:text-white capitalize';
  const resumeLink = `${mobileLinks} bg-gray-300 text-gray-700`;


  return (
    <nav className="fixed bg-gray-700 w-full shadow-lg z-10">
      <div className={`container max-w-4xl mx-auto px-2`}>
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {links.map((link) => {
                  const {id, url, text} = link;
                  return (
                    <Link className={desktopLinks} key={id} href={url}>
                      {text}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${menuToggle ? '' : 'hidden'} `}          
          id="mobile-menu"
        >
          <div className="flex flex-col justify-evenly px-2 pt-2 pb-8 space-y-2 h-full">
            {links.map((link) => {
              const {id, url, text} = link;
              return (
                <Link onClick={() => setMenuToggle(!menuToggle)}
                    className={text === 'resume' ? resumeLink : mobileLinks} key={id} href={url}>                 
                    {text}                
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
