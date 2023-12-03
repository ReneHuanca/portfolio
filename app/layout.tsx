import type { Metadata } from 'next'
import { nunito } from './ui/fonts'
import './globals.css'
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
    <html lang="es">
      <body className={`${nunito.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
