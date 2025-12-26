import { Manrope } from 'next/font/google';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],  // Required for Latin characters
  weight: ['400', '500', '600', '700'],  // Common weights; adjust as needed
  variable: '--font-manrope',  // Optional: for CSS variables/Tailwind
  display: 'swap',  // Prevents layout shift
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.variable || manrope.className}
      >
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
