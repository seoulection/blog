import { fireEvent, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('renders a heading', () => {
    const heading = screen.getByRole('heading', { name: /seoulection/i })

    expect(heading).toBeInTheDocument()
  })

  it('renders the about component', () => {
    const about = screen.getByTestId('about')

    expect(about).toBeInTheDocument()
  })
})
