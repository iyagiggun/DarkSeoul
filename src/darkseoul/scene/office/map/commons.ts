import { IObject } from 'iyagi/object'
import { ITile } from 'iyagi/tile'

const SPIRTE_IMAGE = {
  url: '/assets/scene/office/map/sprite.png',
  scale: 2
}

const TILE_SIZE = 64

export function createOfficeTile (x: number, y: number) {
  const i = new ITile({
    name: `office:tile:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: 0, y: 0, w: TILE_SIZE, h: TILE_SIZE }]
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallNW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:nw:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: 0, y: TILE_SIZE * 2, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallN (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:n:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: TILE_SIZE, y: TILE_SIZE * 2, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallNE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:ne:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: TILE_SIZE * 2, y: TILE_SIZE * 2, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:e:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: TILE_SIZE * 2, y: TILE_SIZE * 4, w: TILE_SIZE, h: TILE_SIZE }],
    hitbox: { x: 42, y: 0, w: 11, h: TILE_SIZE }
  })
  i.positionAt({ x: x + 21, y })
  return i
}

export function createOfficeWallSE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:se:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: TILE_SIZE * 2, y: TILE_SIZE * 5, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE * 2 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallS (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:s:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: TILE_SIZE, y: TILE_SIZE * 5, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE * 2 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallSW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:sw:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: 0, y: TILE_SIZE * 5, w: TILE_SIZE, h: TILE_SIZE * 2 }],
    hitbox: { x: 0, y: TILE_SIZE, w: TILE_SIZE, h: TILE_SIZE * 2 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:w:[${x},${y}]`,
    image: SPIRTE_IMAGE,
    frames: [{ x: 0, y: TILE_SIZE * 4, w: TILE_SIZE, h: TILE_SIZE }],
    hitbox: { x: 0, y: 0, w: 11, h: TILE_SIZE }
  })
  i.positionAt({ x, y })
  return i
}
