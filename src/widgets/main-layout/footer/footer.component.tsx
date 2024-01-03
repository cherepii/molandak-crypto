export interface IFooterProperties extends React.ComponentProps<'footer'> {}
export const Footer = (props: IFooterProperties) => {
  return (
    <footer {...props} id="footer">
      <div className="py-4 text-center text-gray-100 max-mob:pb-6">
        <p className="text-base max-mob:text-xs">All Rights Reserved © 2023 Molandak</p>
      </div>
    </footer>
  )
}
