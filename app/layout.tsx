import './globals.css';
import { Heebo } from '@next/font/google';

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
      <body className="font-heebo bg-black container mx-auto max-w-4xl px-4 lg:px-0 py-5 md:py-10 flex flex-col gap-10">
        {children}
      </body>
    </html>
  );
}
