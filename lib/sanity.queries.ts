import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    featuredArticles[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      publishedAt,
      tags,
      title,
    },
    title,
  }
`

export const homePageTitleQuery = groq`
  *[_type == "home"][0].title
`

export const latestArticlesQuery = groq`*[_type == 'article']| order(publishedAt desc){
  _type,
  coverImage,
  overview,
  "slug": slug.current,
  publishedAt,
  tags,
  title,
  "authorName": author->name,
}`

export const latestArticlesByCategoryQuery = groq`*[_type == 'article' && category._ref == $categoryRef] | order(publishedAt desc) {
  _type,
  coverImage,
  overview,
  "slug": slug.current,
  publishedAt,
  tags,
  title,
  "authorName": author->name,
}`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const categoryPagesBySlugQuery = groq`
*[_type == "categoryPage" && slug.current == "tech"][0] {
  _id,
  body,
  overview,
  title,
  "slug": slug.current,
  category,
  featuredArticle->{
    _type,
    coverImage,
    overview,
    "slug": slug.current,
    publishedAt,
    tags,
    title,
  }
}
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const articleBySlugQuery = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    coverImage,
    description,
    overview,
    "slug": slug.current,
    tags,
    title,
  }
`

export const projectPaths = groq`
  *[_type == "project" && slug.current != null].slug.current
`

export const articlePaths = groq`
  *[_type == "article" && slug.current != null].slug.current
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const categoryPagePaths = groq`
  *[_type == "categoryPage" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
