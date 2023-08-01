// server-handlers.js
// this is put into here so I can share these same handlers between my tests
// as well as my development in the browser. Pretty sweet!
import { rest } from 'msw' // msw supports graphql too!
import pokemon from './pokemon.json'
import type { NamedAPIResourceList } from 'pokenode-ts'

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
    const url = req.url.href
    let jsonData: NamedAPIResourceList | null = null

    // Caching using session storage
    try {
      const jsonStr = window.sessionStorage.getItem(url)
      if (jsonStr) {
        jsonData = JSON.parse(jsonStr) as NamedAPIResourceList
        return res(ctx.json(jsonData))
      }
    } catch (error) {
      jsonData = null
    }

    // Or can use pre-fetched data
    const offset = parseInt(req.url.searchParams.get('offset') ?? '')
    if (!offset) {
      jsonData = pokemon
    } else {
      jsonData = await ctx
        .fetch(req)
        .then((response) => response.json() as Promise<NamedAPIResourceList>)
    }

    try {
      if (jsonData) window.sessionStorage.setItem(url, JSON.stringify(jsonData))
    } catch (error) {
      // ignore error
    }

    return res(ctx.json(jsonData))
  }),
]
