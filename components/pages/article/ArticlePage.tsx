import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import type { ArticlePayload } from 'types'

export interface ArticlePageProps {
  data: ArticlePayload | null
}

export function ArticlePage({ data }: ArticlePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { coverImage, description, overview, tags, title, author, category } =
    data ?? {}

  return (
    <div className="flex justify-center">
      <div className="pl-5 pr-5 sm:pl-20 sm:pr-20 2xl:w-10/12">
        {/* Category */}
        {category && (
          <div className="mb-2 mt-2 w-full font-sans text-xl font-medium leading-6 sm:mb-5 sm:text-xl">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer text-black underline"
              href="/en/section/horoscopes"
            >
              {category.title}
            </a>
          </div>
        )}{' '}
        {/* Title */}
        {title && (
          <span className="text-black">
            <div className="bg-transparent">
              <h1 className="m-0 p-0 font-sans text-5xl font-black leading-none sm:text-5xl">
                {title}
              </h1>
            </div>
          </span>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            {/* Header */}
            {author && category && (
              <Header description={overview} author={author} />
            )}{' '}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="max-w-2xl">
              {/* Image  */}
              <div className="rounded-md border">
                <ImageBox
                  image={coverImage}
                  alt={`Cover image for ${title}`}
                  classesWrapper="relative aspect-[16/9]"
                />
              </div>
              {/* Description */}
              {description && (
                <CustomPortableText
                  paragraphClasses="font-serif text-xl"
                  value={description}
                />
              )}
            </div>
          </div>
          <div>Related Articles</div>
        </div>
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
    </div>
  )
}
