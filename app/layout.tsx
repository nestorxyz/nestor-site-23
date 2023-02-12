import '@/styles/globals.css';
import { Heebo } from '@next/font/google';
import { AnalyticsWrapper } from '@/components/Analytics';
import { Toaster } from '@/components/toaster';

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-heebo',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={heebo.variable}>
      <body className="font-heebo">
        {children}
        <AnalyticsWrapper />
      </body>
      <Toaster />
    </html>
  );
}
