// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw' // msw supports graphql too!
import pokemon from './pokemon.json'
import { pikachu } from '../test-utils/mockPikachu'

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
  rest.get('https://pokeapi.co/api/v2/pokemon', (req, res, ctx) => {
    return res(ctx.json(pokemon))
  }),
  rest.get('https://pokeapi.co/api/v2/pokemon/pikachu', (req, res, ctx) => {
    return res(ctx.json(pikachu))
  }),
]
