import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const filenames = fs.readdirSync(postsDirectory)
  const posts = filenames
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        excerpt: data.excerpt,
        content,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))

  return posts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return undefined

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    excerpt: data.excerpt,
    content,
  }
}
