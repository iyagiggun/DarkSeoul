import { type Direction } from 'iyagi'
import darkseoul from '../../..'

const SPRITE_URL = '/assets/object/office/sprite.png'

export function createOfficeShortDesk (x: number, y: number, dir: Direction) {
  const i = darkseoul.create_object({
    name: `office:shortdesk:${x},${y}:${dir}`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 224, w: 50, h: 40 }]
        },
        left: {
          area_list: [{ x: 50, y: 224, w: 30, h: 46 }]
        }
      }
    }
  })
  i.change_direction(dir)
  i.set_position(x, y)
  return i
}

export function createOfficeChair (x: number, y: number, dir: Direction) {
  const i = darkseoul.create_object({
    name: `office:chair:${x},${y}:${dir}`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        up: {
          area_list: [{ x: 32, y: 270, w: 16, h: 32 }],
          collision_area: { x: 0, y: 14, w: 16, h: 5 }
        },
        down: {
          area_list: [{ x: 0, y: 270, w: 16, h: 32 }],
          collision_area: { x: 0, y: 14, w: 16, h: 5 }
        },
        left: {
          area_list: [{ x: 48, y: 270, w: 16, h: 32 }],
          collision_area: { x: 0, y: 14, w: 16, h: 5 }
        },
        right: {
          area_list: [{ x: 16, y: 270, w: 16, h: 32 }],
          collision_area: { x: 0, y: 14, w: 16, h: 5 }
        }
      }
    }
  })
  i.change_direction(dir)
  i.set_position(x, y)

  return i
}

export function createOfficeArmChair (x: number, y: number, dir: Direction = 'down') {
  const i = darkseoul.create_object({
    name: `office:arm-chair:${x},${y}:${dir}`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        up: {
          area_list: [{ x: 0, y: 302, w: 32, h: 28 }],
          collision_area: { x: 0, y: 9, w: 32, h: 19 }
        },
        down: {
          area_list: [{ x: 32, y: 302, w: 32, h: 32 }],
          collision_area: { x: 0, y: 9, w: 32, h: 23 }
        },
        left: {
          area_list: [{ x: 64, y: 302, w: 23, h: 36 }],
          collision_area: { x: 0, y: 9, w: 23, h: 275 }
        }
      }
    }
  })

  i.change_direction(dir)
  i.set_position(x, y)

  return i
}

export function createFireExtinguisher (x: number, y: number) {
  const i = darkseoul.create_object({
    name: `office:fire-extinguisher:${x},${y}`,
    sprite_url: SPRITE_URL,
    sprite_info_map: {
      default: {
        down: {
          area_list: [{ x: 0, y: 338, w: 10, h: 18 }]
        }
      }
    }
  })
  i.set_position(x, y)
  return i
}

export function getAPartition (x: number, y: number) {
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
