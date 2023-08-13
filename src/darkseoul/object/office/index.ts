import darkseoul from '../..'

const SPRITE_URL = '/assets/object/office/sprite.png'

export function createOfficeTile (x: number, y: number) {
  const i = darkseoul.create_tile({
    name: `office:tile:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 0, w: 32, h: 32 }]
        }
      }
    }
  })
  i.set_position(x, y)
  return i
}

export function createOfficeWallNW (x: number, y: number) {
  const i = darkseoul.create_object({
    name:
      `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 64, w: 32, h: 64 }]
        }
      }

    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallN (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 32, y: 64, w: 32, h: 64 }]
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallNE (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 64, y: 64, w: 32, h: 64 }]
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallE (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 64, y: 128, w: 32, h: 32 }],
          collision_area: { x: 21, y: 0, w: 11, h: 32 }
        }
      }
    }
  })
  i.set_position(x + 21, y)
  return i
};

export function createOfficeWallSE (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 64, y: 160, w: 32, h: 64 }],
          collision_area: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallS (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 2, y: 160, w: 32, h: 64 }],
          collision_area: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallSW (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 160, w: 32, h: 64 }],
          collision_area: { x: 0, y: 32, w: 32, h: 64 }
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};

export function createOfficeWallW (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:wall:north:[${x},${y}]`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 128, w: 32, h: 32 }],
          collision_area: { x: 0, y: 0, w: 11, h: 32 }
        }
      }
    }
  })
  i.set_position(x, y)
  return i
};
