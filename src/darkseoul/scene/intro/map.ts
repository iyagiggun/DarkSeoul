import {
  createOfficeTile,
  createOfficeWallE,
  createOfficeWallN,
  createOfficeWallNE,
  createOfficeWallNW,
  createOfficeWallS,
  createOfficeWallSE,
  createOfficeWallSW,
  createOfficeWallW
} from '../../object/office'
import { getAPartition } from '../../object/office/object'

const MAP_WIDTH = 14
const MAP_HEIGHT = 18
const TILE_SIZE = 32

export function createTiles () {
  return new Array(MAP_HEIGHT).fill(null)
    .map((_, rowIdx) => new Array(MAP_WIDTH).fill(null)
      .map((__, colIdx) => createOfficeTile(colIdx * TILE_SIZE, rowIdx * TILE_SIZE)))
}

export function createWalls () {
  const leftTopConer = createOfficeWallNW(0, 0)
  const topWalls = new Array(MAP_WIDTH - 2)
    .fill(null)
    .map((_, idx) => createOfficeWallN((idx + 1) * TILE_SIZE, 0))
  const rightTopConer = createOfficeWallNE((MAP_WIDTH - 1) * TILE_SIZE, 0)
  const rightWalls = new Array(MAP_HEIGHT - 2)
    .fill(null)
    .map((_, idx) => createOfficeWallE((MAP_WIDTH - 1) * TILE_SIZE, (idx + 2) * TILE_SIZE))
  const rightBottomConner = createOfficeWallSE((MAP_WIDTH - 1) * TILE_SIZE, (MAP_HEIGHT - 1) * TILE_SIZE)
  const bottomWalls = new Array(MAP_WIDTH - 2)
    .fill(null)
    .map((_, idx) => createOfficeWallS((idx + 1) * TILE_SIZE, (MAP_HEIGHT - 1) * TILE_SIZE))
  const leftBottomConner = createOfficeWallSW(0, (MAP_HEIGHT - 1) * TILE_SIZE)
  const leftWalls = new Array(MAP_HEIGHT - 2)
    .fill(null)
    .map((_, idx) => createOfficeWallW(0, (idx + 1) * TILE_SIZE))
    .filter((_, idx) => idx !== 6 && idx !== 5)

  return [
    leftTopConer,
    ...topWalls,
    rightTopConer,
    ...rightWalls,
    rightBottomConner,
    ...bottomWalls,
    leftBottomConner,
    ...leftWalls
  ]
}

export function getPartitions () {
  return [
    ...getAPartition(124, 192),
    ...getAPartition(272, 192),
    ...getAPartition(124, 334),
    ...getAPartition(272, 334)
  ]
}
