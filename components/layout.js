import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Main from "../components/main";

export default function Layout({ preview, children }) {
  return (
    <>
      <Navbar />
      <Main children={children} />
      <Footer preview={preview} />
    </>
  );
}
