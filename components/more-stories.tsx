import PostPreview from './post-preview'

export default function MoreStories({posts}) {
  return (
    <section className="mx-auto w-5/6 mt-5 lg:w-3/6 max-w-screen-md">
      <header className="capitalize font-bold text-5xl lg:text-6xl tracking-wider mb-9 md:my-16">
        <h2>my articles</h2>
      </header>
      <div className="flex flex-col space-y-10 mb-20 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
