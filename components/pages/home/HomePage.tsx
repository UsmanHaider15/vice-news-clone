import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { ArticlePayload, HomePagePayload } from 'types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { PortableTextBlock } from '@portabletext/types'
import { Url } from 'next/dist/shared/lib/router/router'
import LatestArticles from 'components/shared/LatestArticles'
import CoverArticle from 'components/shared/CoverArticle'
import humanifyDate from 'app/utils/humanifyDate'

export interface HomePageProps {
  data: HomePagePayload | null
  latestArticles: ArticlePayload[] | null
}

export function HomePage({ data, latestArticles }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], featuredArticles = [], title = '' } = data ?? {}

  return (
    <div className="space-y-20">
      {featuredArticles && featuredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featuredArticles.map((article, key) => {
            const imageUrl =
              article.coverImage &&
              urlForImage(article.coverImage)?.fit('crop').url()

            if (!key) {
              return <CoverArticle article={article} />
            }
            return (
              <div className="grid grid-cols-12 border md:grid-cols-1">
                <div className="relative order-last col-span-5 md:order-first md:col-span-1 md:h-300">
                  <Link href={resolveHref('article', article.slug) as Url}>
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt=""
                        fill={true}
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </Link>
                </div>
                <div className="col-span-7 p-4 md:col-span-1">
                  <div className="flex w-full flex-col text-black sm:order-2 sm:block sm:h-full  md:text-left">
                    <div className="w-full text-left font-sans text-sm">
                      <Link
                        href={
                          resolveHref('category', article.category?.slug) as Url
                        }
                      >
                        {article.category?.title}
                      </Link>
                    </div>
                    <h3 className="m-0 w-full font-sans font-black leading-6 text-black md:text-xl">
                      <Link
                        href={resolveHref('article', article.slug) as Url}
                        className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer bg-transparent leading-6 no-underline"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    <div className="mx-0 mb-0 mt-2 hidden w-full font-sans text-base font-normal leading-7 text-black md:block lg:text-base">
                      <CustomPortableText
                        value={article.overview as PortableTextBlock[]}
                      />
                    </div>
                    <div className="mx-0 mb-0 mt-2 block w-full font-mono text-xs uppercase leading-4 text-black">
                      <div className="text-left text-xs uppercase">
                        {article.author?.name}
                      </div>
                      <time
                        className="mt-2 block text-left text-xs uppercase"
                        dateTime="2023-07-07T13:10"
                      >
                        {humanifyDate(article.publishedAt)}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
      {latestArticles && <LatestArticles latestArticles={latestArticles} />}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
