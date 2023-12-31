import 'styles/index.css'
import type { PortableTextBlock } from '@portabletext/types'
import { Footer } from 'components/global/Footer'
import { Navbar } from 'components/global/Navbar'
import { PreviewBanner } from 'components/preview/PreviewBanner'
import PreviewProvider from 'components/preview/PreviewProvider'
import { readToken } from 'lib/sanity.api'
import { getClient } from 'lib/sanity.client'
import { settingsQuery } from 'lib/sanity.queries'
import { draftMode } from 'next/headers'
import { SettingsPayload } from 'types'
import Sidebar from 'components/shared/Sidebar'
import { NavMenu } from 'components/shared/NavMenu'

const fallbackSettings: SettingsPayload = {
  menuItems: [],
  footer: [],
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  const preview = draftMode().isEnabled ? { token: readToken! } : undefined
  const client = getClient(preview)
  const settings =
    (await client.fetch<SettingsPayload | null>(settingsQuery)) ??
    fallbackSettings

  const layout = (
    <div
      className="flex min-h-screen flex-col text-black"
      style={{ backgroundColor: '#f2f2f2' }}
    >
      {preview && <PreviewBanner />}
      <div className="flex min-h-screen max-w-screen-2xl flex-col bg-white md:mx-auto">
        <Sidebar>
          <NavMenu menuItems={settings.menuItems} />
        </Sidebar>
        <Navbar menuItems={settings.menuItems} />
        <div className="flex-grow">{children}</div>

        <Footer footer={settings.footer as PortableTextBlock[]} />
        {/* <IntroTemplate /> */}
      </div>
    </div>
  )

  if (preview) {
    return <PreviewProvider token={preview.token}>{layout}</PreviewProvider>
  }

  return layout
}
