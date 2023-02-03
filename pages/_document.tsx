import Document, {Html, Head, Main, NextScript} from 'next/document'
import {HOME_OG_IMAGE_URL, MAIN_TITLE} from '../lib/constants'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
          <title>{MAIN_TITLE}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="google-site-verification"
            content="0JzJgTcu_xAGmKyIC7HRFBWi7IWx0ZEzkc-bzfR6UfM"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <meta name="author" content="Ezequiel Castellanos" />
          <meta
            name="description"
            content="I'm a Frontend Developer who specializes in JavaScript. I have experience developing web applications with React and Node.js. I also have experience with Unit Testing and, E2E Testing with Cypress."
          />
          <meta
            name="keywords"
            content="ezequiel, castellanos, ezequiel castellanos, portfolio, front-end, frontend, full stack, web, remote, developer, blog, translator, translations, web development"
          />
          <meta name="Resource-type" content="Document" />

          <meta property="og:site_name" content="Ezequiel Castellanos" />
          <meta
            property="og:title"
            content="Ezequiel Castellanos | Front-end Developer"
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ezecastellanos.com.ar/" />
          <meta
            property="og:description"
            content="I'm a Frontend Developer who specializes in JavaScript. I have experience developing web applications with React and Node.js. I also have experience with Unit Testing and, E2E Testing with Cypress."
          />
          <meta name="twitter:card" content="summary"></meta>
          <meta name="twitter:site" content="@Ezequiel_Caste" />
          <meta name="twitter:creator" content="@Ezequiel_Caste" />
          <meta name="twitter:title" content="Ezequiel Castellanos" />
          <meta
            name="twitter:summary"
            content="I'm a Frontend Developer who specializes in JavaScript. I have experience developing web applications with React and Node.js. I also have experience with Unit Testing and, E2E Testing with Cypress."
          />
          <meta name="twitter:url" content="https://ezecastellanos.com.ar" />
          <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />

          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="styled-scrollbars">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument