'use client'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Alert,
  Box,
  Collapse,
  IconButton,
  Paper,
  Typography,
} from '@mui/material'
import { motion } from 'framer-motion'
import { ReactNode, forwardRef } from 'react'
import { useToggle } from '@react-hookz/web'
import { NotificationProps } from '.'
import { IconVariant } from './IconVariant'
import { CustomContentProps } from 'notistack'

export type TComplexNotificationBase = NotificationProps & {
  title: string
  expandedContent?: ReactNode
}

export type TComplexNotification = TComplexNotificationBase & CustomContentProps

export const ComplexNotification = forwardRef<
  HTMLDivElement,
  TComplexNotification
>(function ComplexNotification(
  { title, expandedContent, color, appearance = 'filled', action, id },
  ref,
) {
  const [isExpanded, toggleExpand] = useToggle(false)
  const ActionIcon = isExpanded ? ExpandLess : ExpandMore
  return (
    <Paper ref={ref}>
      <Alert
        component={motion.div}
        variant={appearance}
        color={color}
        icon={<IconVariant variant={color} />}
        action={
          <IconButton
            color="inherit"
            sx={{ fontSize: 'inherit' }}
            onClick={toggleExpand}
          >
            <ActionIcon />
          </IconButton>
        }
        sx={{
          borderBottomLeftRadius: isExpanded ? 0 : undefined,
          borderBottomRightRadius: isExpanded ? 0 : undefined,
          alignItems: 'center',
        }}
      >
        <Typography>{title}</Typography>
      </Alert>
      <Collapse in={isExpanded}>
        <Box sx={{ px: 1, py: 0.375 }}>{expandedContent}</Box>
      </Collapse>
    </Paper>
  )
})
