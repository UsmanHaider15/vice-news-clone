'use client'

import { projectBySlugQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { ProjectPayload } from 'types'

import { ArticlePage, ProjectPageProps } from './ArticlePage'

export default function ArticleåPreview({
  data: initialData,
}: ProjectPageProps) {
  const [data] = useLiveQuery<ProjectPayload | null>(
    initialData,
    projectBySlugQuery,
    {
      slug: initialData?.slug,
    }
  )

  return <ArticlePage data={data} />
}
