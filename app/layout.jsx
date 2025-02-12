import {
  ORG_AUTHORS,
  ORG_DESC,
  ORG_DOMAIN,
  ORG_IMAGES,
  ORG_KEYWORDS,
  ORG_LOGO,
  ORG_TITLE,
  ORG_TWITTER_CREATOR,
  ORG_TWITTER_SITE,
} from '@/config/org';
import './globals.css';

export const metadata = {
  title: ORG_TITLE,
  description: ORG_DESC,
  keywords: ORG_KEYWORDS,
  authors: ORG_AUTHORS,
  openGraph: {
    type: 'website',
    url: ORG_DOMAIN,
    title: ORG_TITLE,
    description: ORG_DESC,
    images: ORG_IMAGES.map((i) => ({ url: i.url, alt: i.name })),
  },
  twitter: {
    card: 'summary_large_image',
    site: ORG_TWITTER_SITE,
    creator: ORG_TWITTER_CREATOR,
    title: ORG_TITLE,
    description: ORG_DESC,
    images: ORG_IMAGES.map((i) => i.url),
  },
  icons: { icon: ORG_LOGO },
  robots: { index: true, follow: true },
  alternates: { canonical: ORG_DOMAIN },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
