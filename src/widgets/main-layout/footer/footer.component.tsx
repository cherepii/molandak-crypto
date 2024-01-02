import { IconButton } from '@shared/ui'

export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = (props: IFooterProperties) => {
  return (
    <footer {...props} id="footer">
      <div className="container flex flex-col items-center border-b-2 border-b-white-100 border-opacity-20 py-14">
        <div className="flex items-center gap-x-4">
          <IconButton iconName="xIcon" />
          <IconButton iconName="discord" />
        </div>
        <a
          href="mailto:hello@Molandak.com"
          className="mt-8 text-3xl leading-9 text-gray-100"
        >
          hello@Molandak.com
        </a>
      </div>
      <div className="py-4 text-center text-gray-100">
        <p className="text-base">All Rights Reserved © 2023 Molandak</p>
      </div>
    </footer>
  )
}
