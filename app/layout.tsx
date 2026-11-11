import React from 'react';
import '../src/index.css';

export const metadata = {
  title: 'Shelby Bilberry | Portfolio & Resume',
  description: 'Personal portfolio and digital resume for Shelby Bilberry, Data Analytics student at The Ohio State University.',
  openGraph: {
    title: 'Shelby Bilberry | Portfolio & Resume',
    description: 'Personal portfolio and digital resume for Shelby Bilberry, Data Analytics student at The Ohio State University.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F9F7F2] text-[#222A24] antialiased selection:bg-[#E2ECE3] selection:text-[#1E3624]">
        {children}
      </body>
    </html>
  );
}
