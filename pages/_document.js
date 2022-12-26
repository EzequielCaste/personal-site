import Document, {Html, Head, Main, NextScript} from 'next/document';
import {HOME_OG_IMAGE_URL} from '../lib/constants';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
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
          <meta name="Description" content="Personal Website and Blog" />
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
          <meta property="og:url" content="https://ezecastellanos.com.ar" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Ezequiel_Caste" />
          <meta name="twitter:creator" content="@Ezequiel_Caste" />
          <meta name="twitter:title" content="Ezequiel Castellanos" />
          <meta name="twitter:url" content="https://ezecastellanos.com.ar" />
          <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
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
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
