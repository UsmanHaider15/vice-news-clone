import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import { ArticlePayload } from 'types'
import { CustomPortableText } from './CustomPortableText'
import { PortableTextBlock } from 'sanity'

export default function CoverArticle({ article }: { article: ArticlePayload }) {
  const imageUrl =
    article.coverImage && urlForImage(article.coverImage)?.fit('crop').url()
  return (
    <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-3">
      <div className="relative order-2 col-span-1 h-400 md:order-1 md:col-span-2 md:h-600">
        {imageUrl && (
          <Image src={imageUrl} alt="" fill style={{ objectFit: 'cover' }} />
        )}
      </div>
      <div className="order-1 col-span-1 flex md:order-2">
        <div className="flex-grow flex-col justify-center border-white bg-black sm:p-10 lg:flex-1">
          <div className="mb-2 w-full font-sans text-base">
            <a
              className="cursor-pointer bg-transparent text-white hover:text-white focus:text-white"
              href="/en_asia/section/life"
              style={{ textDecoration: 'underline' }}
            >
              Life
            </a>
          </div>
          <h3
            className="m-0 w-full font-sans text-3xl font-black leading-none"
            style={{ lineHeight: '41.6px' }}
          >
            <a
              href="/en/article/v7b7nm/juan-luna-lost-painting-philippines-art"
              className="cursor-pointer bg-transparent text-white hover:text-white focus:text-white"
              style={{
                textDecoration: 'none',
                lineHeight: '41.6px',
              }}
            >
              <h2>{article.title}</h2>
            </a>
          </h3>
          <div className="mx-0 mt-2 w-full font-sans text-base leading-7 text-white">
            <CustomPortableText
              value={article.overview as PortableTextBlock[]}
            />
          </div>
          <div className="mx-0 mt-2 w-full font-mono text-xs uppercase leading-4 text-white">
            <div className="uppercase">Romano Santos</div>
            <time className="mt-2 block uppercase" dateTime="2023-07-07T08:14">
              07.07.23
            </time>
          </div>
        </div>
      </div>
    </div>
  )
}
