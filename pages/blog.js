import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { MAIN_TITLE } from '../lib/constants';
import { generateRss } from '../lib/rss';
import fs from 'fs';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Blog | {MAIN_TITLE}</title>
        </Head>

        {heroPost && (
          <HeroPost
            title={heroPost.title}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content']);

  const rss = await generateRss(allPosts);

  fs.writeFileSync('./public/rss.xml', rss);

  return {
    props: { allPosts },
  };
}
