'use client'
import { create } from '@/actions/user'
import { Box } from '@mui/material'

export default function Profile() {
  return (
    <Box>
      <button
        onClick={() =>
          create({ email: 'qwe@qwe.qwe', password: 'qwerty123' }).then(
            console.log,
          )
        }
      >
        qweqwe
      </button>
    </Box>
  )
}
