import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Shri Balaji Mobiles | Certified 2nd Hand & Refurbished Phones Store',
  description: 'Premium multi-brand mobile store specializing in certified 2nd hand and refurbished smartphones with 52-point quality testing and warranty, featuring all Indian mobile brands and electronics.',
  openGraph: {
    title: 'Shri Balaji Mobiles | Certified 2nd Hand & Refurbished Phones Store',
    description: 'Premium multi-brand mobile store specializing in certified 2nd hand and refurbished smartphones with 52-point quality testing and warranty, featuring all Indian mobile brands and electronics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Balaji Mobiles',
    description: 'Premium multi-brand mobile store specializing in certified 2nd hand and refurbished smartphones with 52-point quality testing and warranty, featuring all Indian mobile brands and electronics.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
