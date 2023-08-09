import { LiveReload, Outlet } from '@remix-run/react';

export default function App() {
  return (
    <html lang='ja'>
    <head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
      />
      <title>EDF6 Weapons</title>
    </head>
    <body>
    <Outlet />
    <LiveReload />
    </body>
    </html>
  );
}
