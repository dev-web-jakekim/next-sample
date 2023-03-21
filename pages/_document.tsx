import { Html, Head, Main, NextScript } from 'next/document';

const DocumentComponent = (): React.ReactElement => {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default DocumentComponent;
