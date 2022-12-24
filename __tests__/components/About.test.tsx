import { fireEvent, render, screen } from '@testing-library/react'
import About from 'components/About'
import '@testing-library/jest-dom'

const LINKS = [
  'about',
  'github',
  'instagram',
  'linkedin',
  'soundcloud'
]

describe('About', () => {
  beforeEach(() => {
    render(<About />)
  })

  LINKS.forEach(link => {
    it(`renders the ${link} link`, () => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })
})
