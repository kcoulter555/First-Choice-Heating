import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

/** Canonical site URL for Open Graph, schema.org, and absolute asset URLs */
const siteUrl =
  (process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)) ??
  'https://firstchoiceheatingni.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'First Choice Heating | Boiler Services Lisburn, Northern Ireland',
  description: 'Professional boiler servicing, installation & repairs in Lisburn, Belfast, Antrim & Ballymena. Gas Safe registered. 24/7 emergency call-outs available.',
  keywords: 'boiler service Lisburn, heating engineers Lisburn, boiler repair Belfast, gas safe engineers, LPG boiler service, oil boiler service, emergency heating',
  generator: 'v0.app',
  openGraph: {
    title: 'First Choice Heating | Expert Boiler Services',
    description: 'Professional boiler servicing, installation & repairs across Northern Ireland',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "First Choice Heating",
              "description": "Professional boiler servicing, installation and repairs",
              "image": `${siteUrl}/first-choice-heating-logo.png`,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lisburn",
                "addressRegion": "Northern Ireland",
                "addressCountry": "UK"
              },
              "telephone": "+44 7759 344555",
              "email": "David@firstchoiceheatingni.com",
              "areaServed": ["Lisburn", "Belfast", "Antrim", "Ballymena", "Northern Ireland"],
              "priceRange": "$$",
              "sameAs": [
                "https://www.facebook.com/p/First-Choice-Heating-100089883616551/"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
