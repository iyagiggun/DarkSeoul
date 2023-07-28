import { type Direction } from 'iyagi'
import darkseoul from '../../..'

const SPRITE_URL = '/assets/object/office/sprite.png'

export function createOfficeShortDesk (x: number, y: number, dir: Direction) {
  return darkseoul.createObject(`office:shortdesk:${x},${y}:${dir}`,
    {
      imgUrl: SPRITE_URL,
      spriteInfoMap: {
        default: {
          down: {
            areaList: [{ x: 0, y: 224, w: 50, h: 40 }]
          },
          left: {
            areaList: [{ x: 50, y: 224, w: 30, h: 46 }]
          }
        }
      }
    }).setDirection(dir).setPos(x, y)
}

export function createOfficeChair (x: number, y: number, dir: Direction) {
  const obj = darkseoul.createObject(`office:chair:${x},${y}:${dir}`,
    {
      imgUrl: SPRITE_URL,
      spriteInfoMap: {
        default: {
          up: {
            areaList: [{ x: 32, y: 270, w: 16, h: 32 }],
            collisionArea: { x: 0, y: 14, w: 16, h: 5 }
          },
          down: {
            areaList: [{ x: 0, y: 270, w: 16, h: 32 }],
            collisionArea: { x: 0, y: 14, w: 16, h: 5 }
          },
          left: {
            areaList: [{ x: 48, y: 270, w: 16, h: 32 }],
            collisionArea: { x: 0, y: 14, w: 16, h: 5 }
          },
          right: {
            areaList: [{ x: 16, y: 270, w: 16, h: 32 }],
            collisionArea: { x: 0, y: 14, w: 16, h: 5 }
          }
        }
      }
    }).setDirection(dir).setPos(x, y)

  return obj
}

export function createOfficeArmChair (x: number, y: number, dir: Direction = 'down') {
  return darkseoul.createObject(`office:arm-chair:${x},${y}:${dir}`,
    {
      imgUrl: SPRITE_URL,
      spriteInfoMap: {
        default: {
          up: {
            areaList: [{ x: 0, y: 302, w: 32, h: 28 }],
            collisionArea: { x: 0, y: 9, w: 32, h: 19 }
          },
          down: {
            areaList: [{ x: 32, y: 302, w: 32, h: 32 }],
            collisionArea: { x: 0, y: 9, w: 32, h: 23 }
          },
          left: {
            areaList: [{ x: 64, y: 302, w: 23, h: 36 }],
            collisionArea: { x: 0, y: 9, w: 23, h: 275 }
          }
        }
      }
    }).setDirection(dir).setPos(x, y)
}

export function createFireExtinguisher (x: number, y: number) {
  return darkseoul.createObject(`office:fire-extinguisher:${x},${y}`,
    {
      imgUrl: SPRITE_URL,
      spriteInfoMap: {
        default: {
          down: {
            areaList: [{ x: 0, y: 338, w: 10, h: 18 }]
          }
        }
      }
    }).setPos(x, y)
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
