import { Session } from "next-auth"

export function isUserExists(session?: Session | null) {
  return !!session && !!session.user
}
