import './globals.css'

export const metadata = {
  title: 'Smart Job Matcher - ASTRNT',
  description: 'CV Parsing & Smart Match Engine for high-volume hiring',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
