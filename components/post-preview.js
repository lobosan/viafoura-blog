import Avatar from "../components/avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  id,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          responsiveImage={coverImage.responsiveImage}
        />
      </div>
      <h3 className="mb-3">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
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
  );
}
