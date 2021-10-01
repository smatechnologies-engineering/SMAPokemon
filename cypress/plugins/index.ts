import { startDevServer } from '@cypress/vite-dev-server'
import codeCoverageTask from '@cypress/code-coverage/task'
import istanbul from 'vite-plugin-istanbul'

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({
      options,
      viteConfig: {
        clearScreen: false,
        plugins: [istanbul({})],
      },
    })
  )

  codeCoverageTask(on, config)
  return config
}
