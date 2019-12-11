import { describe, it } from 'mocha'
import { expect } from 'chai'
import config from '../../../src/config'
import initDI from '../../../src/di'
import engine from '../../../src/engine'

describe('Unit: DI', (): void => {
  it('should return initiated di', async () => {
    const dic = await initDI(config)
    const app = engine(dic)
    const output = await app.run()
    expect(output.totalCosts).to.equals(64.1)
  })
})
