'use client'

import { homePageQuery, latestArticlesQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { ArticlePayload, HomePagePayload } from 'types'

import { HomePage, type HomePageProps } from './HomePage'

export default function HomePagePreview({
  data: initialData,
  latestArticles: articles,
}: HomePageProps) {
  const [data] = useLiveQuery<HomePagePayload | null>(
    initialData,
    homePageQuery
  )

  const [latestArticles] = useLiveQuery<ArticlePayload[] | null>(
    articles,
    latestArticlesQuery
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Home document to see the preview!
      </div>
    )
  }

  return <HomePage data={data} latestArticles={latestArticles} />
}
