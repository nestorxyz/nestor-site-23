import '@/styles/globals.css';
import { Heebo } from '@next/font/google';
import { AnalyticsWrapper } from '@/components/Analytics';

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
        <main className="min-h-screen bg-black flex flex-col relative overflow-x-hidden w-full h-full">
          <div className="flex-1 flex flex-col justify-between h-full w-full pt-16 px-4 pb-8 sm:pb-16">
            {children}
          </div>
        </main>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
