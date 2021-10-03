import Nav from "../components/nav";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect } from "react";

export default function Layout({ preview, children }) {
  useEffect(() => {
    if (window.vf) {
      delete window.vf;
      window.vfLoaded = false;
      document
        .querySelector('script[src="//cdn.viafoura.net/vf-v2.js"]')
        .remove();
    }
    const vfjs = document.createElement("script");
    vfjs.setAttribute("type", "text/javascript");
    vfjs.setAttribute("async", true);
    vfjs.setAttribute("src", "//cdn.viafoura.net/vf-v2.js");
    document.getElementsByTagName("script")[0].insertBefore(vfjs, null);
  }, []);
  return (
    <>
      <Nav />
      <Main children={children} />
      <Footer preview={preview} />
    </>
  );
}
