import { render, screen } from '@testing-library/react';
import { PokemonSearch } from '../pages/PokemonSearch'
// Mock the custom hooks
jest.mock('../hooks/useDebounce', () => ({
  useDebounce: (value: string) => value,
}));

jest.mock('../hooks/useGetPokemon', () => ({
  useGetPokemon: (searchStr: string) => ({
    data: searchStr === 'pikachu' ? { name: 'pikachu' } : null,
  }),
}));

describe('PokemonSearch', () => {
  it('renders the search input and "Find your Pokemon" title', () => {
    render(<PokemonSearch />);
    const titleElement = screen.getByText(/Find your Pokemon/i);
    expect(titleElement).toBeInTheDocument();

    const searchInput = screen.getByTestId('pokemon-search');
    expect(searchInput).toBeInTheDocument();
  });
});