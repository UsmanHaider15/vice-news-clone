import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ImageBox from 'components/shared/ImageBox'
import ScrollUp from 'components/shared/ScrollUp'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import type { ArticlePayload } from 'types'

export interface ArticlePageProps {
  data: ArticlePayload | null
}

export function ArticlePage({ data }: ArticlePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { coverImage, description, overview, title, author, publishedAt } =
    data ?? {}

  const imageUrl =
    author?.image && urlForImage(author?.image)?.fit('crop').url()

  return (
    <div className="flex justify-center pb-10 pt-5 md:pb-24 md:pt-10">
      <div className="pl-5 pr-5 pt-5 sm:pl-20 sm:pr-20 2xl:w-10/12">
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

        <div className="pb-2 pt-2"></div>

        {overview && (
          <div className="pt-2 text-black">
            <CustomPortableText
              value={overview}
              paragraphClasses="mb-4 font-sans text-xl font-normal leading-8 text-black sm:mb-5 sm:text-xl"
            />
          </div>
        )}

        {author && (
          <div className="text-black sm:grid">
            <div className="mb-2 flex items-center justify-evenly font-sans text-xs leading-4 hover:cursor-pointer">
              <div className="mr-2">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt=""
                    width={35}
                    height={35}
                    style={{ borderRadius: '50%' }}
                  />
                )}
              </div>
              <div className="pr-2" style={{ flexGrow: 2 }}>
                <div className="text-black">
                  <span className="capitalize">by </span>
                  <span className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer bg-transparent">
                    {author.name}
                  </span>
                </div>
                <div
                  className="mt-1 font-mono uppercase leading-3"
                  style={{ fontSize: 11 }}
                >
                  {author.location}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            {/* Header */}
            {publishedAt && <Header publishedAt={publishedAt} />}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 md:col-span-2">
            <div className="max-w-2xl">
              {/* Image  */}
              <div className="mb-10 rounded-md border">
                <ImageBox
                  image={coverImage}
                  alt={`Cover image for ${title}`}
                  classesWrapper="relative aspect-[16/9]"
                />
              </div>
              {/* Description */}
              {description && (
                <CustomPortableText
                  paragraphClasses="font-sans text-lg"
                  value={description}
                />
              )}
              <div
                className="mt-14 flex border-t border-solid border-black font-mono uppercase leading-3 text-black"
                style={{ fontSize: 11, wordBreak: 'break-word' }}
              ></div>
            </div>
            <div></div>
          </div>
          <div>Related Articles</div>
        </div>
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
    </div>
  )
}
