import darkseoul from '../..'

const SPRITE_URL = '/assets/object/office/sprite.png'

export function createOfficeTile (x: number, y: number) {
  return darkseoul.createTile(`office:tile:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 0, y: 0, w: 32, h: 32 }]
        }
      }
    },
    test: 1
  }).setPos(x, y)
}

export function createOfficeWallNW (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 0, y: 64, w: 32, h: 64 }]
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallN (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 32, y: 64, w: 32, h: 64 }]
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallNE (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 64, y: 64, w: 32, h: 64 }]
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallE (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 64, y: 128, w: 32, h: 32 }],
          collisionArea: { x: 21, y: 0, w: 11, h: 32 }
        }
      }
    }
  }).setPos(x + 21, y)
};

export function createOfficeWallSE (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 64, y: 160, w: 32, h: 64 }],
          collisionArea: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallS (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 2, y: 160, w: 32, h: 64 }],
          collisionArea: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallSW (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 0, y: 160, w: 32, h: 64 }],
          collisionArea: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  }).setPos(x, y)
};

export function createOfficeWallW (x: number, y: number) {
  return darkseoul.createObject(`office:wall:north:[${x},${y}]`, {
    imgUrl: SPRITE_URL,
    spriteInfoMap: {
      default: {
        down: {
          areaList: [{ x: 0, y: 128, w: 32, h: 32 }],
          collisionArea: { x: 0, y: 0, w: 11, h: 32 }
        }
      }
    }
  }).setPos(x, y)
};
