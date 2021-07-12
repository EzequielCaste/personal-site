import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <nav className="fixed bg-gray-700 w-full shadow-lg z-10">
      <div className="container mx-auto px-2">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
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
                <Link href="/">
                  <a
                    className={`text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium ${
                      router.pathname === '/' && 'hover:bg-gray-900'
                    }`}
                  >
                    Home
                  </a>
                </Link>
                <Link href="/#about">
                  <a
                    onClick={toggleMenu}
                    className="text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium"
                  >
                    About Me
                  </a>
                </Link>
                <Link href="/#projects">
                  <a className="text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium active:bg-gray-900">
                    Projects
                  </a>
                </Link>
                <Link href="/posts">
                  <a
                    className={`text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium  ${
                      router.pathname.includes('/posts') && 'bg-gray-900'
                    }`}
                  >
                    Blog
                  </a>
                </Link>
                <Link href="mailto:ezequiel.caste@gmail.com">
                  <a className="text-white px-3 py-2 hover:bg-gray-900 rounded-md text-sm font-medium">
                    Contact
                  </a>
                </Link>
                <Link href="https://github.com/EzequielCaste/CV/raw/main/Ezequiel%20Castellanos%20Resume.pdf">
                  <a className="text-gray-900 px-3 py-2 float-right bg-gray-300 rounded-md text-sm font-medium">
                    Resume
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          {menuToggle && (
            <div className="px-2 pt-2 pb-3 space-y-2">
              <Link href="/">
                <a
                  onClick={toggleMenu}
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
              </Link>
              <Link href="/#about">
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About Me
                </a>
              </Link>
              <Link href="#projects">
                <a
                  onClick={toggleMenu}
                  className="text-white px-3 py-2 block hover:bg-gray-900 rounded-md text-sm font-medium"
                >
                  Projects
                </a>
              </Link>
              <Link href="/posts">
                <a
                  onClick={toggleMenu}
                  className="text-gray-300 hover:bg-gray-900 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Blog
                </a>
              </Link>
              <Link href="mailto:ezequiel.caste@gmail.com">
                <a
                  onClick={toggleMenu}
                  className="text-white px-3 py-2 block hover:bg-gray-900 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </Link>
              <Link href="https://github.com/EzequielCaste/CV/raw/main/Ezequiel%20Castellanos%20Resume.pdf">
                <a className="block text-gray-900 px-3 py-2 bg-gray-300 rounded-md  text-sm font-medium">
                  Resume
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
