import { CustomPortableText } from 'components/shared/CustomPortableText'
import { Header } from 'components/shared/Header'
import ScrollUp from 'components/shared/ScrollUp'
import type { CategoryPagePayload } from 'types'

export interface CategoryPageProps {
  data: CategoryPagePayload | null
}

export function CategoryPage({ data }: CategoryPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div>
      <div className="mb-14">
        {/* Header */}
        <Header title={title} description={overview} />

        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}

        {/* Workaround: scroll to top on route change */}
        <ScrollUp />
      </div>
      <div className="absolute left-0 w-screen border-t" />
    </div>
  )
}
