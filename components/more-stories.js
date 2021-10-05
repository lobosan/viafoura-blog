import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-8 leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            id={post.id}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
