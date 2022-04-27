import Home from '.'
import { MemoryRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('Home component test suite', () => {
  it('should render', async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    screen.getByText(
      'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    )
    expect(
      screen.getByText(
        'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
      )
    ).toBeDefined()
    expect(
      screen.getByRole('heading', {
        level: 2,
        text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents',
      })
    )
  })
})
