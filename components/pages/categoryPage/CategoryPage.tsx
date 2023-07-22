import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import { Url } from 'next/dist/shared/lib/router/router'
import Image from 'next/image'
import Link from 'next/link'
import { PortableTextBlock } from 'sanity'
import type { ArticlePayload, CategoryPagePayload } from 'types'
import FeaturedArticle from './FeaturedArticle'

export interface CategoryPageProps {
  data: CategoryPagePayload | null
  latestArticles: ArticlePayload[] | null
}

export function CategoryPage({ data, latestArticles }: CategoryPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, featuredArticle } = data ?? {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        {/* <Header title={title} description={overview} /> */}

        <div className="grid grid-cols-1 md:grid-cols-3">
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}
        </div>

        <h1 className="text-5xl font-black">Latest Articles</h1>
        {/* Latest articles */}
        {latestArticles && latestArticles.length > 0 && (
          <>
            {latestArticles.map((article) => {
              const imageUrl =
                article.coverImage &&
                urlForImage(article.coverImage)?.fit('crop').url()
              return (
                <div
                  style={{ marginTop: 20 }}
                  className="grid grid-cols-1 border bg-white text-left text-black  sm:grid-cols-2 sm:gap-5 sm:px-0 sm:py-10"
                >
                  <div className="order-2 sm:order-1 sm:pr-10">
                    <div className="mb-2 block w-full font-sans text-base text-black sm:text-base">
                      <a
                        href="/en_asia/section/news"
                        className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer bg-transparent underline"
                      >
                        {article.tags}
                      </a>
                    </div>
                    <h3 className="m-0 block w-full font-sans text-3xl font-black leading-[41.6px] sm:text-3xl">
                      <Link href={resolveHref('article', article.slug) as Url}>
                        {article.title}
                      </Link>
                    </h3>
                    <div className="mx-0 mb-0 mt-2 hidden w-full font-sans font-normal leading-7 sm:block">
                      <CustomPortableText
                        value={article.overview as PortableTextBlock[]}
                      />{' '}
                    </div>
                    <div className="mx-0 mb-0 mt-2 block w-full font-mono text-xs uppercase leading-4">
                      <div className="text-xs uppercase text-black">
                        {article.authorName}
                      </div>
                      <time
                        className="mt-2 block text-xs uppercase text-black"
                        dateTime="1689602041036"
                      >
                        {article.publishedAt}
                      </time>
                    </div>
                  </div>
                  <div className="relative col-span-1 md:order-first md:col-span-1">
                    <Link href={resolveHref('article', article.slug) as Url}>
                      <div>
                        {imageUrl && (
                          <Image
                            src={imageUrl}
                            alt=""
                            fill={true}
                            style={{ objectFit: 'cover' }}
                          />
                        )}
                      </div>
                    </Link>
                  </div>{' '}
                </div>
              )
            })}
          </>
        )}

        {/* Body */}
        {/* {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )} */}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
