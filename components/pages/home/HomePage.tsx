import { ProjectListItem } from 'components/pages/home/ProjectListItem'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import { resolveHref } from 'lib/sanity.links'
import Image from 'next/image'
import Link from 'next/link'
import type { HomePagePayload } from 'types'

export interface HomePageProps {
  data: HomePagePayload | null
}

export function HomePage({ data }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    overview = [],
    showcaseProjects = [],
    featuredArticles = [],
    title = '',
  } = data ?? {}

  console.log(
    'featuredArticles',
    featuredArticles.map((article) => article.title)
  )
  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuredArticles.map((article, key) => {
            const imageUrl =
              article.coverImage &&
              urlForImage(article.coverImage)?.fit('crop').url()

            if (!key) {
              return (
                <div className="grid grid-cols-1 gap-4 md:col-span-3 md:grid-cols-3">
                  <div className="order-2 col-span-1 md:order-1 md:col-span-2">
                    {imageUrl && (
                      <Image src={imageUrl} alt="" width={900} height={506} />
                    )}
                  </div>
                  <div className="order-1 col-span-1 md:order-2">
                    <h2>{article.title}</h2>
                  </div>
                </div>
              )
            }
            return (
              <div className="flex flex-row-reverse md:col-span-1 md:grid md:grid-cols-1 md:gap-4">
                <div className="w-1/4 md:order-1 md:w-full">
                  {imageUrl && (
                    <Image src={imageUrl} alt="" width={500} height={280} />
                  )}
                </div>
                <div className="w-3/4 md:order-2">
                  <h2>{article.title}</h2>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
