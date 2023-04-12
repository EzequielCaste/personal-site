import DateFormatter from './date-formatter'
import Link from 'next/link'

export default function PostPreview({title, date, excerpt, slug}) {
  return (
    <div>
      <h3 className="font-medium text-2xl">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span className="hover:underline">{title}</span>
        </Link>
      </h3>
      <div className="text-sm mb-4 md:mb-0.5 tracking-wider">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg lg:text-2xl">{excerpt}</p>
    </div>
  )
}
