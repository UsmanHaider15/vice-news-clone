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
    <div>
      <div className="mb-20 space-y-6">
        {/* Header */}
        {author && category && (
          <Header
            title={title}
            description={overview}
            author={author}
            category={category}
          />
        )}

        {/* Image  */}
        <div className="rounded-md border">
          <ImageBox
            image={coverImage}
            alt={`Cover image for ${title}`}
            classesWrapper="relative aspect-[16/9]"
          />

          <div className="divide-inherit grid grid-cols-1 divide-y lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            {/* Tags */}
            <div className="p-3 lg:p-4">
              <div className="text-xs md:text-sm">Tags</div>
              <div className="text-md flex flex-row flex-wrap md:text-lg">
                {tags?.map((tag, key) => (
                  <div key={key} className="mr-1 break-words ">
                    #{tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        {description && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-xl text-gray-600"
            value={description}
          />
        )}
        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
