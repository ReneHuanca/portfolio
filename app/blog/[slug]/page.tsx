import { getPostBySlug } from '@/app/lib/mdx'

const getPageContent = async (slug: string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export async function generateMetadata({ params }) {
  const { meta } = await getPageContent(params.slug)

  return { title: meta.title }
}

export default async function Page({ params }) {
  const { content } = await getPageContent(params.slug)

  return (
    <article className='prose prose-slate lg:prose-lg dark:prose-invert pt-8 sm:pt-12'>
      {content}
    </article>
  )
}
