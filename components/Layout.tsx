import Footer from 'components/Footer'

interface LayoutProps {
  children?: JSX.Element
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
