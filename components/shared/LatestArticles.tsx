import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { CustomPortableText } from './CustomPortableText'
import { PortableTextBlock } from 'sanity'
import Image from 'next/image'
import { ArticlePayload } from 'types'

export default function LatestArticles({
  latestArticles,
}: {
  latestArticles: ArticlePayload[]
}) {
  return (
    <>
      <h1 className="p-2 text-5xl font-black">Latest Articles</h1>

      <div
        className="grid grid-cols-1 border-b border-t md:grid-cols-3"
        style={{ marginTop: 0 }}
      >
        <div className="col-span-1 md:col-span-2">
          {' '}
          {/* Latest articles */}
          {latestArticles && latestArticles.length > 0 && (
            <>
              {latestArticles.map((article) => {
                const imageUrl =
                  article.coverImage &&
                  urlForImage(article.coverImage)?.fit('crop').url()
                return (
                  <div className="grid grid-cols-1 border border-l-0 border-t-0 bg-white text-left text-black sm:grid-cols-2 sm:gap-5 sm:px-0 sm:py-10">
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
                        <Link
                          href={resolveHref('article', article.slug) as Url}
                        >
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
        </div>
        <div></div>
      </div>
    </>
  )
}
