import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Amriz Portfolio',
  description: 'Personal portfolio and admin panel',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
