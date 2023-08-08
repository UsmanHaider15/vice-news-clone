'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { useSidebar } from 'app/theme-provider'

export default function SidebarMenuIcon({}: {}) {
  const { isOpen, setIsOpen } = useSidebar()

  return (
    <div>
      {!isOpen ? (
        <GiHamburgerMenu size={24} onClick={() => setIsOpen((prev) => !prev)} />
      ) : (
        <RxCross2
          size={24}
          color="white"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      )}
    </div>
  )
}
