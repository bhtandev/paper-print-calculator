import { Config } from './config'
import * as csvParser from 'csv-parser'
import { buildJobCollector, PrintJob } from './lib/printJobs'
import * as path from 'path'

export interface DIContainer {
  config: Config
  collector: () => Promise<PrintJob[]>
}

export default async function initDI(config: Config): Promise<DIContainer> {
  const csvFullPath = await path.resolve(__dirname, config.csvPath)
  return {
    config,
    collector: buildJobCollector(csvParser(), csvFullPath),
  }
}
