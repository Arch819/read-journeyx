import './globals.css';

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
        <div id="root">{children}</div>
        <div id="portal"></div>
      </body>
    </html>
  );
}
