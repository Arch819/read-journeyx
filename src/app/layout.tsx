import dynamic from 'next/dynamic';
import AppProvider from './AppProvider';
import './globals.css';
const StoreProvider = dynamic(() => import('../lib/StoreProvider'), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Read Journey</title>
      </head>
      <body>
        <StoreProvider>
          <AppProvider>
            <div id="root">{children}</div>
            <div id="portal"></div>
          </AppProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
