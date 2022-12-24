import { fireEvent, render, screen } from '@testing-library/react'
import Layout from 'components/Layout'
import '@testing-library/jest-dom'

describe('Layout', () => {
  it('renders the footer', () => {
    render(<Layout />)

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })

  it('renders children', () => {
    render(
      <Layout>
        <p>this is a child</p>
      </Layout>
    )

    const child = screen.getByText(/this is a child/i)

    expect(child).toBeInTheDocument()
  })
})
