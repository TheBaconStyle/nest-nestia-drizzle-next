import { TComplexNotificationBase } from "./ComplexNotification"
import { TSimpleNotificationBase } from "./SimpleNotification"

declare module "notistack" {
  interface VariantOverrides {
    complex: TComplexNotificationBase
    simple: TSimpleNotificationBase
    success: false
    default: false
    warning: false
    error: false
    info: false
  }
}

export * from "./ComplexNotification"
export * from "./NotificationProvider"
export * from "./SimpleNotification/SimpleNotification"
export * from "./types"
