'use client'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { setTheme } from '@/actions'

export type TColorSchemeController = {
  currentTheme?: string
}

export function ColorSchemeController({
  currentTheme,
}: TColorSchemeController) {
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    const setResolvedTheme = async () => {
      if (
        resolvedTheme &&
        resolvedTheme !== 'system' &&
        resolvedTheme !== currentTheme
      )
        setTheme(resolvedTheme)
    }
    setResolvedTheme()
  }, [resolvedTheme, currentTheme])
  return null
}
