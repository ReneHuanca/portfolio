import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="w-full max-w-5xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://nextjs.org" target='_blank' className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse hover:text-primary dark:text-white dark:hover:text-primary">
            <span className="self-center whitespace-nowrap">Hecho en</span>
            <Image src="/next.svg" width={52} height={32} className="h-8 dark:invert" alt="Nextjs Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="#Home" className="hover:underline me-4 md:me-6">Inicio</Link>
            </li>
            <li>
              <Link href="#About" className="hover:underline me-4 md:me-6">Sobre mi</Link>
            </li>
            <li>
              <Link href="#Projects" className="hover:underline me-4 md:me-6">Proyectos</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 - Dev. Rene Gonzalo Huanca Mamani</span>
      </div>
    </footer>

  )
}
