import Link from 'next/link';
import DateFormatter from '../components/date-formatter';

export default function HeroPost({ title, date, excerpt, slug }) {
  return (
    <section>
      <div className="m-10 md:my-auto md:w-4/5 md:mx-auto xl:w-4/6">
        <div>
          <h3 className="mt-14 text-4xl text-gray-900 font-bold lg:text-6xl leading-tight md:text-6xl ">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-gray-600">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-base md:text-lg text-gray-500 md:my-2">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-700 leading-relaxed my-4 md:text-3xl">
            {excerpt}
          </p>
        </div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="md:my-3.5 inline-block cursor-pointer py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none">
            Read more
          </a>
        </Link>
      </div>
    </section>
  );
}
