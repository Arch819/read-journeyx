import './globals.css';
import StoreProvider from './StoreProvider';

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
          <div id="root">{children}</div>
          <div id="portal"></div>
        </StoreProvider>
      </body>
    </html>
  );
}
