import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import Head from 'next/head'
import {BLOG_SUBTITLE, HOME_OG_IMAGE_URL} from '../../lib/constants'

const index = () => {
  return <Layout>index</Layout>
}

export default index
