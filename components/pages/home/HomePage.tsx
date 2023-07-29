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
              return <CoverArticle article={article} />
            }
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
        </div>
      )}
      {latestArticles && <LatestArticles latestArticles={latestArticles} />}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
