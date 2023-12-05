import type { Metadata } from 'next'
import { poppins } from './ui/fonts'
import { ProviderTheme } from './providers'
import './globals.css'
import './atom-one-dark.css'
import Navbar from './ui/Navbar'

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
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ProviderTheme>
          <Navbar />
          {children}
        </ProviderTheme>
      </body>
    </html>
  )
}
