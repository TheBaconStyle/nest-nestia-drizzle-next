"use server"

import { cookies } from "next/headers"
import { Duration, add } from "date-fns"

export async function writeCookies(
  key: string,
  value: string,
  expires?: Duration,
) {
  const cookiesStore = cookies()
  const currentDate = new Date()
  cookiesStore.set(key, value, {
    sameSite: "lax",
    httpOnly: true,
    expires: expires && add(currentDate, expires),
  })
}

export async function readCookies(key: string, all?: "all") {
  const cookiesStore = cookies()
  return all ? cookiesStore.getAll(key) : cookiesStore.get(key)
}
