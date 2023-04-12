import PostPreview from './post-preview'

export default function MoreStories({posts}) {
  return (
    <section className="mx-auto w-5/6 mt-5 lg:w-3/6 max-w-screen-md">
      <header className="capitalize lg:my-20 my-16 font-bold text-4xl lg:text-5xl text-center text-gray-700">
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
