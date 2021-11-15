import { render } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('renders without exceptions', async () => {
    // arrange, act
    const appRender = () => render(<App />)

    // assert
    expect(appRender).not.toThrow()
  })
})
