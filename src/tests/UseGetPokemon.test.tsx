import { useGetPokemon } from '../hooks/useGetPokemon'
import { renderHook } from '@testing-library/react-hooks'
import { wrapper } from '../test-utils/queryClient'

describe('useGetPokemon hook', () => {
  const pokemonToGet = 'pikachu'

  test('returns pikachu', async () => {
    const { result, waitFor } = renderHook(() => useGetPokemon(pokemonToGet), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(result.current.data).toHaveProperty('name', pokemonToGet)
  })
})
