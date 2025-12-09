'use client';
import { Box } from '@chakra-ui/react';
import { Analytics } from '@vercel/analytics/next';
import { Providers } from './providers';
import Footer from '@/features/layout/Footer';
import Nav from '@/features/layout/Nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Providers>
          <Nav />
          <Box as='main' minH='80vh'>
            {children}
            <Analytics />
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
