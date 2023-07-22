'use client'

import { categoryPagesBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { CategoryPagePayload } from 'types'

import { CategoryPage, type CategoryPageProps } from './CategoryPage'

export default function CategoryPagePreview({
  data: initialData,
}: CategoryPageProps) {
  const [data] = useLiveQuery<CategoryPagePayload | null>(
    initialData,
    categoryPagesBySlugQuery,
    {
      slug: initialData?.slug,
    }
  )

  return <CategoryPage data={data ?? initialData} />
}
