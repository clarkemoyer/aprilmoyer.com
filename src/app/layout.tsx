import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://aprilmoyer.com'),
  title: {
    default: 'April Moyer | Coming Soon',
    template: '%s | April Moyer',
  },
  description: 'A personal website for April Moyer is being prepared.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://aprilmoyer.com/',
    siteName: 'April Moyer',
    title: 'April Moyer | Coming Soon',
    description: 'A personal website for April Moyer is being prepared.',
  },
  twitter: {
    card: 'summary',
    title: 'April Moyer | Coming Soon',
    description: 'A personal website for April Moyer is being prepared.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
