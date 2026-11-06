export const gVariantAlias: Record<string, string> = {
  dark: 'primary',
  gray: 'secondary',
  white: 'ghost'
}

export const resolveGVariant = (variant: string) => gVariantAlias[variant] ?? variant
