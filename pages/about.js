import Layout from '../components/layout';
import Head from 'next/head';
import {MAIN_TITLE} from '../lib/constants';

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>About me | {MAIN_TITLE}</title>
        </Head>

        <div className="m-10 md:my-auto md:w-4/5 md:mx-auto xl:w-4/6">
          <h1 className="sm:mt-28 text-4xl text-gray-900 font-bold lg:text-6xl leading-tight md:text-6xl ">
            About me
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed my-4 md:text-3xl">
            Hi! I'm Ezequiel Castellanos and I'm a Front-End developer. I'm 38
            years old. I currently live in the province of Salta, Argentina. I
            am self taught and my level of English is advanced / fluent. In my
            teenage years, my interest in programming and web design was
            awakened. At that point I started researching programming languages
            ​​like Visual Basic 6 and JavaScript. After high school I entered
            the University to study Systems Engineering, hoping to start seeing
            programming languages, but the reality is that programming came
            after several courses. A few years later we began to see the C
            language and various basic concepts of programming such as:
            pseudocode, algorithms, data structures, Arrays. What I highlight is
            the importance of developing problem-solving skills, identifying the
            problem and breaking it down into several mini-problems.
          </p>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'content']);

//   const rss = await generateRss(allPosts);

//   fs.writeFileSync('./public/rss.xml', rss);

//   return {
//     props: {allPosts},
//   };
// }
