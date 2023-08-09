import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { withEmotionCache } from '@emotion/react';
import { ReactNode, useContext } from 'react';
import ClientStyleContext from '~/component/context/ClientStyleContext';
import { createTheme, unstable_useEnhancedEffect as useEnhancedEffect } from '@mui/material';
import Layout from '~/component/Layout';

interface DocumentProps {
  readonly children: ReactNode;
  readonly title?: string;
}

const theme = createTheme();

const Document = withEmotionCache(({ children, title }: DocumentProps, emotionCache) => {
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEnhancedEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      // eslint-disable-next-line no-underscore-dangle
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <meta name='theme-color' content={theme.palette.primary.main} />
      {title ? <title>{title}</title> : null}
      <Meta />
      <Links />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <meta name='emotion-insertion-point' content='emotion-insertion-point' />
    </head>
    <body>
    {children}
    <ScrollRestoration />
    <Scripts />
    <LiveReload />
    </body>
    </html>
  );
});

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

// TODO https://remix.run/docs/en/1.19.2/pages/v2#catchboundary-and-errorboundary
// https://remix.run/docs/en/v1/api/conventions#catchboundary
// export function CatchBoundary() {
//   const caught = useCatch();
//
//   let message;
//   switch (caught.status) {
//     case 401:
//       message = <p>Oops! Looks like you tried to visit a page that you do not have access to.</p>;
//       break;
//     case 404:
//       message = <p>Oops! Looks like you tried to visit a page that does not exist.</p>;
//       break;
//
//     default:
//       throw new Error(caught.data || caught.statusText);
//   }
//
//   return (
//     <Document title={`${caught.status} ${caught.statusText}`}>
//       <Layout>
//         <h1>
//           {caught.status}: {caught.statusText}
//         </h1>
//         {message}
//       </Layout>
//     </Document>
//   );
// }
