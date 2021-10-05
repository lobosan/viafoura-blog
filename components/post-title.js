export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl lg:text-5xl font-semibold tracking-tighter leading-tight my-6 md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
