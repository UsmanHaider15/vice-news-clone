import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { ArticlePayload } from 'types'
import { CustomPortableText } from './CustomPortableText'
import { PortableTextBlock } from 'sanity'
import Link from 'next/link'
import { resolveHref } from 'lib/sanity.links'
import { Url } from 'next/dist/shared/lib/router/router'
import humanifyDate from 'app/utils/humanifyDate'

export default function CoverArticle({ article }: { article: ArticlePayload }) {
  const imageUrl =
    article.coverImage && urlForImage(article.coverImage)?.fit('crop').url()
  return (
    <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-3">
      <div className="relative order-2 col-span-1 h-400 md:order-1 md:col-span-2 md:h-600">
        <Link href={resolveHref('article', article.slug) as Url}>
          {imageUrl && (
            <Image src={imageUrl} alt="" fill style={{ objectFit: 'cover' }} />
          )}
        </Link>
      </div>
      <div className="order-1 col-span-1 flex md:order-2">
        <div className="flex-grow flex-col justify-center border-white bg-black p-5 md:p-10 lg:flex-1">
          <div className="mb-2 w-full font-sans text-base">
            {article.category && (
              <Link
                href={resolveHref('categoryPage', article.category.slug) as Url}
                className="cursor-pointer bg-transparent text-white hover:text-white focus:text-white"
              >
                {article.category.title}
              </Link>
            )}
          </div>
          <h3
            className="m-0 w-full font-sans text-3xl font-black leading-none text-white"
            style={{ lineHeight: '41.6px' }}
          >
            <Link href={resolveHref('article', article.slug) as Url}>
              <h2>{article.title}</h2>
            </Link>
          </h3>
          <div className="mx-0 mt-2 w-full font-sans text-base leading-7 text-white">
            <CustomPortableText
              value={article.overview as PortableTextBlock[]}
            />
          </div>
          <div className="mx-0 mt-2 w-full font-mono text-xs uppercase leading-4 text-white">
            <div className="uppercase">{article.author?.name}</div>
            <time className="mt-2 block uppercase" dateTime="2023-07-07T08:14">
              {humanifyDate(article.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
