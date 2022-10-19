import { render, screen } from '@testing-library/react'
import LinkWrapper from '.'

describe('Link Wrapper', () => {
  it('Should render link and children', () => {
    render(<LinkWrapper href="/my-link">Anything</LinkWrapper>)

    const children = screen.getByText(/Anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')

    screen.logTestingPlaygroundURL()
  })
})
