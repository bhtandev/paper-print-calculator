import { describe, it } from 'mocha'
import { expect } from 'chai'
import { calculateJobItem, calculateTotalCosts, PrintJob, roundTo2Decimals } from '../../../src/lib/printJobs'
import { getPaperPrice, Paper } from '../../../src/lib/paper'

describe('Unit: Print Jobs', (): void => {
  it('calculateJobItem should calculate correctly', () => {
    let jobCost = calculateJobItem(1, 2, false, getPaperPrice)
    expect(jobCost).to.equal(0.65)

    jobCost = calculateJobItem(1, 2, true, getPaperPrice)
    expect(jobCost).to.equal(0.5)

    jobCost = calculateJobItem(2, 5, true, getPaperPrice)
    expect(jobCost).to.equal(1.2)
  })

  it('calculateTotalCosts should calculate correctly', () => {
    const printJobs: PrintJob[] = [
      {
        numBAndWPages: 2,
        numColorPages: 4,
        doubleSided: false,
        cost: 5,
      },
      {
        numBAndWPages: 2,
        numColorPages: 4,
        doubleSided: false,
        cost: 10,
      },
      {
        numBAndWPages: 2,
        numColorPages: 4,
        doubleSided: false,
        cost: 12.4,
      },
    ]

    const total = calculateTotalCosts(printJobs)
    expect(total).to.equals(27.4)
  })

  it('roundTo2Decimals should round to 2 decimals correctly', () => {
    expect(roundTo2Decimals(0.49999)).equals(0.5)
    expect(roundTo2Decimals(0.599999)).equals(0.6)
  })
})
