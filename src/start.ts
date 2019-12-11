import initDI, { DIContainer } from './di'
import config from './config'
import engine from './engine'

initDI(config).then(
  async (dic: DIContainer): Promise<void> => {
    const app = engine(dic)
    try {
      await app.run()
    } catch (err) {
      console.error(err)
      process.exit()
    }
  },
)
