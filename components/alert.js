import Container from "./container";

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Preview Mode{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Off
              </a>
            </>
          ) : (
            <>
              Preview Mode{" "}
              <a
                href="/api/preview"
                className="underline hover:text-cyan duration-200 transition-colors"
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
