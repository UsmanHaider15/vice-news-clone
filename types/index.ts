import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface Article {
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
  publishedAt: string
  _type: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  featuredArticles?: ArticlePayload[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface CategoryPagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
  category?: any
  featuredArticle?: ArticlePayload
}

export interface ArticlePayload {
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug: string
  tags: string[]
  title?: string
  publishedAt: string
  description?: PortableTextBlock[]
  author?: AuthorPayload
  category?: Category
}

export interface Category {
  title: string
  slug: string
}

export interface AuthorPayload {
  _type: string
  name: string
  location?: string
  image?: Image
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
