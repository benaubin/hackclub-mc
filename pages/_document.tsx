// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet"></link>
          <style jsx global>{`
              body {
                font-family: "Cabin", sans-serif;
                background-color: rgb(206, 41, 60);
                background-image: linear-gradient(rgb(228, 115, 45), rgb(206, 41, 143));
                background-size: 100vw 100vh;


                font-weight: 400;
              }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;