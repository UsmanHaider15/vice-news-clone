'use client'

import { articleBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { ArticlePayload } from 'types'

import { ArticlePage, ArticlePageProps } from './ArticlePage'

export default function ArticlePreview({
  data: initialData,
}: ArticlePageProps) {
  const [data] = useLiveQuery<ArticlePayload | null>(
    initialData,
    articleBySlugQuery,
    {
      slug: initialData?.slug,
    }
  )

  return <ArticlePage data={data} />
}
