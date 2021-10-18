import Link from "next/link";

export default function Alert({ preview }) {
  return (
    <div className="text-center mb-1">
      {preview ? (
        <>
          Preview Mode{" "}
          <Link href="/api/exit-preview">
            <a className="underline hover:text-sky-500 duration-200 transition-colors">
              Off
            </a>
          </Link>
        </>
      ) : (
        <>
          Preview Mode{" "}
          <Link href="/api/preview">
            <a className="underline hover:text-sky-500 duration-200 transition-colors">
              On
            </a>
          </Link>
        </>
      )}
    </div>
  );
}
