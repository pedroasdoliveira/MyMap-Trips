import { render, screen } from '@testing-library/react'
import MapComponent from '.'

describe('Map', () => {
  it('Should render a marker in the correct place', () => {
    const place = {
      id: '1',
      name: 'Petrópolis',
      slug: 'petrópolis',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<MapComponent places={[place]} />)

    expect(screen.getByTitle(/Petrópolis/i)).toBeInTheDocument()
  })
})
