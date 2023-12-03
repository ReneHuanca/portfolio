import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkToc from 'remark-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const rootDirectory = path.join(process.cwd(), 'app', 'content')

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const options = {
    theme: 'material-theme-palenight'
  }

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: { remarkPlugins: [remarkGfm, remarkToc], rehypePlugins: [[rehypePrettyCode, options], rehypeAutolinkHeadings, rehypeSlug] }
    }
  })

  return {
    meta: {
      ...frontmatter,
      slug: realSlug
    },
    content
  }
}

export const getPostsByTag = async (tag) => {
  const files = fs.readdirSync(rootDirectory)
  const posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)

    if (meta.tags.includes(tag)) {
      posts.push(meta)
    }
  }

  return posts
}

export const getAllTagsFromPosts = async () => {
  const files = fs.readdirSync(rootDirectory)
  const tags = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)

    for (const tag of meta.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    }
  }

  return tags
}

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory)
  const posts = []

  for (const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}
