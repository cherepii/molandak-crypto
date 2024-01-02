import { Meta } from '@shared/meta'
import { Button } from '@shared/ui'
import { MainPageLayout } from '@widgets/main-layout'

export function Home() {
  return (
    <MainPageLayout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <section id="main" className="pb-[4.25rem]">
        <div className="relative z-10 mt-[3.75rem] text-center">
          <h1 className="text-[4rem] font-bold uppercase text-primary-50">Molandak</h1>
          <h2 className="text-[5.25rem] font-semibold leading-[4.5rem]">
            High fees is fuck
          </h2>
        </div>
        <div className="relative mt-3">
          <img
            src="/assets/images/illustration.png"
            alt="illustration"
            className="aspect-[1280_/_580] w-full"
          />
          <div className="absolute left-[49%] top-[49%] translate-x-[-50%] translate-y-[-50%]">
            <img
              src="/assets/images/bg-btn.svg"
              alt="bg"
              className="aspect-[420_/_390] w-full max-w-[26.25rem]"
            />
          </div>
          <div className="absolute left-[50%] top-[50%] flex w-full max-w-[21.8125rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center text-center">
            <p className="opacity-70">
              You Poap Monad Holders, Pyth staker, WorkHole Bridge users
            </p>
            <Button className="mt-6">Claim Molandak</Button>
          </div>
        </div>
      </section>
      <section id="mission" className="pb-[3.375rem] pt-20">
        <div className="mx-auto w-full max-w-[52.8125rem]">
          <div className="text-center">
            <h1 className="text-[4rem] font-bold uppercase text-primary-50">
              OUR MISSION
            </h1>
            <h4 className="text-[1.75rem] leading-[2.25rem]">
              <span className="text-primary-100">Molondak</span> is here to make memcoins
              great again. Launched with no presale, zero taxes, LP burnt and contract
              renounced, <span className="text-primary-100">$MLND</span> is a coin for the
              people, forever. Fueled by pure innovation and utility, let $MLND show you
              the way.
            </h4>
          </div>
          <div className="mt-8 w-full">
            <div className="flex items-start justify-end">
              <div className="bg-primary-500 mt-5 rounded-2xl p-2">
                <img
                  src="/assets/images/mem1.png"
                  alt="image1"
                  className="aspect-[382_/_217] max-w-[23.875rem] rounded-2xl"
                />
              </div>
              <div className="bg-primary-500 ml-[8.125rem] rounded-2xl p-2">
                <img
                  src="/assets/images/mem2.png"
                  alt="image1"
                  className="aspect-square max-w-[12.75rem] rounded-2xl"
                />
              </div>
            </div>
            <div className="relative mt-[-17%] flex items-start">
              <div className="bg-primary-500 mt-5 rounded-2xl p-2">
                <img
                  src="/assets/images/mem3.png"
                  alt="image1"
                  className="aspect-square max-w-[12.75rem] rounded-2xl"
                />
              </div>
              <div className="bg-primary-500 ml-[13.1875rem] rounded-2xl p-2">
                <img
                  src="/assets/images/mem4.png"
                  alt="image1"
                  className="aspect-[289_/_256] max-w-[18.0625rem] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tokenomic" className="pb-[5.5rem] pt-10">
        <div className="mx-auto flex w-full max-w-[39.25rem] flex-col items-center">
          <img
            src="/assets/images/illustration2.png"
            alt="illustration"
            className="aspect-square max-w-[11.875rem]"
          />
          <div className="mt-[-4.2rem] text-center">
            <h1 className="text-[4rem] font-bold uppercase text-primary-50">
              Tokenomick
            </h1>
            <h4 className="text-[1.75rem] leading-[2.25rem]">
              No Taxes, No Bullshit. It’s that simple. LP tokens are burnt, and contract
              ownership is renounced.
            </h4>
          </div>
        </div>
      </section>
      <section id="roadmap" className="pb-[10rem] pt-20">
        <div className="text-center">
          <h1 className="text-[4rem] font-bold uppercase text-primary-50">Roadmap</h1>
          <div className="flex flex-col items-center text-center text-xl">
            <p>Phase 1: Meme</p>
            <div className="relative">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="absolute -left-12 top-[50%] h-[38px] w-full max-w-10 translate-y-[-50%]"
              />
              <p className="ml-1 text-primary-100">Phase 2: Vibe and HODL</p>
            </div>
            <p>Phase 3: Meme Takeover</p>
          </div>
        </div>
      </section>
    </MainPageLayout>
  )
}

export default Home
