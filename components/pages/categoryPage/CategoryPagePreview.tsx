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
}: CategoryPageProps) {
  const [data] = useLiveQuery<CategoryPagePayload | null>(
    initialData,
    categoryPagesBySlugQuery,
    {
      slug: initialData?.slug,
    }
  )

  const [latestArticles] = useLiveQuery<ArticlePayload[] | null>(
    articles,
    latestArticlesByCategoryQuery,
    {
      categoryRef: data?.category?._ref,
    }
  )

  return (
    <CategoryPage data={data ?? initialData} latestArticles={latestArticles} />
  )
}
