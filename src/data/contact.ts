/**
 * Zentrale Kontakt- und Stammdaten. Jede Komponente, die Telefon, WhatsApp,
 * Signal, E-Mail oder externe Links braucht, liest ausschließlich von hier.
 */

const WHATSAPP_NUMBER = '4369913383353'

export const contact = {
  brand: 'Der IMMO-FLÜSTERER',
  claim: 'Ihr guter Geist beim Wohnungskauf',
  tagline: 'Ankaufsberatung Wien',
  person: 'Mag. Ing. Johannes Kirchner',
  city: 'Wien',

  phoneDisplay: '0699 133 833 53',
  phoneHref: 'tel:+4369913383353',

  email: 'office@johannes-kirchner.at',
  emailHref: 'mailto:office@johannes-kirchner.at',

  signalHref: 'https://signal.me/#p/+4369913383353',

  youtubeChannelHref: 'https://www.youtube.com/@DerIMMO-FLUESTERER/shorts',
  youtubeVideoId: 'niAWw56ZDAw',

  impressumHref:
    'https://firmen.wko.at/mag-johannes-georg-kirchner-der-immo-fl%c3%9csterer---ihr-guter-geist-beim-wohnungskauf/wien/?firmaid=cfc7f9b1-aeb4-404a-86f4-235acb6a922a&suchbegriff=immo%20fl%c3%bcsterer',

  priceListHref: '/downloads/Preisliste_Ankaufsberatung_2026.pdf',
  siteUrl: 'https://www.immo-fluesterer.at',
} as const

/** Vorbefüllte WhatsApp-Nachrichten je Einstieg. */
export const whatsappMessages = {
  general: 'Hallo Johannes, ich habe eine Frage zu einem Immobilienkauf: ',
  remoteCheck:
    'Hallo Johannes, ich möchte dir die Unterlagen zu einer Wohnung für eine Einschätzung aus der Ferne schicken.',
} as const

export function whatsappHref(text: string = whatsappMessages.general): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
