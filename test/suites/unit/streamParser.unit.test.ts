import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as path from 'path'

import streamParser from '../../../src/lib/parser'

import { PassThrough } from 'stream'

describe('Unit: Stream Parser', (): void => {
  it('should call callbacks', async () => {
    function testParse(): Promise<Record<string, boolean>> {
      return new Promise(async resolve => {
        const results: Record<string, boolean> = {}
        const passThrough = new PassThrough()
        const parser = streamParser(
          passThrough,
          () => {
            results.onDataCalled = true
          },
          () => {
            results.onEndCalled = true
            resolve(results)
          },
        )
        const csvPath = await path.resolve(__dirname, '../../samples/data.csv')

        parser.parse(csvPath)
      })
    }

    const results = await testParse()
    expect(results.onDataCalled).to.equals(true)
    expect(results.onEndCalled).to.equals(true)
  })
})
