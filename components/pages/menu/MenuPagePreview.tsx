'use client'

import { settingsQuery } from 'lib/sanity.queries'
import { useLiveQuery } from 'next-sanity/preview'
import type { SettingsPayload } from 'types'

import { MenuPage, type MenuPageProps } from './MenuPage'

export default function MenuPagePreview({
  menuItems: initialData,
}: MenuPageProps) {
  const [settings] = useLiveQuery<SettingsPayload>(
    { menuItems: initialData },
    settingsQuery,
    {},
    { isEqual: (a, b) => a?.menuItems === b?.menuItems }
  )

  return <MenuPage menuItems={settings.menuItems} />
}
