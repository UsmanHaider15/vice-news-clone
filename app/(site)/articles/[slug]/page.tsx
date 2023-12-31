import { toPlainText } from '@portabletext/react'
import { ArticlePage } from 'components/pages/article/ArticlePage'
import ArticlePreview from 'components/pages/article/ArticlePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageTitleQuery,
  articleBySlugQuery,
  articlePaths,
} from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { ArticlePayload } from 'types'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)

  const [homePageTitle, article] = await Promise.all([
    client.fetch<string | null>(homePageTitleQuery),
    client.fetch<ArticlePayload | null>(articleBySlugQuery, {
      slug,
    }),
  ])

  return defineMetadata({
    baseTitle: homePageTitle ?? undefined,
    description: article?.overview ? toPlainText(article.overview) : '',
    image: article?.coverImage,
    title: article?.title,
  })
}

export async function generateStaticParams() {
  const client = getClient()
  const slugs = await client.fetch<string[]>(articlePaths)
  return slugs.map((slug) => ({ slug }))
}

export default async function ArticleSlugRoute({ params }: Props) {
  const { slug } = params
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const data = await client.fetch<ArticlePayload | null>(articleBySlugQuery, {
    slug,
  })

  if (!data && !preview) {
    notFound()
  }

  return preview ? <ArticlePreview data={data} /> : <ArticlePage data={data} />
}
