import Container from "./container";

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div className="text-center text-sm mt-1">
          {preview ? (
            <>
              Preview Mode{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-sky-500 duration-200 transition-colors"
              >
                Off
              </a>
            </>
          ) : (
            <>
              Preview Mode{" "}
              <a
                href="/api/preview"
                className="underline hover:text-sky-500 duration-200 transition-colors"
              >
                On
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
