import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { RxCross2 } from 'react-icons/rx'
import Link from 'next/link'
import { resolveHref } from 'lib/sanity.links'
import { MenuItem } from 'types'

export interface MenuPageProps {
  menuItems?: MenuItem[]
}

export function MenuPage({ menuItems }: MenuPageProps) {
  return (
    <div>
      {' '}
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-4 border-b border-gray-700 bg-black py-4 text-xl backdrop-blur md:px-8 md:py-6">
        <Link
          key="home"
          className="cursor-pointer font-sans font-black leading-5 text-white hover:text-gray-600 md:text-lg"
          href={'/'}
        >
          <RxCross2 size={24} color="white" />
        </Link>
      </div>
      <div className="grid bg-black p-10 sm:grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <div
            className="leading-5 text-black sm:mr-12 sm:flex sm:flex-col"
            aria-label="dropdown-menu"
          >
            <div
              className="flex list-none flex-col bg-black p-0 font-sans text-3xl font-black uppercase leading-9"
              style={{ textDecoration: 'none', listStyle: 'outside none none' }}
            >
              <div
                className="px-0 py-5 text-left uppercase leading-9"
                role="listitem"
                style={{ listStyle: 'outside none none' }}
              >
                <a
                  href="https://video.vice.com/en_asia/"
                  className="focus:text-neutral-400 inline-block w-full cursor-pointer bg-transparent text-left uppercase text-white hover:text-white hover:opacity-60"
                  style={{ listStyle: 'outside none none' }}
                >
                  Watch
                </a>
              </div>
            </div>
            <form>
              <div className="flex pb-4">
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="z-20 block w-full rounded-lg border border-l-2 border-gray-300 border-l-gray-100 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 h-full rounded-r-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

            <div className="flex">
              <AiFillFacebook color="white" size={24} className="mr-5" />
              <BsInstagram color="white" size={24} className="mr-5" />
              <BsTwitter color="white" size={24} className="mr-5" />
              <GrMail color="white" size={24} />
            </div>
          </div>
        </div>
        <div className="col-span-1 grid gap-2 sm:grid-cols-1 lg:grid-cols-2">
          {menuItems &&
            menuItems?.map((menuItem, key) => {
              const href = resolveHref(menuItem?._type, menuItem?.slug)
              if (!href) {
                return null
              }
              return (
                <div className="col-span-1">
                  <div className="border-b pb-3 pt-2 text-2xl font-black text-white">
                    <Link key={key} href={href}>
                      {menuItem.title}
                    </Link>{' '}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
