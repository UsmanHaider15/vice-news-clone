import { CustomPortableText } from 'components/shared/CustomPortableText'
// import AuthorCard from './AuthorCard'
import { AuthorPayload, CategoryPayload } from 'types'
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoSnapchat } from 'react-icons/bi'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
  author: AuthorPayload
  category: CategoryPayload
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false, author, category } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className="mx-auto border-t-2 border-black pt-5 leading-5 text-black">
      {/* Category */}
      <div className="mb-4 w-full font-sans text-xl font-medium leading-6 sm:mb-5 sm:text-xl">
        <a
          className="hover:text-neutral-400 focus:text-neutral-400 cursor-pointer text-black underline"
          href="/en/section/horoscopes"
        >
          {category.title}
        </a>
      </div>

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
      {/* Description */}
      {description && (
        <div className="pt-2 text-black lg:w-2/3 lg:pr-10">
          <CustomPortableText
            value={description}
            paragraphClasses="mb-4 font-sans text-xl font-normal leading-8 text-black sm:mb-5 sm:text-xl"
          />
        </div>
      )}

      {/* <AuthorCard author={author} /> */}
      <div className="border-neutral-200 mb-5 flex items-center whitespace-nowrap border-t px-0 pb-0 pt-4 text-xs leading-4 sm:px-0 sm:py-5">
        <div className="mr-4">
          <time dateTime="2023-07-21T21:00:00.000Z" itemProp="datePublished">
            22 July 2023, 2:00am
          </time>
        </div>
        <span className="inline-block">
          <ul className="m-0 flex list-none items-center p-0">
            <li className="mr-4 inline-block list-none text-left">
              <button
                aria-label="facebook"
                className="m-0 flex cursor-pointer items-center justify-evenly overflow-visible bg-transparent p-0 text-center normal-case opacity-100 hover:opacity-40"
              >
                <AiFillFacebook size={22} />
                <span className="ml-1 hidden underline sm:inline-block">
                  Share
                </span>
              </button>
            </li>
            <li className="mr-4 inline-block list-none text-left">
              <button
                aria-label="twitter"
                className="m-0 flex cursor-pointer items-center justify-evenly overflow-visible bg-transparent p-0 text-center normal-case opacity-100 hover:opacity-40"
              >
                <AiOutlineTwitter size={22} />
                <span className="ml-1 hidden underline sm:inline-block">
                  Tweet
                </span>
              </button>
            </li>
            <li className="mr-4 inline-block list-none text-left">
              <span
                id="https://www.vice.com/en/article/dy3d8m/daily-horoscope-july-22-2023"
                className="list-none"
              >
                <button
                  className="m-0 flex cursor-pointer items-center justify-evenly overflow-visible bg-transparent px-0 py-1 text-center normal-case opacity-100 hover:opacity-40"
                  data-share-url="https://www.vice.com/en/article/dy3d8m/daily-horoscope-july-22-2023"
                  title="Share on Snapchat"
                >
                  <BiLogoSnapchat size={22} />
                  <span className="ml-1 hidden cursor-default underline sm:inline-block">
                    Snap
                  </span>
                </button>
              </span>
            </li>
          </ul>
        </span>
      </div>
    </div>
  )
}
