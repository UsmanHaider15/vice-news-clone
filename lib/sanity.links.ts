export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'tag':
      return slug ? `/${slug}` : undefined
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'categoryPage':
      return slug ? `/categoryPage/${slug}` : undefined
    case 'category':
      return slug ? `/category/${slug}` : undefined
    case 'article':
      return slug ? `/articles/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
