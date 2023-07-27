import type { PortableTextBlock } from '@portabletext/types'
import { CustomPortableText } from 'components/shared/CustomPortableText'

export function Footer({ footer }: { footer?: PortableTextBlock[] }) {
  return (
    <footer className="mx-auto my-0 w-full flex-grow bg-black px-5 py-10 leading-5 sm:px-10 sm:py-20">
      <nav
        className="mb-2 mt-4"
        role="navigation"
        aria-label="Footer Navigation"
      >
        <ul className="flex justify-center text-white">
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="https://company.vice.com"
              id="5852-f-321-da-1-b-7407-fbde-0-ab-5"
            >
              About
            </a>
          </li>
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="https://advertise.vice.com"
              id="5-d-8-be-428-b-9-fbf-5000814-f-13-b"
            >
              Partner
            </a>
          </li>
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="https://company.vice.com/careers/"
              id="58581-ba-832225-b-633-b-67357-c"
            >
              Careers
            </a>
          </li>
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="/en/page/ethics-code"
              id="5852-f-34-e-310-b-2-a-080107-acb-8"
            >
              Code of Ethics
            </a>
          </li>
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="https://vice-web-statics-cdn.vice.com/privacy-policy/en_uk/page/vice-media-privacy-policy.html"
              id="5852-f-36478-bc-4851-c-6-f-42-b-10"
            >
              Privacy & Terms
            </a>
          </li>
          <li className="mr-4 text-left font-mono text-xs font-normal leading-4">
            <a
              className="hover:text-neutral-400 focus:text-neutral-400 inline-block cursor-pointer bg-transparent px-0 py-2 uppercase "
              href="/en/page/vice-media-accessibility-statement"
              id="609051-ac-344058009-b-851792"
            >
              Accessibility Statement
            </a>
          </li>
        </ul>
      </nav>

      <div className="font-mono text-xs font-normal leading-4 text-white sm:text-center">
        © 2023 VICE MEDIA GROUP
      </div>
    </footer>
    // <footer className="bottom-0 w-full bg-white py-12 text-center md:py-20">
    //   {footer && (
    //     <CustomPortableText
    //       paragraphClasses="text-md md:text-xl"
    //       value={footer}
    //     />
    //   )}
    // </footer>
  )
}
