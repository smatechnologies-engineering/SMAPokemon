// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { handlers } from './backend/handlers'
import { setupServer } from 'msw/node'
import { queryCache } from './test-utils/queryClient'

export const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => {
  server.resetHandlers()
  queryCache.clear()
})

afterAll(() => server.close())
