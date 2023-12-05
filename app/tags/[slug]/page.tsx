import Link from 'next/link'
import { getAllTagsFromPosts, getPostsByTag } from '@/app/lib/mdx'

export default async function Tags({ params }: { params: { slug: string } }) {
  const posts = await getPostsByTag(params.slug)
  const tags = await getAllTagsFromPosts()

  return (
    <div className='pt-[150px] flex sm:space-x-24 max-w-5xl mx-auto'>
      <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-800 sm:flex">
        <div className="px-6 py-4"><h3 className="font-bold uppercase text-primary-500">Todas la etiquetas</h3>
          <ul>
            {tags.map((tag: any) => (
              <li className="my-3" key={tag}>
                <Link href={`/tags/${tag}`} className="px-3 py-2 text-sm font-semibold uppercase text-gray-500 hover:text-primary dark:text-gray-300 dark:hover:text-primary" aria-label="View posts tagged next-js">
                  {tag}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div >
      <ul>
        {posts.map((post) => (
          <li className="py-5" key={post.slug}>
            <article className="flex flex-col space-y-2 xl:space-y-0">
              <dl><dt className="sr-only">Publicado el </dt><dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400"><time dateTime="2023-08-05T00:00:00.000Z">{post.date}</time></dd></dl>
              <div className="space-y-3"><div>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link className="text-gray-900 dark:text-gray-100" href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <div className="flex flex-wrap">
                  {post.tags.map((tag: any) => (
                    <Link key={tag} className="mr-3 text-sm font-semibold uppercase text-primary hover:text-primary-600 dark:hover:text-primary-400" href={`/tags/${tag}`}>{tag}</Link>
                  ))}
                </div>
              </div>
                <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  {post.summary}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div >
  )
}
