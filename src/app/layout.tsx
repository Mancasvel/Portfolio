import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - CTO y Desarrollador Creativo',
  description: 'Portfolio profesional con experiencia en desarrollo fullstack, arquitecturas modernas, IA y diseño UI/UX',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-primary text-text`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 