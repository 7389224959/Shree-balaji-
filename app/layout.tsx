import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Shri Balaji Mobiles | Multi-Brand Smartphone & Electronics Store',
  description: 'Official online store of Shri Balaji Mobiles. Get best deals on Apple, Samsung, OnePlus, Google Pixel, and smart electronics with 2-hour express delivery.',
  openGraph: {
    title: 'Shri Balaji Mobiles | Multi-Brand Smartphone & Electronics Store',
    description: 'Official online store of Shri Balaji Mobiles with authorized warranty and express delivery.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shri Balaji Mobiles',
    description: 'Official online store of Shri Balaji Mobiles with authorized warranty and express delivery.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
