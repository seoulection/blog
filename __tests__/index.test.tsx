import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

const PAGES = [
  {
    name: 'about',
    route: '/about'
  },
  {
    name: 'hello world',
    route: '/posts/hello-world'
  },
  {
    name: 'linkedin',
    route: 'www.linkedin.com'
  }
]

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { name: /seoulection/i })

    expect(heading).toBeInTheDocument()
  })

  PAGES.forEach(({ name, route }) => {
    it(`render a link to the ${name} page`, () => {
      const link = screen.getByRole('link', { name: name }) as HTMLLinkElement

    expect(link.href).toContain(route)
    })
  })
})
