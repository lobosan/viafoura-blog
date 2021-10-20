import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="vf:domain" content="viafoura-blog.vercel.app" />
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/javascript"
            async
            src="//cdn.viafoura.net/vf-v2.js"
          ></script>
        </body>
      </Html>
    );
  }
}
