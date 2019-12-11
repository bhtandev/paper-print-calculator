import { describe, it } from 'mocha'
import { expect } from 'chai'
import { getPaperPrice, PaperColour, PaperSize } from '../../../src/lib/paper'

describe('Unit: Paper', (): void => {
  it('getPaperPrice should return right price rules', async () => {
    expect(
      getPaperPrice({
        size: PaperSize.A4,
        doubleSided: true,
        colour: PaperColour.BlackAndWhite,
      }),
    ).to.equals(0.1)

    expect(
      getPaperPrice({
        size: PaperSize.A4,
        doubleSided: true,
        colour: PaperColour.Colour,
      }),
    ).to.equals(0.2)

    expect(
      getPaperPrice({
        size: PaperSize.A4,
        doubleSided: false,
        colour: PaperColour.BlackAndWhite,
      }),
    ).to.equals(0.15)

    expect(
      getPaperPrice({
        size: PaperSize.A4,
        doubleSided: false,
        colour: PaperColour.Colour,
      }),
    ).to.equals(0.25)
  })
})
