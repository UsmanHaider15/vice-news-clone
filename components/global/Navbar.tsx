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
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-4 border-b border-gray-700 bg-black py-4 text-xl backdrop-blur md:px-8 md:py-6">
      <div className="cursor-pointer font-sans font-black leading-5 text-white hover:text-gray-600 md:text-lg">
        <GiHamburgerMenu size={24} />
      </div>

      <Link
        key={'key'}
        className={`font-extrabold text-white hover:text-gray-600 md:text-lg`}
        href={'/'}
      >
        <BiLogoHtml5 size={32} />
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
              className={`font-extrabold text-white hover:text-gray-600 md:text-lg`}
              href={href}
            >
              {menuItem.title}
            </Link>
          )
        })}
    </div>
  )
}
