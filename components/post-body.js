import { StructuredText, Image } from "react-datocms";

export default function PostBody({ content }) {
  return (
    <div className="prose prose-lg prose-blue max-w-4xl">
      <StructuredText
        data={content}
        renderBlock={({ record }) => {
          if (record.__typename === "ImageBlockRecord") {
            return <Image data={record.image.responsiveImage} />;
          }
          if (record.__typename === "RawHtmlRecord") {
            return (
              <div
                dangerouslySetInnerHTML={{
                  __html: record.contentRecirculation,
                }}
              />
            );
          }

          return (
            <>
              <p>Don't know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          );
        }}
      />
    </div>
  );
}
