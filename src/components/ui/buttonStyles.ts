export type ButtonVariant = 'primary' | 'secondary' | 'secondary-on-night' | 'ghost' | 'whatsapp'
export type ButtonSize = 'md' | 'lg'

/** Farb-/Rahmen-Klassen je Variante – auch von der Sticky-Leiste genutzt. */
export const buttonVariantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-burgundy text-white hover:bg-burgundy-dark',
  secondary: 'border-[1.5px] border-ink text-ink hover:bg-ink hover:text-paper',
  'secondary-on-night': 'border-[1.5px] border-paper text-paper hover:bg-paper hover:text-night',
  ghost:
    'text-burgundy underline decoration-1 underline-offset-4 decoration-transparent hover:decoration-burgundy',
  whatsapp: 'bg-wa text-white hover:bg-wa-dark',
}

export const buttonSizeClasses: Record<ButtonSize, string> = {
  md: 'h-12 px-6',
  lg: 'h-14 px-7',
}
