import {useRouter} from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import {getPostBySlug, getAllPosts} from '../../lib/api'
import Head from 'next/head'
import {BLOG_SUBTITLE, HOME_OG_IMAGE_URL} from '../../lib/constants'
import ReactMarkdown from 'react-markdown'
import {SocialShare} from '../../components/social-share'
import gfm from 'remark-gfm'

const renderers: {[nodeType: string]: React.ElementType} = {
  /*   code: () => {
    return <code></code>
  }, */
  image: (image: {src: string; alt: string}) => {
    return <img src={image.src} alt={image.alt} />
  },
}

export default function Post({post}) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  const pageTitle = `${post.title} | ${BLOG_SUBTITLE}`

  return (
    <Layout>
      <>
        <article className="prose w-10/12 md:w-11/12 lg:prose-3xl mx-auto my-10  text-gray-700">
          <Head>
            <title>
              {pageTitle}
            </title>
            <link
              rel="canonical"
              href={encodeURI(
                `https://ezecastellanos.com.ar/posts/${post?.slug}`
              )}
            />
            <meta property="og:description" content={post.excerpt} />
            <meta
              data-n-head="ssr"
              data-hid="twitter:description"
              name="twitter:description"
              content={post.excerpt}
            />
            <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          </Head>
          <div className="">
            <ReactMarkdown>
              {post.content}
            </ReactMarkdown>
            <SocialShare post={post} />
          </div>
        </article>
      </>
    </Layout>
  )
}
export async function getStaticProps({params}) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'excerpt',
    'coverImage',
  ])

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
