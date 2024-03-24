import { IObject } from 'iyagi/object'
import { ITile } from 'iyagi/tile'

type Direction = 'up' | 'down' | 'left' | 'right'

const SPRITE_IMAGE = {
  url: '/assets/object/office/sprite.png'
}

export function createOfficeShortDesk (x: number, y: number, dir: Direction) {
  const o = new IObject({
    name: `office:shortdesk:${x},${y}:${dir}`,
    image: SPRITE_IMAGE,
    motions: {
      default: {
        down: {
          frames: [{ x: 0, y: 224, w: 50, h: 40 }]
        },
        left: {
          frames: [{ x: 50, y: 224, w: 30, h: 46 }]
        }
      }
    }
  })
  o.directTo(dir)
  o.positionAt({ x, y })
  return o
}

export function createOfficeChair (x: number, y: number, dir: Direction) {
  const o = new IObject({
    name: `office:chair:${x},${y}:${dir}`,
    image: SPRITE_IMAGE,
    motions: {
      default: {
        up: {
          frames: [{ x: 32, y: 270, w: 16, h: 32 }],
          hitbox: { x: 0, y: 14, w: 16, h: 5 }
        },
        down: {
          frames: [{ x: 0, y: 270, w: 16, h: 32 }],
          hitbox: { x: 0, y: 14, w: 16, h: 5 }
        },
        left: {
          frames: [{ x: 48, y: 270, w: 16, h: 32 }],
          hitbox: { x: 0, y: 14, w: 16, h: 5 }
        },
        right: {
          frames: [{ x: 16, y: 270, w: 16, h: 32 }],
          hitbox: { x: 0, y: 14, w: 16, h: 5 }
        }
      }
    }
  })
  o.directTo(dir)
  o.positionAt({ x, y })

  return o
}

export function createOfficeArmChair (x: number, y: number, dir: Direction = 'down') {
  const o = new IObject({
    name: `office:arm-chair:${x},${y}:${dir}`,
    image: SPRITE_IMAGE,
    motions: {
      default: {
        up: {
          frames: [{ x: 0, y: 302, w: 32, h: 28 }],
          hitbox: { x: 0, y: 9, w: 32, h: 19 }
        },
        down: {
          frames: [{ x: 32, y: 302, w: 32, h: 32 }],
          hitbox: { x: 0, y: 9, w: 32, h: 23 }
        },
        left: {
          frames: [{ x: 64, y: 302, w: 23, h: 36 }],
          hitbox: { x: 0, y: 9, w: 23, h: 275 }
        }
      }
    }
  })
  o.directTo(dir)
  o.positionAt({ x, y })
  return o
}

export function createFireExtinguisher (x: number, y: number) {
  const o = IObject.createMono({
    name: `office:fire-extinguisher:${x},${y}`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 338, w: 10, h: 18 }]
  })
  o.positionAt({ x, y })
  return o
}

export function createOfficeTile (x: number, y: number) {
  const t = new ITile({
    name: `office:tile:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 0, w: 32, h: 32 }]
  })
  t.positionAt({ x, y })
  return t
}

export function createExitTile (x: number, y: number) {
  const t = new ITile({
    name: `office:tile:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 0, w: 32, h: 32 }]
  })
  t.positionAt({ x, y })
  return t
}

export function createOfficeWallNW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:nw:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallN (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:n:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 32, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallNE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:ne:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 64, y: 64, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:e:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 64, y: 128, w: 32, h: 32 }],
    hitbox: { x: 21, y: 0, w: 11, h: 32 }
  })
  i.positionAt({ x: x + 21, y })
  return i
}

export function createOfficeWallSE (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:se:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 64, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallS (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:s:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 2, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallSW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:sw:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 160, w: 32, h: 64 }],
    hitbox: { x: 0, y: 32, w: 32, h: 64 }
  })
  i.positionAt({ x, y })
  return i
}

export function createOfficeWallW (x: number, y: number) {
  const i = IObject.createMono({
    name: `office:wall:w:[${x},${y}]`,
    image: SPRITE_IMAGE,
    frames: [{ x: 0, y: 128, w: 32, h: 32 }],
    hitbox: { x: 0, y: 0, w: 11, h: 32 }
  })
  i.positionAt({ x, y })
  return i
}
