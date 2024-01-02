import dynamic from 'next/dynamic'
import type { FC, SVGAttributes, SVGProps } from 'react'

const xIcon = dynamic(() =>
  import('@public/assets/icons/x-icon.svg').then((res) => res.default),
)
const discord = dynamic(() =>
  import('@public/assets/icons/discord.svg').then((res) => res.default),
)
const arrow = dynamic(() =>
  import('@public/assets/icons/arrow.svg').then((res) => res.default),
)

const ICONS_MAP = {
  xIcon,
  discord,
  arrow,
} as const

export type IconsTypes = keyof typeof ICONS_MAP

export interface IIconComponentProperties extends SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = ICONS_MAP[name] as FC<SVGProps<SVGSVGElement>>
  if (!Icon) return null

  return <Icon role="img" {...props} />
}
