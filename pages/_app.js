import {useEffect} from 'react';
import '../styles/globals.css';
import {useRouter} from 'next/router';

import * as ga from '../lib/ga';

function MyApp({Component, pageProps}) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routerChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return <Component {...pageProps} />;
}

export default MyApp;
