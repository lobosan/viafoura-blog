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
      console.log("loaded");
      console.log("window.vfLoaded", window.vfLoaded);
      console.log(
        "Viafoura Script Counter",
        document.querySelectorAll(
          'script[src="https://cdn.viafoura.net/vf-v2.js"]'
        ).length
      );
      window.vfQ.push(function () {
        window.vf.context.reset();
      });
    });

    return () => {
      console.log("unmounted");
      window.vfLoaded = false;
      console.log("window.vfLoaded", window.vfLoaded);
      document
        .querySelector('script[src="https://cdn.viafoura.net/vf-v2.js"]')
        .remove();
      console.log(
        "Viafoura Script Counter",
        document.querySelectorAll(
          'script[src="https://cdn.viafoura.net/vf-v2.js"]'
        ).length
      );
    };
  }, []);

  return (
    <>
      <Nav />
      <Main children={children} />
      <Footer preview={preview} />
    </>
  );
}
