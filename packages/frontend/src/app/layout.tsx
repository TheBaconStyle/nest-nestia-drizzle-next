import { Box } from '@mui/material'
import { getTheme } from '@/actions'
import {
  ColorSchemeController,
  MuiThemeProvider,
  NextThemeProvider,
  NotificationProvider,
} from '@/components'
import { AuthProvider } from '@/config'
import type { Metadata } from 'next'
import { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const userTheme = await getTheme()
  return (
    <html lang="ru" suppressHydrationWarning>
      <AuthProvider>
        <MuiThemeProvider theme={userTheme}>
          <Box
            component="body"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <NotificationProvider>
              <NextThemeProvider enableSystem>
                <ColorSchemeController currentTheme={userTheme} />
                {children}
              </NextThemeProvider>
            </NotificationProvider>
          </Box>
        </MuiThemeProvider>
      </AuthProvider>
    </html>
  )
}