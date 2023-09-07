import { Meta } from '@shared/meta'
import { MainPageLayout } from '@widgets/main-layout'

export function Home() {
  return (
    <MainPageLayout
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '4rem',
        gap: '2rem',
      }}
      Meta={<Meta description="Unistory next" title="Unistory" />}
    >
      Unistory next template
    </MainPageLayout>
  )
}

export default Home
