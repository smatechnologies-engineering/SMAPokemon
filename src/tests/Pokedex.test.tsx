import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Pokedex } from '../pages/Pokedex'

jest.mock('../hooks/useGetAllPokemon', () => ({
  useGetAllPokemon: (url: string) => ({
    data: {
      pages: [
        {
          results: [
            { name: 'pokemon1', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
            { name: 'pokemon2', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
            { name: 'pokemon3', url: 'https://pokeapi.co/api/v2/pokemon/3/' },
            // Add more dummy data here if needed
          ],
        },
      ],
    },
    fetchNextPage: jest.fn(), // Mocked fetchNextPage function
    hasNextPage: true, // Set to true to indicate there are more pages of data
    isLoading: false,
  }),
}));

test('renders Pokedex component with Pokemon cards', async () => {
  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  render(
    // Wrap the component with QueryClientProvider and pass the QueryClient instance as a prop
    <QueryClientProvider client={queryClient}>
      <Pokedex />
    </QueryClientProvider>
  );

  // Wait for the component to fetch data and render the cards
  const pokemon1Card = await screen.findByText(/pokemon1/i);
  const pokemon2Card = await screen.findByText(/pokemon2/i);

  // Assert that the Pokemon cards are rendered
  expect(pokemon1Card).toBeInTheDocument();
  expect(pokemon2Card).toBeInTheDocument();
});


// Mock scrollTo function for JSDOM
const mockScrollTo = jest.fn();
Object.defineProperty(global, 'scrollTo', { value: mockScrollTo });

test('fetches more Pokemon when scrolled to the bottom', async () => {
  // Create a new QueryClient instance
  const queryClient = new QueryClient();

  render(
    // Wrap the component with QueryClientProvider and pass the QueryClient instance as a prop
    <QueryClientProvider client={queryClient}>
      <Pokedex />
    </QueryClientProvider>
  );

  // Trigger the scroll event
  mockScrollTo(0, 800); // Scroll to a position that would trigger the next page loading

// Wait for the component to fetch the next page
await screen.findByText((content, element) => {
  // Use a custom text matcher function
  // Check if the text "pokemon3" is present in the 'textContent' of the 'element'
  // 'content' is the text content, and 'element' is the DOM element being checked
  return /pokemon3/i.test(content);
});

// Assert that fetchNextPage function is called when scrolled to the bottom
expect(screen.getByText(/pokemon3/i)).toBeInTheDocument();
});