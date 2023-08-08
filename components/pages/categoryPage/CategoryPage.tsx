import ScrollUp from 'components/shared/ScrollUp'
import type { ArticlePayload, CategoryPagePayload } from 'types'
import LatestArticles from 'components/shared/LatestArticles'
import CoverArticle from 'components/shared/CoverArticle'

export interface CategoryPageProps {
  data: CategoryPagePayload | null
  latestArticles: ArticlePayload[] | null
}

export function CategoryPage({ data, latestArticles }: CategoryPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, featuredArticle } = data ?? {}

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {featuredArticle && <CoverArticle article={featuredArticle} />}
      </div>

      <div className="py-10"></div>

      {latestArticles && <LatestArticles latestArticles={latestArticles} />}

      <div className="py-10"></div>

      <ScrollUp />
    </div>
  )
}
