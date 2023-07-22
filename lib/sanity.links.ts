export function resolveHref(
  documentType?: string,
  slug?: string
): string | undefined {
  switch (documentType) {
    case 'home':
      return '/'
    case 'page':
      return slug ? `/${slug}` : undefined
    case 'categoryPage':
      return slug ? `/categoryPage/${slug}` : undefined
    case 'project':
      return slug ? `/projects/${slug}` : undefined
    case 'article':
      return slug ? `/articles/${slug}` : undefined
    default:
      console.warn('Invalid document type:', documentType)
      return undefined
  }
}
