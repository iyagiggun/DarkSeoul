import { IObject } from 'iyagi/object'
import { ITile } from 'iyagi/tile'

const IMAGE = { url: '/assets/object/office/sprite.png' }

export function createOfficeTile (x: number, y: number) {
  const t = new ITile({
    name: `office:tile:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 0, y: 0, w: 32, h: 32 }]
  })
  t.positionAt({ x, y })
  return t
}

export function createExitTile (x: number, y: number) {
  const t = new ITile({
    name: `office:tile:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 0, y: 0, w: 32, h: 32 }]
  })
  t.positionAt({ x, y })
  return t
}

export function createOfficeWallNW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:nw:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 0, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallN (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:n:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 32, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallNE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:ne:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 64, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:e:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 64, y: 128, w: 32, h: 32 }],
    hitbox: { x: 21, y: 0, w: 11, h: 32 }
  })
  i.positionAt({ x: x + 21, y })
  return i
}

export function createOfficeWallSE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:se:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 64, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallS (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:s:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 2, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallSW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:sw:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 0, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:w:[${x},${y}]`,
    image: IMAGE,
    frames: [{ x: 0, y: 128, w: 32, h: 32 }],
    hitbox: { x: 0, y: 0, w: 11, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}
