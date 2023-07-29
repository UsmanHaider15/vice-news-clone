import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { ArticlePayload, HomePagePayload } from 'types'
import { CustomPortableText } from 'components/shared/CustomPortableText'
import type { PortableTextBlock } from '@portabletext/types'
import { Url } from 'next/dist/shared/lib/router/router'

export interface HomePageProps {
  data: HomePagePayload | null
  latestArticles: ArticlePayload[] | null
}

export function HomePage({ data, latestArticles }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    // showcaseProjects = [],
    featuredArticles = [],
    title = '',
  } = data ?? {}

  return (
    <div className="space-y-20">
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}
      {/* Showcase projects */}
      {/* {showcaseProjects && showcaseProjects.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {showcaseProjects.map((project, key) => {
            const href = resolveHref(project._type, project.slug)

            if (!href) {
              return null
            }
            return (
              <Link key={key} href={href}>
                <ProjectListItem project={project} odd={key % 2} />
              </Link>
            )
          })}
        </div>
      )} */}
      {featuredArticles && featuredArticles.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featuredArticles.map((article, key) => {
            const imageUrl =
              article.coverImage &&
              urlForImage(article.coverImage)?.fit('crop').url()

            if (!key) {
              return (
                <div className="relative grid grid-cols-1 md:col-span-3 md:grid-cols-3">
                  <div className="relative order-2 col-span-1 h-96 md:order-1 md:col-span-2 md:h-full">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        alt=""
                        fill={true}
                        style={{ objectFit: 'cover' }}
                      />
                    )}
                  </div>
                  <div className="order-1 col-span-1 flex md:order-2">
                    <div className="flex-grow flex-col justify-center border-white bg-black sm:p-10 lg:flex-1">
                      <div className="mb-2 w-full font-sans text-base">
                        <a
                          className="cursor-pointer bg-transparent text-white hover:text-white focus:text-white"
                          href="/en_asia/section/life"
                          style={{ textDecoration: 'underline' }}
                        >
                          Life
                        </a>
                      </div>
                      <h3
                        className="m-0 w-full font-sans text-3xl font-black leading-none"
                        style={{ lineHeight: '41.6px' }}
                      >
                        <a
                          href="/en/article/v7b7nm/juan-luna-lost-painting-philippines-art"
                          className="cursor-pointer bg-transparent text-white hover:text-white focus:text-white"
                          style={{
                            textDecoration: 'none',
                            lineHeight: '41.6px',
                          }}
                        >
                          <h2>{article.title}</h2>
                        </a>
                      </h3>
                      <div className="mx-0 mt-2 w-full font-sans text-base leading-7 text-white">
                        <CustomPortableText
                          value={article.overview as PortableTextBlock[]}
                        />
                      </div>
                      <div className="mx-0 mt-2 w-full font-mono text-xs uppercase leading-4 text-white">
                        <div className="uppercase">Romano Santos</div>
                        <time
                          className="mt-2 block uppercase"
                          dateTime="2023-07-07T08:14"
                        >
                          07.07.23
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return (
              <div className="grid grid-cols-4 border md:grid-cols-1">
                <div className="relative order-last col-span-1 md:order-first md:col-span-1	md:h-48">
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
        </div>
      )}
      <h1 className="p-2 text-5xl font-black">Latest Articles</h1>

      <div
        className="grid grid-cols-1 border-t md:grid-cols-3"
        style={{ marginTop: 0 }}
      >
        <div className="col-span-1 mb-8 md:col-span-2">
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

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
