
import type {Metadata} from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import { ChatWidget } from '@/components/chat/chat-widget';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SoftSell Marketplace - Resell Your Software Licenses Easily',
  description: 'SoftSell helps businesses unlock value from unused software licenses. Get fair valuations and quick payments. Turn your surplus software into revenue today!',
  keywords: ['software resale', 'sell software licenses', 'used software', 'license marketplace', 'software asset management', 'IT cost savings'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          defaultTheme="system"
          storageKey="softsell-theme"
        >
          {children}
          <Toaster />
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
