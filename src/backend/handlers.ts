// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw' // msw supports graphql too!
import pokemon from './mocks/pokemon.json'
import clefairy from './mocks/clefairy.json'
import species from './mocks/species.json'

export const handlers = [
  // Provide request handlers
  rest.get('https://pokeapi.co/api/v2/pokemon', async (req, res, ctx) => {
    return res(ctx.json(pokemon))
  }),
  rest.get(
    'https://pokeapi.co/api/v2/pokemon/:idOrName',
    async (req, res, ctx) => {
      return req.params.idOrName === '999'
        ? res(ctx.status(404))
        : res(ctx.json(clefairy))
    }
  ),
  rest.get(
    'https://pokeapi.co/api/v2/pokemon-species/:idOrName',
    async (req, res, ctx) => {
      return res(ctx.json(species))
    }
  ),
]
