'use client'

import * as React from 'react'
import { useSidebar } from 'app/theme-provider'
import { usePathname } from 'next/navigation'

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, setIsOpen } = useSidebar()
  const pathname = usePathname()

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div
      className={`fixed left-0 top-0 z-10 h-screen w-3/4 transform bg-black transition-transform duration-300 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      asd
      {children}
    </div>
  )
}

export default Sidebar
