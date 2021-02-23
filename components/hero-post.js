import Link from 'next/link';
import DateFormatter from '../components/date-formatter';

export default function HeroPost({ title, date, excerpt, slug }) {
  return (
    <section>
      <div className="mb-20 md:mb-28 mx-auto w-2/3 mt-10">
        <div>
          <h3 className="my-4 text-6xl text-gray-900 font-bold lg:text-4xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:text-gray-600">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-md text-gray-500">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-2xl text-gray-700 leading-relaxed my-4">
            {excerpt}
          </p>
        </div>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="inline-block cursor-pointer py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none">
            Read more
          </a>
        </Link>
      </div>
    </section>
  );
}
