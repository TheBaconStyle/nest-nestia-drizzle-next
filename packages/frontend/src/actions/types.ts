export type TServerActionReturn<E, S> =
  | UnifiedActionResult<"success", S>
  | UnifiedActionResult<"error", E>

export type UnifiedActionResult<S, T> = {
  status: S
  data: T
}
