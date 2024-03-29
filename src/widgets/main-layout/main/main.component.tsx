import clsx from 'clsx'

export interface IMainProperties extends React.ComponentProps<'main'> {}
export function Main(props: IMainProperties) {
  return (
    <main className={clsx(props.className)} {...props}>
      {props.children}
    </main>
  )
}
