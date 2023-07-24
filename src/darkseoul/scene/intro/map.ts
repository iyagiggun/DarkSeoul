import { createOfficeTile } from '../../object/office'

const MAP_WIDTH = 14
const MAP_HEIGHT = 18
const TILE_SIZE = 32

function createTiles () {
  return new Array(MAP_HEIGHT).fill(null)
    .map((_, rowIdx) => new Array(MAP_WIDTH).fill(null)
      .map((__, colIdx) => createOfficeTile(colIdx * TILE_SIZE, rowIdx * TILE_SIZE)))
}

export { createTiles }
