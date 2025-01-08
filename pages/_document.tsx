import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* You can still include meta tags, fonts, etc., in the Head */}
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Load Bootstrap JS and other scripts asynchronously */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
          crossOrigin="anonymous"
        />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.sticky.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="beforeInteractive" />
        <Script src="/js/magnific-popup-options.js" strategy="beforeInteractive" />
        <Script src="/js/click-scroll.js" strategy="beforeInteractive" />
        <Script src="/js/custom.js" strategy="beforeInteractive" />
      </body>
    </Html>
  );
}
