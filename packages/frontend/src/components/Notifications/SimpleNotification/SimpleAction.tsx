import { Close } from "@mui/icons-material"
import { Button, Icon, IconButton } from "@mui/material"
import { SnackbarKey, closeSnackbar } from "notistack"
import { MouseEventHandler, ReactNode } from "react"

export type TAction =
  | ((
      | {
          type: "icon"
          icon: string
        }
      | { type: "text"; text: string }
    ) & {
      onClick: MouseEventHandler<HTMLButtonElement>
    })
  | { type: "close" }

export function simpleAction(action: TAction) {
  let ActionComponent: ReactNode
  if (action?.type === "icon") {
    ActionComponent = (
      <IconButton sx={{ fontSize: "inherit" }} onClick={action.onClick}>
        <Icon fontSize="inherit">{action.icon}</Icon>
      </IconButton>
    )
  }
  if (action?.type === "text") {
    ActionComponent = (
      <Button
        variant="text"
        sx={{ color: "inherit", fontSize: "inherit" }}
        onClick={action.onClick}
      >
        {action.text}
      </Button>
    )
  }
  return function NotificationAction(key: SnackbarKey): ReactNode {
    if (action.type === "close")
      return (
        <IconButton
          sx={{ fontSize: "inherit", color: "inherit" }}
          onClick={() => {
            closeSnackbar(key)
          }}
        >
          <Close color="inherit" />
        </IconButton>
      )
    return ActionComponent
  }
}
