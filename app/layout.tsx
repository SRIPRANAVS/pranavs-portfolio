import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pravav - Aspiring Web Developer',
  description: 'Pravav\'s first web development project. Learning HTML, CSS, JavaScript, and C++ to build real-world solutions.',
  keywords: 'Pravav, Web Developer, HTML, CSS, JavaScript, C++, Portfolio, Chennai Institute of Technology',
  authors: [{ name: 'Pravav' }],
  openGraph: {
    title: 'Pravav - Aspiring Web Developer',
    description: 'Building my first project, one line of code at a time.',
    type: 'website',
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
