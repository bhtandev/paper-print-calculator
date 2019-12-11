export enum PaperSize {
  A4,
}

export enum PaperColour {
  BlackAndWhite,
  Colour,
}

export interface Paper {
  size: PaperSize
  doubleSided: boolean
  colour: PaperColour
}

export function getPaperPrice(paper: Paper): number {
  if (paper.doubleSided && paper.colour === PaperColour.BlackAndWhite) return 0.1
  if (paper.doubleSided && paper.colour === PaperColour.Colour) return 0.2

  if (!paper.doubleSided && paper.colour === PaperColour.BlackAndWhite) return 0.15
  if (!paper.doubleSided && paper.colour === PaperColour.Colour) return 0.25

  return 0
}

export function buildPaper(size: PaperSize, colour: PaperColour, doubleSided: boolean): Paper {
  return {
    size: PaperSize.A4,
    colour: colour,
    doubleSided,
  }
}
