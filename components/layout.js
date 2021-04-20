import {HOME_OG_IMAGE_URL, GITHUB_REPOSITORY} from '../lib/constants';
import Head from 'next/head';
import {Navbar} from '../components/navbar';
import {Twitter} from './Twitter';
import {Linkedin} from './Linkedin';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';

export default function Layout({preview, children}) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
        <link rel="mask-icon" href="icon.svg" color="#000000" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content="This is my personal website" />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Navbar />
      <div className="text-gray-900 mx-auto w-full lg:py-0 my-10 md:my-auto">
        <main>{children}</main>
      </div>

      <footer className="text-center bg-gray-300 bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto p-3 flex justify-between">
          <div className="">
            2020 Ezequiel Castellanos{' '}
            <a
              href="https://twitter.com/Ezequiel_Caste"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                className="w-4 text-gray-700"
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
                className="w-4 text-gray-700"
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
