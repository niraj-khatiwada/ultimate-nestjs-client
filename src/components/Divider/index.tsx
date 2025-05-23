import {
  Divider as NextUIDivider,
  type DividerProps as NextUIDividerProps,
} from '@heroui/react'
import React from 'react'

import { cn } from '~/utils/tailwind'

interface DividerProps extends NextUIDividerProps {}

function Divider(props: DividerProps) {
  return (
    <NextUIDivider
      {...props}
      className={cn(['bg-zinc-200 dark:bg-zinc-800', props?.className ?? ''])}
    />
  )
}

export default Divider
