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
      <div className="grid sm:grid-cols-2 gap-x-16 mb-8">
        <h1>
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h1>
        <div>
          <p className="text-gray-700 antialiased text-base mb-4">{excerpt}</p>
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
