export function extractTRPCErrorMessages(error: unknown) {
  let messages: string[] = []
  if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    messages = JSON.parse(error.message).map((err: any) => err.message)
  }
  return messages
}
