import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { MenuPage } from 'components/pages/menu/MenuPage'
import MenuPagePreview from 'components/pages/menu/MenuPagePreview'
import { SettingsPayload } from 'types'

// export async function generateMetadata(): Promise<Metadata> {
//   const preview = draftMode().isEnabled ? { token: readToken! } : undefined
//   const client = getClient(preview)

//   const [settings, page] = await Promise.all([
//     client.fetch<SettingsPayload | null>(settingsQuery),
//     client.fetch<HomePagePayload | null>(homePageQuery),
//   ])

//   return defineMetadata({
//     description: page?.overview ? toPlainText(page.overview) : '',
//     image: settings?.ogImage,
//     title: page?.title,
//   })
// }

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export default async function IndexRoute() {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const settings =
    (await client.fetch<SettingsPayload | null>(settingsQuery)) ??
    fallbackSettings

  console.log('preview it is', preview)

  if (!settings && !preview) {
    notFound()
  }

  return preview ? (
    <MenuPagePreview menuItems={settings.menuItems} />
  ) : (
    <MenuPage menuItems={settings.menuItems} />
  )
}
