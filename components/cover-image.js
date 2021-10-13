import { Image } from "react-datocms";
import Link from "next/link";
import classNames from "classnames";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={classNames("shadow-md", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div>
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
