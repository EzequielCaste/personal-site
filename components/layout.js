import { HOME_OG_IMAGE_URL, GITHUB_REPOSITORY } from '../lib/constants';
import Head from 'next/head';
import { Navbar } from '../components/navbar';

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

        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content="This is my personal website" />
        <meta property="og:image" content={HOME_OG_IMAGE_URL} />
      </Head>
      <Navbar />
      <div className="text-gray-900 mx-auto py-4 w-full lg:py-0 lg:my-auto my-10">
        <main>{children}</main>
      </div>

      <footer className="text-center bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto py-3">
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
