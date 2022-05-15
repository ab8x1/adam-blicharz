import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preload" href="/fonts/workSans.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
            <style dangerouslySetInnerHTML={{__html: `
                @font-face {
                  font-family: 'Work Sans';
                  font-style: normal;
                  font-weight: 400;
                  font-display: swap;
                  src: local(''),
                      url('/fonts/workSans.woff2') format('woff2'),
                      url('/fonts/workSans.woff') format('woff');
                }
            `}}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

}