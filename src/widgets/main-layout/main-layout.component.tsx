import type { Meta } from '@shared/meta'

import { Footer } from './footer'
import { Header } from './header'
import { Main } from './main'

export interface IMainPageLayoutProperties extends React.ComponentProps<'main'> {
  Meta: React.ReactElement<typeof Meta>
}

export const MainPageLayout = (props: IMainPageLayoutProperties) => {
  const { Meta, ...rest } = props
  return (
    <>
      {Meta}
      <Header />
      <Main {...rest} />
      <Footer />
    </>
  )
}
