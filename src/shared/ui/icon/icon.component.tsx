import dynamic from 'next/dynamic'
import type { FC, SVGAttributes, SVGProps } from 'react'

const unistory = dynamic(() =>
  import('@public/assets/icons/unistory.svg').then((res) => res.default),
)

const ICONS_MAP = {
  unistory,
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
