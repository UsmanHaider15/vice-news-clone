import { AiFillFacebook } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

const Menu = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2">
      <div className=" col-span-1  bg-purple-500 ">
        <div
          className="leading-5 text-black sm:mr-12 sm:flex sm:flex-col"
          aria-label="dropdown-menu"
        >
          <ul
            className="flex list-none flex-col bg-black p-0 font-sans text-3xl font-black uppercase leading-9"
            role="list"
            style={{ textDecoration: 'none', listStyle: 'outside none none' }}
          >
            <li
              className="px-0 py-1 text-left uppercase leading-9"
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
            </li>
          </ul>
          <div style={{ display: 'flex' }} className="flex text-black">
            <div className="w-full" aria-label="search-bar">
              <div className="relative mb-5 w-full bg-black font-sans">
                <form className="">
                  <label
                    className="absolute -m-px h-px w-px cursor-default overflow-hidden whitespace-nowrap border-0 p-0"
                    htmlFor="search-bar__input"
                    style={{
                      clip: 'rect(1px, 1px, 1px, 1px)',
                      clipPath: 'inset(50%)',
                    }}
                  >
                    Input for searching articles, videos, shows
                  </label>
                  <input
                    type="text"
                    id="search-bar__input"
                    role="searchbox"
                    defaultValue=""
                    placeholder="Search articles, videos, shows"
                    required=""
                    className="m-0 w-full cursor-text overflow-visible rounded-sm bg-white bg-opacity-[0.4] py-5 pl-5 pr-10 text-xs font-normal leading-none text-white focus:bg-white focus:text-black focus:outline-black"
                    style={{ borderImage: 'initial' }}
                  />
                  <button
                    type="submit"
                    role="button"
                    aria-label="Search"
                    className="absolute right-0 top-0 m-0 flex h-full w-12 cursor-pointer items-center justify-center overflow-visible bg-white bg-opacity-[0] p-0 text-center normal-case"
                    style={{ fontSize: '128%', lineHeight: '1.15' }}
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.55892 10.7328C8.86408 10.7328 10.7328 8.86408 10.7328 6.55892C10.7328 4.25376 8.86408 2.38506 6.55892 2.38506C4.25376 2.38506 2.38506 4.25376 2.38506 6.55892C2.38506 8.86408 4.25376 10.7328 6.55892 10.7328ZM6.55892 13.1178C10.1813 13.1178 13.1178 10.1813 13.1178 6.55892C13.1178 2.93653 10.1813 0 6.55892 0C2.93653 0 0 2.93653 0 6.55892C0 10.1813 2.93653 13.1178 6.55892 13.1178Z"
                        fill="white"
                        className=""
                        style={{ fill: 'rgb(255, 255, 255)' }}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5219 15.9015C14.3906 16.0328 14.1777 16.0328 14.0464 15.9015L9.18249 11.0376L11.0376 9.18249L15.9015 14.0464C16.0328 14.1777 16.0328 14.3906 15.9015 14.5219L14.5219 15.9015Z"
                        fill="white"
                        className=""
                        style={{ fill: 'rgb(255, 255, 255)' }}
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <ul
            className="-ml-3 flex list-none p-0"
            style={{ flexFlow: 'row wrap', listStyle: 'outside none none' }}
          >
            <li
              className="flex h-10 w-10 text-left"
              style={{ listStyle: 'outside none none' }}
            >
              <div
                className="h-full w-full text-black"
                style={{ listStyle: 'outside none none' }}
              >
                <AiFillFacebook color="white" size={24} />
              </div>
            </li>
            <li
              className="flex h-10 w-10 text-left"
              style={{ listStyle: 'outside none none' }}
            >
              <div
                className="h-full w-full text-black"
                style={{ listStyle: 'outside none none' }}
              >
                <BsInstagram color="white" size={24} />
              </div>
            </li>
            <li
              className="flex h-10 w-10 text-left"
              style={{ listStyle: 'outside none none' }}
            >
              <div
                className="h-full w-full text-black"
                style={{ listStyle: 'outside none none' }}
              >
                <BsTwitter color="white" size={24} />
              </div>
            </li>
            <li
              className="mr-0 flex h-10 w-10 text-left"
              style={{ listStyle: 'outside none none' }}
            >
              <div
                className="h-full w-full text-black"
                style={{ listStyle: 'outside none none' }}
              >
                <GrMail color="white" size={24} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-1 grid bg-yellow-500 sm:grid-cols-1 lg:grid-cols-2">
        <div className="col-span-1 h-10 bg-blue-800">
          <a
            href="/en_us/section/world"
            className="focus:text-neutral-400 inline-block h-full w-full cursor-pointer bg-transparent px-0 py-4 text-left font-sans text-xl font-black capitalize leading-6 text-white hover:text-white hover:opacity-60"
          >
            World News
          </a>
        </div>
        <div className="col-span-1 h-10 bg-gray-800">
          <a
            href="https://www.vice.com/en_asia/topic/culture"
            className="focus:text-neutral-400 inline-block h-full w-full cursor-pointer bg-transparent px-0 py-4 text-left font-sans text-xl font-black capitalize leading-6 text-white hover:text-white hover:opacity-60"
          >
            Culture
          </a>
        </div>

        <div className="col-span-1 h-10 bg-blue-800">
          <a
            href="/en_us/section/world"
            className="focus:text-neutral-400 inline-block h-full w-full cursor-pointer bg-transparent px-0 py-4 text-left font-sans text-xl font-black capitalize leading-6 text-white hover:text-white hover:opacity-60"
          >
            World News
          </a>
        </div>
        <div className="col-span-1 h-10 bg-gray-800">
          <a
            href="https://www.vice.com/en_asia/topic/culture"
            className="focus:text-neutral-400 inline-block h-full w-full cursor-pointer bg-transparent px-0 py-4 text-left font-sans text-xl font-black capitalize leading-6 text-white hover:text-white hover:opacity-60"
          >
            Culture
          </a>
        </div>
      </div>
    </div>
  )
}

export default Menu
