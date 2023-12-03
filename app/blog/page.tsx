import { getAllPostsMeta } from '@/app/lib/mdx'
import Link from 'next/link'

export default async function Blog() {
  const posts = await getAllPostsMeta()

  return (
    <div className='divide-y divide-gray-200 dark:divide-gray-700'>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Un Blog Creado con Nextjs 14 y Tailwindcss.</p>
      </div>
      <ul className='divide-y divide-gray-200 dark:divide-gray-700'>
        {posts.map((post: any) => (
          <li className='py-12' key={post.slug}>
            <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
              <dl>
                <dt className="sr-only">Publicado en</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime="2023-08-05T00:00:00.000Z">{post.date}</time>
                </dd>
              </dl>
              <div className="space-y-5 xl:col-span-3">
                <div className="space-y-6"><div>
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link className="text-gray-900 dark:text-gray-100" href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap">
                    {post.tags.map((tag: any) => (
                      <Link key={tag} className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400" href="#">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
                  <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                    {post.summary}
                  </div>
                </div>
                <div className="text-base font-medium leading-6">
                  <Link
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    href={`/blog/${post.slug}`}
                  >
                    Leer mas →
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
