import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    footer,
    overview,
    featuredArticles[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      publishedAt,
      tags,
      title,
      category->{
        _type,
        title,
        "slug": slug.current,
      },
      author->{
      name,
      }
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
  author->{
    name,
  },
  category->{
    title,
    "slug": slug.current,
  }  
}`

export const latestArticlesByCategoryQuery = groq`
*[_type == 'article' && category->slug.current == $slug ] | order(publishedAt desc) {
  _type,
  coverImage,
  overview,
  "slug": slug.current,
  publishedAt,
  tags,
  title,
  author->{
    name,
  },
  category->{
    title,
    "slug": slug.current,
  }    
}
`

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
*[_type == "categoryPage" && category->slug.current == $slug][0] {
  _id,
  body,
  overview,
  title,
  featuredArticle->{
    _type,
    coverImage,
    overview,
    "slug": slug.current,
    publishedAt,
    tags,
    title,
    category->{
      title,
      "slug": slug.current
    },
    author->{
    name,
    }
  },
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
    publishedAt,
    "category": category->{
      _type, 
      title,
      "slug": slug.current,
    },    
    "author": author->{
      _type,
      name,
      location,
      image,
    }
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
