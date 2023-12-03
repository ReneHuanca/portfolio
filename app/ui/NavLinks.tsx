'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' }
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
            className={`${pathName === route.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}
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
            className={`${pathName === route.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} block rounded-md px-3 py-2 text-base font-medium`}
          >
            {route.name}
          </Link>
        )
      })}
    </>
  )
}
