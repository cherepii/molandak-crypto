import clsx from 'clsx'
import type { ComponentProps } from 'react'

import type { IconsTypes } from '../icon'
import { IconComponent } from '../icon'

interface IIconButtonProperties extends ComponentProps<'button'> {
  iconName: IconsTypes
}

export const IconButton = (props: IIconButtonProperties) => {
  const { iconName, className, ...rest } = props

  return (
    <button
      type="button"
      className={clsx(
        className,
        'hover:bg-primary-300 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400 p-2 transition-all active:scale-90',
      )}
      {...rest}
    >
      <IconComponent className="h-6 w-6" name={iconName} />
    </button>
  )
}
