import './globals.css'; // Import the global CSS
import { ReactNode } from 'react';

export const metadata = {
  title: 'Your Project Title',
  description: 'Description of your project',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Add the Poppins font globally */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
