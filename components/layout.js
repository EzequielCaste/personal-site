import { HOME_OG_IMAGE_URL, GITHUB_REPOSITORY } from '../lib/constants';
import Head from 'next/head';
import { Navbar } from '../components/navbar';
import { Projects } from './Projects';

export default function Layout({ preview, children }) {
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />

        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content="This is my personal website" />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Navbar />
      <div className="text-gray-900 mx-auto py-4 h-screen">
        <main>{children}</main>
      </div>
      <Projects />
      <footer className="bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto p-20">
          <a
            href={`${GITHUB_REPOSITORY}`}
            className="font-bold hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </footer>
    </>
  );
}
