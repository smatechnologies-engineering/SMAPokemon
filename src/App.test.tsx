import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { worker } from './backend/browser'
import { setupServer } from 'msw/node'
import { handlers } from './backend/handlers'
import pokemon from './backend/pokemon.json'
import { rest } from 'msw'

const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

test('it renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Find your Pokemon/i)
  expect(linkElement).toBeInTheDocument()
})

test('renders error message when user fetch fails', async () => {
  server.use(
    rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
      return res(ctx.status(400))
    })
  )

  render(<App />)

  const linkElement = expect(
    screen.getByText(/Loading.../i)
  ).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByText(/Error fetching pokemon./i)).toBeInTheDocument()
  })
})
