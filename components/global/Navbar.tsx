import { resolveHref } from 'lib/sanity.links'
import Link from 'next/link'
import { MenuItem } from 'types'
import SidebarMenuIcon from 'components/shared/SidebarMenuIcon'
import { AiFillHome } from 'react-icons/ai'

interface NavbarProps {
  menuItems?: MenuItem[]
}

export function Navbar({ menuItems }: NavbarProps) {
  return (
    <div className="flex flex-row-reverse justify-between bg-black px-4 py-6 text-white md:flex-row">
      <div className="block md:hidden">
        {' '}
        <SidebarMenuIcon />
      </div>
      <div className="md:flex md:flex-grow">
        {' '}
        <Link
          key={'home'}
          className={`item-center flex justify-center font-extrabold text-white hover:text-gray-600 md:ml-4 md:justify-start`}
          href={'/'}
        >
          <AiFillHome size={24} />
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
                  !key ? `ml-5` : ''
                } mr-5 hidden font-extrabold text-white hover:text-gray-600 md:block md:text-lg`}
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
