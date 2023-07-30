import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MenuItem } from 'types'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiLogoHtml5 } from 'react-icons/bi'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="flex bg-black px-4 py-4 text-white">
      <div className="">
        {' '}
        <Link
          key="menu"
          className="cursor-pointer font-sans font-black leading-5 text-white hover:text-gray-600 md:text-lg"
          href={'/menu'}
        >
          <GiHamburgerMenu size={24} />
        </Link>
      </div>
      <div className="flex-grow md:flex">
        {' '}
        <Link
          key={'home'}
          className={`item-center flex justify-center md:ml-4 md:justify-start`}
          href={'/'}
        >
          <BiLogoHtml5
            size={32}
            className="-translate-x-6 hover:text-gray-600 md:-translate-x-0"
            color="white"
          />
        </Link>
        {menuItems &&
          menuItems.map((menuItem, key) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                className={`${
                  !key ? `ml-4` : ''
                } mr-4 hidden font-extrabold text-white hover:text-gray-600 md:block md:text-lg`}
                href={href}
              >
                {menuItem.title}
              </Link>
            )
          })}
      </div>
    </div>
  )
}
