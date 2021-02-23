import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import Head from 'next/head';
import { MAIN_TITLE } from '../../lib/constants';
import markdownToHtml from '../../lib/markdownToHtml';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const renderers = {
  image: (image) => {
    return (
      <Image
        src={image.src}
        alt={image.alt}
        width={882}
        height={480}
        layout="responsive"
      />
    );
  },
};

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <>
        <article className="prose lg:prose-xl w-2/3 mx-auto mb-32 text-gray-700">
          <Head>
            <title>
              {post.title} | {MAIN_TITLE}
            </title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <div className="markdown">
            <ReactMarkdown
              className="markdown"
              children={post.content}
              renderers={renderers}
            />
          </div>
        </article>
      </>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
