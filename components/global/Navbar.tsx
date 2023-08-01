import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MenuItem } from 'types'
import { BiLogoHtml5 } from 'react-icons/bi'
import NavbarMenu from 'components/shared/NavbarMenu'
import { NavMenu } from 'components/shared/NavMenu'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="flex bg-black px-4 py-4 text-white">
      <div className="block md:hidden">
        {' '}
        <NavbarMenu>
          <NavMenu menuItems={menuItems} />
        </NavbarMenu>
      </div>
      <div className="flex-grow md:flex">
        {' '}
        <Link
          key={'home'}
          className={`item-center flex justify-center font-extrabold text-white hover:text-gray-600 md:ml-4 md:justify-start`}
          href={'/'}
        >
          Home
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
