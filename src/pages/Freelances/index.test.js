import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import Freelances from './'
import { ThemeProvider } from '../../utils/context'

import { render } from '../../utils/test'

const freelancersMockedData = [
  {
    id: 1,
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    id: 2,
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]
const server = setupServer(
  // On précise ici l'url qu'il faudra "intercepter"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())

test('Should render without crash', async () => {
  render(<Freelances />)
  expect(screen.getByTestId('loader')).toBeTruthy()
})

it('Should display freelancers names', async () => {
  render(
    <ThemeProvider>
      <Freelances />
    </ThemeProvider>
  )
  expect(screen.getByTestId('loader')).toBeTruthy()

  await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
  await waitFor(() => {
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})
