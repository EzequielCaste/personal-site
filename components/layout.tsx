import {MAIN_TITLE} from '../lib/constants'
import Head from 'next/head'
import {Navbar} from './navbar'
import {Footer} from './Footer'

export default function Layout({children}) {
  return (
    <>
      <Head>
        <title>{MAIN_TITLE}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="text-gray-900 mx-auto w-full lg:py-0 mt-20">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
