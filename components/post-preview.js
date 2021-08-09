import DateFormatter from '../components/date-formatter';
import Link from 'next/link';

export default function PostPreview({title, date, excerpt, slug}) {
  return (
    <div>
      <h3 className="text-3xl leading-snug lg:text-4xl text-blue-800">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm mb-4 md:mb-0.5 tracking-wider">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg lg:text-2xl">{excerpt}</p>
    </div>
  );
}
