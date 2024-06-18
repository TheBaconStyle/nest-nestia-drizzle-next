"use client"
import { Alert, Typography } from "@mui/material"
import { forwardRef } from "react"
import { IconVariant } from "../IconVariant"
import { NotificationProps } from "../types"
import { CustomContentProps } from "notistack"

export type TSimpleNotificationBase = NotificationProps & {
  message: string
}

export type TSimpleNotification = TSimpleNotificationBase & CustomContentProps

export const SimpleNotification = forwardRef<
  HTMLDivElement,
  TSimpleNotification
>(function SimpleNotification(
  { message, color, action, appearance = "filled", id },
  ref,
) {
  return (
    <Alert
      ref={ref}
      variant={appearance}
      color={color}
      action={typeof action === "function" ? action(id) : action}
      icon={<IconVariant variant={color} />}
    >
      <Typography>{message}</Typography>
    </Alert>
  )
})
