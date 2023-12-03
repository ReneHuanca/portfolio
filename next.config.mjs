import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import remarkToc from 'remark-toc'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'one-dark-pro',
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      [remarkToc, { heading: 'Contenido' }]
    ],
    rehypePlugins: [
      [rehypePrettyCode, options],
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)