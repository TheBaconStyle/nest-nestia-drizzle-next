'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { themeFont } from '@/config/theme'
import { PropsWithChildren, useMemo } from 'react'

export type TMuiThemeProvider = {
  theme: 'light' | 'dark'
}

export function MuiThemeProvider({
  children,
  theme,
}: PropsWithChildren<TMuiThemeProvider>) {
  const muiTheme = useMemo(() => {
    return createTheme({
      palette: { mode: theme },
      ...themeFont,
    })
  }, [theme])
  return (
    <AppRouterCacheProvider options={{ key: 'css', prepend: true }}>
      <ThemeProvider theme={muiTheme}>
        {children}
        <CssBaseline />
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
