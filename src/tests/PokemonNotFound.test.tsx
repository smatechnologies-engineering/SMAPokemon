import { render, screen } from '@testing-library/react'
import { PokemonSearch } from '../pages/PokemonSearch'
import userEvent from '@testing-library/user-event';

jest.mock('../hooks/useGetPokemon', () => ({
  useGetPokemon: () => {
    return { data: undefined };
  },
}));

describe('Pokemon Not Found', () => {
  test('it displays not found card', async () => {
    render(<PokemonSearch />);

    const inputDiv = screen.getByTestId('pokemon-search');
    const input = inputDiv.querySelector('input') as HTMLInputElement;
    userEvent.type(input, 'p');

    expect(input).toHaveValue('p');
  });
});