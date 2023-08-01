import { QueryClient, QueryClientProvider, QueryCache } from 'react-query'
import { ReactNode } from 'react'

export const queryCache = new QueryCache()

const createTestQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
}

export const Wrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = createTestQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
