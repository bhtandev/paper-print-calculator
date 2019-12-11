import { Writable } from 'stream'
import streamParser from './parser'
import { buildPaper, getPaperPrice, Paper, PaperColour, PaperSize } from './paper'

export interface PrintJob {
  numBAndWPages: number
  numColorPages: number
  doubleSided: boolean
  cost: number
}

export function roundTo2Decimals(number: number) {
  return Math.round(number * 100) / 100
}

export function calculateJobItem(
  numBlackAndWhite: number,
  numColor: number,
  doubleSided: boolean,
  getPrice: (paper: Paper) => number,
) {
  const blackAndWhitePaper = buildPaper(PaperSize.A4, PaperColour.BlackAndWhite, doubleSided)
  const colourPaper = buildPaper(PaperSize.A4, PaperColour.Colour, doubleSided)

  const cost = numBlackAndWhite * getPrice(blackAndWhitePaper) + numColor * getPrice(colourPaper)

  return roundTo2Decimals(cost)
}

export function printJobItemWithCalculatedCost(data: any, cost: number) {
  console.log(data, `Cost: $${cost.toFixed(2)}`)
}

export function calculateTotalCosts(printJobs: PrintJob[]) {
  return roundTo2Decimals(printJobs.reduce((acc, item) => acc + item.cost, 0))
}

export function buildJobCollector(csvParser: Writable, csvPath: string) {
  return function jobCollector(): Promise<PrintJob[]> {
    return new Promise(async resolve => {
      const printJobs: PrintJob[] = []
      const parser = streamParser(
        csvParser,
        data => {
          const numColorPages = data['Color Pages']
          const totalPages = data['Total Pages']
          const doubleSided = data['Double Sided'] === 'TRUE'
          const numBAndWPages = totalPages - numColorPages

          const cost = calculateJobItem(numBAndWPages, numColorPages, doubleSided, getPaperPrice)

          printJobItemWithCalculatedCost(data, cost)

          printJobs.push({
            numBAndWPages,
            numColorPages,
            doubleSided,
            cost,
          })
        },
        () => {
          resolve(printJobs)
        },
      )

      parser.parse(csvPath)
    })
  }
}
