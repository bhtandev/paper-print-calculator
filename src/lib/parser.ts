import * as fs from 'fs'
import WritableStream = NodeJS.WritableStream

export interface StreamParser {
  parse: (csvPath: string) => void
}

export default function streamParser(
  parser: WritableStream,
  onData: (data: any) => void,
  onEnd: (data: any) => void,
): StreamParser {
  function parse(csvPath: string) {
    fs.createReadStream(csvPath)
      .pipe(parser)
      .on('data', onData)
      .on('end', onEnd)
      .on('error', () => {
        throw Error(`Error parsing ${csvPath}`)
      })
  }

  return {
    parse,
  }
}
