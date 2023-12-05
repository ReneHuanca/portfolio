import type { Metadata } from 'next'
import { raleway } from './ui/fonts'
import { ProviderTheme } from './providers'
import './globals.css'
import './atom-one-dark.css'
import Navbar from './ui/Navbar'
import Footer from './ui/Footer'

export const metadata: Metadata = {
  title: 'Rene Huanca',
  description: 'Hola soy Rene Huanca, programador web especializado en el backend.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className='scroll-smooth overflow-x-hidden'>
      <body className={`${raleway.className} antialiased dark:bg-gray-900`}>
        <ProviderTheme>
          <Navbar />
          {children}
          <Footer />
        </ProviderTheme>
      </body>
    </html>
  )
}
