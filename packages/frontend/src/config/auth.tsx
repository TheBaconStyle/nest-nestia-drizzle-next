import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { SessionProvider } from 'next-auth/react'
import { PropsWithChildren } from 'react'

export const routes = {
  public: ['/auth/signin'],
  defaultRedirect: '/',
}

const credProvider = CredentialsProvider({
  name: 'credentials',
  credentials: {
    identifier: { label: 'Identifier' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(_credentials) {
    return { email: 'qwe@qwe.qwe', id: '1', name: 'user 1', image: '/123.png' }
  },
})

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [credProvider],
  callbacks: {
    async authorized(params) {
      return !!params.auth
    },
    async session({ session, token }) {
      session.user = token.user as any
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
  },
  session: { strategy: 'jwt' },
  pages: { signIn: '/auth/signin' },
  trustHost: true,
  secret: process.env.AUTH_SECRET,
})

export async function AuthProvider({ children }: PropsWithChildren) {
  const session = await auth()
  return <SessionProvider session={session}>{children}</SessionProvider>
}
