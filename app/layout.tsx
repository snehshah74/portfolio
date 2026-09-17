import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const siteUrl = 'https://snehshah.vercel.app'
const title = 'Sneh Shah — AI Product Manager & Agentic AI Specialist'
const description =
  'Product Manager specializing in agentic AI platforms and workflow automation. Built Mycroft, an AI workflow platform for finance teams at Humanitarians AI, delivered enterprise AI implementations at CohesionIB, and co-founded GrowthCruise.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  authors: [{ name: 'Sneh Shah', url: siteUrl }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Sneh Shah',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sneh Shah',
  jobTitle: 'AI Product Manager',
  url: siteUrl,
  sameAs: ['https://www.linkedin.com/in/snehshah74/', 'https://github.com/snehshah74'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
