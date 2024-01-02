import { IconButton } from '@shared/ui'
import { Link } from 'react-scroll'

const LINKS = [
  {
    text: 'MISSION',
    to: 'mission',
  },
  {
    text: 'Tokenomics',
    to: 'tokenomic',
  },
  {
    text: 'Roadmap',
    to: 'roadmap',
  },
  {
    text: 'Contacts',
    to: 'footer',
  },
]

export interface IHeaderProperties extends React.ComponentProps<'header'> {}

export const Header = (props: IHeaderProperties) => {
  return (
    <header {...props}>
      <div className="container flex items-center justify-between py-3">
        <ul className="flex items-center gap-x-6">
          <li>
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-[38px] w-full max-w-10"
            />
          </li>
          {LINKS.map((l) => (
            <li key={l.to} className="text-base uppercase">
              <Link
                activeClass="text-primary-100"
                className="link cursor-pointer"
                to={l.to}
                offset={0}
                duration={700}
                smooth
                spy
              >
                {l.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-x-4">
          <IconButton iconName="xIcon" />
          <IconButton iconName="discord" />
        </div>
      </div>
    </header>
  )
}
