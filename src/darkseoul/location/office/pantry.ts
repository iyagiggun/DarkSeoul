import { type IObject } from 'iyagi/object'
import { createOfficeTile, createOfficeWallE, createOfficeWallN, createOfficeWallNE, createOfficeWallNW, createOfficeWallS, createOfficeWallSE, createOfficeWallSW, createOfficeWallW } from './commons'

const MAP_HEIGHT = 10
const MAP_WIDTH = 8
const TILE_SIZE = 32

export const getOfficePantryTiles = (() => {
  let cache: Array<ReturnType<typeof createOfficeTile>> = []

  return () => {
    if (cache.length === 0) {
      cache = new Array(MAP_HEIGHT).fill(null)
        .map((_, rowIdx) => new Array(MAP_WIDTH).fill(null)
          .map((__, colIdx) => createOfficeTile(colIdx * TILE_SIZE, (rowIdx + 1) * TILE_SIZE)))
        .flatMap(x => x)
    }
    return cache
  }
})()

export const getOfficePantryWalls = (() => {
  let cache: IObject[] = []

  return () => {
    if (cache.length === 0) {
      const northWallList = new Array(MAP_WIDTH).fill(null)
        .map((_, idx) => {
          if (idx === 0) {
            return createOfficeWallNW(idx * TILE_SIZE, TILE_SIZE)
          }
          if (idx === MAP_WIDTH - 1) {
            return createOfficeWallNE(idx * TILE_SIZE, TILE_SIZE)
          }
          return createOfficeWallN(idx * TILE_SIZE, TILE_SIZE)
        })

      const sourthWallList = new Array(MAP_WIDTH).fill(null)
        .map((_, idx) => {
          if (idx === 0) {
            return createOfficeWallSW(idx * TILE_SIZE, TILE_SIZE * MAP_HEIGHT)
          }
          if (idx === MAP_WIDTH - 1) {
            return createOfficeWallSE(idx * TILE_SIZE, TILE_SIZE * MAP_HEIGHT)
          }
          return createOfficeWallS(idx * TILE_SIZE, TILE_SIZE * MAP_HEIGHT)
        })

      const westWallList = new Array(MAP_HEIGHT - 2).fill(null)
        .map((_, idx) => createOfficeWallW(0, (idx + 1) * TILE_SIZE))

      const eastWallList = new Array(MAP_HEIGHT - 2).fill(null)
        .map((_, idx) => createOfficeWallE(TILE_SIZE * (MAP_WIDTH - 1), (idx + 1) * TILE_SIZE))

      cache = [
        ...northWallList,
        ...sourthWallList,
        ...westWallList,
        ...eastWallList
      ]
    }
    return cache
  }
})()
