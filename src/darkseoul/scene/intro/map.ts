import {
  createOfficeTile,
  createExitTile,
  createOfficeWallNW,
  createFireExtinguisher,
  createOfficeWallN,
  createOfficeWallNE,
  createOfficeWallE,
  createOfficeWallSE,
  createOfficeWallS,
  createOfficeWallSW,
  createOfficeWallW,
  createOfficeShortDesk,
  createOfficeChair
} from '../../resource/office/object'

const MAP_WIDTH = 14
const MAP_HEIGHT = 18
const TILE_SIZE = 32

export function createEscapeTiles () {
  return new Array(2).fill(null).map((_, rowIdx) => createExitTile(-1 * TILE_SIZE, (rowIdx + 6) * TILE_SIZE))
}

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
    .map((_, idx) => createOfficeWallE((MAP_WIDTH - 1) * TILE_SIZE, (idx + 1) * TILE_SIZE))
  const rightBottomConner = createOfficeWallSE((MAP_WIDTH - 1) * TILE_SIZE, (MAP_HEIGHT - 1) * TILE_SIZE)
  const bottomWalls = new Array(MAP_WIDTH - 2)
    .fill(null)
    .map((_, idx) => createOfficeWallS((idx + 1) * TILE_SIZE, (MAP_HEIGHT - 1) * TILE_SIZE))
  const leftBottomConner = createOfficeWallSW(0, (MAP_HEIGHT - 1) * TILE_SIZE)
  const leftWalls = new Array(MAP_HEIGHT - 3)
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

export const feInOffice = createFireExtinguisher(16, 54)

function getAPartition (x: number, y: number) {
  const deskList = new Array(3).fill(null)
    .map((_, rowIdx) => new Array(2).fill(null)
      .map((__, colIdx) => createOfficeShortDesk(x + (colIdx * 29), y + (rowIdx * 32), 'left')))

  const chairList = new Array(3).fill(null)
    .map((_, rowIdx) => new Array(2).fill(null)
      .map((__, colIdx) => createOfficeChair(
        x + (colIdx * 83) - 20,
        y + rowIdx * 32 + 18,
        colIdx === 0 ? 'right' : 'left'
      )))

  return [...deskList.flatMap((item) => item), ...chairList.flatMap((item) => item)]
}

export function getPartitions () {
  return [
    ...getAPartition(124, 192),
    ...getAPartition(272, 192),
    ...getAPartition(124, 334),
    ...getAPartition(272, 334)
  ]
}
