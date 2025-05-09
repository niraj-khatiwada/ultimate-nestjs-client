import {
  Dropdown as NextUIDropdown,
  DropdownItem as NextUIDropdownItem,
  DropdownMenu as NextUIDropdownMenu,
  DropdownTrigger as NextUIDropdownTrigger,
  type DropdownItemProps as NextUIDropdownItemProps,
  type DropdownMenuProps as NextUIDropdownMenuProps,
  type DropdownProps as NextUIDropdownProps,
  type DropdownTriggerProps as NextUIDropdownTriggerProps,
} from '@heroui/react'
import React from 'react'
import { blurCSS } from '~/ui/backdrop-blur'
import { cn } from '~/utils/tailwind'

interface DropdownProps extends NextUIDropdownProps {}
function Dropdown(props: DropdownProps) {
  return (
    <NextUIDropdown {...props} className={cn([blurCSS, props?.className])} />
  )
}

interface DropdownTriggerProps extends NextUIDropdownTriggerProps {}
export function DropdownTrigger(props: DropdownTriggerProps) {
  return <NextUIDropdownTrigger {...props} />
}

interface DropdownMenuProps extends NextUIDropdownMenuProps {}
export function DropdownMenu(props: DropdownMenuProps) {
  return <NextUIDropdownMenu {...props} />
}

interface DropdownItemProps extends NextUIDropdownItemProps {}
export function DropdownItem(props: DropdownItemProps) {
  return <NextUIDropdownItem {...props} />
}

export default Dropdown
