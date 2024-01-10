import type { Metadata } from 'next';
import { Rubik } from 'next/font/google'

import './globals.css';
import Navbar from "./components/navbar";
import { Providers } from './providers';

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  title: 'Champion practice tracker',
  description: 'Track you practice with new champs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <Navbar></Navbar>

          {children}
        </Providers>
      </body>
    </html>
  )
}
