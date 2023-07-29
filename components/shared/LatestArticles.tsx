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
                  <div className="grid grid-cols-4 border md:grid-cols-1">
                    <div className="relative order-last col-span-1 h-200 md:order-first md:col-span-1 md:h-300">
                      {imageUrl && (
                        <Image
                          src={imageUrl}
                          alt=""
                          fill={true}
                          style={{ objectFit: 'cover' }}
                        />
                      )}
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <div className="flex w-full flex-grow flex-col bg-white p-5 text-left leading-5 text-black sm:order-2 sm:block sm:h-full sm:p-10">
                        <div className="mb-2 w-full text-left font-sans text-base">
                          {article.tags}
                        </div>
                        <h3 className="m-0 w-full font-sans text-xl font-black leading-6 text-black">
                          <a
                            href="/en/article/epvp8j/threads-is-all-the-worst-parts-of-twitter-and-instagram-in-one-very-bad-app"
                            className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer bg-transparent leading-6 no-underline"
                          >
                            {article.title}
                          </a>
                        </h3>
                        <div className="mx-0 mb-0 mt-2 hidden w-full font-sans text-base font-normal leading-7 text-black md:block lg:text-base">
                          <CustomPortableText
                            value={article.overview as PortableTextBlock[]}
                          />
                        </div>
                        <div className="mx-0 mb-0 mt-2 block w-full font-mono text-xs uppercase leading-4 text-black">
                          <div className="text-left text-xs uppercase">
                            Janus Rose
                          </div>
                          <time
                            className="mt-2 block text-left text-xs uppercase"
                            dateTime="2023-07-07T13:10"
                          >
                            07.07.23
                          </time>
                        </div>
                      </div>
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
