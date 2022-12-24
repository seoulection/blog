import { fireEvent, render, screen } from '@testing-library/react'
import Footer from 'components/Footer'
import '@testing-library/jest-dom'

describe('About', () => {
  it('renders a back link', () => {
    render(<Footer />)

    const backLink = screen.getByRole('link', { name: /back to home/i })

    expect(backLink).toBeInTheDocument()
  })
})
