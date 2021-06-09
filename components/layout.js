import {GITHUB_REPOSITORY, MAIN_TITLE} from '../lib/constants';
import Head from 'next/head';
import {Navbar} from '../components/navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

export default function Layout({preview, children}) {
  return (
    <>
      <Head>
        <title>{MAIN_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="text-gray-900 mx-auto w-full lg:py-0 my-10 md:my-auto">
        <main>{children}</main>
      </div>

      <footer className="text-center bg-gray-300 bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto p-3 flex justify-between">
          <div className="">
            &copy; 2020 Ezequiel Castellanos{' '}
            <a
              href="https://twitter.com/Ezequiel_Caste"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                size="1x"
                className="text-gray-700"
                icon={faTwitterSquare}
              />

              <i className="fab fa-twitter-square"></i>
            </a>{' '}
            <a
              href="https://www.linkedin.com/in/ezequiel-castellanos-a9ab6b1b8/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                size="1x"
                className="text-gray-700"
                icon={faLinkedin}
              />
            </a>
          </div>
          <a
            href={`${GITHUB_REPOSITORY}`}
            className="font-medium hover:underline"
          >
            View code on GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
