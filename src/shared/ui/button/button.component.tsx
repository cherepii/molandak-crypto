import clsx from 'clsx'
import type { ComponentProps } from 'react'

import { IconComponent } from '../icon'

interface IButtonProperties extends ComponentProps<'button'> {}

export const Button = (props: IButtonProperties) => {
  const { className, children, ...rest } = props

  return (
    <button
      type="button"
      className={clsx(
        className,
        'hover:bg-primary-80 group flex items-center rounded-[2.5rem] bg-primary-100 p-6 transition-colors',
      )}
      {...rest}
    >
      <span className="text-xl text-white-50">{children}</span>
      <div className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white-50 transition-transform duration-300 group-hover:-rotate-45">
        <IconComponent name="arrow" />
      </div>
    </button>
  )
}
