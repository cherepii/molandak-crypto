import { Meta } from '@shared/meta'
import { Button, IconButton } from '@shared/ui'
import { MainPageLayout } from '@widgets/main-layout'

export function Home() {
  return (
    <MainPageLayout Meta={<Meta description="Unistory next" title="Unistory" />}>
      <section id="main" className="pb-[4.25rem] max-mob:pb-[3.375rem]">
        <div className="container">
          <div className="relative z-10 mt-[3.75rem] text-center max-mob:mt-0">
            <div className="flex items-center justify-center max-mob:p-3">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="mr-3 hidden h-[38px] w-full max-w-10 max-mob:block"
              />
              <h1 className="font-caveat text-[4rem] font-bold uppercase text-primary-50 max-mob:text-xl">
                Molandak
              </h1>
            </div>
            <h2 className="-mt-4 text-[5.25rem] font-semibold leading-[4.5rem] max-mob:mt-10 max-mob:text-[2.5rem] max-mob:leading-[2.75rem]">
              High fees is fuck
            </h2>
          </div>
          <div className="relative mt-3">
            <img
              src="/assets/images/illustration.png"
              alt="illustration"
              className="aspect-[1280_/_580] w-full max-mob:hidden"
            />
            <img
              src="/assets/images/illustration-mob.png"
              alt="illustration"
              className="hidden aspect-[360_/_256] w-full max-mob:block"
            />
            <div className="absolute left-[49%] top-[49%] translate-x-[-50%] translate-y-[-50%] max-mob:hidden">
              <img
                src="/assets/images/bg-btn.svg"
                alt="bg"
                className="aspect-[420_/_390] w-full max-w-[26.25rem]"
              />
            </div>
            <div className="absolute left-[50%] top-[50%] mx-auto flex w-full max-w-[21.8125rem] translate-x-[-50%] translate-y-[-50%] flex-col items-center text-center max-mob:static max-mob:translate-x-0 max-mob:translate-y-0">
              <p className="opacity-70 max-mob:my-5 max-mob:text-xs max-mob:leading-5">
                You Poap Monad Holders, Pyth staker, WorkHole Bridge users
              </p>
              <Button className="mt-6 uppercase max-mob:mt-0">Claim Molandak</Button>
            </div>
          </div>
        </div>
      </section>
      <section id="mission" className="pb-[3.375rem] pt-20 max-mob:py-[3.5rem]">
        <div className="mx-auto w-full max-w-[54.875rem] px-4 max-sm:px-0">
          <div className="text-center max-mob:px-4">
            <h1 className="font-caveat text-[4rem] font-bold uppercase text-primary-50 max-mob:text-3xl">
              OUR MISSION
            </h1>
            <h4 className="text-[1.75rem] leading-[2.25rem] max-mob:mt-1 max-mob:text-base max-mob:leading-6">
              <span className="text-primary-100">Molondak</span> is here to make memcoins
              great again. Launched with no presale, zero taxes, LP burnt and contract
              renounced, <span className="text-primary-100">$MLND</span> is a coin for the
              people, forever. Fueled by pure innovation and utility, let $MLND show you
              the way.
            </h4>
          </div>
          <div className="mt-8 w-full">
            <div className="relative flex items-start justify-end overflow-hidden max-mob:justify-start">
              <div className="mt-5 overflow-hidden rounded-2xl border-8 border-primary-500 max-mob:ml-[8%]">
                <img
                  src="/assets/images/mem1.png"
                  alt="image1"
                  className="aspect-[382_/_217] max-w-[23.875rem] bg-primary-500 object-cover object-center max-mob:aspect-[185_/_105] max-mob:max-w-[11.5625rem]"
                />
              </div>
              <div className="ml-[14%] overflow-hidden rounded-2xl border-8 border-primary-500 max-mob:absolute max-mob:right-[-8%] max-mob:ml-0">
                <img
                  src="/assets/images/mem2.png"
                  alt="image1"
                  className="aspect-square max-w-[12.75rem] bg-primary-500 object-cover max-mob:max-w-[6.25rem]"
                />
              </div>
            </div>
            <div className="relative mt-[-17%] flex items-start overflow-hidden max-mob:justify-end">
              <div className="left-[-5%] mt-5 overflow-hidden rounded-2xl border-8 border-primary-500 max-mob:absolute">
                <img
                  src="/assets/images/mem3.png"
                  alt="image1"
                  className="aspect-square max-w-[12.75rem] bg-primary-500 object-cover max-mob:max-w-[6.25rem]"
                />
              </div>
              <div className="ml-[23%] overflow-hidden rounded-2xl border-8 border-primary-500 max-mob:ml-0">
                <img
                  src="/assets/images/mem4.png"
                  alt="image1"
                  className="aspect-[289_/_256] max-w-[18.0625rem] bg-primary-500 object-cover max-mob:aspect-[140_/_124] max-mob:max-w-[8.75rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tokenomic" className="pb-[5.5rem] pt-10 max-mob:py-[4rem]">
        <div className="mx-auto flex w-full max-w-[41.3125rem] flex-col items-center px-4">
          <img
            src="/assets/images/illustration2.png"
            alt="illustration"
            className="aspect-square max-w-[11.875rem]"
          />
          <div className="mt-[-4.2rem] text-center max-mob:mt-[-2rem]">
            <h1 className="font-caveat text-[4rem] font-bold uppercase text-primary-50 max-mob:text-3xl">
              Tokenomick
            </h1>
            <h4 className="text-[1.75rem] leading-[2.25rem] max-mob:mt-1 max-mob:text-base max-mob:leading-6">
              No Taxes, No Bullshit. It’s that simple. LP tokens are burnt, and contract
              ownership is renounced.
            </h4>
          </div>
        </div>
      </section>
      <section id="roadmap" className="pb-[10rem] pt-20 max-mob:pb-10">
        <div className="text-center">
          <h1 className="font-caveat text-[4rem] font-bold uppercase text-primary-50 max-mob:text-3xl">
            Roadmap
          </h1>
          <div className="flex flex-col items-center text-center text-xl max-mob:mt-1 max-mob:text-base">
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
      <section id="contacts" className="pt-14">
        <div className="flex flex-col items-center border-b-2 border-b-white-100 border-opacity-20 pb-10">
          <div className="flex items-center gap-x-4">
            <IconButton iconName="xIcon" />
            <IconButton iconName="discord" />
          </div>
          <a
            href="mailto:hello@Molandak.com"
            className="mt-8 font-caveat text-3xl leading-9 text-gray-100 max-mob:mt-6 max-mob:text-2xl"
          >
            hello@Molandak.com
          </a>
        </div>
      </section>
    </MainPageLayout>
  )
}

export default Home
