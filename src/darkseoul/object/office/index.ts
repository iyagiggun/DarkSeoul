import IObject from 'iyagi/object'
import ITile from 'iyagi/object/tile'

const SPRITE_URL = '/assets/object/office/sprite.png'

export function createOfficeTile (x: number, y: number) {
  const i = ITile.create({
    name: `office:tile:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 0, y: 0, w: 32, h: 32 }]
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createExitTile (x: number, y: number) {
  const i = ITile.create({
    name: `office:tile:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 0, y: 0, w: 32, h: 32 }]
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallNW (x: number, y: number) {
  const i = IObject.create({
    name:
      `office:wall:nw:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 0, y: 64, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 32 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallN (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:n:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 32, y: 64, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 32 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallNE (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:ne:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 64, y: 64, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 32 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallE (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:e:[${x},${y}]`,
    sprite:
    {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 64, y: 128, w: 32, h: 32 }],
            collision: { x: 21, y: 0, w: 11, h: 32 }
          }
        }
      }
    }
  })
  i.setPosition(x + 21, y)
  return i
}

export function createOfficeWallSE (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:se:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 64, y: 160, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 64 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallS (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:s:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 2, y: 160, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 64 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallSW (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:sw:[${x},${y}]`,
    sprite:
    {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 0, y: 160, w: 32, h: 64 }],
            collision: { x: 0, y: 32, w: 32, h: 64 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}

export function createOfficeWallW (x: number, y: number) {
  const i = IObject.create({
    name: `office:wall:w:[${x},${y}]`,
    sprite: {
      url: SPRITE_URL,
      motions: {
        default: {
          down: {
            areaList: [{ x: 0, y: 128, w: 32, h: 32 }],
            collision: { x: 0, y: 0, w: 11, h: 32 }
          }
        }
      }
    }
  })
  i.setPosition(x, y)
  return i
}
