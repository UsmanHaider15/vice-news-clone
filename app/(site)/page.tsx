import { toPlainText } from '@portabletext/react'
import { HomePage } from 'components/pages/home/HomePage'
import HomePagePreview from 'components/pages/home/HomePagePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageQuery,
  latestArticlesQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { ArticlePayload, HomePagePayload, SettingsPayload } from 'types'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)

  const [settings, page] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<HomePagePayload | null>(homePageQuery),
  ])

  return defineMetadata({
    description: page?.overview ? toPlainText(page.overview) : '',
    image: settings?.ogImage,
    title: page?.title,
  })
}

export default async function IndexRoute() {
  const header = headers().get('cookies')

  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const data = await client.fetch<HomePagePayload | null>(homePageQuery)
  const latestArticles = await client.fetch<ArticlePayload[] | null>(
    latestArticlesQuery
  )

  if (!data && !preview) {
    notFound()
  }

  return preview ? (
    <HomePagePreview data={data} latestArticles={latestArticles} />
  ) : (
    <HomePage data={data} latestArticles={latestArticles} />
  )
}
