'use client'

import { createContext, useContext, useState } from 'react'

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValues: SidebarContextType = {
  isOpen: false,
  setIsOpen: () => {},
}

const SidebarContext = createContext(defaultValues)

export function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  return useContext(SidebarContext)
}
