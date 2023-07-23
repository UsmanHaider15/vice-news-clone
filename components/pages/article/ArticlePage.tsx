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
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-1 md:col-span-2">
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
        <div>Related Articles</div>
      </div>
    </div>
  )
}
