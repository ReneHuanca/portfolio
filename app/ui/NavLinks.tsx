'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { poppins } from './fonts'

const routes = [
  { name: 'Inicio', href: '/#Home' },
  { name: 'Sobre mí', href: '/#About' },
  { name: 'Proyectos', href: '/#Projects' },
  { name: 'Blog', href: '/blog' }
]

export function NavLinks() {
  const pathName = usePathname()

  return (
    <>
      {routes.map((route) => {
        return (
          <Link
            key={route.name}
            href={route.href}
            className={`${pathName === route.href ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'} rounded-md px-3 py-2 text-sm font-medium ${poppins.className}`}
          >
            {route.name}
          </Link>
        )
      })}
    </>
  )
}

export function NavLinksMobile() {
  const pathName = usePathname()

  return (
    <>
      {routes.map((route) => {
        return (
          <Link
            key={route.name}
            href={route.href}
            className={`${pathName === route.href ? 'bg-gray-100 dark:bg-gray-900 text-black dark:text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white'} block rounded-md px-3 py-2 text-base font-medium ${poppins.className}`}
          >
            {route.name}
          </Link>
        )
      })}
    </>
  )
}
