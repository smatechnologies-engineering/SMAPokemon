// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw' // msw supports graphql too!
import pokemon from './pokemon.json'

export const handlers = [
  // Provide request handlers
  rest.get('https://example.com/user/:userId', (req, res, ctx) => {
    return res(
      ctx.json({
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
    return res(ctx.json(pokemon))
  }),
]
