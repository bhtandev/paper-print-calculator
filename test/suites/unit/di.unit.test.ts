import { describe, it } from 'mocha'
import { expect } from 'chai'
import config from '../../../src/config'
import initDI from '../../../src/di'

describe('Unit: DI', (): void => {
  it('should return initiated di', async () => {
    const dic = await initDI(config)

    expect(dic.config).to.equal(config)
  })
})
