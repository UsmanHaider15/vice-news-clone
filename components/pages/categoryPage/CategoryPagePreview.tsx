'use client'

import {
  categoryPagesBySlugQuery,
  latestArticlesByCategoryQuery,
} from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { ArticlePayload, CategoryPagePayload } from 'types'

import { CategoryPage, type CategoryPageProps } from './CategoryPage'

export default function CategoryPagePreview({
  data: initialData,
  latestArticles: articles,
}: any) {
  const [data] = useLiveQuery<CategoryPagePayload | null>(
    initialData,
    categoryPagesBySlugQuery,
    {
      slug: initialData.slug,
    }
  )

  const [latestArticles] = useLiveQuery<ArticlePayload[] | null>(
    articles,
    latestArticlesByCategoryQuery,
    {
      slug: initialData.slug,
    }
  )

  return (
    <CategoryPage data={data ?? initialData} latestArticles={latestArticles} />
  )
}
