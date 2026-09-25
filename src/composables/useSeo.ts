import { contact } from '@/data/contact'

export interface SeoOptions {
  title: string
  description: string
  /** Pfad der Seite, z. B. "/referenzen" – für canonical und og:url. */
  path: string
  noindex?: boolean
}

function setMeta(attr: 'name' | 'property', key: string, content: string): void {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

/** Setzt document.title, meta description, canonical und OG-Basisdaten pro Route. */
export function useSeo(options: SeoOptions): void {
  const url = `${contact.siteUrl}${options.path}`
  document.title = options.title
  setMeta('name', 'description', options.description)
  setMeta('name', 'robots', options.noindex ? 'noindex, follow' : 'index, follow')
  setMeta('property', 'og:title', options.title)
  setMeta('property', 'og:description', options.description)
  setMeta('property', 'og:url', url)
  setCanonical(url)
}
