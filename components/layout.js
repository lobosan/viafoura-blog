import Footer from "../components/footer";
import Main from "../components/main";
import Nav from "../components/nav";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.viafoura.net/vf-v2.js";
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      console.log(
        "1. LOADED:",
        document.querySelectorAll(
          'script[src="https://cdn.viafoura.net/vf-v2.js"]'
        ).length
      );
    });

    return function cleanup() {
      window.vfLoaded = false;
      document
        .querySelector('script[src="https://cdn.viafoura.net/vf-v2.js"]')
        .remove();
      console.log(
        "2. UNMOUNT:",
        document.querySelectorAll('script[src="//cdn.viafoura.net/vf-v2.js"]')
          .length
      );
    };
  }, []);

  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer preview={preview} />
    </>
  );
}
