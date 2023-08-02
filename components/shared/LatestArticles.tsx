import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { CustomPortableText } from './CustomPortableText'
import { PortableTextBlock } from 'sanity'
import Image from 'next/image'
import { ArticlePayload } from 'types'
import humanifyDate from 'app/utils/humanifyDate'

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
                  <div className="grid grid-cols-12 border">
                    <div className="col-span-7 p-4">
                      <div className="pb-2 text-sm font-semibold underline">
                        <Link
                          href={
                            resolveHref(
                              'categoryPage',
                              article.category?.title
                                .toLowerCase()
                                .replace(/\s+/g, '-')
                                .slice(0, 200)
                            ) as Url
                          }
                        >
                          {article.category?.title}
                        </Link>
                      </div>
                      <h3 className="pb-2 font-extrabold md:text-xl">
                        <Link
                          href={resolveHref('article', article.slug) as Url}
                        >
                          {article.title}
                        </Link>
                      </h3>
                      <div className="m-0 hidden pb-2 md:block">
                        <CustomPortableText
                          value={article.overview as PortableTextBlock[]}
                        />
                      </div>
                      <div className="">
                        <div className="text-sm">{article.author?.name}</div>
                        <time className="text-sm">
                          {humanifyDate(article.publishedAt)}
                        </time>
                      </div>
                    </div>
                    <div className="relative col-span-5">
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
