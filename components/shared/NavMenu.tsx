import Link from 'next/link'
import { resolveHref } from 'lib/sanity.links'
import { MenuItem } from 'types'

export interface NavMenuProps {
  menuItems?: MenuItem[]
}

export function NavMenu({ menuItems }: NavMenuProps) {
  return (
    <div className="fixed left-0 top-20 z-10 h-screen w-screen overflow-hidden bg-black">
      <div className="grid p-10 sm:grid-cols-1 md:grid-cols-2">
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
