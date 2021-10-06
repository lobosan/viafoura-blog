import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  id,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="my-8">
        <CoverImage
          title={title}
          responsiveImage={coverImage.responsiveImage}
          slug={slug}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-20">
        <div>
          <h1 className="mb-4">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h1>
        </div>
        <div>
          <p className="text-gray-700 antialiased text-base leading-relaxed mb-4">
            {excerpt}
          </p>
          <Avatar
            name={author.name}
            picture={author.picture}
            date={date}
            postId={id}
          />
        </div>
      </div>
    </section>
  );
}
