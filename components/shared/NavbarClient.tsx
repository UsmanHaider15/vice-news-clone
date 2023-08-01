'use client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'

export default function NavbarClient({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

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
      {isOpen ? <>{children}</> : null}
    </div>
  )
}
