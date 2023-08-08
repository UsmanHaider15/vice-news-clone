import { toPlainText } from '@portabletext/react'
import { CategoryPage } from 'components/pages/categoryPage/CategoryPage'
import CategoryPagePreview from 'components/pages/categoryPage/CategoryPagePreview'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import {
  homePageTitleQuery,
  settingsQuery,
  categoryPagesBySlugQuery,
  latestArticlesByCategoryQuery,
  categoryPagePaths,
} from 'lib/sanity.queries'
import { defineMetadata } from 'lib/utils.metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { SettingsPayload, CategoryPagePayload, ArticlePayload } from 'types'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)

  const [settings, page, homePageTitle] = await Promise.all([
    client.fetch<SettingsPayload | null>(settingsQuery),
    client.fetch<CategoryPagePayload | null>(categoryPagesBySlugQuery, {
      slug,
    }),
    client.fetch<string | null>(homePageTitleQuery),
  ])

  return defineMetadata({
    baseTitle: homePageTitle ?? undefined,
    description: page?.overview ? toPlainText(page.overview) : '',
    image: settings?.ogImage,
    title: page?.title,
  })
}

// export async function generateStaticParams() {
//   const client = getClient()
//   const slugs = await client.fetch<string[]>(categoryPagePaths)
//   return slugs.map((slug) => ({ slug }))
// }

export default async function CategoryPageSlugRoute({ params }: Props) {
  const { slug } = params
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const data = await client.fetch<CategoryPagePayload | null>(
    categoryPagesBySlugQuery,
    {
      slug,
    }
  )

  const latestArticles = await client.fetch<ArticlePayload[] | null>(
    latestArticlesByCategoryQuery,
    {
      slug,
    }
  )

  if (!data && !preview) {
    notFound()
  }

  return preview ? (
    <CategoryPagePreview
      slug={slug}
      data={data}
      latestArticles={latestArticles}
    />
  ) : (
    <CategoryPage data={data} latestArticles={latestArticles} />
  )
}
