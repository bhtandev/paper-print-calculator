import { DIContainer } from './di'
import { calculateTotalCosts } from './lib/printJobs'

export interface Output {
  totalCosts: number
}

export interface Engine {
  run: () => Promise<Output>
}

export default function(dic: DIContainer): Engine {
  return {
    run: async (): Promise<Output> => {
      const jobs = await dic.collector()
      const totalCosts = calculateTotalCosts(jobs)

      console.log(`Total costs: $${totalCosts.toFixed(2)}`)

      return {
        totalCosts,
      }
    },
  }
}
